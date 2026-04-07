// scripts/transform_json.js
// One-time utility: transforms backend structured_data.json into the
// normalized cleaned_member.json format consumed by the frontend.
const fs = require("fs");

const rawData = JSON.parse(fs.readFileSync("data/structured_data.json", "utf-8"));

function normalizeKey(key) {
  const k = key.toLowerCase().replace(/\s|_/g, "");
  if (k.includes("bp") || k.includes("bloodpressure")) return "blood_pressure";
  if (k.includes("sleep")) return "sleep_hours";
  if (k.includes("hrv") || k.includes("heartratevariability")) return "hrv";
  if (k.includes("nutrition") || k.includes("diet") || k.includes("adherence"))
    return "nutrition_adherence";
  return null;
}

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
        member.metrics.sleep_hours.push({ date, hours: parseFloat(value) });
      }

      if (normalized === "hrv") {
        member.metrics.hrv.push({ date, ms: parseFloat(value) });
      }

      if (normalized === "nutrition_adherence") {
        member.metrics.nutrition_adherence.push({ date, percent: parseFloat(value) });
      }
    });
  });

  return { member };
}

const transformed = transform(rawData);
fs.writeFileSync("data/cleaned_member.json", JSON.stringify(transformed, null, 2));
console.log("Cleaned JSON written to data/cleaned_member.json");
