// scripts/merge_elyx_aliases.js
import fs from "fs";
import path from "path";

const inputPath = path.resolve("data/elyx_data.json");
const outputPath = path.resolve("data/elyx_data_cleaned.json");

// Alias mapping (all variations -> canonical ID)
const ALIAS_MAP = {
  ruby: ["ruby", "ruby_concierge", "ruby/sarah_tan"],
  advik: [
    "advik",
    "advik_-_elyx_analysis_(whoop_+_subjective_log)",
    "advik's_analysis_(whoop_+_self-report)",
    "advik_(whoop_data_synthesis)",
    "elyx_team_analysis_(advik)"
  ],
  warren: ["dr._warren", "dr._warren_|_clinical_analysis"],
  rachel: ["rachel", "rachel_(pt)"],
  carla: ["carla"],
  neel: ["neel"],
};

const CANONICAL_NAMES = {
  ruby: "Ruby",
  advik: "Advik",
  warren: "Dr. Warren",
  rachel: "Rachel",
  carla: "Carla",
  neel: "Neel",
};

function mergeMembers(members) {
  const merged = {};

  for (const [canonicalId, aliases] of Object.entries(ALIAS_MAP)) {
    merged[canonicalId] = {
      id: canonicalId,
      name: CANONICAL_NAMES[canonicalId],
      avg_response_time_minutes: null,
      logging_hours: 0,
      task_completion_rate_percent: null,
      resolution_count: 0,
      _debug: {
        samples_response_mins: [],
        day_spans_hours: {},
        tasks_assigned: 0,
        tasks_completed: 0,
      },
    };

    // Collect all alias entries
    const aliasEntries = members.filter((m) => aliases.includes(m.id));

    let totalResponseSamples = [];
    let totalAssigned = 0;
    let totalCompleted = 0;
    let totalLogging = 0;
    let totalResolution = 0;

    for (const entry of aliasEntries) {
      // Merge response samples
      if (entry._debug?.samples_response_mins) {
        totalResponseSamples.push(...entry._debug.samples_response_mins);
      }

      // Merge logging hours
      if (entry.logging_hours) {
        totalLogging += entry.logging_hours;
      }

      // Merge tasks
      totalAssigned += entry._debug?.tasks_assigned || 0;
      totalCompleted += entry._debug?.tasks_completed || 0;

      // Merge resolutions
      totalResolution += entry.resolution_count || 0;

      // Merge day spans
      Object.entries(entry._debug?.day_spans_hours || {}).forEach(
        ([day, span]) => {
          if (!merged[canonicalId]._debug.day_spans_hours[day]) {
            merged[canonicalId]._debug.day_spans_hours[day] = { ...span };
          } else {
            merged[canonicalId]._debug.day_spans_hours[day].min = Math.min(
              merged[canonicalId]._debug.day_spans_hours[day].min,
              span.min
            );
            merged[canonicalId]._debug.day_spans_hours[day].max = Math.max(
              merged[canonicalId]._debug.day_spans_hours[day].max,
              span.max
            );
          }
        }
      );
    }

    // Compute final metrics
    const avgResponse =
      totalResponseSamples.length > 0
        ? totalResponseSamples.reduce((a, b) => a + b, 0) /
          totalResponseSamples.length
        : null;

    merged[canonicalId].avg_response_time_minutes = avgResponse
      ? parseFloat(avgResponse.toFixed(1))
      : null;
    merged[canonicalId].logging_hours = totalLogging || null;
    merged[canonicalId].resolution_count = totalResolution;

    merged[canonicalId]._debug.samples_response_mins = totalResponseSamples;
    merged[canonicalId]._debug.tasks_assigned = totalAssigned;
    merged[canonicalId]._debug.tasks_completed = totalCompleted;

    merged[canonicalId].task_completion_rate_percent =
      totalAssigned > 0
        ? Math.round((totalCompleted / totalAssigned) * 100)
        : 0;
  }

  return Object.values(merged);
}

function main() {
  const raw = JSON.parse(fs.readFileSync(inputPath, "utf-8"));
  const members = raw.elyx_team.members;

  // Remove Sarah & Sarah Tan (non-elyx)
  const filteredMembers = members.filter(
    (m) => !["sarah", "sarah_tan", "sarah_tan_pa"].includes(m.id)
  );

  const mergedMembers = mergeMembers(filteredMembers);

  const teamMetrics = {
    avg_response_time_minutes: parseFloat(
      (
        mergedMembers.reduce(
          (sum, m) => sum + (m.avg_response_time_minutes || 0),
          0
        ) / mergedMembers.length
      ).toFixed(1)
    ),
    logging_hours: Math.round(
      mergedMembers.reduce((sum, m) => sum + (m.logging_hours || 0), 0) /
        mergedMembers.length
    ),
    task_completion_rate_percent: parseFloat(
      (
        mergedMembers.reduce(
          (sum, m) => sum + (m.task_completion_rate_percent || 0),
          0
        ) / mergedMembers.length
      ).toFixed(1)
    ),
  };

  const output = {
    elyx_team: {
      members: mergedMembers,
      team_metrics: teamMetrics,
      generated_at: new Date().toISOString(),
    },
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`✅ Wrote cleaned file to ${outputPath}`);
}

main();
