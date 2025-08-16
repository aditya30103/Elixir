from crewai import Agent
from pathlib import Path
from langchain_community.chat_models.litellm import ChatLiteLLM
import yaml
import os

# Get the directory of the current file
current_dir = Path(__file__).parent
# Build the path to the config file
config_path = current_dir / 'config' / 'agents.yaml'

with open(config_path, 'r') as f:
    agents_config = yaml.safe_load(f)

llm_flash = ChatLiteLLM(model="gemini/gemini-2.5-flash")
llm_pro = ChatLiteLLM(model="gemini/gemini-2.5-pro")

class NarrativeAgents():
    def __init__(self):
        self._agents = {
            "Rohan Patel": self.rohan_patel_agent,
            "Sarah Tan": self.sarah_tan_agent,
            "Ruby": self.ruby_concierge_agent,
            "Dr. Warren": self.dr_warren_agent,
            "Advik": self.advik_scientist_agent,
            "Carla": self.carla_nutritionist_agent,
            "Rachel": self.rachel_pt_agent,
            "Neel": self.neel_lead_agent,
        }

    # --- HELPER METHODS ---
    def get_agent_by_role(self, role):
        """Returns the agent instance for a given role."""
        agent_func = self._agents.get(role)
        if agent_func:
            return agent_func()
        return None

    def get_all_roles(self):
        """Returns a list of all available agent roles."""
        return list(self._agents.keys())
    
    # --- AGENT METHODS ---
    def strategic_narrative_architect(self):
        return Agent(config=agents_config['strategic_narrative_architect'], llm=llm_pro, verbose=True)

    def routing_agent(self):
        return Agent(config=agents_config['routing_agent'], llm=llm_flash)

    def rohan_patel_agent(self):
        return Agent(config=agents_config['rohan_patel_agent'], llm=llm_pro, verbose=False)

    def sarah_tan_agent(self):
        return Agent(config=agents_config['sarah_tan_agent'], llm=llm_pro, verbose=False)

    def ruby_concierge_agent(self):
        return Agent(config=agents_config['ruby_concierge_agent'], llm=llm_pro, verbose=False)
    
    def dr_warren_agent(self):
        return Agent(config=agents_config['dr_warren_agent'], llm=llm_pro, verbose=False)

    def advik_scientist_agent(self):
        return Agent(config=agents_config['advik_scientist_agent'], llm=llm_pro, verbose=False)

    def carla_nutritionist_agent(self):
        return Agent(config=agents_config['carla_nutritionist_agent'], llm=llm_pro, verbose=False)

    def rachel_pt_agent(self):
        return Agent(config=agents_config['rachel_pt_agent'], llm=llm_pro, verbose=False)

    def neel_lead_agent(self):
        return Agent(config=agents_config['neel_lead_agent'], llm=llm_pro, verbose=False)
    
    def summary_agent(self):
        return Agent(config=agents_config['summary_agent'], llm=llm_flash)
    
    def elyx_analyst_agent(self):
        return Agent(config=agents_config['elyx_analyst_agent'], llm=llm_pro, verbose=True)
    
    def conversation_critic_agent(self):
        return Agent(config=agents_config['conversation_critic_agent'], llm=llm_pro, verbose=True)
    
    def conversation_refiner_agent(self):
        return Agent(config=agents_config['conversation_refiner_agent'], llm=llm_pro, verbose=True)