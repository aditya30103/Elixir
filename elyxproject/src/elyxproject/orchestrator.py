import json
import time
from datetime import datetime, timedelta
import random
from crewai import Crew, Task
from pydantic import ValidationError
from src.elyxproject.agents import NarrativeAgents
from src.elyxproject.models import ChatMessage, DataLog
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
        self.summarizer = self.agents.summary_agent()
        print("Orchestrator Initialized.")

    def _get_next_speaker(self, weekly_context, conversation_history, long_term_memory):
        agent_roles = self.agents.get_all_roles()
        prompt = f"""
        Given the long-term context, the weekly plan, and the recent conversation, who should speak next?
        Your answer MUST be one of the following agent roles: {agent_roles}.

        **Long-Term Memory (Summary of Prior Weeks):**
        {long_term_memory}
        **This Week's Plan:**
        {weekly_context}
        **Current Conversation History (last 5 messages):**
        {conversation_history}
        """
        routing_task = Task(description=prompt, agent=self.router, expected_output=f"A single agent role from the provided list.")
        crew = Crew(agents=[self.router], tasks=[routing_task], verbose=0)
        next_speaker = crew.kickoff()
        return next_speaker.raw.strip()

    def run(self):
        full_conversation_log = []
        long_term_memory = "No history yet. This is Week 1."
        context_str = str(self.hackathon_context)
        
        current_sim_time = datetime(2025, 8, 25, 9, 0, 0)

        for week_plan in self.plan:
            print(f"\n--- Generating Week {week_plan['week_number']}: {week_plan['theme']} ---")
            weekly_context = json.dumps(week_plan, indent=2)
            short_term_memory_log = []
            
            # --- NEW: Check for Diagnostic Event ---
            is_diagnostic_week = any(event.get('event_type') == 'Diagnostic' for event in week_plan.get('events', []))
            
            max_turns = 10
            for i in range(max_turns):
                history_snippet = "\n".join([f"{msg['timestamp']} {msg['speaker']}: {msg['message']}" for msg in short_term_memory_log[-5:]])
                speaker_role = self._get_next_speaker(weekly_context, history_snippet, long_term_memory)

                if speaker_role not in self.agents.get_all_roles():
                    print(f"Router returned invalid agent: '{speaker_role}'. Defaulting to Rohan Patel.")
                    speaker_role = "Rohan Patel"

                print(f"Turn {i+1}: Speaker is {speaker_role}")
                
                delay_minutes = random.randint(5, 55)
                current_sim_time += timedelta(minutes=delay_minutes)
                
                # --- Dynamic Prompt Augmentation for Diagnostic Tests ---
                diagnostic_instruction = ""
                if is_diagnostic_week and speaker_role in ["Dr. Warren", "Advik"]:
                    diagnostic_instruction = """
                    **--- CRITICAL DATA LOGGING TASK ---**
                    This week involves a diagnostic panel. In your response, you MUST generate a `DataLog` object. The `details` section of this JSON MUST include plausible results for all the tests listed in the `diagnostic_panel_tests` section of the Core Context. This is not optional.
                    """
                
                agent_task_prompt = f"""
                    You are {speaker_role}. Your task is to generate the next part of a conversation.
                    
                    {diagnostic_instruction}

                    **--- OUTPUT FORMAT INSTRUCTIONS ---**
                    - **BREVITY IS KEY:** Your chat message MUST be concise and to the point, like a real WhatsApp message. Aim for 1-3 short sentences. AVOID long paragraphs.
                    - **TIMESTAMP:** First, on a single line, write a plausible timestamp. It must be after **{current_sim_time.strftime('[%#m/%#d/%y, %#I:%M %p]')}**. Use the format `[M/D/YY, H:MM AM/PM]`.
                    - **CHAT:** On the next line, write the conversational message as plain text.
                    - **SEPARATOR:** On a new line, write the exact separator: ---DATA---
                    - **DATA:** After the separator, write a single, valid JSON object for any data to log, or the word "None".

                    **--- RULES FOR DATA LOGGING ---**
                    - **Log ONLY objective, structured data.** (e.g., biometric numbers, appointment times, test results).
                    - **DO NOT log conversational context or summaries.** If there is no objective data to log, you MUST write "None".
                    - The JSON MUST contain "data_type", "source", and "details" keys.

                    **--- CORE CONTEXT & PERSONAS ---**
                    {context_str}

                    **--- CURRENT SITUATION ---**
                    - Long-Term Memory: {long_term_memory}
                    - This Week's Plan: {weekly_context}
                    - Conversation History (most recent messages): {history_snippet}
                """
                
                current_agent = self.agents.get_agent_by_role(speaker_role)
                agent_task = Task(
                    description=agent_task_prompt,
                    agent=current_agent,
                    expected_output="""A three-part response: a timestamp, a CONCISE chat message, and a valid data log (or "None"), separated by '---DATA---'."""
                )
                
                turn_crew = Crew(agents=[current_agent], tasks=[agent_task], verbose=0)
                turn_result = turn_crew.kickoff()

                if turn_result and turn_result.raw:
                    raw_output = turn_result.raw.strip()
                    
                    try:
                        separator_index = raw_output.index("---DATA---")
                        chat_part = raw_output[:separator_index].strip()
                        data_part = raw_output[separator_index + len("---DATA---"):].strip()
                    except ValueError:
                        chat_part = raw_output
                        data_part = "None"

                    # --- ROBUST PARSING LOGIC ---
                    lines = chat_part.split('\n')
                    timestamp = ""
                    chat_message = ""

                    if lines:
                        first_line = lines[0].strip()
                        # Check if the first line is likely a timestamp
                        if first_line.startswith('[') and first_line.endswith(']'):
                            timestamp = first_line
                            # Handle case where message is on the same line vs. next line
                            if len(lines) > 1:
                                chat_message = "\n".join(lines[1:]).strip()
                            else: # If message is on the same line (a common failure mode)
                                end_of_timestamp = first_line.find(']') + 1
                                potential_message = first_line[end_of_timestamp:].strip()
                                chat_message = potential_message
                        else: # If no timestamp is found, the whole thing is the message
                            chat_message = chat_part

                    # Validate or create a timestamp
                    try:
                        current_sim_time = datetime.strptime(timestamp, '[%m/%d/%y, %I:%M %p]')
                    except (ValueError, IndexError):
                        print(f"  -> WARN: Could not parse timestamp '{timestamp}'. Using internally tracked time.")
                        timestamp = current_sim_time.strftime('[%#m/%#d/%y, %#I:%M %p]')

                    if chat_message:
                        print(f"  -> {timestamp} {speaker_role}: {chat_message}")
                        chat_obj = ChatMessage(timestamp=timestamp, speaker=speaker_role, message=chat_message)
                        short_term_memory_log.append(chat_obj.dict())
                        full_conversation_log.append(chat_obj.dict())
                    
                    if data_part and data_part.lower() != 'none':
                        try:
                            data_json = json.loads(data_part)
                            data_obj = DataLog(**data_json)
                            print(f"  -> LOGGED DATA: {data_obj.data_type} from {data_obj.source}")
                            full_conversation_log.append(data_obj.dict())
                        except (json.JSONDecodeError, TypeError, ValidationError) as e:
                            print(f"  -> WARN: {speaker_role} failed to produce a valid data log. Error: {e}")
                else:
                    print(f"Agent {speaker_role} failed to generate any output.")
                
                # Re-add rate limit delay
                time.sleep(3)

            print("\n--- Summarizing week to create long-term memory ---")
            time.sleep(3) # Delay before summary call
            summary_task = Task(
                description=f"Summarize the key events, decisions, and outcomes from this week's conversation log. Be concise. The conversation log is: {short_term_memory_log}",
                agent=self.summarizer,
                expected_output="A concise summary of the week's key events and decisions."
            )
            summary_crew = Crew(agents=[self.summarizer], tasks=[summary_task], verbose=0)
            weekly_summary = summary_crew.kickoff()

            if weekly_summary and weekly_summary.raw:
                long_term_memory += f"\n\n**Summary of Week {week_plan['week_number']}**: {weekly_summary.raw}"
                print(f"Updated Long-Term Memory with summary of Week {week_plan['week_number']}.")
            else:
                print(f"Summarizer failed to generate a valid summary for Week {week_plan['week_number']}.")

        with open("store/full_conversation_log.json", "w") as f:
            json.dump(full_conversation_log, f, indent=2)

        return "Conversation generation complete. Log saved to 'store/full_conversation_log.json'."