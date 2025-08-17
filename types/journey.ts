// export interface Event {
//   eventId: string;
//   week: number;
//   title: string;
//   description: string;
//   sourceCommunication: string;
//   why?: string; // optional, populated by API
// }

// export interface PersonaState {
//   before: string;
//   after: string;
// }

// export interface Episode {
//   episodeId: string;
//   title: string;
//   dateRange: string;
//   summary: string;
//   frictionPoints: string[];
//   outcome: string;
//   personaState: PersonaState;
//   granularEvents: Event[];
// }

// export interface JourneyData {
//   episodes: Episode[];
// }


export interface Event {
  eventId: string;
  week?: number;
  title: string;
  description?: string;
  sourceCommunication?: string;
  why?: string;
  dataRefs?: Record<string, any>;
}

export interface PersonaState {
  before: string;
  after: string;
}

export interface Episode {
  episodeId: string;
  title: string;
  dateRange?: string;
  summary?: string;
  frictionPoints?: string[];
  outcome?: string;
  personaState?: PersonaState;
  granularEvents: Event[];
}

export interface Member {
  name: string;
  age?: number;
  location?: string;
  occupation?: string;
  travelFrequency?: string;
  wearables?: string[];
  notes?: string;
}

export interface Metrics {
  adherence?: number;
  doctorHours?: number;
  nutritionHours?: number;
  ptHours?: number;
  conciergeHours?: number;
  labTests?: number;
  travelWeeks?: number;
}

export interface JourneyData {
  member?: Member;
  metrics?: Metrics;
  episodes: Episode[];
}
