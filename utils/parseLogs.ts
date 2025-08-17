import { FullStoryItem, DataEntry, ChatMessage } from "@/types/fullStory";
import { Episode, Event, JourneyData } from "@/types/journey";
import { parseISO } from "date-fns";

type HRVPoint = { date: string; hrv: number };
type BPPoint = { date: string; systolic: number; diastolic: number };

function toDateISO(raw?: any): string | null {
  if (!raw) return null;
  // common locations: details.date, details.date_utc, timestamp like "[8/25/25, 9:55 AM]"
  if (typeof raw === "string") {
    // try ISO first
    const iso = Date.parse(raw);
    if (!isNaN(iso)) return new Date(raw).toISOString();

    // try to strip bracketed timestamp
    const match = raw.match(/\[(.*?)\]/);
    if (match) {
      const inside = match[1].replace(/,/, "");
      const parsed = Date.parse(inside);
      if (!isNaN(parsed)) return new Date(parsed).toISOString();
    }

    // try parse as fallback
    const parsed2 = Date.parse(raw);
    if (!isNaN(parsed2)) return new Date(parsed2).toISOString();
  }
  return null;
}

export function parseFullStory(items: FullStoryItem[]) {
  const hrvPoints: HRVPoint[] = [];
  const bpPoints: BPPoint[] = [];
  const nutrition: Array<{ date?: string; adherence_percentage?: number }> = [];
  const workouts: Array<{ date?: string; adherence_percentage?: number; week_number?: number; workouts_completed?: number; workouts_scheduled?: number }> = [];
  const cgmEvents: DataEntry[] = [];
  const otherData: DataEntry[] = [];

  for (const it of items) {
    // DataEntry has data_type
    if ("data_type" in it) {
      const d = it as DataEntry;
      const dDate = toDateISO(d.details?.date_utc || d.details?.date || it["timestamp"]);
      const formattedDate = dDate ? new Date(dDate).toISOString() : undefined;

      // biometrics/hhv/bp
      if (["biometrics", "biometric", "biometric_reading", "wearable_baseline_metrics"].includes(d.data_type)) {
        // HRV
        const h = d.details?.hrv_morning_ms || d.details?.hrv_ms || d.details?.value || null;
        if (typeof h === "number") {
          hrvPoints.push({ date: formattedDate || new Date().toISOString(), hrv: h });
        }

        // BP may be nested in several ways
        let syst = d.details?.blood_pressure_systolic || d.details?.blood_pressure?.systolic || null;
        let dias = d.details?.blood_pressure_diastolic || d.details?.blood_pressure?.diastolic || null;
        if (!syst && typeof d.details?.blood_pressure === "string") {
          const parts = d.details.blood_pressure.split("/");
          if (parts.length >= 2) {
            syst = parseInt(parts[0]);
            dias = parseInt(parts[1]);
          }
        }
        if (syst && dias) {
          bpPoints.push({ date: formattedDate || new Date().toISOString(), systolic: Number(syst), diastolic: Number(dias) });
        }
      }

      // nutrition adherence
      if (["nutrition_adherence", "adherence_log"].includes(d.data_type)) {
        nutrition.push({ date: d.details?.week_ending || formattedDate, adherence_percentage: d.details?.adherence_percentage || d.details?.compliance_percentage });
      }

      // workouts
      if (["adherence_report", "workout_adherence"].includes(d.data_type)) {
        workouts.push({
          date: formattedDate,
          adherence_percentage: d.details?.adherence_percentage || d.details?.compliance_percentage,
          week_number: d.details?.week_number,
          workouts_completed: d.details?.workouts_completed,
          workouts_scheduled: d.details?.workouts_scheduled,
        });
      }

      // CGM
      if (d.data_type.toLowerCase().includes("cgm")) {
        cgmEvents.push(d);
      } else {
        otherData.push(d);
      }
    } else {
      // chat message (ignore for metrics)
      // could be used later for response-time metrics
    }
  }

  // sort points by date
  hrvPoints.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  bpPoints.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return {
    hrvPoints,
    bpPoints,
    nutrition,
    workouts,
    cgmEvents,
    otherData,
  };
}

export function deriveKPIs(parsed: ReturnType<typeof parseFullStory>) {
  const { hrvPoints, bpPoints, nutrition, workouts } = parsed;
  const avgHRV = hrvPoints.length ? Math.round(hrvPoints.reduce((s, p) => s + p.hrv, 0) / hrvPoints.length) : null;
  const latestBP = bpPoints.length ? bpPoints[bpPoints.length - 1] : null;
  const latestNutrition = nutrition.length ? nutrition[nutrition.length - 1].adherence_percentage ?? null : null;
  const latestWorkout = workouts.length ? workouts[workouts.length - 1].adherence_percentage ?? null : null;

  return {
    avgHRV,
    latestBP,
    latestNutrition,
    latestWorkout,
  };
}

// build experiments from journey episodes: events that look experimental
export function extractExperiments(journey: JourneyData) {
  const experiments: { id: string; title: string; week?: number; summary?: string; sourceCommunication?: string }[] = [];
  for (const ep of journey.episodes || []) {
    for (const ev of ep.granularEvents || []) {
      const titleLower = (ev.title || "").toLowerCase();
      const looksLikeExperiment = titleLower.includes("experiment") || titleLower.includes("vs") || titleLower.includes("cgm") || titleLower.includes("oatmeal") || titleLower.includes("eggs") || titleLower.includes("experiment #");
      if (looksLikeExperiment) {
        experiments.push({
          id: ev.eventId,
          title: ev.title,
          week: ev.week,
          summary: ev.description,
          sourceCommunication: ev.sourceCommunication,
        });
      }
    }
  }
  return experiments;
}
