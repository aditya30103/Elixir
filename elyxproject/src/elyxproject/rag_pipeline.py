import os
from crewai import Crew, Task
from src.elyxproject.memory import SemanticMemory
from src.elyxproject.agents import NarrativeAgents

# Ensure you have a .env file with your GEMINI_API_KEY
from dotenv import load_dotenv
load_dotenv()

class RAGPipeline:
    """
    A Retrieval-Augmented Generation pipeline to query the Elyx conversation memory.
    """
    def __init__(self):
        print("Initializing RAG Pipeline...")
        # The memory class will load the persistent vectorDB from the 'store' directory
        self.memory = SemanticMemory()
        # The analyst agent is specialized in synthesizing answers from context
        self.analyst_agent = NarrativeAgents().elyx_analyst_agent()
        print("RAG Pipeline initialized successfully.")

    def answer(self, question: str) -> str:
        """
        Takes a user's question, retrieves relevant memories, and generates a synthesized answer.

        Args:
            question: The user's question in natural language.

        Returns:
            A comprehensive, evidence-backed answer from the AI analyst.
        """
        print(f"\nReceived query: '{question}'")

        # 1. Retrieve relevant memories from the vector database
        print("-> Retrieving relevant memories...")
        relevant_memories = self.memory.retrieve_relevant_memories(question, n_results=10)
        
        if "No relevant memories found" in relevant_memories:
            return "I could not find any relevant information in the memory to answer your question."

        print("-> Memories retrieved successfully.")

        # 2. Create the analysis task for the agent
        analysis_task = Task(
            description=f"""
                You are an expert health data analyst. Your task is to answer a specific question based on a set of provided "memories." These memories consist of chat transcripts and structured data logs from an 8-month health journey.

                **--- CRITICAL INSTRUCTIONS ---**
                1.  **Answer ONLY from the Context:** You must base your entire answer on the information provided in the "Relevant Memories" section. Do not invent or infer any information.
                2.  **Synthesize, Don't Just List:** Do not just list the memories. Weave the information from both chat and data logs into a coherent, easy-to-understand answer.
                3.  **Be Specific and Cite Data:** When possible, cite specific data points or conversations to back up your answer.

                **--- The User's Question ---**
                {question}

                **--- Relevant Memories (Your Source of Truth) ---**
                {relevant_memories}
            """,
            agent=self.analyst_agent,
            expected_output="A clear, concise, and evidence-based answer to the user's question, synthesized from the provided memories."
        )

        # 3. Execute the task with a dedicated crew
        print("-> Synthesizing answer with AI Analyst...")
        analysis_crew = Crew(agents=[self.analyst_agent], tasks=[analysis_task], verbose=0)
        result = analysis_crew.kickoff()

        print("-> Answer generated.")
        return result.raw

# --- Example Usage ---
if __name__ == '__main__':
    # This allows you to run this file directly to test the RAG pipeline
    rag_system = RAGPipeline()

    # Example Question 1: Simple fact retrieval
    question1 = "What was Rohan's initial feedback on the nutrition plan from Carla?"
    answer1 = rag_system.answer(question1)
    print("\n--- ANSWER 1 ---")
    print(answer1)

    # Example Question 2: Connecting chat to data
    question2 = "Why did Rohan's HRV dip during his trip to Jakarta?"
    answer2 = rag_system.answer(question2)
    print("\n--- ANSWER 2 ---")
    print(answer2)
    
    # Example Question 3: High-level summary
    question3 = "What was the outcome of the first Quarterly Business Review (QBR)?"
    answer3 = rag_system.answer(question3)
    print("\n--- ANSWER 3 ---")
    print(answer3)