// lib/normalizeStructuredData.ts
// Defensive normalizer for structured_data.json
// Returns canonical records and exposes simple extractors for dashboard metrics.

import raw from "@/data/structured_data.json";

export type RawRecord = any;
export type CanonicalRecord = {
  original?: RawRecord;
  data_type: string;
  source?: string | null;
  member_id?: string | null;
  timestamp?: string | null; // ISO if present
  date?: string | null; // ISO date fallback
  details: Record<string, any>;
};

// --- Helpers
function safeNum(v: any): number | null {
  if (v == null) return null;
  if (typeof v === "number") return Number.isFinite(v) ? v : null;
  if (typeof v === "string") {
    const cleaned = v.trim().replace("%", "");
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

function parseBPString(bpStr: string) {
  if (!bpStr || typeof bpStr !== "string") return null;
  const m = bpStr.match(/(\d{2,3})\D+(\d{2,3})/);
  if (!m) return null;
  return { systolic: Number(m[1]), diastolic: Number(m[2]), unit: "mmHg" };
}

function toIso(dateLike: any) {
  // Best-effort: if already ISO return it, else try Date parse.
  if (!dateLike) return null;
  if (typeof dateLike === "string") {
    const s = dateLike.trim();
    const d = new Date(s);
    if (!isNaN(d.getTime())) return d.toISOString();
    return null;
  }
  if (dateLike instanceof Date) return dateLike.toISOString();
  return null;
}

// Normalize a single raw record -> canonical
export function normalizeRecord(r: RawRecord): CanonicalRecord {
  const out: CanonicalRecord = {
    original: r,
    data_type: "",
    source: r?.source ?? r?.author ?? null,
    member_id: r?.member_id ?? r?.user_id ?? r?.user ?? null,
    timestamp: null,
    date: null,
    details: {},
  };

  // Normalise basic data_type
  const rawType = String(r?.data_type ?? r?.type ?? "").toLowerCase().trim();
  // Map some common variants to canonical names:
  const typeMap: Record<string, string> = {
    biometrics: "biometric_reading",
    biometric: "biometric_reading",
    "biometric_reading": "biometric_reading",
    "biometrics_weekly_summary": "biometric_summary",
    "biometric_summary": "biometric_summary",
    "biometric_trend": "biometric_summary",
    wearable_baseline_metrics: "wearable_reading",
    wearable: "wearable_reading",
    wearable_data: "wearable_reading",
    wearable_metrics: "wearable_reading",
    lab_results: "lab_result",
    lab_result: "lab_result",
    diagnostic_results: "lab_result",
    diagnostic: "lab_result",
    appointment: "appointment",
    appointment_scheduled: "appointment",
    proposed_appointment: "appointment",
    adherence: "adherence",
    adherence_log: "adherence",
    subjective_report: "subjective_report",
    self_report: "subjective_report",
    message: "message",
  };

  out.data_type = typeMap[rawType] ?? rawType ?? "unknown";

  // Try to extract timestamp/date from common fields
  const tsCandidates = [
    r?.timestamp,
    r?.datetime_utc,
    r?.datetime,
    r?.date_utc,
    r?.date,
    r?.created_at,
    r?.time,
    r?.details?.datetime_utc,
    r?.details?.datetime,
    r?.details?.timestamp,
    r?.details?.date,
  ];
  for (const cand of tsCandidates) {
    const iso = toIso(cand);
    if (iso) {
      out.timestamp = iso;
      break;
    }
  }
  if (!out.timestamp) {
    // if there's a simple YYYY-MM-DD string, store it as date
    const dateCandidates = [r?.date, r?.details?.date, r?.report_date];
    for (const cd of dateCandidates) {
      if (typeof cd === "string" && /^\d{4}-\d{2}-\d{2}/.test(cd)) {
        out.date = cd;
        break;
      }
    }
  }

  // Copy details safely
  const d = r?.details ?? r?.payload ?? r ?? {};
  // Normalize nested biometrics/blood pressure
  // 1) handle object like { blood_pressure: { systolic:.. , diastolic:.. } }
  if (d?.blood_pressure && typeof d.blood_pressure === "object") {
    const bp = d.blood_pressure;
    const systolic =
      safeNum(bp?.systolic_mmhg) ??
      safeNum(bp?.systolic) ??
      safeNum(bp?.systolic_bp) ??
      null;
    const diastolic =
      safeNum(bp?.diastolic_mmhg) ??
      safeNum(bp?.diastolic) ??
      safeNum(bp?.diastolic_bp) ??
      null;
    if (systolic || diastolic) {
      out.details.blood_pressure = {
        systolic: systolic ?? null,
        diastolic: diastolic ?? null,
        unit: bp?.unit ?? "mmHg",
      };
    }
  }

  // 2) handle separate keys
  const systKeys = ["blood_pressure_systolic", "systolic_mmhg", "systolic"];
  const diasKeys = ["blood_pressure_diastolic", "diastolic_mmhg", "diastolic"];
  for (const sk of systKeys) {
    for (const dk of diasKeys) {
      if (d[sk] !== undefined || d[dk] !== undefined) {
        out.details.blood_pressure = {
          systolic: safeNum(d[sk]) ?? null,
          diastolic: safeNum(d[dk]) ?? null,
          unit: d?.unit ?? "mmHg",
        };
        break;
      }
    }
    if (out.details.blood_pressure) break;
  }

  // 3) handle "value": "138/88"
  if (!out.details.blood_pressure && typeof d?.value === "string" && d.value.includes("/")) {
    const parsed = parseBPString(d.value);
    if (parsed) out.details.blood_pressure = parsed;
  }

  // HRV / HR
  const hrvCandidates = ["hrv_ms", "avg_hrv_ms", "hrv", "hrv_value"];
  for (const k of hrvCandidates) {
    if (d[k] !== undefined) {
      out.details.hrv_ms = safeNum(d[k]);
      break;
    }
  }
  const rhrCandidates = ["resting_heart_rate_bpm", "avg_rhr_bpm", "rhr_bpm", "resting_hr"];
  for (const k of rhrCandidates) {
    if (d[k] !== undefined) {
      out.details.resting_hr_bpm = safeNum(d[k]);
      break;
    }
  }

  // Sleep: minutes or hours
  if (d?.sleep_duration_minutes !== undefined) {
    out.details.sleep_hours = safeNum(d.sleep_duration_minutes) !== null ? (safeNum(d.sleep_duration_minutes) as number) / 60 : null;
  } else if (d?.sleep_hours !== undefined) {
    out.details.sleep_hours = safeNum(d.sleep_hours);
  } else if (d?.avg_sleep_duration_hrs !== undefined) {
    out.details.sleep_hours = safeNum(d.avg_sleep_duration_hrs);
  }

  // Adherence / Nutrition
  const adherenceCandidates = ["adherence_percentage", "adherence_score", "compliance_percentage", "nutrition_adherence", "value"];
  for (const k of adherenceCandidates) {
    if (d[k] !== undefined) {
      const pct = safeNum(d[k]);
      // sometimes value is "72%" or "72" or 0.72 - we check typical ranges: 0-100
      if (pct !== null) {
        if (pct > 0 && pct <= 1) {
          out.details.nutrition_adherence_pct = Math.round(pct * 100);
        } else {
          out.details.nutrition_adherence_pct = Math.round(pct);
        }
      }
      break;
    }
  }
  // string like "72%"
  if (!out.details.nutrition_adherence_pct && typeof d?.value === "string" && d.value.includes("%")) {
    const parsed = safeNum(d.value);
    if (parsed !== null) out.details.nutrition_adherence_pct = Math.round(parsed);
  }

  // Lab tests - collect arrays
  if (Array.isArray(d?.results) || Array.isArray(d?.markers) || Array.isArray(d?.biomarkers) || Array.isArray(d?.tests)) {
    const arr = d.results ?? d.markers ?? d.biomarkers ?? d.tests;
    out.details.lab_tests = arr.map((t: any) => {
      if (typeof t === "string") return { name: t, value: null, unit: null };
      return {
        name: t.test || t.name || t.marker || null,
        value: t.value ?? t.result ?? null,
        unit: t.unit ?? t.units ?? null,
      };
    });
  } else if (d?.lab_test_name || d?.lab_name) {
    out.details.lab_tests = [{ name: d.lab_test_name ?? d.lab_name, value: d.value ?? d.result, unit: d.unit ?? null }];
  }

  // Appointment
  if (out.data_type === "appointment") {
    out.details.attendees = d.attendees ?? d.attendee ?? d.people ?? null;
    out.details.appointment_datetime_iso = toIso(d.datetime_utc ?? d.datetime ?? d.date ?? d.time) ?? null;
  }

  // Subjective message logs
  if (out.data_type === "message" || out.data_type === "subjective_report" || out.data_type === "self_report") {
    out.details.speaker = d.speaker ?? r?.author ?? r?.source ?? null;
    out.details.message = d.message ?? r?.message ?? r?.text ?? null;
  }

  // Keep raw fallback
  out.details.raw = d;

  return out;
}

// Normalize all records (input is the raw imported JSON array)
export function normalizeAll(inputRaw?: any[]): CanonicalRecord[] {
  const arr = inputRaw ?? (Array.isArray(raw) ? raw : []);
  if (!Array.isArray(arr)) return [];
  return arr.map((r: any) => normalizeRecord(r));
}

// --- Simple extractors used by the dashboard

export function getLatestBloodPressure(records: CanonicalRecord[]) {
  const bpRecs = records.filter((r) => r.details?.blood_pressure && (r.member_id || r.source));
  if (!bpRecs.length) return null;
  // sort by timestamp if available
  bpRecs.sort((a: CanonicalRecord, b: CanonicalRecord) => {
    const ta = a.timestamp ? new Date(a.timestamp).getTime() : 0;
    const tb = b.timestamp ? new Date(b.timestamp).getTime() : 0;
    return tb - ta;
  });
  const bp = bpRecs[0].details.blood_pressure;
  if (!bp) return null;
  return `${bp.systolic ?? "—"}/${bp.diastolic ?? "—"} ${bp.unit ?? "mmHg"}`;
}

export function getAvgSleepHours(records: CanonicalRecord[]) {
  // prefer biometric_summary records
  const sums: number[] = [];
  for (const r of records) {
    const h = r.details?.sleep_hours;
    if (h !== undefined && h !== null) sums.push(Number(h));
  }
  if (!sums.length) return null;
  const avg = sums.reduce((a, b) => a + b, 0) / sums.length;
  return Math.round(avg * 10) / 10;
}

export function getLatestHRV(records: CanonicalRecord[]) {
  const recs = records.filter((r) => r.details?.hrv_ms !== undefined);
  if (!recs.length) return null;
  recs.sort((a, b) => {
    const ta = a.timestamp ? new Date(a.timestamp).getTime() : 0;
    const tb = b.timestamp ? new Date(b.timestamp).getTime() : 0;
    return tb - ta;
  });
  return safeNum(recs[0].details.hrv_ms);
}

export function getNutritionAdherencePct(records: CanonicalRecord[]) {
  // return most recent found
  const recs = records.filter((r) => r.details?.nutrition_adherence_pct !== undefined && r.details.nutrition_adherence_pct !== null);
  if (!recs.length) return null;
  recs.sort((a, b) => {
    const ta = a.timestamp ? new Date(a.timestamp).getTime() : 0;
    const tb = b.timestamp ? new Date(b.timestamp).getTime() : 0;
    return tb - ta;
  });
  return recs[0].details.nutrition_adherence_pct;
}

// Build timeseries: returns array of { x: ISO_date, y: number }
export function timeseriesFor(records: CanonicalRecord[], field: "blood_pressure_systolic" | "sleep_hours" | "hrv_ms") {
  const out: Array<{ x: string; y: number | null }> = [];
  for (const r of records) {
    const t = r.timestamp ?? r.date ?? null;
    if (!t) continue;
    if (field === "blood_pressure_systolic") {
      const bp = r.details?.blood_pressure;
      if (bp?.systolic) out.push({ x: new Date(t).toISOString(), y: safeNum(bp.systolic) });
    } else if (field === "sleep_hours" && r.details?.sleep_hours !== undefined) {
      out.push({ x: new Date(t).toISOString(), y: safeNum(r.details.sleep_hours) });
    } else if (field === "hrv_ms" && r.details?.hrv_ms !== undefined) {
      out.push({ x: new Date(t).toISOString(), y: safeNum(r.details.hrv_ms) });
    }
  }
  // sort by x
  out.sort((a, b) => new Date(a.x).getTime() - new Date(b.x).getTime());
  return out;
}

// Export default normalization of the imported file for convenience
export const canonicalAll = normalizeAll(Array.isArray(raw) ? raw : []);
