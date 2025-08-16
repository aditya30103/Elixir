#### NEEDS IMPROVEMENT ####

import yaml
import json
from crewai import Crew, Task
from src.elyxproject.agents import NarrativeAgents
from src.elyxproject.formatter import create_final_document

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

def run_phase3():
    """
    Initializes and runs the two-step critique and refinement process.
    """
    print("\n--- Running Phase 3: Automated Conversation Review & Refinement ---")

    # Load all necessary files
    hackathon_context = load_file_content("src/elyxproject/knowledge/hackathon_context.yaml")
    narrative_plan = load_file_content("store/narrative_plan.json")
    generated_conversation = load_file_content("store/conversation_whatsapp.txt")
    structured_data = load_file_content("store/structured_data.json")

    if not all([hackathon_context, narrative_plan, generated_conversation, structured_data]):
        print("Halting Phase 3 due to missing files. Please run Phase 1 and 2 first.")
        return

    agents = NarrativeAgents()
    critic = agents.conversation_critic_agent()
    refiner = agents.conversation_refiner_agent()

    # --- Step 1: Critique the Conversation ---
    print("\n--- Step 1: Generating Critique ---")
    critique_task = Task(
        description=f"""
            Your task is to provide a critical review of a generated conversation.
            **--- Core Context (The Ground Truth) ---**
            {hackathon_context}
            **--- Narrative Plan (The Intended Story) ---**
            {narrative_plan}
            **--- Generated Conversation (The Final Output) ---**
            {generated_conversation}
            **--- Your Review ---**
            Please structure your review with sections for Strengths, Weaknesses, and Actionable Suggestions.
        """,
        agent=critic,
        expected_output="A structured, professional critique."
    )
    critique_crew = Crew(agents=[critic], tasks=[critique_task], verbose=True)
    critique_result = critique_crew.kickoff()

    print("\n\n--- CRITIQUE COMPLETE ---")
    print("==========================")
    print(critique_result)
    print("==========================")


    # --- Step 2: Refine the Conversation based on the Critique ---
    print("\n--- Step 2: Refining Conversation ---")
    refinement_task = Task(
        description=f"""
            You are an expert editor. Your task is to refine a conversation line-by-line based on a critique, without losing any content.

            **--- CRITICAL INSTRUCTIONS ---**
            1.  **DO NOT SUMMARIZE:** You must not remove any conversational turns or events. The final output must have the same number of messages as the original.
            2.  **EDIT, DON'T REWRITE:** Your job is to polish the existing text for brevity and tone, not to create new content.
            3.  **MAINTAIN COHERENCE:** The refined conversation must remain 100% coherent with the structured data provided.

            **--- The Critique to Address ---**
            {critique_result.raw}

            **--- Original Conversation to Refine ---**
            {generated_conversation}

            **--- Structured Data (MUST REMAIN COHERENT) ---**
            {structured_data}

            **--- Your Refined Conversation ---**
            Go through the original conversation and apply the critique's suggestions to each message. The final output should be the full, edited conversation in the same WhatsApp chat format.
        """,
        agent=refiner,
        expected_output="The final, polished, and full-length conversation in the same WhatsApp chat format."
    )
    refinement_crew = Crew(agents=[refiner], tasks=[refinement_task], verbose=True)
    refined_conversation_output = refinement_crew.kickoff()

    print("\n\n--- REFINEMENT COMPLETE ---")
    print("===========================")
    print(refined_conversation_output.raw)
    print("===========================")

    # Save the refined conversation
    refined_file_path = "store/conversation_refined.txt"
    with open(refined_file_path, "w") as f:
        f.write(refined_conversation_output.raw)
    print(f"\nRefined conversation saved to '{refined_file_path}'")
    
    # Create the final document without any markers
    create_final_document()