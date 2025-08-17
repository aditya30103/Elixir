// // transform_json.js
// const fs = require("fs");

// // Load your existing structured_data.json
// const rawData = fs.readFileSync("data/structured_data.json", "utf-8");
// const logs = JSON.parse(rawData);

// // Target schema
// const transformed = {
//   member: {
//     id: "rohan_001",
//     name: "Rohan Patel",
//     metrics: {
//       blood_pressure: [],
//       sleep_hours: [],
//       hrv: [],
//       nutrition_adherence: []
//     }
//   }
// };

// // Helper function to safely push entries
// function addMetric(arr, entry) {
//   if (entry && entry.date) {
//     arr.push(entry);
//   }
// }

// // Normalize logs → schema
// logs.forEach(log => {
//   const date = log.date || log.timestamp || null;

//   // Blood Pressure
//   if (log.bloodPressure || log.systolic || log.diastolic) {
//     addMetric(transformed.member.metrics.blood_pressure, {
//       date,
//       systolic: log.systolic || (log.bloodPressure?.systolic ?? null),
//       diastolic: log.diastolic || (log.bloodPressure?.diastolic ?? null)
//     });
//   }

//   // Sleep Hours
//   if (log.sleepHours || log.sleep || log.avgSleep) {
//     addMetric(transformed.member.metrics.sleep_hours, {
//       date,
//       hours: log.sleepHours || log.sleep || log.avgSleep
//     });
//   }

//   // HRV
//   if (log.hrv || log.HRV) {
//     addMetric(transformed.member.metrics.hrv, {
//       date,
//       ms: log.hrv || log.HRV
//     });
//   }

//   // Nutrition Adherence
//   if (log.nutritionAdherence || log.dietAdherence || log.adherencePercent) {
//     addMetric(transformed.member.metrics.nutrition_adherence, {
//       date,
//       percent: log.nutritionAdherence || log.dietAdherence || log.adherencePercent
//     });
//   }
// });

// // Save normalized JSON
// fs.writeFileSync("structured_data_clean.json", JSON.stringify(transformed, null, 2));
// console.log("✅ structured_data_clean.json generated!");



// scripts/transform_json.js
const fs = require("fs");

// Load raw structured data
const rawData = JSON.parse(fs.readFileSync("data/structured_data.json", "utf-8"));

// --- Utility: normalize keys ---
function normalizeKey(key) {
  const k = key.toLowerCase().replace(/\s|_/g, "");
  if (k.includes("bp") || k.includes("bloodpressure")) return "blood_pressure";
  if (k.includes("sleep")) return "sleep_hours";
  if (k.includes("hrv") || k.includes("heartratevariability")) return "hrv";
  if (k.includes("nutrition") || k.includes("diet") || k.includes("adherence"))
    return "nutrition_adherence";
  return null; // ignore unknown keys for now
}

// --- Transform raw logs into clean structure ---
function transform(raw) {
  const member = {
    id: "rohan_001",
    name: "Rohan Patel",
    metrics: {
      blood_pressure: [],
      sleep_hours: [],
      hrv: [],
      nutrition_adherence: [],
    },
  };

  raw.forEach((entry) => {
    if (!entry.details) return;

    Object.entries(entry.details).forEach(([key, value]) => {
      const normalized = normalizeKey(key);
      if (!normalized) return;

      const date = entry.timestamp || entry.date || null;

      if (normalized === "blood_pressure") {
        // Handle cases where BP is "136/88" or {systolic, diastolic}
        if (typeof value === "string" && value.includes("/")) {
          const [systolic, diastolic] = value.split("/").map((v) => parseInt(v));
          member.metrics.blood_pressure.push({ date, systolic, diastolic });
        } else if (typeof value === "object") {
          member.metrics.blood_pressure.push({
            date,
            systolic: value.systolic || null,
            diastolic: value.diastolic || null,
          });
        }
      }

      if (normalized === "sleep_hours") {
        member.metrics.sleep_hours.push({
          date,
          hours: parseFloat(value),
        });
      }

      if (normalized === "hrv") {
        member.metrics.hrv.push({
          date,
          ms: parseFloat(value),
        });
      }

      if (normalized === "nutrition_adherence") {
        member.metrics.nutrition_adherence.push({
          date,
          percent: parseFloat(value),
        });
      }
    });
  });

  return { member };
}

// --- Run transform ---
const transformed = transform(rawData);

// Save cleaned file
fs.writeFileSync("cleaned_member.json", JSON.stringify(transformed, null, 2));

console.log("✅ Cleaned JSON written to cleaned_member.json");
