# Elyx AI: The Future of Personalized Healthcare Journey

Elyx AI is an advanced, multi-agent simulation and visualization platform designed to tackle the future of personalized healthcare. We generate dynamic, long-term health journeys and provide the tools to understand the "why" behind every decision, creating a new standard for transparency and personalization in health tech.

* **Live Demo:** [https://elixir-frontend-sand.vercel.app/](https://elixir-frontend-sand.vercel.app/)
---

## 1. The Core Problem: Visualizing the "Why"

The central challenge of the hackathon was twofold:

1.  **Generate Realistic, Long-Term Conversations:** Simulate a rich, 8-month WhatsApp-style conversation between a member and a diverse team of health experts, ensuring the narrative adheres to a complex set of constraints (e.g., medical conditions, travel schedules, non-adherence, and periodic diagnostic tests).
2.  **Visualize the Member's Journey:** Develop a web application to visualize this journey, allowing for a clear understanding of the member's progress and, most importantly, the ability to trace back and understand the **rationale** behind any medical or lifestyle decision.

The ultimate goal is to move beyond static health plans and create a living, explainable record of a member's journey with Elyx.

---

## 2. Our Solution: A Narrative-Driven, Multi-Agent System

Our solution is an end-to-end system that uses a sophisticated, multi-phase AI pipeline to generate, analyze, and visualize a member's health narrative. We don't just generate text; we simulate a complex, evolving relationship between a member and their dedicated health team.

### High-Level Strategy

Our approach is built on a "Plan, Generate, Summarize & Query" model:

1.  **Phase 1: The Strategic Blueprint:** An AI "Narrative Architect" first creates a detailed 32-week narrative plan in JSON format. This plan is the story's backbone, weaving together the member's persona, goals, and all hackathon constraints into a coherent arc.
2.  **Phase 2: The Conversation Engine:** A multi-agent crew, orchestrated by a "Director" agent, uses the weekly plans to generate realistic conversations. Each agent has a distinct persona (the data-driven member, the empathetic concierge, the authoritative doctor), ensuring the dialogue is authentic and purposeful. Crucially, this phase outputs both conversational messages and **structured data logs** (e.g., biometric data, test results).
3.  **Phase 3: The Insight Layer:** With 8 months of raw data generated, we use AI agents to synthesize it. A **Summarizer** transforms the logs into a compelling, episodic narrative, while a **Retrieval-Augmented Generation (RAG) Pipeline** creates a searchable knowledge base to answer questions about the journey.

This structured, phased approach ensures the final output is not only creative and realistic but also deeply aligned with the problem statement's constraints and goals.

---

## 3. Key Features & Deep Insights

### ✅ **Agent-Based Simulation**

We use a team of specialized AI agents (`CrewAI` framework) to simulate the entire Elyx ecosystem. This includes Rohan Patel (the member), his personal assistant, and the full Elyx concierge team (Ruby, Dr. Warren, Advik, etc.).

* **Insight:** This approach captures the complex dynamics of a real-world healthcare team. A `routing_agent` intelligently decides who should speak next, creating a natural, goal-oriented conversational flow that advances the narrative logically.

### ✅ **Narrative-Driven Generation**

The entire 8-month simulation is guided by a master `narrative_plan.json`. This ensures the generated conversation is not random but follows a structured plot, hitting all required events like:
* Quarterly diagnostic panels.
* Frequent international travel and its impact.
* Realistic friction points and member non-adherence (~50% of the time).
* Quarterly Business Reviews (QBRs) for strategic alignment.

### ✅ **RAG Pipeline for Explainable AI**

The cornerstone of our solution is the RAG (Retrieval-Augmented Generation) pipeline, which directly addresses the "why" challenge.

* **How it Works:** The generated conversation logs are stored in a semantic vector database. When a user asks a question like, "Why did Rohan's HRV dip during his trip to Jakarta?", the pipeline retrieves the most relevant chat messages and data logs and uses an AI Analyst Agent to synthesize a clear, evidence-backed answer.
* **Insight:** This prevents AI hallucination and ensures every answer is grounded in the "source of truth"—the actual conversation data. It provides a powerful, transparent tool for understanding the rationale behind any decision.

### ✅ **Dynamic Visualization & Journey Exploration**

Our frontend, built with **Next.js and Recharts**, brings the generated journey to life.
* **Member & Elyx Dashboards:** Separate views provide key metrics and insights for both the member and the internal team.
* **Episodic Journey View:** The AI-generated episodic summary (`episodic_journey_report_final.md`) is presented as a navigable story, allowing users to explore the journey month by month.
* **"Ask Why" Feature:** A chat interface that connects directly to our RAG Pipeline, allowing stakeholders to query the journey in natural language.
* **Full Conversation Log:** A complete, WhatsApp-style transcript of the entire 8-month conversation for granular review.

---

## 4. System Architecture

Our project is a monorepo containing two main packages: `backend` and `frontend`.

### **Backend (Python, CrewAI, FastAPI)**

* **`src/elyxproject/`**: The core application logic.
    * **`agents.py`**: Defines the personas and goals for each AI agent.
    * **`orchestrator.py`**: The main engine that manages the conversation generation week by week. It selects speakers, generates turns, and ensures goals are met.
    * **`rag_pipeline.py`**: Implements the Retrieval-Augmented Generation system using a semantic memory for querying the journey.
    * **`crew.py` / `main.py`**: Defines the `CrewAI` tasks and runs the generation pipeline.
    * **`config/`**: Contains the `agents.yaml` and `tasks.yaml` files, which are the primary prompt configuration files.
* **`store/`**: Contains all the generated artifacts, including the `narrative_plan.json`, `full_conversation_log.json`, and the final `episodic_journey_report_final.md`.

### **Frontend (Next.js, TypeScript, Tailwind CSS)**

* **`app/`**: The main application routes.
    * **`dashboard/`**: Contains the pages for the Elyx and Member dashboards.
    * **`journey/`**: The episodic journey timeline view.
    * **`fullstory/`**: The complete, unfiltered conversation log.
    * **`api/why/`**: The API route that exposes the backend's RAG pipeline to the frontend.
* **`components/`**: Reusable React components for building the UI, including charts and data visualizations.
* **`data/`**: The generated JSON and markdown files are stored here to be statically served by the frontend.

---

## 5. How to Run the Project

### **Prerequisites**

* Python 3.10+
* Node.js 18+
* An environment file (`.env`) in the `backend` directory with your `GEMINI_API_KEY`.

### **Backend Setup**

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
3.  **Run the Generation Pipeline:** The pipeline is executed in three phases.
    ```bash
    # Phase 1: Create the narrative plan
    python -m src.elyxproject.run_phase1

    # Phase 2: Generate the full 8-month conversation log
    python -m src.elyxproject.run_phase2

    # Phase 3: Summarize the log into an episodic report
    python -m src.elyxproject.run_phase3
    ```
4.  **Start the RAG API (Optional):**
    ```bash
    uvicorn src.elyxproject.api:app --reload
    ```

### **Frontend Setup**

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Copy generated data:** After running the backend pipeline, copy the generated files from `backend/store/` to `frontend/data/`.
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 6. Prompts Used

As required, all prompts used to drive the AI agents are centrally located in the `prompts.yaml` file. This includes:
* The master prompt for the `Strategic Narrative Architect`.
* The role-playing prompts for each character agent (Rohan, Dr. Warren, etc.).
* The prompts for the `Conversation Router` and `Health Journey Summarizer`.
* The detailed, structured prompt for the `Elyx Health Data Analyst` used in the RAG pipeline.

This centralized approach makes our system highly configurable and transparent.

---