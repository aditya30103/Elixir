import yaml
from src.elyxproject.crew import ElyxprojectCrew

def format_context_for_llm(context: dict) -> str:
    """
    Formats the context dictionary into a clean, readable, markdown-style string
    that is highly effective for language models.
    """
    formatted_string = ""
    for key, value in context.items():
        # Create a clear title for each section
        title = key.replace('_', ' ').title()
        formatted_string += f"### {title}\n"
        
        if isinstance(value, dict):
            for sub_key, sub_value in value.items():
                formatted_string += f"- **{sub_key.replace('_', ' ').title()}:** {sub_value}\n"
        elif isinstance(value, list):
            for item in value:
                if isinstance(item, dict):
                    # Nicely format lists of objects (like team personas)
                    for item_key, item_value in item.items():
                        formatted_string += f"  - **{item_key.title()}:** {item_value}\n"
                    formatted_string += "\n"
                else:
                    # Format simple lists
                    formatted_string += f"- {item}\n"
        else:
            formatted_string += f"{value}\n"
        formatted_string += "\n"
        
    return formatted_string.strip()

def load_hackathon_context():
    """Loads the detailed context from the knowledge base YAML file."""
    try:
        with open("src/elyxproject/knowledge/hackathon_context.yaml", 'r') as f:
            return yaml.safe_load(f)
    except FileNotFoundError:
        print("ERROR: hackathon_context.yaml not found. Please ensure the file exists.")
        return None

def run_phase1():
    """
    Initializes and runs the crew for Phase 1 to generate the narrative plan.
    """
    print("\n--- Loading and Formatting Hackathon Context ---")
    hackathon_context_raw = load_hackathon_context()
    if not hackathon_context_raw:
        return

    # Use the new formatting function to create a clean context string
    formatted_context = format_context_for_llm(hackathon_context_raw)
    print("Context formatted successfully for the LLM.")
    
    try:
        # The input for kickoff is now the clean, formatted string
        inputs = {'hackathon_context': formatted_context}
        crew_instance = ElyxprojectCrew().crew()
        result = crew_instance.kickoff(inputs=inputs)
        
        print("\n--- Phase 1 Result ---")
        print(result)
        print("\nNarrative plan saved to 'store/narrative_plan.json'")
    except Exception as e:
        print(f"An error occurred during Phase 1: {e}")