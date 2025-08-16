import yaml
from src.elyxproject.orchestrator import Orchestrator
from src.elyxproject.formatter import format_conversation_log

def load_hackathon_context():
    """Loads the detailed context from the knowledge base YAML file."""
    try:
        with open("src/elyxproject/knowledge/hackathon_context.yaml", 'r') as f:
            return yaml.safe_load(f)
    except FileNotFoundError:
        print("ERROR: hackathon_context.yaml not found. Please ensure the file exists.")
        return None

def run_phase2():
    """
    Initializes and runs the Orchestrator for Phase 2.
    """
    print("\n--- Loading Hackathon Context for Phase 2 ---")
    hackathon_context = load_hackathon_context()
    if not hackathon_context:
        return

    print("Context loaded successfully.")
    
    try:
        # Pass the loaded context to the Orchestrator
        orchestrator = Orchestrator(hackathon_context=hackathon_context)
        result = orchestrator.run()
        print(f"\n--- {result} ---")

        print("\n--- Formatting conversation log into WhatsApp style ---")
        format_conversation_log()

    except FileNotFoundError:
        print("\nERROR: 'store/narrative_plan.json' not found.")
        print("Please run Phase 1 first to generate the narrative plan.")
    except Exception as e:
        print(f"An error occurred during Phase 2: {e}")