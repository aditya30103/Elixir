// // export interface Event {
// //   eventId: string;
// //   week: number;
// //   title: string;
// //   description: string;
// //   sourceCommunication: string;
// //   why?: string; // optional, populated by API
// // }

// // export interface PersonaState {
// //   before: string;
// //   after: string;
// // }

// // export interface Episode {
// //   episodeId: string;
// //   title: string;
// //   dateRange: string;
// //   summary: string;
// //   frictionPoints: string[];
// //   outcome: string;
// //   personaState: PersonaState;
// //   granularEvents: Event[];
// // }

// // export interface JourneyData {
// //   episodes: Episode[];
// // }


// export interface Event {
//   eventId: string;
//   week?: number;
//   title: string;
//   description?: string;
//   sourceCommunication?: string;
//   why?: string;
//   dataRefs?: Record<string, any>;
// }

// export interface PersonaState {
//   before: string;
//   after: string;
// }

// export interface Episode {
//   episodeId: string;
//   title: string;
//   dateRange?: string;
//   summary?: string;
//   frictionPoints?: string[];
//   outcome?: string;
//   personaState?: PersonaState;
//   granularEvents: Event[];
// }

// export interface Member {
//   name: string;
//   age?: number;
//   location?: string;
//   occupation?: string;
//   travelFrequency?: string;
//   wearables?: string[];
//   notes?: string;
// }

// export interface Metrics {
//   adherence?: number;
//   doctorHours?: number;
//   nutritionHours?: number;
//   ptHours?: number;
//   conciergeHours?: number;
//   labTests?: number;
//   travelWeeks?: number;
// }

// export interface JourneyData {
//   member?: Member;
//   metrics?: Metrics;
//   episodes: Episode[];
// }


// types/journey.ts
export interface TimeRange {
  label: string;
  weeks: string;
}

export interface MetricSeriesPoint {
  date: string; // ISO date
  value: number;
}

export interface BPReading {
  label: string;
  systolic: number;
  diastolic: number;
  date?: string;
}

export interface EpisodeData {
  id: string;
  title: string;
  weeks: string;
  narrative: string;
  primaryGoal: string;
  frictionPoints: string;
  keyMetricsHtml?: string; // optional formatted HTML or text
  keyMetrics: {
    biometrics?: string;
    dataDrivenInsights?: string;
    strategicPivots?: string;
    memberInitiatedGoal?: string;
  };
  finalOutcome: string;
  personaBefore: string;
  personaAfter: string;
  // visual data (optional, used for charts & KPIs)
  avgHrv?: number | null;
  latestBP?: { systolic?: number | null; diastolic?: number | null };
  nutritionPct?: number | null;
  workoutPct?: number | null;
  hrvSeries?: MetricSeriesPoint[];
  bpReadings?: BPReading[];
}

