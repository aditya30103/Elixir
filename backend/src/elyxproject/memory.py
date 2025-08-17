import os
import chromadb
from sentence_transformers import SentenceTransformer

script_dir = os.path.dirname(__file__)
db_path = os.path.abspath(os.path.join(script_dir, "..", "..", "store", "vector_memory"))

class SemanticMemory:
    """
    Manages the agentic system's memory using a persistent vector database.
    """
    def __init__(self, persist_directory="store/vector_memory"):
        print("Initializing Persistent Semantic Memory...")
        try:
            # Tell ChromaDB to save its data to a directory
            self.client = chromadb.PersistentClient(path=db_path)
            self.collection = self.client.get_or_create_collection("elyx_memory")
            self.encoder = SentenceTransformer('all-MiniLM-L6-v2')
            self.memory_counter = self.collection.count() # Load existing memory count
            print(f"Semantic Memory initialized. Found {self.memory_counter} existing memories.")
        except Exception as e:
            print(f"Error initializing Semantic Memory: {e}")

    def add_memory(self, content: str, metadata: dict):
        """
        Encodes and stores a new memory, which will be saved to disk.
        """
        try:
            embedding = self.encoder.encode(content).tolist()
            doc_id = str(self.memory_counter)

            self.collection.add(
                ids=[doc_id],
                embeddings=[embedding],
                documents=[content],
                metadatas=[metadata]
            )
            self.memory_counter += 1
        except Exception as e:
            print(f"Error adding memory: {e}")

    def retrieve_relevant_memories(self, query: str, n_results: int = 5) -> str:
        """
        Finds the most semantically relevant memories for a given query.
        """
        if not query:
            return "No relevant memories found."

        try:
            query_embedding = self.encoder.encode(query).tolist()
            results = self.collection.query(
                query_embeddings=[query_embedding],
                n_results=n_results
            )
            retrieved_docs = results.get('documents', [[]])[0]
            if not retrieved_docs:
                return "No relevant memories found."

            formatted_memories = "\n- ".join(retrieved_docs)
            return f"- {formatted_memories}"
        except Exception as e:
            print(f"Error retrieving memories: {e}")
            return "Error retrieving memories."