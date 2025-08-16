import yaml
import json
from crewai import Crew, Task
from src.elyxproject.agents import NarrativeAgents
import re
import json

def load_file_content(file_path):
    """A helper function to load content from a file."""
    try:
        with open(file_path, 'r') as f:
            if file_path.endswith('.json'):
                return json.dumps(json.load(f), indent=2)
            else:
                return f.read()
    except FileNotFoundError:
        print(f"ERROR: The file {file_path} was not found.")
        return None

def _clean_and_parse_json(raw_string: str) -> dict:
    """
    Cleans and parses a JSON string, attempting to recover from common LLM formatting issues.
    """
    # 1. First, try to find a JSON blob inside markdown
    # The re.DOTALL flag allows the dot (.) to match newlines
    match = re.search(r"```(json)?\s*([\s\S]*?)\s*```", raw_string, re.DOTALL)
    if match:
        raw_string = match.group(2)

    # 2. If that fails, or wasn't present, find the first opening and last closing bracket
    start_bracket = re.search(r"[\{\[]", raw_string)
    # Search from the end of the string for the last closing bracket
    end_bracket = re.search(r"[\}\]]", raw_string[::-1]) 

    if start_bracket and end_bracket:
        start_index = start_bracket.start()
        # We need to calculate the correct end index from the reversed search
        end_index = len(raw_string) - end_bracket.start()
        raw_string = raw_string[start_index:end_index]

    # 3. Now, try to parse it
    try:
        return json.loads(raw_string)
    except json.JSONDecodeError as e:
        print(f"  -> ERROR: All parsing attempts failed. json error: {e}")
        raise
    
def run_phase3():
    """
    Generates a structured, data-rich episodic summary using a two-step,
    fully autonomous "Plan, then Analyze & Narrate" workflow.
    """
    print("\n--- Running Phase 3: Autonomous Episodic Journey Visualization ---")

    full_conversation_log = load_file_content("store/full_conversation_log.json")
    if not full_conversation_log:
        print("Halting Phase 3. Please run Phase 2 first.")
        return

    agents = NarrativeAgents()
    data_analyst = agents.elyx_data_analyst_agent()
    narrator = agents.journey_summarizer_agent()

    # --- Step 1: Dynamically Plan the Episodes ---
    print("\n--- Step 1: Autonomously Planning the 6 Narrative Episodes ---")
    episode_planning_task = Task(
        description=f"""
            You are a master storyteller. Your task is to read the entire 8-month (32-week) conversation log and identify the 6 most significant, natural narrative arcs or "chapters."

            **--- Full Conversation Log ---**
            {full_conversation_log}

            **--- Your Output ---**
            You must provide a JSON list of exactly 6 episode objects. Each object must have:
            1. A creative, descriptive "title" for the episode.
            2. The "weeks" it covers (e.g., "Weeks 1-5").

            Example Output Format:
            ```json
            [
              {{"title": "Episode 1: The Onboarding", "weeks": "Weeks 1-4"}},
              {{"title": "Episode 2: The First Challenge", "weeks": "Weeks 5-10"}},
              ...
            ]
            ```
        """,
        agent=narrator, # The narrator is best suited for identifying story arcs
        expected_output="A valid JSON list containing exactly 6 episode objects, each with a 'title' and 'weeks' key."
    )
    planning_crew = Crew(agents=[narrator], tasks=[episode_planning_task], verbose=0)
    episode_plan_result = planning_crew.kickoff()

    try:
        episodes = _clean_and_parse_json(episode_plan_result.raw)
        print("  -> Episode plan generated successfully:")
        for ep in episodes:
            print(f"      - {ep['title']} ({ep['weeks']})")
    except (json.JSONDecodeError, TypeError):
        print("  -> ERROR: Failed to generate a valid episode plan. Halting Phase 3.")
        print("Raw output was:")
        print(episode_plan_result.raw)
        return


    # --- Step 2: Analyze and Narrate Each Episode ---
    final_report = "## Rohan Patel: An 8-Month Episodic Health Journey\n\n"
    for episode in episodes:
        print(f"\n--- Generating {episode['title']} ({episode['weeks']}) ---")

        print("  -> Step 2a: Extracting Structured Data with Data Analyst Agent...")
        analysis_task = Task(
            description=f"""
                Analyze the provided conversation log for the specific period of **{episode['weeks']}**.
                Your task is to extract structured information for EACH of the following categories based on the user's requested template.

                **--- Full Conversation Log ---**
                {full_conversation_log}

                **--- Your Output ---**
                Provide a structured, bulleted list of your findings for each of the categories in the template.
            """,
            agent=data_analyst,
            expected_output="A structured, bulleted list of findings for all requested categories for the specified period."
        )
        analysis_crew = Crew(agents=[data_analyst], tasks=[analysis_task], verbose=0)
        structured_data = analysis_crew.kickoff()
        print("  -> Structured data extracted successfully.")

        print("  -> Step 2b: Generating Narrative with Journey Summarizer Agent...")
        narration_task = Task(
            description=f"""
                You are an AI Narrative Journalist. Your task is to write a single, compelling episode of a member's health journey using the provided structured data.

                **--- Structured Data for This Episode (from your analyst) ---**
                {structured_data}

                **--- Your Task ---**
                Fill in the following markdown template for **{episode['title']} ({episode['weeks']})**.
                The "Narrative" should be a compelling summary that weaves the data points together into a story.

                **--- TEMPLATE ---**
                ### **{episode['title']}**
                **{episode['weeks']}**

                **1. The Narrative:**
                [Your concise, engaging summary of the story arc for this period goes here.]

                **2. Primary Goal & Friction Points:**
                [Insert findings from your analyst here.]

                **3. Key Metrics & Milestones:**
                * **Biometrics & Special Metrics:** [Insert findings from your analyst here.]
                * **Data-Driven Insights:** [Insert findings from your analyst here.]
                * **Strategic Pivots:** [Insert findings from your analyst here.]
                * **Member-Initiated Goal:** [Insert findings from your analyst here.]

                **4. Final Outcome:**
                [Insert findings from your analyst here.]

                **5. Stateful Persona Analysis:**
                * **Before State:** [Insert findings from your analyst here.]
                * **After State:** [Insert findings from your analyst here.]
            """,
            agent=narrator,
            expected_output="A single, perfectly formatted markdown section for the specified episode, following the detailed template."
        )
        narration_crew = Crew(agents=[narrator], tasks=[narration_task], verbose=True)
        episode_report = narration_crew.kickoff()

        final_report += episode_report.raw + "\n\n---\n\n"

    print("\n\n--- FINAL EPISODIC JOURNEY REPORT ---")
    print("==========================================")
    print(final_report)
    print("==========================================")

    with open("store/episodic_journey_report_final.md", "w") as f:
        f.write(final_report)
    print("\nFinal structured episodic journey report saved to 'store/episodic_journey_report_final.md'")