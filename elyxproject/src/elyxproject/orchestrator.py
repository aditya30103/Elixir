import json
from crewai import Crew, Task
from pydantic import ValidationError
from src.elyxproject.agents import NarrativeAgents
from src.elyxproject.tasks import AgentOutput
from dotenv import load_dotenv

load_dotenv()

class Orchestrator:
    def __init__(self, plan_file_path="store/narrative_plan1.json"):
        print("Initializing Orchestrator...")
        with open(plan_file_path, 'r') as f:
            self.plan = json.load(f)['weekly_plans']
        
        agent_factory = NarrativeAgents()
        self.agents = {
            "Rohan Patel": agent_factory.rohan_patel_agent(),
            "Sarah Tan": agent_factory.sarah_tan_agent(),
            "Ruby": agent_factory.ruby_concierge_agent(),
            "Dr. Warren": agent_factory.dr_warren_agent(),
            "Advik": agent_factory.advik_scientist_agent(),
            "Carla": agent_factory.carla_nutritionist_agent(),
            "Rachel": agent_factory.rachel_pt_agent(),
            "Neel": agent_factory.neel_lead_agent()
        }
        self.router = agent_factory.routing_agent()
        self.summarizer = agent_factory.summary_agent()
        print("Orchestrator Initialized.")

    def _get_next_speaker(self, weekly_context, conversation_history, long_term_memory):
        prompt = f"""
        Given the long-term context, the weekly plan, and the recent conversation, who should speak next?
        Your answer MUST be one of the following agent roles: {list(self.agents.keys())}.

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

        for week_plan in self.plan:
            print(f"\n--- Generating Week {week_plan['week_number']}: {week_plan['theme']} ---")
            weekly_context = json.dumps(week_plan, indent=2)
            short_term_memory_log = [] 
            
            num_turns = 7
            
            for i in range(num_turns):
                history_snippet = "\n".join([f"{msg['speaker']}: {msg['message']}" for msg in short_term_memory_log[-5:]])
                speaker_role = self._get_next_speaker(weekly_context, history_snippet, long_term_memory)
                
                if speaker_role not in self.agents:
                    print(f"Router returned invalid agent: '{speaker_role}'. Defaulting to Rohan Patel.")
                    speaker_role = "Rohan Patel"
                
                print(f"Turn {i+1}: Speaker is {speaker_role}")
                
                # --- PROMPT IMPROVEMENT SECTION ---
                agent_task_prompt = f"""
                    You are {speaker_role}. Your task is to generate the next part of a conversation.
                    Your final output MUST be a single, valid JSON object that strictly adheres to the `AgentOutput` Pydantic model.

                    **CRITICAL INSTRUCTIONS:**
                    1.  Your entire response must be a JSON object. Do NOT output a Python object representation (e.g., `outputs=[ChatMessage(...)]`).
                    2.  The JSON must use double quotes for all keys and string values.

                    **Correct Output Format Example:**
                    ```json
                    {{
                      "outputs": [
                        {{
                          "speaker": "{speaker_role}",
                          "message": "This is the content of the chat message."
                        }},
                        {{
                          "data_type": "Biometric",
                          "source": "Internal Log",
                          "details": {{"heart_rate": 75, "status": "stable"}}
                        }}
                      ]
                    }}
                    ```
                    (You can include just a ChatMessage, just a DataLog, or both in the 'outputs' list as needed.)

                    **CONTEXT FOR YOUR RESPONSE:**
                    - **Long-Term Memory (Summary of Prior Weeks):** {long_term_memory}
                    - **This Week's Plan:** {weekly_context}
                    - **Current Conversation History:** {short_term_memory_log}
                """
                # --- END OF PROMPT IMPROVEMENT ---

                agent_task = Task(description=agent_task_prompt, agent=self.agents[speaker_role], expected_output="A valid JSON object based on the `AgentOutput` model.", output_pydantic=AgentOutput)
                
                turn_crew = Crew(agents=[self.agents[speaker_role]], tasks=[agent_task], verbose=0)
                turn_result = turn_crew.kickoff()

                pydantic_result = None
                if turn_result and turn_result.tasks_output:
                    json_string = str(turn_result.tasks_output[0])
                    
                    try:
                        # Clean the string in case the LLM wraps it in ```json ... ```
                        if json_string.startswith("```json"):
                            json_string = json_string[7:-4]
                        
                        pydantic_result = AgentOutput.model_validate_json(json_string)
                    except (json.JSONDecodeError, ValidationError) as e:
                        print(f"  -> ERROR: Failed to parse JSON output from {speaker_role}. Error: {e}")
                        print(f"  -> Raw output was: {json_string}")

                if pydantic_result and hasattr(pydantic_result, 'outputs') and pydantic_result.outputs:
                    for output in pydantic_result.outputs:
                        if hasattr(output, 'speaker'):
                            print(f"  -> {output.speaker}: {output.message}")
                            short_term_memory_log.append(output.dict())
                            full_conversation_log.append(output.dict())
                        elif hasattr(output, 'data_type'):
                            print(f"  -> LOGGED DATA: {output.data_type} from {output.source}")
                            full_conversation_log.append(output.dict())
                else:
                    if not pydantic_result:
                        print(f"Agent {speaker_role} failed to generate a valid output.")
            
            print("\n--- Summarizing week to create long-term memory ---")
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

        with open("raw_conversation_log.json", "w") as f:
            json.dump(full_conversation_log, f, indent=2)
        
        return "Conversation generation complete. Log saved to 'raw_conversation_log.json'."
