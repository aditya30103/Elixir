from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from src.elyxproject.models import StoryPlan

@CrewBase
class ElyxprojectCrew():
    """Elyxproject crew"""
    agents_config = "config/agents.yaml"
    tasks_config = "config/tasks.yaml"

    @agent
    def narrative_architect(self) -> Agent:
        return Agent(
            config=self.agents_config['strategic_narrative_architect'],
            verbose=True
        )

    @task
    def planning_task(self) -> Task:
        task_description = self.tasks_config['planning_task']['description']

        return Task(
            description=task_description,
            agent=self.narrative_architect(),
            expected_output=self.tasks_config['planning_task']['expected_output'],
            output_pydantic=StoryPlan,
            output_file="store/narrative_plan.json"
        )

    @crew
    def crew(self) -> Crew:
        """Creates the Elyxproject crew"""
        return Crew(
            agents=self.agents,
            tasks=self.tasks,
            process=Process.sequential,
            verbose=True,
        )