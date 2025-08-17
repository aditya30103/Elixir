// // "use client";

// // export default function ElyxDashboard() {
// //   return (
// //     <div>
// //       <h2 className="text-xl font-bold mb-4">Elyx Dashboard</h2>
// //       {/* Elyx dashboard content will go here */}
// //     </div>
// //   );
// // }



// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   LineChart,
//   Line,
//   ResponsiveContainer,
// } from "recharts";

// export default function ElyxDashboard() {
//   // --- Hardcoded metrics for now ---
//   const summary = {
//     avgResponseTime: "2.5 min",
//     loggingHours: "34 hrs/week",
//     taskCompletion: "88%",
//     resolutionRate: "93%",
//   };

//   // Response time trend (weeks)
//   const responseTrend = [
//     { week: "W1", time: 3.2 },
//     { week: "W2", time: 2.8 },
//     { week: "W3", time: 2.6 },
//     { week: "W4", time: 2.4 },
//   ];

//   // Workload distribution (per worker)
//   const workload = [
//     { worker: "Ruby", hours: 12 },
//     { worker: "Advik", hours: 8 },
//     { worker: "Carla", hours: 7 },
//     { worker: "Sarah", hours: 7 },
//   ];

//   return (
//     <main className="max-w-screen-2xl mx-auto px-8 py-12">
//       <h1 className="text-3xl font-extrabold text-slate-900 mb-8">
//         Elyx Dashboard
//       </h1>

//       {/* Top summary cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
//         <Card className="shadow-md">
//           <CardContent className="p-6">
//             <h2 className="text-sm text-slate-500">Avg Response Time</h2>
//             <p className="text-2xl font-bold">{summary.avgResponseTime}</p>
//           </CardContent>
//         </Card>
//         <Card className="shadow-md">
//           <CardContent className="p-6">
//             <h2 className="text-sm text-slate-500">Logging Hours</h2>
//             <p className="text-2xl font-bold">{summary.loggingHours}</p>
//           </CardContent>
//         </Card>
//         <Card className="shadow-md">
//           <CardContent className="p-6">
//             <h2 className="text-sm text-slate-500">Task Completion</h2>
//             <p className="text-2xl font-bold">{summary.taskCompletion}</p>
//           </CardContent>
//         </Card>
//         <Card className="shadow-md">
//           <CardContent className="p-6">
//             <h2 className="text-sm text-slate-500">Resolution Rate</h2>
//             <p className="text-2xl font-bold">{summary.resolutionRate}</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         <Card className="shadow-md">
//           <CardContent className="p-6">
//             <h2 className="text-lg font-semibold mb-4">
//               Response Time Trend (min)
//             </h2>
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={responseTrend}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="week" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="time" stroke="#4f46e5" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         <Card className="shadow-md">
//           <CardContent className="p-6">
//             <h2 className="text-lg font-semibold mb-4">
//               Workload Distribution (hours)
//             </h2>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={workload}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="worker" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="hours" fill="#10b981" />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>
//     </main>
//   );
// }




"use client";

import React, { useMemo, useState } from "react";
import elyxData from "@/data/elyx_data_cleaned.json";

type Member = {
  id: string;
  name: string;
  avg_response_time_minutes?: number | null;
  logging_hours?: number | null;
  task_completion_rate_percent?: number | null;
  resolution_count?: number | null;
  _debug?: {
    samples_response_mins?: number[];
    day_spans_hours?: Record<string, { min: number; max: number }>;
    tasks_assigned?: number;
    tasks_completed?: number;
  };
};

function fmtMinutes(mins?: number | null) {
  if (mins == null || Number.isNaN(mins)) return "—";
  const m = Math.round(mins);
  if (m < 60) return `${m}m`;
  const hh = Math.floor(m / 60);
  const mm = m % 60;
  return `${hh}h ${mm}m`;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Simple sparkline component from an array of numbers (may be large values) */
function Sparkline({ data }: { data: number[] }) {
  if (!data || data.length === 0) {
    return <div className="text-xs text-gray-400">no samples</div>;
  }
  // normalize to 0..1
  const cleaned = data.map((v) => (v == null || Number.isNaN(v) ? 0 : v));
  const max = Math.max(...cleaned);
  const min = Math.min(...cleaned);
  const range = max - min || 1;
  const w = 120;
  const h = 36;
  const step = w / Math.max(1, cleaned.length - 1);
  const points = cleaned
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="inline-block">
      <polyline
        fill="none"
        stroke="#6366f1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      {/* subtle fill */}
      <polyline
        fill="rgba(99,102,241,0.06)"
        stroke="none"
        points={`${points} ${w},${h} 0,${h}`}
      />
    </svg>
  );
}

export default function ElyxDashboard() {
  const team = (elyxData as any)?.elyx_team;
  const members: Member[] = team?.members ?? [];

  // Team-level metrics (safe)
  const teamMetrics = {
    avg_response_time_minutes: team?.team_metrics?.avg_response_time_minutes ?? null,
    logging_hours: team?.team_metrics?.logging_hours ?? null,
    task_completion_rate_percent: team?.team_metrics?.task_completion_rate_percent ?? null,
    generated_at: team?.generated_at ?? null,
  };

  const [showDebugFor, setShowDebugFor] = useState<string | null>(null);

  const activeMembers = useMemo(
    () => members.filter((m) => !m.id.includes("(") && !m.id.includes("/") && m.name && m.name.length > 0),
    [members]
  );

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Elyx Team Dashboard</h2>
          <div className="text-sm text-slate-500 mt-1">
            Team snapshot · generated {teamMetrics.generated_at ? new Date(teamMetrics.generated_at).toLocaleString() : "—"}
          </div>
        </div>
      </header>

      {/* Top summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Avg response time</div>
          <div className="text-lg font-bold text-slate-900 mt-2">{fmtMinutes(teamMetrics.avg_response_time_minutes)}</div>
          <div className="text-xs text-slate-400 mt-1">Team median/mean from conversation timestamps</div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Avg logging hours</div>
          <div className="text-lg font-bold text-slate-900 mt-2">
            {teamMetrics.logging_hours != null ? `${teamMetrics.logging_hours}h` : "—"}
          </div>
          <div className="text-xs text-slate-400 mt-1">Sum of detected activity spans / approximate</div>
        </div>

        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Task completion rate</div>
          <div className="text-lg font-bold text-slate-900 mt-2">
            {teamMetrics.task_completion_rate_percent != null ? `${teamMetrics.task_completion_rate_percent}%` : "—"}
          </div>
          <div className="text-xs text-slate-400 mt-1">Aggregated from identified assignment/completion hits</div>
        </div>
      </div>

      {/* Members grid */}
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-3">Team members</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m) => {
            const samples = m._debug?.samples_response_mins ?? [];
            const daysCount = Object.keys(m._debug?.day_spans_hours ?? {}).length;
            const assigned = m._debug?.tasks_assigned ?? 0;
            const completed = m._debug?.tasks_completed ?? 0;
            return (
              <div key={m.id} className="bg-white border rounded-lg p-4 shadow-sm flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700 font-semibold">
                    {initials(m.name || m.id)}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">{m.name}</div>
                    <div className="text-xs text-slate-400">{m.id}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">resolutions</div>
                    <div className="text-sm font-semibold text-slate-800">{m.resolution_count ?? 0}</div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Avg response</div>
                    <div className="text-sm font-medium text-slate-800">{fmtMinutes(m.avg_response_time_minutes)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Logged</div>
                    <div className="text-sm font-medium text-slate-800">
                      {m.logging_hours != null ? `${m.logging_hours}h` : "—"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Task completion</div>
                    <div className="text-sm font-medium text-slate-800">
                      {m.task_completion_rate_percent != null ? `${m.task_completion_rate_percent}%` : "—"}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkline data={samples} />
                    <div className="text-xs text-slate-400">samples: {samples.length}</div>
                  </div>

                  <div className="text-xs text-slate-400">
                    days: <span className="font-medium text-slate-700">{daysCount}</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="text-xs text-slate-400">tasks</div>
                  <div className="text-sm font-medium text-slate-800">
                    {assigned} assigned · {completed} completed
                  </div>
                  <button
                    onClick={() => setShowDebugFor(showDebugFor === m.id ? null : m.id)}
                    className="ml-auto text-xs text-indigo-600 hover:underline"
                    type="button"
                  >
                    {showDebugFor === m.id ? "Hide debug" : "Show debug"}
                  </button>
                </div>

                {showDebugFor === m.id && (
                  <pre className="mt-3 bg-slate-50 border rounded p-2 text-xs text-slate-700 overflow-auto">
                    {JSON.stringify(m._debug ?? {}, null, 2)}
                  </pre>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-xs text-slate-400">
        Last refresh: {team?.generated_at ? new Date(team.generated_at).toLocaleString() : "—"}
      </div>
    </div>
  );
}


// {
//   "elyx_team": {
//     "members": [
//       {
//         "id": "ruby",
//         "name": "Ruby",
//         "avg_response_time_minutes": 400.3,
//         "logging_hours": 47,
//         "task_completion_rate_percent": 43,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             1705,
//             1771,
//             69,
//             43,
//             79,
//             61,
//             54,
//             38,
//             245,
//             11,
//             327
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756095900000,
//               "max": 1756105620000
//             },
//             "2025-08-26": {
//               "min": 1756183260000,
//               "max": 1756207920000
//             },
//             "2025-08-27": {
//               "min": 1756252800000,
//               "max": 1756292160000
//             },
//             "2025-08-28": {
//               "min": 1756354260000,
//               "max": 1756358880000
//             },
//             "2025-08-29": {
//               "min": 1756438500000,
//               "max": 1756442700000
//             },
//             "2025-08-31": {
//               "min": 1756614180000,
//               "max": 1756633320000
//             },
//             "2025-09-01": {
//               "min": 1756699440000,
//               "max": 1756743180000
//             },
//             "2025-09-02": {
//               "min": 1756771200000,
//               "max": 1756809060000
//             },
//             "2025-09-05": {
//               "min": 1757030400000,
//               "max": 1757030400000
//             }
//           },
//           "tasks_assigned": 7,
//           "tasks_completed": 3
//         }
//       },
//       {
//         "id": "advik",
//         "name": "Advik",
//         "avg_response_time_minutes": 38.5,
//         "logging_hours": 63,
//         "task_completion_rate_percent": 10,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             33,
//             40,
//             25,
//             10,
//             11,
//             33,
//             92,
//             41,
//             40,
//             60
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756103460000,
//               "max": 1756118820000
//             },
//             "2025-08-26": {
//               "min": 1756173300000,
//               "max": 1756231200000
//             },
//             "2025-08-27": {
//               "min": 1756269180000,
//               "max": 1756269720000
//             },
//             "2025-08-28": {
//               "min": 1756355460000,
//               "max": 1756398120000
//             },
//             "2025-08-29": {
//               "min": 1756450920000,
//               "max": 1756490520000
//             },
//             "2025-08-30": {
//               "min": 1756525500000,
//               "max": 1756548480000
//             },
//             "2025-08-31": {
//               "min": 1756651440000,
//               "max": 1756655820000
//             },
//             "2025-09-01": {
//               "min": 1756703880000,
//               "max": 1756745760000
//             }
//           },
//           "tasks_assigned": 10,
//           "tasks_completed": 1
//         }
//       },
//       {
//         "id": "warren",
//         "name": "Dr. Warren",
//         "avg_response_time_minutes": 70.3,
//         "logging_hours": 67,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 2,
//         "_debug": {
//           "samples_response_mins": [
//             231,
//             16,
//             82,
//             20,
//             44,
//             102,
//             71,
//             53,
//             78,
//             6
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756115340000,
//               "max": 1756115340000
//             },
//             "2025-08-26": {
//               "min": 1756173660000,
//               "max": 1756225620000
//             },
//             "2025-08-27": {
//               "min": 1756268760000,
//               "max": 1756298520000
//             },
//             "2025-08-28": {
//               "min": 1756356780000,
//               "max": 1756388640000
//             },
//             "2025-08-29": {
//               "min": 1756487220000,
//               "max": 1756487220000
//             },
//             "2025-08-30": {
//               "min": 1756531080000,
//               "max": 1756556700000
//             },
//             "2025-08-31": {
//               "min": 1756636380000,
//               "max": 1756671000000
//             },
//             "2025-09-01": {
//               "min": 1756708980000,
//               "max": 1756754340000
//             },
//             "2025-09-02": {
//               "min": 1756791180000,
//               "max": 1756814160000
//             }
//           },
//           "tasks_assigned": 3,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "rachel",
//         "name": "Rachel",
//         "avg_response_time_minutes": 78.4,
//         "logging_hours": 6,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             106,
//             62,
//             69,
//             210,
//             50,
//             38,
//             6,
//             86
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756123680000,
//               "max": 1756123680000
//             },
//             "2025-08-26": {
//               "min": 1756178580000,
//               "max": 1756178580000
//             },
//             "2025-08-27": {
//               "min": 1756263240000,
//               "max": 1756263240000
//             },
//             "2025-08-28": {
//               "min": 1756365300000,
//               "max": 1756382760000
//             },
//             "2025-08-30": {
//               "min": 1756542360000,
//               "max": 1756546080000
//             },
//             "2025-09-01": {
//               "min": 1756720140000,
//               "max": 1756720140000
//             }
//           },
//           "tasks_assigned": 3,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "carla",
//         "name": "Carla",
//         "avg_response_time_minutes": 84.1,
//         "logging_hours": 40,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             77,
//             31,
//             129,
//             59,
//             21,
//             53,
//             31,
//             328,
//             45,
//             67
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756121940000,
//               "max": 1756121940000
//             },
//             "2025-08-26": {
//               "min": 1756176720000,
//               "max": 1756232340000
//             },
//             "2025-08-27": {
//               "min": 1756260360000,
//               "max": 1756260360000
//             },
//             "2025-08-28": {
//               "min": 1756355880000,
//               "max": 1756381620000
//             },
//             "2025-08-29": {
//               "min": 1756445280000,
//               "max": 1756481940000
//             },
//             "2025-08-30": {
//               "min": 1756526520000,
//               "max": 1756552680000
//             },
//             "2025-08-31": {
//               "min": 1756657320000,
//               "max": 1756657320000
//             },
//             "2025-09-01": {
//               "min": 1756702680000,
//               "max": 1756702680000
//             }
//           },
//           "tasks_assigned": 4,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "neel",
//         "name": "Neel",
//         "avg_response_time_minutes": 76.7,
//         "logging_hours": 25,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             105,
//             59,
//             23,
//             31,
//             311,
//             85,
//             28,
//             28,
//             44,
//             53
//           ],
//           "day_spans_hours": {
//             "2025-08-26": {
//               "min": 1756204920000,
//               "max": 1756204920000
//             },
//             "2025-08-28": {
//               "min": 1756395300000,
//               "max": 1756401600000
//             },
//             "2025-08-29": {
//               "min": 1756444260000,
//               "max": 1756444260000
//             },
//             "2025-08-30": {
//               "min": 1756559760000,
//               "max": 1756559760000
//             },
//             "2025-08-31": {
//               "min": 1756620900000,
//               "max": 1756679580000
//             },
//             "2025-09-02": {
//               "min": 1756795920000,
//               "max": 1756819740000
//             }
//           },
//           "tasks_assigned": 1,
//           "tasks_completed": 0
//         }
//       }
//     ],
//     "team_metrics": {
//       "avg_response_time_minutes": 124.7,
//       "logging_hours": 41,
//       "task_completion_rate_percent": 8.8
//     },
//     "generated_at": "2025-08-17T16:58:13.464Z"
//   }
// }


// {
//   "elyx_team": {
//     "members": [
//       {
//         "id": "ruby",
//         "name": "Ruby",
//         "avg_response_time_minutes": 313,
//         "logging_hours": 47,
//         "task_completion_rate_percent": 75,
//         "resolution_count": 0
//       },
//       {
//         "id": "sarah_tan",
//         "name": "Sarah Tan",
//         "avg_response_time_minutes": 383.6,
//         "logging_hours": 24,
//         "task_completion_rate_percent": 100,
//         "resolution_count": 0
//       },
//       {
//         "id": "advik",
//         "name": "Advik",
//         "avg_response_time_minutes": 64.5,
//         "logging_hours": 63,
//         "task_completion_rate_percent": 14,
//         "resolution_count": 0
//       },
//       {
//         "id": "dr_warren",
//         "name": "Dr. Warren",
//         "avg_response_time_minutes": 75.4,
//         "logging_hours": 67,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 2
//       },
//       {
//         "id": "carla",
//         "name": "Carla",
//         "avg_response_time_minutes": 103.2,
//         "logging_hours": 40,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0
//       },
//       {
//         "id": "rachel",
//         "name": "Rachel",
//         "avg_response_time_minutes": 78.4,
//         "logging_hours": 6,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0
//       },
//       {
//         "id": "neel",
//         "name": "Neel",
//         "avg_response_time_minutes": 77.8,
//         "logging_hours": 25,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0
//       }
//     ],
//     "team_metrics": {
//       "avg_response_time_minutes": 156,
//       "logging_hours": 39,
//       "task_completion_rate_percent": 27
//     },
//     "generated_at": "2025-08-17T16:33:27.338Z"
//   }
// }





// {
//   "elyx_team": {
//     "members": [
//       {
//         "id": "ruby",
//         "name": "Ruby",
//         "avg_response_time_minutes": 304.2,
//         "logging_hours": 47,
//         "task_completion_rate_percent": 67,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             1705,
//             1771,
//             69,
//             43,
//             79,
//             61,
//             54,
//             38,
//             245,
//             11
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756095900000,
//               "max": 1756105620000
//             },
//             "2025-08-26": {
//               "min": 1756183260000,
//               "max": 1756207920000
//             },
//             "2025-08-27": {
//               "min": 1756252800000,
//               "max": 1756292160000
//             },
//             "2025-08-28": {
//               "min": 1756354260000,
//               "max": 1756358880000
//             },
//             "2025-08-29": {
//               "min": 1756438500000,
//               "max": 1756442700000
//             },
//             "2025-08-31": {
//               "min": 1756614180000,
//               "max": 1756633320000
//             },
//             "2025-09-01": {
//               "min": 1756699440000,
//               "max": 1756743180000
//             },
//             "2025-09-02": {
//               "min": 1756784100000,
//               "max": 1756809060000
//             },
//             "2025-09-05": {
//               "min": 1757030400000,
//               "max": 1757030400000
//             }
//           },
//           "tasks_assigned": 3,
//           "tasks_completed": 2
//         }
//       },
//       {
//         "id": "sarah_tan",
//         "name": "Sarah Tan",
//         "avg_response_time_minutes": 383.6,
//         "logging_hours": 24,
//         "task_completion_rate_percent": 100,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             1753,
//             187,
//             57,
//             86,
//             45,
//             247,
//             829,
//             922,
//             54,
//             225
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756098780000,
//               "max": 1756112700000
//             },
//             "2025-08-26": {
//               "min": 1756184100000,
//               "max": 1756196640000
//             },
//             "2025-08-27": {
//               "min": 1756294200000,
//               "max": 1756294200000
//             },
//             "2025-08-29": {
//               "min": 1756440420000,
//               "max": 1756440420000
//             },
//             "2025-08-31": {
//               "min": 1756611300000,
//               "max": 1756635300000
//             },
//             "2025-09-01": {
//               "min": 1756698300000,
//               "max": 1756715760000
//             },
//             "2025-09-02": {
//               "min": 1756786440000,
//               "max": 1756805160000
//             }
//           },
//           "tasks_assigned": 3,
//           "tasks_completed": 3
//         }
//       },
//       {
//         "id": "advik",
//         "name": "Advik",
//         "avg_response_time_minutes": 64.5,
//         "logging_hours": 63,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             33,
//             40,
//             25,
//             10,
//             11,
//             33,
//             92,
//             41,
//             40,
//             60
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756103460000,
//               "max": 1756118820000
//             },
//             "2025-08-26": {
//               "min": 1756173300000,
//               "max": 1756231200000
//             },
//             "2025-08-27": {
//               "min": 1756269180000,
//               "max": 1756269720000
//             },
//             "2025-08-28": {
//               "min": 1756355460000,
//               "max": 1756398120000
//             },
//             "2025-08-29": {
//               "min": 1756450920000,
//               "max": 1756490520000
//             },
//             "2025-08-30": {
//               "min": 1756525500000,
//               "max": 1756548480000
//             },
//             "2025-08-31": {
//               "min": 1756651440000,
//               "max": 1756655820000
//             },
//             "2025-09-01": {
//               "min": 1756703880000,
//               "max": 1756745760000
//             }
//           },
//           "tasks_assigned": 6,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "dr._warren",
//         "name": "Dr. Warren",
//         "avg_response_time_minutes": 75.4,
//         "logging_hours": 67,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 2,
//         "_debug": {
//           "samples_response_mins": [
//             231,
//             16,
//             82,
//             20,
//             44,
//             102,
//             71,
//             53,
//             78,
//             6
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756115340000,
//               "max": 1756115340000
//             },
//             "2025-08-26": {
//               "min": 1756173660000,
//               "max": 1756225620000
//             },
//             "2025-08-27": {
//               "min": 1756268760000,
//               "max": 1756298520000
//             },
//             "2025-08-28": {
//               "min": 1756356780000,
//               "max": 1756388640000
//             },
//             "2025-08-29": {
//               "min": 1756487220000,
//               "max": 1756487220000
//             },
//             "2025-08-30": {
//               "min": 1756531080000,
//               "max": 1756556700000
//             },
//             "2025-08-31": {
//               "min": 1756636380000,
//               "max": 1756671000000
//             },
//             "2025-09-01": {
//               "min": 1756708980000,
//               "max": 1756754340000
//             },
//             "2025-09-02": {
//               "min": 1756791180000,
//               "max": 1756814160000
//             }
//           },
//           "tasks_assigned": 2,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "carla",
//         "name": "Carla",
//         "avg_response_time_minutes": 103.2,
//         "logging_hours": 40,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             77,
//             31,
//             129,
//             59,
//             21,
//             53,
//             31,
//             328,
//             45,
//             67
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756121940000,
//               "max": 1756121940000
//             },
//             "2025-08-26": {
//               "min": 1756176720000,
//               "max": 1756232340000
//             },
//             "2025-08-27": {
//               "min": 1756260360000,
//               "max": 1756260360000
//             },
//             "2025-08-28": {
//               "min": 1756355880000,
//               "max": 1756381620000
//             },
//             "2025-08-29": {
//               "min": 1756445280000,
//               "max": 1756481940000
//             },
//             "2025-08-30": {
//               "min": 1756526520000,
//               "max": 1756552680000
//             },
//             "2025-08-31": {
//               "min": 1756657320000,
//               "max": 1756657320000
//             },
//             "2025-09-01": {
//               "min": 1756702680000,
//               "max": 1756702680000
//             }
//           },
//           "tasks_assigned": 4,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "rachel",
//         "name": "Rachel",
//         "avg_response_time_minutes": 78.4,
//         "logging_hours": 6,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             106,
//             62,
//             69,
//             210,
//             50,
//             38,
//             6,
//             86
//           ],
//           "day_spans_hours": {
//             "2025-08-25": {
//               "min": 1756123680000,
//               "max": 1756123680000
//             },
//             "2025-08-26": {
//               "min": 1756178580000,
//               "max": 1756178580000
//             },
//             "2025-08-27": {
//               "min": 1756263240000,
//               "max": 1756263240000
//             },
//             "2025-08-28": {
//               "min": 1756365300000,
//               "max": 1756382760000
//             },
//             "2025-08-30": {
//               "min": 1756542360000,
//               "max": 1756546080000
//             },
//             "2025-09-01": {
//               "min": 1756720140000,
//               "max": 1756720140000
//             }
//           },
//           "tasks_assigned": 1,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "neel",
//         "name": "Neel",
//         "avg_response_time_minutes": 77.8,
//         "logging_hours": 25,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             105,
//             59,
//             23,
//             31,
//             311,
//             85,
//             28,
//             28,
//             44,
//             53
//           ],
//           "day_spans_hours": {
//             "2025-08-26": {
//               "min": 1756204920000,
//               "max": 1756204920000
//             },
//             "2025-08-28": {
//               "min": 1756395300000,
//               "max": 1756401600000
//             },
//             "2025-08-29": {
//               "min": 1756444260000,
//               "max": 1756444260000
//             },
//             "2025-08-30": {
//               "min": 1756559760000,
//               "max": 1756559760000
//             },
//             "2025-08-31": {
//               "min": 1756620900000,
//               "max": 1756679580000
//             },
//             "2025-09-02": {
//               "min": 1756795920000,
//               "max": 1756819740000
//             }
//           },
//           "tasks_assigned": 1,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "ruby_concierge",
//         "name": "ruby_concierge",
//         "avg_response_time_minutes": 327,
//         "logging_hours": 0,
//         "task_completion_rate_percent": 100,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [
//             327
//           ],
//           "day_spans_hours": {
//             "2025-09-02": {
//               "min": 1756771200000,
//               "max": 1756771200000
//             }
//           },
//           "tasks_assigned": 1,
//           "tasks_completed": 1
//         }
//       },
//       {
//         "id": "sarah",
//         "name": "sarah",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 100,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 1,
//           "tasks_completed": 1
//         }
//       },
//       {
//         "id": "ruby/sarah_tan",
//         "name": "Ruby/Sarah Tan",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 3,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "advik_-_elyx_analysis_(whoop_+_subjective_log)",
//         "name": "Advik - Elyx Analysis (Whoop + Subjective Log)",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 1,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "rachel_(pt)",
//         "name": "Rachel (PT)",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 2,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "advik's_analysis_(whoop_+_self-report)",
//         "name": "Advik's Analysis (Whoop + Self-Report)",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 100,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 1,
//           "tasks_completed": 1
//         }
//       },
//       {
//         "id": "advik_(whoop_data_synthesis)",
//         "name": "Advik (Whoop Data Synthesis)",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 1,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "elyx_team_analysis_(advik)",
//         "name": "Elyx Team Analysis (Advik)",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 1,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "sarah_tan_pa",
//         "name": "sarah_tan_pa",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 1,
//           "tasks_completed": 0
//         }
//       },
//       {
//         "id": "dr._warren_|_clinical_analysis",
//         "name": "Dr. Warren | Clinical Analysis",
//         "avg_response_time_minutes": null,
//         "logging_hours": null,
//         "task_completion_rate_percent": 0,
//         "resolution_count": 0,
//         "_debug": {
//           "samples_response_mins": [],
//           "day_spans_hours": {},
//           "tasks_assigned": 1,
//           "tasks_completed": 0
//         }
//       }
//     ],
//     "team_metrics": {
//       "avg_response_time_minutes": 176.8,
//       "logging_hours": 34,
//       "task_completion_rate_percent": 27.5
//     },
//     "generated_at": "2025-08-17T16:33:27.338Z"
//   }
// }

