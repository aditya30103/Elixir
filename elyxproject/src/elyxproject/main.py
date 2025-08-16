from dotenv import load_dotenv
from orchestrator import Orchestrator

# Load environment variables from .env file
load_dotenv()

def run():
    """
    This function initializes and runs the Orchestrator for Phase 2.
    NOTE: Ensure you have already run Phase 1 and have a 'narrative_plan.json' file.
    """
    orchestrator = Orchestrator()
    result = orchestrator.run()
    
    print(f"\n--- {result} ---")

if __name__ == "__main__":
    run()