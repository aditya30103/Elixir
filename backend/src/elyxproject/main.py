from dotenv import load_dotenv

load_dotenv()

from src.elyxproject.run_phase1 import run_phase1
from src.elyxproject.run_phase2 import run_phase2
from src.elyxproject.run_phase3 import run_phase3

def main():
    """Main function to run the Elyx project."""
    while True:
        print("\n--- Elyx Project ---")
        print("1. Run Phase 1: Generate Narrative Plan")
        print("2. Run Phase 2: Generate 8-Month Conversation")
        print("3. Run Phase 3: Create Episodic Journey Report") 
        print("4. Exit")
        choice = input("Enter your choice (1, 2, 3, or 4): ")

        if choice == '1':
            print("\n--- Running Phase 1: Narrative Plan Generation ---")
            run_phase1()
        elif choice == '2':
            print("\n--- Running Phase 2: Conversation Generation ---")
            run_phase2()
            
        elif choice == '3':
            print("\n--- Running Phase 3: Generating Episodic Report ---")
            run_phase3()
        elif choice == '4':
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please enter 1, 2, 3, or 4.")

if __name__ == "__main__":
    main()