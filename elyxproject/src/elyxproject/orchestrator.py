import json
import time
import re
from datetime import datetime, timedelta
import random
from crewai import Crew, Task
from pydantic import ValidationError
from src.elyxproject.agents import NarrativeAgents
from src.elyxproject.models import ChatMessage, DataLog
from src.elyxproject.memory import SemanticMemory
from dotenv import load_dotenv

load_dotenv()

class Orchestrator:
    def __init__(self, hackathon_context: dict, plan_file_path="store/narrative_plan.json"):
        print("Initializing Orchestrator...")
        self.hackathon_context = hackathon_context
        with open(plan_file_path, 'r') as f:
            self.plan = json.load(f)['weekly_plans']

        self.agents = NarrativeAgents()
        self.router = self.agents.routing_agent()
        self.summarizer = self.agents.summary_agent() # The summarizer is now used for goal-checking
        self.memory = SemanticMemory()
        print("Orchestrator Initialized.")

    def _get_next_speaker(self, weekly_context, conversation_history, relevant_memories):
        agent_roles = self.agents.get_all_roles()
        prompt = f"""
        You are the conversation director. Your sole purpose is to decide who speaks next.
        Based on the weekly plan and recent conversation, who is the most logical next speaker?
        Your final answer MUST be ONLY the role name and nothing else.

        **Available Roles:**
        {agent_roles}
        **Relevant Long-Term Memories:**
        {relevant_memories}
        **This Week's Plan:**
        {weekly_context}
        **Current Conversation History:**
        {conversation_history}
        """
        routing_task = Task(description=prompt, agent=self.router, expected_output="A single role name from the available list.")
        crew = Crew(agents=[self.router], tasks=[routing_task], verbose=0)
        next_speaker = crew.kickoff()
        return next_speaker.raw.strip()

    def _check_if_goals_met(self, conversation_log: list, weekly_goals: list) -> bool:
        """
        Uses an LLM to determine if the conversation has met the week's goals.
        """
        if not weekly_goals:
            return True # If a week has no goals, one turn is enough.

        conv_str = "\n".join([f"{msg['timestamp']} {msg['speaker']}: {msg['message']}" for msg in conversation_log])
        
        prompt = f"""
        Based on the conversation so far, have the following weekly goals been sufficiently met?
        Answer with a single word: YES or NO.

        **Weekly Goals:**
        - {"\n- ".join(weekly_goals)}

        **Conversation History:**
        {conv_str}
        """
        
        goal_task = Task(description=prompt, agent=self.summarizer, expected_output="A single word: YES or NO.")
        crew = Crew(agents=[self.summarizer], tasks=[goal_task], verbose=0)
        result = crew.kickoff()
        
        print(f"  -> Goal Check Result: {result.raw.strip()}")
        return "YES" in result.raw.upper()

    def run(self):
        full_conversation_log = []
        context_str = str(self.hackathon_context)
        current_sim_time = datetime(2025, 8, 25, 9, 0, 0)

        for week_plan in self.plan:
            print(f"\n--- Generating Week {week_plan['week_number']}: {week_plan['theme']} ---")
            weekly_context = json.dumps(week_plan, indent=2)
            short_term_memory_log = []
            
            is_diagnostic_week = any(event.get('event_type') == 'Diagnostic' for event in week_plan.get('events', []))
            
            # --- DYNAMIC TURN LOGIC ---
            min_turns = 5
            max_turns = 15
            for i in range(max_turns):
                history_snippet = "\n".join([f"{msg['timestamp']} {msg['speaker']}: {msg['message']}" for msg in short_term_memory_log[-5:]])
                
                retrieval_query = f"Week {week_plan['week_number']} - {week_plan['theme']}. Recent conversation: {history_snippet}"
                relevant_memories = self.memory.retrieve_relevant_memories(retrieval_query)
                
                speaker_role = self._get_next_speaker(weekly_context, history_snippet, relevant_memories)

                if speaker_role not in self.agents.get_all_roles():
                    print(f"Router returned invalid agent: '{speaker_role}'. Defaulting to Rohan Patel.")
                    speaker_role = "Rohan Patel"

                print(f"Turn {i+1}: Speaker is {speaker_role}")
                
                delay_minutes = random.randint(5, 55)
                current_sim_time += timedelta(minutes=delay_minutes)
                
                diagnostic_instruction = ""
                if is_diagnostic_week and speaker_role in ["Dr. Warren", "Advik"]:
                    diagnostic_instruction = """**--- CRITICAL DATA LOGGING TASK ---**\nThis week involves a diagnostic panel. You MUST generate a `DataLog` with plausible results for all tests listed in the `diagnostic_panel_tests` section of the Core Context."""

                # This is the final, most explicit prompt for the speaking agents
                agent_task_prompt = f"""
                    You are {speaker_role}. Your primary directive is to advance the story outlined in "This Week's Plan." Your response MUST reflect the events and conversation goals for the CURRENT week. Do not get stuck on past events.

                    **--- This Week's Plan (Your Script) ---**
                    {weekly_context}

                    **--- Your Task ---**
                    Generate the next part of the conversation that directly addresses one of the events or goals from the plan above.
                    {diagnostic_instruction}

                    **--- OUTPUT FORMAT & RULES ---**
                    - **BREVITY IS MANDATORY:** Your chat message MUST be concise and to the point, like a real WhatsApp message. Aim for 1-3 short sentences. DO NOT write long paragraphs.
                    - **TIMESTAMP:** Start with a timestamp after {current_sim_time.strftime('[%#m/%#d/%y, %#I:%M %p]')}.
                    - **CHAT:** On the next line, write the message.
                    - **SEPARATOR:** On a new line, write ---DATA---
                    - **DATA:** After the separator, write a valid JSON data log or "None".

                    **--- RULES FOR DATA LOGGING ---**
                    - **Log ONLY objective, structured data.** This means biometric numbers (HRV: 45), appointment times, or specific test results.
                    - **DO NOT log your own actions or conversational summaries.** For example, DO NOT log `{{"action": "scheduling a call"}}`. This is not data. If there is no objective data to log, you MUST write "None".
                    - The JSON MUST contain "data_type", "source", and "details" keys to be valid.

                    **--- RELEVANT MEMORIES FROM THE PAST ---**
                    {relevant_memories}

                    **--- CORE CONTEXT & PERSONAS ---**
                    {context_str}

                    **--- CURRENT SITUATION ---**
                    - This Week's Plan: {weekly_context}
                    - Recent Conversation: {history_snippet}
                """
                
                current_agent = self.agents.get_agent_by_role(speaker_role)
                agent_task = Task(description=agent_task_prompt, agent=current_agent, expected_output="""A three-part response: a timestamp, a VERY CONCISE chat message, and a valid data log (or "None"), separated by '---DATA---'.""")
                
                turn_crew = Crew(agents=[current_agent], tasks=[agent_task], verbose=0)
                turn_result = turn_crew.kickoff()

                if turn_result and turn_result.raw:
                    # --- Definitive Parsing Logic ---
                    raw_output = turn_result.raw.strip()
                    try:
                        separator_index = raw_output.index("---DATA---")
                        chat_part = raw_output[:separator_index].strip()
                        data_part = raw_output[separator_index + len("---DATA---"):].strip()
                    except ValueError:
                        chat_part = raw_output
                        data_part = "None"

                    lines = chat_part.split('\n')
                    timestamp, chat_message = "", ""
                    if lines:
                        first_line = lines[0].strip()
                        timestamps_found = re.findall(r'(\[[^\]]+\])', first_line)
                        if timestamps_found:
                            timestamp = timestamps_found[-1]
                            last_ts_index = first_line.rfind(timestamp)
                            message_on_first_line = first_line[last_ts_index + len(timestamp):].strip()
                            other_lines = "\n".join(lines[1:]).strip() if len(lines) > 1 else ""
                            chat_message = (message_on_first_line + "\n" + other_lines).strip()
                        else:
                            chat_message = chat_part

                    try:
                        validated_time = datetime.strptime(timestamp, '[%m/%d/%y, %I:%M %p]')
                    except (ValueError, IndexError):
                        print(f"  -> WARN: Could not parse timestamp '{timestamp}'. Using internally tracked time.")
                        timestamp = current_sim_time.strftime('[%#m/%#d/%y, %#I:%M %p]')
                        validated_time = current_sim_time
                    current_sim_time = validated_time

                    if chat_message:
                        print(f"  -> {timestamp} {speaker_role}: {chat_message}")
                        chat_obj = ChatMessage(timestamp=timestamp, speaker=speaker_role, message=chat_message)
                        short_term_memory_log.append(chat_obj.dict())
                        full_conversation_log.append(chat_obj.dict())
                        self.memory.add_memory(
                            f"[{timestamp}] {speaker_role}: {chat_message}",
                            metadata={"type": "chat", "speaker": speaker_role, "week": week_plan['week_number']}
                        )
                    
                    if data_part and data_part.lower() != 'none':
                        try:
                            data_json = json.loads(data_part)
                            data_obj = DataLog(**data_json)
                            print(f"  -> LOGGED DATA: {data_obj.data_type} from {data_obj.source}")
                            full_conversation_log.append(data_obj.dict())
                            self.memory.add_memory(
                                f"Data Log from {data_obj.source}: {data_obj.data_type} with details {data_obj.details}",
                                metadata={"type": "data", "source": data_obj.source, "week": week_plan['week_number']}
                            )
                        except (json.JSONDecodeError, TypeError, ValidationError) as e:
                            print(f"  -> WARN: {speaker_role} failed to produce a valid data log. Error: {e}")
                else:
                    print(f"Agent {speaker_role} failed to generate any output.")
                
            
                # --- GOAL-DRIVEN EXIT CONDITION ---
                if (i + 1) >= min_turns:
                    print("  -> Checking if conversation goals are met...")
                    time.sleep(1) # Add a small delay to avoid rate limiting on the check
                    if self._check_if_goals_met(short_term_memory_log, week_plan.get("conversation_goals", [])):
                        print(f"  -> Weekly conversation goals met after {i+1} turns.")
                        break
            
            if i == max_turns - 1:
                print("  -> WARN: Max turns reached for the week.")

        with open("store/full_conversation_log.json", "w") as f:
            json.dump(full_conversation_log, f, indent=2)

        return "Conversation generation complete. Log saved to 'store/full_conversation_log.json'."