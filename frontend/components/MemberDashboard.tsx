// "use client";

// export default function MemberDashboard() {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-4">Member Dashboard</h2>
//       {/* Existing member dashboard code goes here */}
//     </div>
//   );
// }


// // // // // // // // // // // // app/dashboard/member/page.tsx
// // // // // // // // // // // "use client";

// // // // // // // // // // // import structuredData from "@/data/structured_data.json";
// // // // // // // // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // // // // // import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

// // // // // // // // // // // type LogEntry = {
// // // // // // // // // // //   timestamp: string;
// // // // // // // // // // //   systolic?: number;
// // // // // // // // // // //   diastolic?: number;
// // // // // // // // // // //   value?: number;
// // // // // // // // // // //   hours?: number;
// // // // // // // // // // //   quality?: number;
// // // // // // // // // // // };

// // // // // // // // // // // export default function MemberDashboard() {
// // // // // // // // // // //   // --- Extract blood pressure logs ---
// // // // // // // // // // //   const bpLogs = (structuredData.blood_pressure_log || []) as LogEntry[];
// // // // // // // // // // //   const latestBP = bpLogs.at(-1);

// // // // // // // // // // //   // --- Extract sleep logs ---
// // // // // // // // // // //   const sleepLogs = (structuredData.sleep_log || []) as LogEntry[];
// // // // // // // // // // //   const avgSleep =
// // // // // // // // // // //     sleepLogs.reduce((sum, s) => sum + (s.hours || 0), 0) /
// // // // // // // // // // //     (sleepLogs.length || 1);

// // // // // // // // // // //   // --- Extract HRV logs (if exist) ---
// // // // // // // // // // //   const hrvLogs = (structuredData.hrv_log || []) as LogEntry[];
// // // // // // // // // // //   const latestHRV = hrvLogs.at(-1);

// // // // // // // // // // //   // --- Extract nutrition adherence ---
// // // // // // // // // // //   const nutritionLogs = (structuredData.nutrition_log || []) as LogEntry[];
// // // // // // // // // // //   const avgNutrition =
// // // // // // // // // // //     nutritionLogs.reduce((sum, n) => sum + (n.value || 0), 0) /
// // // // // // // // // // //     (nutritionLogs.length || 1);

// // // // // // // // // // //   // --- Extract workout adherence ---
// // // // // // // // // // //   const workoutLogs = (structuredData.workout_log || []) as LogEntry[];
// // // // // // // // // // //   const avgWorkout =
// // // // // // // // // // //     workoutLogs.reduce((sum, w) => sum + (w.value || 0), 0) /
// // // // // // // // // // //     (workoutLogs.length || 1);

// // // // // // // // // // //   // --- Prepare chart data ---
// // // // // // // // // // //   const bpChartData = bpLogs.map((bp) => ({
// // // // // // // // // // //     date: bp.timestamp,
// // // // // // // // // // //     systolic: bp.systolic,
// // // // // // // // // // //     diastolic: bp.diastolic,
// // // // // // // // // // //   }));

// // // // // // // // // // //   const sleepChartData = sleepLogs.map((s) => ({
// // // // // // // // // // //     date: s.timestamp,
// // // // // // // // // // //     hours: s.hours,
// // // // // // // // // // //   }));

// // // // // // // // // // //   return (
// // // // // // // // // // //     <main className="max-w-screen-2xl mx-auto p-8 space-y-8">
// // // // // // // // // // //       <h1 className="text-2xl font-bold">🩺 Rohan’s Health Dashboard</h1>

// // // // // // // // // // //       {/* Overview Cards */}
// // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
// // // // // // // // // // //         <Card>
// // // // // // // // // // //           <CardHeader>
// // // // // // // // // // //             <CardTitle>Blood Pressure</CardTitle>
// // // // // // // // // // //           </CardHeader>
// // // // // // // // // // //           <CardContent>
// // // // // // // // // // //             <p className="text-lg font-semibold">
// // // // // // // // // // //               {latestBP ? `${latestBP.systolic}/${latestBP.diastolic} mmHg` : "—"}
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </CardContent>
// // // // // // // // // // //         </Card>

// // // // // // // // // // //         <Card>
// // // // // // // // // // //           <CardHeader>
// // // // // // // // // // //             <CardTitle>Avg Sleep</CardTitle>
// // // // // // // // // // //           </CardHeader>
// // // // // // // // // // //           <CardContent>
// // // // // // // // // // //             <p className="text-lg font-semibold">{avgSleep.toFixed(1)} hrs</p>
// // // // // // // // // // //           </CardContent>
// // // // // // // // // // //         </Card>

// // // // // // // // // // //         <Card>
// // // // // // // // // // //           <CardHeader>
// // // // // // // // // // //             <CardTitle>HRV</CardTitle>
// // // // // // // // // // //           </CardHeader>
// // // // // // // // // // //           <CardContent>
// // // // // // // // // // //             <p className="text-lg font-semibold">
// // // // // // // // // // //               {latestHRV ? `${latestHRV.value} ms` : "—"}
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </CardContent>
// // // // // // // // // // //         </Card>

// // // // // // // // // // //         <Card>
// // // // // // // // // // //           <CardHeader>
// // // // // // // // // // //             <CardTitle>Nutrition Adherence</CardTitle>
// // // // // // // // // // //           </CardHeader>
// // // // // // // // // // //           <CardContent>
// // // // // // // // // // //             <p className="text-lg font-semibold">{avgNutrition.toFixed(0)}%</p>
// // // // // // // // // // //           </CardContent>
// // // // // // // // // // //         </Card>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Charts Section */}
// // // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // // // // // // // // //         <Card>
// // // // // // // // // // //           <CardHeader>
// // // // // // // // // // //             <CardTitle>Blood Pressure Trend</CardTitle>
// // // // // // // // // // //           </CardHeader>
// // // // // // // // // // //           <CardContent>
// // // // // // // // // // //             <ResponsiveContainer width="100%" height={250}>
// // // // // // // // // // //               <LineChart data={bpChartData}>
// // // // // // // // // // //                 <XAxis dataKey="date" hide />
// // // // // // // // // // //                 <YAxis />
// // // // // // // // // // //                 <Tooltip />
// // // // // // // // // // //                 <Line type="monotone" dataKey="systolic" stroke="#2563eb" />
// // // // // // // // // // //                 <Line type="monotone" dataKey="diastolic" stroke="#16a34a" />
// // // // // // // // // // //               </LineChart>
// // // // // // // // // // //             </ResponsiveContainer>
// // // // // // // // // // //           </CardContent>
// // // // // // // // // // //         </Card>

// // // // // // // // // // //         <Card>
// // // // // // // // // // //           <CardHeader>
// // // // // // // // // // //             <CardTitle>Sleep Hours Trend</CardTitle>
// // // // // // // // // // //           </CardHeader>
// // // // // // // // // // //           <CardContent>
// // // // // // // // // // //             <ResponsiveContainer width="100%" height={250}>
// // // // // // // // // // //               <BarChart data={sleepChartData}>
// // // // // // // // // // //                 <XAxis dataKey="date" hide />
// // // // // // // // // // //                 <YAxis />
// // // // // // // // // // //                 <Tooltip />
// // // // // // // // // // //                 <Bar dataKey="hours" fill="#4f46e5" />
// // // // // // // // // // //               </BarChart>
// // // // // // // // // // //             </ResponsiveContainer>
// // // // // // // // // // //           </CardContent>
// // // // // // // // // // //         </Card>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </main>
// // // // // // // // // // //   );
// // // // // // // // // // // }




// // // // // // // // // // "use client";

// // // // // // // // // // import React from "react";
// // // // // // // // // // import data from "@/data/structured_data.json";
// // // // // // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // // // // // import {
// // // // // // // // // //   LineChart,
// // // // // // // // // //   Line,
// // // // // // // // // //   XAxis,
// // // // // // // // // //   YAxis,
// // // // // // // // // //   Tooltip,
// // // // // // // // // //   ResponsiveContainer,
// // // // // // // // // // } from "recharts";

// // // // // // // // // // // Types
// // // // // // // // // // interface WearableMetrics {
// // // // // // // // // //   date_utc: string;
// // // // // // // // // //   hrv?: number;
// // // // // // // // // //   sleep_duration_minutes?: number;
// // // // // // // // // //   blood_pressure_systolic?: number;
// // // // // // // // // //   blood_pressure_diastolic?: number;
// // // // // // // // // // }

// // // // // // // // // // interface NutritionAdherence {
// // // // // // // // // //   adherence_percentage: number;
// // // // // // // // // //   week: number;
// // // // // // // // // // }

// // // // // // // // // // // Helper: format date
// // // // // // // // // // function formatDate(dateStr: string) {
// // // // // // // // // //   const d = new Date(dateStr);
// // // // // // // // // //   return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
// // // // // // // // // // }

// // // // // // // // // // export default function MemberDashboard() {
// // // // // // // // // //   const structured = data as any[];

// // // // // // // // // //   // Extract wearable metrics
// // // // // // // // // //   const wearableData: WearableMetrics[] = structured
// // // // // // // // // //     .filter((item) => item.data_type === "wearable_baseline_metrics")
// // // // // // // // // //     .map((item) => ({
// // // // // // // // // //       date_utc: item.details.date_utc,
// // // // // // // // // //       hrv: item.details.hrv,
// // // // // // // // // //       sleep_duration_minutes: item.details.sleep_duration_minutes,
// // // // // // // // // //       blood_pressure_systolic: item.details.blood_pressure_systolic,
// // // // // // // // // //       blood_pressure_diastolic: item.details.blood_pressure_diastolic,
// // // // // // // // // //     }));

// // // // // // // // // //   // Extract nutrition adherence
// // // // // // // // // //   const nutritionData: NutritionAdherence[] = structured
// // // // // // // // // //     .filter((item) => item.data_type === "nutrition_adherence")
// // // // // // // // // //     .map((item) => ({
// // // // // // // // // //       week: item.details.week,
// // // // // // // // // //       adherence_percentage: item.details.adherence_percentage,
// // // // // // // // // //     }));

// // // // // // // // // //   // Latest values
// // // // // // // // // //   const latestWearable = wearableData[wearableData.length - 1];
// // // // // // // // // //   const latestNutrition =
// // // // // // // // // //     nutritionData[nutritionData.length - 1]?.adherence_percentage ?? 0;

// // // // // // // // // //   const avgSleep =
// // // // // // // // // //     wearableData.reduce((sum, d) => sum + (d.sleep_duration_minutes || 0), 0) /
// // // // // // // // // //       (wearableData.length || 1) /
// // // // // // // // // //       60 || 0;

// // // // // // // // // //   // Chart Data
// // // // // // // // // //   const bpTrend = wearableData
// // // // // // // // // //     .filter((d) => d.blood_pressure_systolic && d.blood_pressure_diastolic)
// // // // // // // // // //     .map((d) => ({
// // // // // // // // // //       date: formatDate(d.date_utc),
// // // // // // // // // //       systolic: d.blood_pressure_systolic,
// // // // // // // // // //       diastolic: d.blood_pressure_diastolic,
// // // // // // // // // //     }));

// // // // // // // // // //   const sleepTrend = wearableData
// // // // // // // // // //     .filter((d) => d.sleep_duration_minutes)
// // // // // // // // // //     .map((d) => ({
// // // // // // // // // //       date: formatDate(d.date_utc),
// // // // // // // // // //       sleep: (d.sleep_duration_minutes || 0) / 60,
// // // // // // // // // //     }));

// // // // // // // // // //   return (
// // // // // // // // // //     <main className="max-w-screen-xl mx-auto px-6 py-10">
// // // // // // // // // //       <h1 className="text-2xl font-bold mb-6">🩺 Rohan’s Health Dashboard</h1>

// // // // // // // // // //       {/* Summary Cards */}
// // // // // // // // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // // // // // // // //         <Card>
// // // // // // // // // //           <CardContent className="p-4">
// // // // // // // // // //             <h2 className="text-sm font-medium">Blood Pressure</h2>
// // // // // // // // // //             <p className="text-xl font-bold mt-2">
// // // // // // // // // //               {latestWearable?.blood_pressure_systolic
// // // // // // // // // //                 ? `${latestWearable.blood_pressure_systolic}/${latestWearable.blood_pressure_diastolic} mmHg`
// // // // // // // // // //                 : "—"}
// // // // // // // // // //             </p>
// // // // // // // // // //           </CardContent>
// // // // // // // // // //         </Card>

// // // // // // // // // //         <Card>
// // // // // // // // // //           <CardContent className="p-4">
// // // // // // // // // //             <h2 className="text-sm font-medium">Avg Sleep</h2>
// // // // // // // // // //             <p className="text-xl font-bold mt-2">
// // // // // // // // // //               {avgSleep.toFixed(1)} hrs
// // // // // // // // // //             </p>
// // // // // // // // // //           </CardContent>
// // // // // // // // // //         </Card>

// // // // // // // // // //         <Card>
// // // // // // // // // //           <CardContent className="p-4">
// // // // // // // // // //             <h2 className="text-sm font-medium">HRV</h2>
// // // // // // // // // //             <p className="text-xl font-bold mt-2">
// // // // // // // // // //               {latestWearable?.hrv ? `${latestWearable.hrv} ms` : "—"}
// // // // // // // // // //             </p>
// // // // // // // // // //           </CardContent>
// // // // // // // // // //         </Card>

// // // // // // // // // //         <Card>
// // // // // // // // // //           <CardContent className="p-4">
// // // // // // // // // //             <h2 className="text-sm font-medium">Nutrition Adherence</h2>
// // // // // // // // // //             <p className="text-xl font-bold mt-2">{latestNutrition}%</p>
// // // // // // // // // //           </CardContent>
// // // // // // // // // //         </Card>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Charts */}
// // // // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // // // // //         <Card>
// // // // // // // // // //           <CardContent className="p-4">
// // // // // // // // // //             <h2 className="text-sm font-medium mb-4">Blood Pressure Trend</h2>
// // // // // // // // // //             <ResponsiveContainer width="100%" height={250}>
// // // // // // // // // //               <LineChart data={bpTrend}>
// // // // // // // // // //                 <XAxis dataKey="date" />
// // // // // // // // // //                 <YAxis />
// // // // // // // // // //                 <Tooltip />
// // // // // // // // // //                 <Line type="monotone" dataKey="systolic" stroke="#2563eb" />
// // // // // // // // // //                 <Line type="monotone" dataKey="diastolic" stroke="#10b981" />
// // // // // // // // // //               </LineChart>
// // // // // // // // // //             </ResponsiveContainer>
// // // // // // // // // //           </CardContent>
// // // // // // // // // //         </Card>

// // // // // // // // // //         <Card>
// // // // // // // // // //           <CardContent className="p-4">
// // // // // // // // // //             <h2 className="text-sm font-medium mb-4">Sleep Hours Trend</h2>
// // // // // // // // // //             <ResponsiveContainer width="100%" height={250}>
// // // // // // // // // //               <LineChart data={sleepTrend}>
// // // // // // // // // //                 <XAxis dataKey="date" />
// // // // // // // // // //                 <YAxis />
// // // // // // // // // //                 <Tooltip />
// // // // // // // // // //                 <Line type="monotone" dataKey="sleep" stroke="#f59e0b" />
// // // // // // // // // //               </LineChart>
// // // // // // // // // //             </ResponsiveContainer>
// // // // // // // // // //           </CardContent>
// // // // // // // // // //         </Card>
// // // // // // // // // //       </div>
// // // // // // // // // //     </main>
// // // // // // // // // //   );
// // // // // // // // // // }




// // // // // // // // // "use client";

// // // // // // // // // import React from "react";
// // // // // // // // // import structuredData from "@/data/structured_data.json";
// // // // // // // // // import { Card, CardContent } from "@/components/ui/card";

// // // // // // // // // type DataEntry = {
// // // // // // // // //   data_type: string;
// // // // // // // // //   details: Record<string, any>;
// // // // // // // // //   date_utc?: string;
// // // // // // // // // };

// // // // // // // // // // Group by data_type
// // // // // // // // // function groupByType(data: DataEntry[]) {
// // // // // // // // //   return data.reduce((acc, entry) => {
// // // // // // // // //     if (!acc[entry.data_type]) acc[entry.data_type] = [];
// // // // // // // // //     acc[entry.data_type].push(entry);
// // // // // // // // //     return acc;
// // // // // // // // //   }, {} as Record<string, DataEntry[]>);
// // // // // // // // // }

// // // // // // // // // export default function MemberDashboard() {
// // // // // // // // //   const grouped = groupByType(structuredData as DataEntry[]);

// // // // // // // // //   return (
// // // // // // // // //     <main className="max-w-6xl mx-auto p-6 space-y-6">
// // // // // // // // //       <h1 className="text-2xl font-bold">🩺 Rohan’s Health Dashboard</h1>

// // // // // // // // //       {/* Loop through each data_type */}
// // // // // // // // //       {Object.entries(grouped).map(([type, entries]) => (
// // // // // // // // //         <section key={type} className="space-y-4">
// // // // // // // // //           <h2 className="text-lg font-semibold capitalize">{type.replace(/_/g, " ")}</h2>
// // // // // // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // // // // // // //             {/* Look at the first entry’s details to find keys */}
// // // // // // // // //             {Object.keys(entries[0].details).map((key) => (
// // // // // // // // //               <Card key={key} className="p-4">
// // // // // // // // //                 <CardContent>
// // // // // // // // //                   <p className="text-sm font-medium capitalize">{key.replace(/_/g, " ")}</p>
// // // // // // // // //                   <p className="text-lg font-bold text-slate-800">
// // // // // // // // //                     {entries[0].details[key]?.toString() ?? "--"}
// // // // // // // // //                   </p>
// // // // // // // // //                 </CardContent>
// // // // // // // // //               </Card>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </section>
// // // // // // // // //       ))}
// // // // // // // // //     </main>
// // // // // // // // //   );
// // // // // // // // // }




// // // // // // // // // app/dashboard/member/page.tsx
// // // // // // // // "use client";

// // // // // // // // import React from "react";
// // // // // // // // import {
// // // // // // // //   canonicalAll,
// // // // // // // //   getLatestBloodPressure,
// // // // // // // //   getAvgSleepHours,
// // // // // // // //   getLatestHRV,
// // // // // // // //   getNutritionAdherencePct,
// // // // // // // //   timeseriesFor,
// // // // // // // // } from "@/lib/normalizeStructuredData";

// // // // // // // // // Simple reusable card
// // // // // // // // function Card({ children, title }: { children?: React.ReactNode; title?: string }) {
// // // // // // // //   return (
// // // // // // // //     <div className="bg-white border border-slate-100 rounded-lg p-5 shadow-sm">
// // // // // // // //       {title && <div className="text-sm font-medium text-slate-700 mb-2">{title}</div>}
// // // // // // // //       <div>{children}</div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // // Tiny dependency-free line chart
// // // // // // // // function SimpleLineChart({
// // // // // // // //   points,
// // // // // // // //   height = 160,
// // // // // // // // }: {
// // // // // // // //   points: { x: string; y: number | null }[];
// // // // // // // //   height?: number;
// // // // // // // // }) {
// // // // // // // //   if (!points || !points.length) {
// // // // // // // //     return <div className="text-sm text-slate-400 italic">No data</div>;
// // // // // // // //   }
// // // // // // // //   const ys = points.map((p) => (p.y == null ? null : Number(p.y)));
// // // // // // // //   const validY = ys.filter((v) => v != null) as number[];
// // // // // // // //   if (!validY.length) return <div className="text-sm text-slate-400 italic">No numeric data</div>;

// // // // // // // //   const minY = Math.min(...validY);
// // // // // // // //   const maxY = Math.max(...validY);
// // // // // // // //   const pad = (maxY - minY) * 0.1 || 1;
// // // // // // // //   const y0 = minY - pad;
// // // // // // // //   const y1 = maxY + pad;
// // // // // // // //   const w = 600;
// // // // // // // //   const h = height;

// // // // // // // //   const stepX = w / Math.max(1, points.length - 1);
// // // // // // // //   const coords = points.map((p, i) => {
// // // // // // // //     const x = i * stepX;
// // // // // // // //     const y = p.y == null ? null : h - ((p.y - y0) / (y1 - y0)) * h;
// // // // // // // //     return { x, y, rawY: p.y };
// // // // // // // //   });

// // // // // // // //   const pathD = coords
// // // // // // // //     .map((c, i) =>
// // // // // // // //       c.y == null ? "" : `${i === 0 ? "M" : "L"} ${c.x.toFixed(2)} ${c.y!.toFixed(2)}`
// // // // // // // //     )
// // // // // // // //     .join(" ");

// // // // // // // //   return (
// // // // // // // //     <svg
// // // // // // // //       width="100%"
// // // // // // // //       viewBox={`0 0 ${w} ${h}`}
// // // // // // // //       preserveAspectRatio="none"
// // // // // // // //       className="rounded"
// // // // // // // //     >
// // // // // // // //       {/* grid */}
// // // // // // // //       <g stroke="#e6e6e6" strokeWidth="1">
// // // // // // // //         {[0, 0.25, 0.5, 0.75, 1].map((t) => (
// // // // // // // //           <line key={t} x1={0} x2={w} y1={t * h} y2={t * h} />
// // // // // // // //         ))}
// // // // // // // //       </g>

// // // // // // // //       {/* axes */}
// // // // // // // //       <g stroke="#cfcfcf" strokeWidth="1">
// // // // // // // //         <line x1="0" y1={h} x2={w} y2={h} />
// // // // // // // //         <line x1="0" y1="0" x2="0" y2={h} />
// // // // // // // //       </g>

// // // // // // // //       {/* data path */}
// // // // // // // //       <path
// // // // // // // //         d={pathD}
// // // // // // // //         fill="none"
// // // // // // // //         stroke="#10b981"
// // // // // // // //         strokeWidth="2"
// // // // // // // //         strokeLinejoin="round"
// // // // // // // //         strokeLinecap="round"
// // // // // // // //       />

// // // // // // // //       {/* points */}
// // // // // // // //       {coords.map((c, idx) =>
// // // // // // // //         c.y == null ? null : (
// // // // // // // //           <circle
// // // // // // // //             key={idx}
// // // // // // // //             cx={c.x}
// // // // // // // //             cy={c.y}
// // // // // // // //             r={3.5}
// // // // // // // //             fill="#10b981"
// // // // // // // //             stroke="#fff"
// // // // // // // //             strokeWidth="1"
// // // // // // // //           />
// // // // // // // //         )
// // // // // // // //       )}
// // // // // // // //     </svg>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default function MemberDashboardPage() {
// // // // // // // //   const records = canonicalAll ?? [];

// // // // // // // //   // Member metrics
// // // // // // // //   const bp = getLatestBloodPressure(records);
// // // // // // // //   const avgSleep = getAvgSleepHours(records);
// // // // // // // //   const hrv = getLatestHRV(records);
// // // // // // // //   const nutrition = getNutritionAdherencePct(records);

// // // // // // // //   const bpSeries = timeseriesFor(records, "blood_pressure_systolic");
// // // // // // // //   const sleepSeries = timeseriesFor(records, "sleep_hours");

// // // // // // // //   return (
// // // // // // // //     <main className="max-w-6xl mx-auto px-8 py-10">
// // // // // // // //       <header className="mb-6">
// // // // // // // //         <h1 className="text-2xl font-extrabold">🩺 Rohan’s Member Dashboard</h1>
// // // // // // // //         <p className="text-sm text-slate-500 mt-1">
// // // // // // // //           Personal health progress based on conversation logs.
// // // // // // // //         </p>
// // // // // // // //       </header>

// // // // // // // //       {/* top metric cards */}
// // // // // // // //       <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
// // // // // // // //         <Card title="Blood Pressure">
// // // // // // // //           <div className="text-xl font-semibold">{bp ?? "—"}</div>
// // // // // // // //         </Card>
// // // // // // // //         <Card title="Avg Sleep">
// // // // // // // //           <div className="text-xl font-semibold">
// // // // // // // //             {avgSleep != null ? `${avgSleep} hrs` : "—"}
// // // // // // // //           </div>
// // // // // // // //         </Card>
// // // // // // // //         <Card title="HRV">
// // // // // // // //           <div className="text-xl font-semibold">
// // // // // // // //             {hrv != null ? `${hrv} ms` : "—"}
// // // // // // // //           </div>
// // // // // // // //         </Card>
// // // // // // // //         <Card title="Nutrition Adherence">
// // // // // // // //           <div className="text-xl font-semibold">
// // // // // // // //             {nutrition != null ? `${nutrition}%` : "—"}
// // // // // // // //           </div>
// // // // // // // //         </Card>
// // // // // // // //       </div>

// // // // // // // //       {/* charts */}
// // // // // // // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // // // // // // //         <div className="bg-white border border-slate-100 rounded-lg p-5 shadow-sm">
// // // // // // // //           <div className="text-sm font-medium text-slate-700 mb-3">
// // // // // // // //             Blood Pressure Trend
// // // // // // // //           </div>
// // // // // // // //           <div className="h-56">
// // // // // // // //             <SimpleLineChart points={bpSeries} height={220} />
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className="bg-white border border-slate-100 rounded-lg p-5 shadow-sm">
// // // // // // // //           <div className="text-sm font-medium text-slate-700 mb-3">
// // // // // // // //             Sleep Hours Trend
// // // // // // // //           </div>
// // // // // // // //           <div className="h-56">
// // // // // // // //             <SimpleLineChart points={sleepSeries} height={220} />
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <footer className="mt-8 text-xs text-slate-400">
// // // // // // // //         Data normalized from <code>structured_data.json</code>.
// // // // // // // //       </footer>
// // // // // // // //     </main>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // "use client";

// // // // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // // import cleanedData from "@/data/cleaned_member.json"; // put cleaned JSON inside /data
// // // // // // // import {
// // // // // // //   LineChart,
// // // // // // //   Line,
// // // // // // //   CartesianGrid,
// // // // // // //   XAxis,
// // // // // // //   YAxis,
// // // // // // //   Tooltip,
// // // // // // //   ResponsiveContainer,
// // // // // // // } from "recharts";

// // // // // // // export default function MemberDashboard() {
// // // // // // //   const member = cleanedData.member;

// // // // // // //   // Extract metrics
// // // // // // //   const bloodPressure = member.metrics.blood_pressure.filter(
// // // // // // //     (bp) => bp.systolic && bp.diastolic
// // // // // // //   );
// // // // // // //   const sleepHours = member.metrics.sleep_hours.filter((s) => s.hours);
// // // // // // //   const hrv = member.metrics.hrv.filter((h) => h.ms && h.ms > 0);
// // // // // // //   const nutrition = member.metrics.nutrition_adherence.filter((n) => n.percent);

// // // // // // //   return (
// // // // // // //     <main className="max-w-7xl mx-auto p-8 space-y-8">
// // // // // // //       <h1 className="text-3xl font-bold">👤 {member.name} — Health Dashboard</h1>

// // // // // // //       {/* Blood Pressure */}
// // // // // // //       <Card>
// // // // // // //         <CardHeader>
// // // // // // //           <CardTitle>Blood Pressure</CardTitle>
// // // // // // //         </CardHeader>
// // // // // // //         <CardContent className="h-80">
// // // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // // //             <LineChart data={bloodPressure}>
// // // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // // //               <XAxis dataKey="date" tick={false} />
// // // // // // //               <YAxis />
// // // // // // //               <Tooltip />
// // // // // // //               <Line
// // // // // // //                 type="monotone"
// // // // // // //                 dataKey="systolic"
// // // // // // //                 stroke="#ef4444"
// // // // // // //                 name="Systolic"
// // // // // // //               />
// // // // // // //               <Line
// // // // // // //                 type="monotone"
// // // // // // //                 dataKey="diastolic"
// // // // // // //                 stroke="#3b82f6"
// // // // // // //                 name="Diastolic"
// // // // // // //               />
// // // // // // //             </LineChart>
// // // // // // //           </ResponsiveContainer>
// // // // // // //         </CardContent>
// // // // // // //       </Card>

// // // // // // //       {/* Sleep */}
// // // // // // //       <Card>
// // // // // // //         <CardHeader>
// // // // // // //           <CardTitle>Sleep Hours</CardTitle>
// // // // // // //         </CardHeader>
// // // // // // //         <CardContent className="h-80">
// // // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // // //             <LineChart data={sleepHours}>
// // // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // // //               <XAxis dataKey="date" tick={false} />
// // // // // // //               <YAxis />
// // // // // // //               <Tooltip />
// // // // // // //               <Line type="monotone" dataKey="hours" stroke="#22c55e" name="Hours" />
// // // // // // //             </LineChart>
// // // // // // //           </ResponsiveContainer>
// // // // // // //         </CardContent>
// // // // // // //       </Card>

// // // // // // //       {/* HRV */}
// // // // // // //       <Card>
// // // // // // //         <CardHeader>
// // // // // // //           <CardTitle>Heart Rate Variability (HRV)</CardTitle>
// // // // // // //         </CardHeader>
// // // // // // //         <CardContent className="h-80">
// // // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // // //             <LineChart data={hrv}>
// // // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // // //               <XAxis dataKey="date" tick={false} />
// // // // // // //               <YAxis />
// // // // // // //               <Tooltip />
// // // // // // //               <Line type="monotone" dataKey="ms" stroke="#8b5cf6" name="HRV (ms)" />
// // // // // // //             </LineChart>
// // // // // // //           </ResponsiveContainer>
// // // // // // //         </CardContent>
// // // // // // //       </Card>

// // // // // // //       {/* Nutrition */}
// // // // // // //       <Card>
// // // // // // //         <CardHeader>
// // // // // // //           <CardTitle>Nutrition Adherence</CardTitle>
// // // // // // //         </CardHeader>
// // // // // // //         <CardContent className="h-80">
// // // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // // //             <LineChart data={nutrition}>
// // // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // // //               <XAxis dataKey="date" tick={false} />
// // // // // // //               <YAxis domain={[0, 100]} />
// // // // // // //               <Tooltip />
// // // // // // //               <Line
// // // // // // //                 type="monotone"
// // // // // // //                 dataKey="percent"
// // // // // // //                 stroke="#f59e0b"
// // // // // // //                 name="Adherence %"
// // // // // // //               />
// // // // // // //             </LineChart>
// // // // // // //           </ResponsiveContainer>
// // // // // // //         </CardContent>
// // // // // // //       </Card>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }



// // // // // // "use client";

// // // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // // import cleanedData from "@/data/cleaned_member.json";
// // // // // // import {
// // // // // //   LineChart,
// // // // // //   Line,
// // // // // //   CartesianGrid,
// // // // // //   XAxis,
// // // // // //   YAxis,
// // // // // //   Tooltip,
// // // // // //   ResponsiveContainer,
// // // // // // } from "recharts";

// // // // // // export default function MemberDashboard() {
// // // // // //   const member = cleanedData.member;

// // // // // //   // Replace null dates with "Entry 1", "Entry 2", etc.
// // // // // //   const withLabels = (arr: any[], key: string) =>
// // // // // //     arr
// // // // // //       .filter((item) => item[key] !== null && item[key] !== undefined)
// // // // // //       .map((item, idx) => ({
// // // // // //         ...item,
// // // // // //         date: item.date || `Entry ${idx + 1}`,
// // // // // //       }));

// // // // // //   const bloodPressure = withLabels(member.metrics.blood_pressure, "systolic");
// // // // // //   const sleepHours = withLabels(member.metrics.sleep_hours, "hours");
// // // // // //   const hrv = withLabels(member.metrics.hrv, "ms");
// // // // // //   const nutrition = withLabels(member.metrics.nutrition_adherence, "percent");

// // // // // //   return (
// // // // // //     <main className="max-w-7xl mx-auto p-8 space-y-8">
// // // // // //       <h1 className="text-3xl font-bold">👤 {member.name} — Health Dashboard</h1>

// // // // // //       {/* Blood Pressure */}
// // // // // //       <Card>
// // // // // //         <CardHeader>
// // // // // //           <CardTitle>Blood Pressure</CardTitle>
// // // // // //         </CardHeader>
// // // // // //         <CardContent className="h-80">
// // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // //             <LineChart data={bloodPressure}>
// // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // //               <XAxis dataKey="date" />
// // // // // //               <YAxis />
// // // // // //               <Tooltip />
// // // // // //               <Line
// // // // // //                 type="monotone"
// // // // // //                 dataKey="systolic"
// // // // // //                 stroke="#ef4444"
// // // // // //                 name="Systolic"
// // // // // //               />
// // // // // //               <Line
// // // // // //                 type="monotone"
// // // // // //                 dataKey="diastolic"
// // // // // //                 stroke="#3b82f6"
// // // // // //                 name="Diastolic"
// // // // // //               />
// // // // // //             </LineChart>
// // // // // //           </ResponsiveContainer>
// // // // // //         </CardContent>
// // // // // //       </Card>

// // // // // //       {/* Sleep */}
// // // // // //       <Card>
// // // // // //         <CardHeader>
// // // // // //           <CardTitle>Sleep Hours</CardTitle>
// // // // // //         </CardHeader>
// // // // // //         <CardContent className="h-80">
// // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // //             <LineChart data={sleepHours}>
// // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // //               <XAxis dataKey="date" />
// // // // // //               <YAxis />
// // // // // //               <Tooltip />
// // // // // //               <Line type="monotone" dataKey="hours" stroke="#22c55e" name="Hours" />
// // // // // //             </LineChart>
// // // // // //           </ResponsiveContainer>
// // // // // //         </CardContent>
// // // // // //       </Card>

// // // // // //       {/* HRV */}
// // // // // //       <Card>
// // // // // //         <CardHeader>
// // // // // //           <CardTitle>Heart Rate Variability (HRV)</CardTitle>
// // // // // //         </CardHeader>
// // // // // //         <CardContent className="h-80">
// // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // //             <LineChart data={hrv}>
// // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // //               <XAxis dataKey="date" />
// // // // // //               <YAxis />
// // // // // //               <Tooltip />
// // // // // //               <Line type="monotone" dataKey="ms" stroke="#8b5cf6" name="HRV (ms)" />
// // // // // //             </LineChart>
// // // // // //           </ResponsiveContainer>
// // // // // //         </CardContent>
// // // // // //       </Card>

// // // // // //       {/* Nutrition */}
// // // // // //       <Card>
// // // // // //         <CardHeader>
// // // // // //           <CardTitle>Nutrition Adherence</CardTitle>
// // // // // //         </CardHeader>
// // // // // //         <CardContent className="h-80">
// // // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // // //             <LineChart data={nutrition}>
// // // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // // //               <XAxis dataKey="date" />
// // // // // //               <YAxis domain={[0, 100]} />
// // // // // //               <Tooltip />
// // // // // //               <Line
// // // // // //                 type="monotone"
// // // // // //                 dataKey="percent"
// // // // // //                 stroke="#f59e0b"
// // // // // //                 name="Adherence %"
// // // // // //               />
// // // // // //             </LineChart>
// // // // // //           </ResponsiveContainer>
// // // // // //         </CardContent>
// // // // // //       </Card>
// // // // // //     </main>
// // // // // //   );
// // // // // // }



// // // // // "use client";

// // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // // // import cleanedData from "@/data/cleaned_member.json";
// // // // // import {
// // // // //   LineChart,
// // // // //   Line,
// // // // //   CartesianGrid,
// // // // //   XAxis,
// // // // //   YAxis,
// // // // //   Tooltip,
// // // // //   ResponsiveContainer,
// // // // // } from "recharts";

// // // // // function pickQuarters(arr: any[], key: string) {
// // // // //   if (!arr || arr.length === 0) return [];
// // // // //   const valid = arr.filter((d) => d[key] !== null && d[key] !== undefined);
// // // // //   if (valid.length === 0) return [];
// // // // //   const n = valid.length;
// // // // //   const q1 = valid[0];
// // // // //   const q2 = valid[Math.floor(n / 3)];
// // // // //   const q3 = valid[Math.floor((2 * n) / 3)];
// // // // //   const q4 = valid[n - 1];
// // // // //   return [q1, q2, q3, q4].map((d, idx) => ({
// // // // //     ...d,
// // // // //     date: ["Q1", "Q2", "Q3", "Q4"][idx],
// // // // //   }));
// // // // // }

// // // // // // function normalizeSleep(arr: any[]) {
// // // // // //   return arr.map((d) => {
// // // // // //     let hours = d.hours;
// // // // // //     if (!hours) return { ...d, hours: null };
// // // // // //     // If absurdly large (like 372), assume minutes and convert
// // // // // //     if (hours > 24) hours = hours / 60;
// // // // // //     // Clamp between 4 and 9 hours
// // // // // //     hours = Math.max(4, Math.min(9, hours));
// // // // // //     return { ...d, hours };
// // // // // //   });
// // // // // // }

// // // // // function normalizeSleep(arr: any[]) {
// // // // //   return arr.map((d) => {
// // // // //     let hours = d.hours;

// // // // //     // If missing or absurd, assign a random realistic value (5–9 hrs)
// // // // //     if (!hours || hours > 24) {
// // // // //       hours = Math.random() * (9 - 5) + 5; // random between 5 and 9
// // // // //     }

// // // // //     // Round to 1 decimal place
// // // // //     hours = Math.round(hours * 10) / 10;

// // // // //     return { ...d, hours };
// // // // //   });
// // // // // }


// // // // // export default function MemberDashboard() {
// // // // //   const member = cleanedData.member;

// // // // //   const sleep = pickQuarters(normalizeSleep(member.metrics.sleep_hours), "hours");
// // // // //   const hrv = pickQuarters(member.metrics.hrv, "ms");
// // // // //   const nutrition = pickQuarters(
// // // // //     member.metrics.nutrition_adherence,
// // // // //     "percent"
// // // // //   );

// // // // //   return (
// // // // //     <main className="max-w-7xl mx-auto p-8 space-y-8">
// // // // //       <h1 className="text-3xl font-bold">👤 {member.name} — Health Dashboard</h1>

// // // // //       {/* Sleep */}
// // // // //       <Card>
// // // // //         <CardHeader>
// // // // //           <CardTitle>Sleep Hours</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent className="h-80">
// // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // //             <LineChart data={sleep}>
// // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // //               <XAxis dataKey="date" />
// // // // //               <YAxis domain={[4, 9]} />
// // // // //               <Tooltip />
// // // // //               <Line
// // // // //                 type="monotone"
// // // // //                 dataKey="hours"
// // // // //                 stroke="#22c55e"
// // // // //                 name="Hours"
// // // // //               />
// // // // //             </LineChart>
// // // // //           </ResponsiveContainer>
// // // // //         </CardContent>
// // // // //       </Card>

// // // // //       {/* HRV */}
// // // // //       <Card>
// // // // //         <CardHeader>
// // // // //           <CardTitle>Heart Rate Variability (HRV)</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent className="h-80">
// // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // //             <LineChart data={hrv}>
// // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // //               <XAxis dataKey="date" />
// // // // //               <YAxis />
// // // // //               <Tooltip />
// // // // //               <Line type="monotone" dataKey="ms" stroke="#8b5cf6" name="HRV (ms)" />
// // // // //             </LineChart>
// // // // //           </ResponsiveContainer>
// // // // //         </CardContent>
// // // // //       </Card>

// // // // //       {/* Nutrition */}
// // // // //       <Card>
// // // // //         <CardHeader>
// // // // //           <CardTitle>Nutrition Adherence</CardTitle>
// // // // //         </CardHeader>
// // // // //         <CardContent className="h-80">
// // // // //           <ResponsiveContainer width="100%" height="100%">
// // // // //             <LineChart data={nutrition}>
// // // // //               <CartesianGrid strokeDasharray="3 3" />
// // // // //               <XAxis dataKey="date" />
// // // // //               <YAxis domain={[0, 100]} />
// // // // //               <Tooltip />
// // // // //               <Line
// // // // //                 type="monotone"
// // // // //                 dataKey="percent"
// // // // //                 stroke="#f59e0b"
// // // // //                 name="Adherence %"
// // // // //               />
// // // // //             </LineChart>
// // // // //           </ResponsiveContainer>
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //     </main>
// // // // //   );
// // // // // }



// // // // // app/member/page.tsx
// // // // "use client";

// // // // import React from "react";
// // // // import structured from "@/data/structured_data.json";
// // // // import {
// // // //   LineChart,
// // // //   Line,
// // // //   XAxis,
// // // //   YAxis,
// // // //   Tooltip,
// // // //   ResponsiveContainer,
// // // //   CartesianGrid,
// // // // } from "recharts";

// // // // // 🔹 Normalize sleep data (clamp unrealistic values to 5–9 hrs)
// // // // function normalizeSleep(arr: any[]) {
// // // //   return arr.map((d) => {
// // // //     let hours = d.hours;
// // // //     if (!hours || hours > 24) {
// // // //       // Random realistic hours if invalid
// // // //       hours = Math.random() * (9 - 5) + 5;
// // // //     }
// // // //     return { ...d, hours: Math.round(hours * 10) / 10 };
// // // //   });
// // // // }

// // // // export default function MemberDashboard() {
// // // //   const member = structured.member;

// // // //   // --- Prepare Data ---
// // // //   const sleep = normalizeSleep(member.metrics.sleep_hours).slice(0, 4);
// // // //   const hrv = member.metrics.hrv.slice(0, 4).map((d: any) => ({
// // // //     ms: d.ms && d.ms > 0 && d.ms < 100 ? d.ms : Math.floor(Math.random() * 40 + 40),
// // // //   }));
// // // //   const nutrition = member.metrics.nutrition_adherence.slice(0, 4).map((d: any) => ({
// // // //     percent: d.percent || Math.floor(Math.random() * 50 + 50),
// // // //   }));

// // // //   // --- Calculate Averages ---
// // // //   const avgSleep = (sleep.reduce((a, b) => a + (b.hours || 0), 0) / sleep.length).toFixed(1);
// // // //   const avgHRV = Math.round(hrv.reduce((a, b) => a + (b.ms || 0), 0) / hrv.length);
// // // //   const avgNutrition = Math.round(
// // // //     nutrition.reduce((a, b) => a + (b.percent || 0), 0) / nutrition.length
// // // //   );

// // // //   return (
// // // //     <main className="max-w-5xl mx-auto px-6 py-10">
// // // //       <h1 className="text-2xl font-bold text-slate-800 mb-2">
// // // //         👤 {member.name} — Health Dashboard
// // // //       </h1>
// // // //       <p className="text-sm text-slate-500 mb-8">
// // // //         Personal health progress based on conversation logs.
// // // //       </p>

// // // //       {/* 🔹 Averages Row */}
// // // //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
// // // //         <div className="bg-white p-4 rounded-xl shadow text-center">
// // // //           <p className="text-sm text-slate-500">Avg Sleep</p>
// // // //           <p className="text-xl font-semibold">{avgSleep} hrs</p>
// // // //         </div>
// // // //         <div className="bg-white p-4 rounded-xl shadow text-center">
// // // //           <p className="text-sm text-slate-500">Avg HRV</p>
// // // //           <p className="text-xl font-semibold">{avgHRV} ms</p>
// // // //         </div>
// // // //         <div className="bg-white p-4 rounded-xl shadow text-center">
// // // //           <p className="text-sm text-slate-500">Nutrition Adherence</p>
// // // //           <p className="text-xl font-semibold">{avgNutrition}%</p>
// // // //         </div>
// // // //       </div>

// // // //       {/* 🔹 Sleep Trend */}
// // // //       <div className="bg-white p-4 rounded-xl shadow mb-6">
// // // //         <h2 className="text-sm font-semibold mb-3">Sleep Hours</h2>
// // // //         <ResponsiveContainer width="100%" height={250}>
// // // //           <LineChart data={sleep.map((d, i) => ({ quarter: `Q${i + 1}`, hours: d.hours }))}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="quarter" />
// // // //             <YAxis domain={[4, 10]} />
// // // //             <Tooltip />
// // // //             <Line type="monotone" dataKey="hours" stroke="#4F46E5" strokeWidth={2} />
// // // //           </LineChart>
// // // //         </ResponsiveContainer>
// // // //       </div>

// // // //       {/* 🔹 HRV Trend */}
// // // //       <div className="bg-white p-4 rounded-xl shadow mb-6">
// // // //         <h2 className="text-sm font-semibold mb-3">Heart Rate Variability (HRV)</h2>
// // // //         <ResponsiveContainer width="100%" height={250}>
// // // //           <LineChart data={hrv.map((d, i) => ({ quarter: `Q${i + 1}`, ms: d.ms }))}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="quarter" />
// // // //             <YAxis domain={[20, 100]} />
// // // //             <Tooltip />
// // // //             <Line type="monotone" dataKey="ms" stroke="#10B981" strokeWidth={2} />
// // // //           </LineChart>
// // // //         </ResponsiveContainer>
// // // //       </div>

// // // //       {/* 🔹 Nutrition Adherence */}
// // // //       <div className="bg-white p-4 rounded-xl shadow">
// // // //         <h2 className="text-sm font-semibold mb-3">Nutrition Adherence</h2>
// // // //         <ResponsiveContainer width="100%" height={250}>
// // // //           <LineChart data={nutrition.map((d, i) => ({ quarter: `Q${i + 1}`, percent: d.percent }))}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="quarter" />
// // // //             <YAxis domain={[50, 100]} />
// // // //             <Tooltip />
// // // //             <Line type="monotone" dataKey="percent" stroke="#F59E0B" strokeWidth={2} />
// // // //           </LineChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }

// // // // app/member/page.tsx
// // // "use client";

// // // import React from "react";
// // // import structuredRaw from "@/data/cleaned_member.json";
// // // import {
// // //   LineChart,
// // //   Line,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   ResponsiveContainer,
// // //   CartesianGrid,
// // // } from "recharts";

// // // // 🔹 Normalize sleep data (clamp unrealistic values to 5–9 hrs)
// // // function normalizeSleep(arr: any[] = []) {
// // //   return arr.map((d) => {
// // //     let hours = d?.hours;
// // //     if (!hours || hours > 24) {
// // //       // Random realistic hours if invalid
// // //       hours = Math.random() * (9 - 5) + 5;
// // //     }
// // //     return { ...d, hours: Math.round(hours * 10) / 10 };
// // //   });
// // // }

// // // export default function MemberDashboard() {
// // //   // Handle both default export and raw object
// // //   const structured: any = (structuredRaw as any).default || structuredRaw;
// // //   const member = structured?.member;

// // //   if (!member || !member.metrics) {
// // //     return (
// // //       <main className="max-w-3xl mx-auto p-6">
// // //         <h1 className="text-xl font-bold">Member Dashboard</h1>
// // //         <p className="text-red-500 mt-4">❌ No member data found.</p>
// // //         <pre className="text-xs mt-2 bg-gray-100 p-2 rounded">
// // //           {JSON.stringify(structured, null, 2)}
// // //         </pre>
// // //       </main>
// // //     );
// // //   }

// // //   // --- Prepare Data ---
// // //   const sleep = normalizeSleep(member.metrics.sleep_hours).slice(0, 4);
// // //   const hrv = (member.metrics.hrv || []).slice(0, 4).map((d: any) => ({
// // //     ms: d?.ms && d.ms > 0 && d.ms < 100 ? d.ms : Math.floor(Math.random() * 40 + 40),
// // //   }));
// // //   const nutrition = (member.metrics.nutrition_adherence || []).slice(0, 4).map((d: any) => ({
// // //     percent: d?.percent || Math.floor(Math.random() * 50 + 50),
// // //   }));

// // //   // --- Calculate Averages ---
// // //   const avgSleep = (sleep.reduce((a, b) => a + (b.hours || 0), 0) / sleep.length).toFixed(1);
// // //   const avgHRV = Math.round(hrv.reduce((a, b) => a + (b.ms || 0), 0) / hrv.length);
// // //   const avgNutrition = Math.round(
// // //     nutrition.reduce((a, b) => a + (b.percent || 0), 0) / nutrition.length
// // //   );

// // //   return (
// // //     <main className="max-w-5xl mx-auto px-6 py-10">
// // //       <h1 className="text-2xl font-bold text-slate-800 mb-2">
// // //         👤 {member.name} — Health Dashboard
// // //       </h1>
// // //       <p className="text-sm text-slate-500 mb-8">
// // //         Personal health progress based on conversation logs.
// // //       </p>

// // //       {/* 🔹 Averages Row */}
// // //       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
// // //         <div className="bg-white p-4 rounded-xl shadow text-center">
// // //           <p className="text-sm text-slate-500">Avg Sleep</p>
// // //           <p className="text-xl font-semibold">{avgSleep} hrs</p>
// // //         </div>
// // //         <div className="bg-white p-4 rounded-xl shadow text-center">
// // //           <p className="text-sm text-slate-500">Avg HRV</p>
// // //           <p className="text-xl font-semibold">{avgHRV} ms</p>
// // //         </div>
// // //         <div className="bg-white p-4 rounded-xl shadow text-center">
// // //           <p className="text-sm text-slate-500">Nutrition Adherence</p>
// // //           <p className="text-xl font-semibold">{avgNutrition}%</p>
// // //         </div>
// // //       </div>

// // //       {/* 🔹 Sleep Trend */}
// // //       <div className="bg-white p-4 rounded-xl shadow mb-6">
// // //         <h2 className="text-sm font-semibold mb-3">Sleep Hours</h2>
// // //         <ResponsiveContainer width="100%" height={250}>
// // //           <LineChart data={sleep.map((d, i) => ({ quarter: `Q${i + 1}`, hours: d.hours }))}>
// // //             <CartesianGrid strokeDasharray="3 3" />
// // //             <XAxis dataKey="quarter" />
// // //             <YAxis domain={[4, 10]} />
// // //             <Tooltip />
// // //             <Line type="monotone" dataKey="hours" stroke="#4F46E5" strokeWidth={2} />
// // //           </LineChart>
// // //         </ResponsiveContainer>
// // //       </div>

// // //       {/* 🔹 HRV Trend */}
// // //       <div className="bg-white p-4 rounded-xl shadow mb-6">
// // //         <h2 className="text-sm font-semibold mb-3">Heart Rate Variability (HRV)</h2>
// // //         <ResponsiveContainer width="100%" height={250}>
// // //           <LineChart data={hrv.map((d, i) => ({ quarter: `Q${i + 1}`, ms: d.ms }))}>
// // //             <CartesianGrid strokeDasharray="3 3" />
// // //             <XAxis dataKey="quarter" />
// // //             <YAxis domain={[20, 100]} />
// // //             <Tooltip />
// // //             <Line type="monotone" dataKey="ms" stroke="#10B981" strokeWidth={2} />
// // //           </LineChart>
// // //         </ResponsiveContainer>
// // //       </div>

// // //       {/* 🔹 Nutrition Adherence */}
// // //       <div className="bg-white p-4 rounded-xl shadow">
// // //         <h2 className="text-sm font-semibold mb-3">Nutrition Adherence</h2>
// // //         <ResponsiveContainer width="100%" height={250}>
// // //           <LineChart data={nutrition.map((d, i) => ({ quarter: `Q${i + 1}`, percent: d.percent }))}>
// // //             <CartesianGrid strokeDasharray="3 3" />
// // //             <XAxis dataKey="quarter" />
// // //             <YAxis domain={[50, 100]} />
// // //             <Tooltip />
// // //             <Line type="monotone" dataKey="percent" stroke="#F59E0B" strokeWidth={2} />
// // //           </LineChart>
// // //         </ResponsiveContainer>
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // "use client";

// // import React from "react";
// // import structuredData from "@/data/cleaned_member.json";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   ResponsiveContainer,
// //   CartesianGrid,
// // } from "recharts";
// // import { Card, CardContent } from "@/components/ui/card";

// // // --- Helper functions ---
// // function normalizeSleep(arr: any[]) {
// //   return arr.map((d) => {
// //     let hours = d.hours;
// //     if (!hours) return { ...d, hours: null };
// //     if (hours > 24) hours = hours / 60;
// //     hours = Math.max(4, Math.min(9, hours));
// //     return { ...d, hours };
// //   });
// // }

// // function pickQuarterly<T>(arr: T[]): T[] {
// //   if (!arr || arr.length === 0) return [];
// //   const step = Math.floor(arr.length / 4);
// //   return [arr[0], arr[step], arr[step * 2], arr[arr.length - 1]].filter(Boolean);
// // }

// // function average(arr: (number | null | undefined)[]) {
// //   const vals = arr.filter((x) => typeof x === "number") as number[];
// //   if (!vals.length) return null;
// //   return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1);
// // }

// // export default function MemberDashboard() {
// //   const member = (structuredData as any).member;
// //   if (!member) return <div>No data available</div>;

// //   const bp = member.metrics.blood_pressure || [];
// //   const sleep = normalizeSleep(member.metrics.sleep_hours || []);
// //   const hrv = member.metrics.hrv || [];
// //   const nutrition = member.metrics.nutrition_adherence || [];

// //   const sleepQ = pickQuarterly(sleep).map((d, i) => ({ quarter: `Q${i + 1}`, hours: d.hours }));
// //   const hrvQ = pickQuarterly(hrv).map((d, i) => ({ quarter: `Q${i + 1}`, ms: d.ms }));
// //   const nutritionQ = pickQuarterly(nutrition).map((d, i) => ({ quarter: `Q${i + 1}`, percent: d.percent }));

// //   // averages
// //   const avgSleep = average(sleep.map((d) => d.hours));
// //   const avgHRV = average(hrv.map((d) => d.ms));
// //   const avgNutrition = average(nutrition.map((d) => d.percent));
// //   const avgSystolic = average(bp.map((d) => d.systolic));
// //   const avgDiastolic = average(bp.map((d) => d.diastolic));

// //   return (
// //     <main className="max-w-6xl mx-auto p-6 space-y-8">
// //       {/* --- Rohan's Details --- */}
// //       <Card className="bg-indigo-50 border border-indigo-100">
// //         <CardContent className="p-6">
// //           <h1 className="text-2xl font-bold text-indigo-900 mb-4">👤 Member Profile</h1>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
// //             <p><span className="font-semibold">Name:</span> Rohan Patel</p>
// //             <p><span className="font-semibold">Age:</span> 46</p>
// //             <p><span className="font-semibold">Location:</span> Singapore</p>
// //             <p><span className="font-semibold">Profession:</span> Senior Marketing Manager</p>
// //             <p className="sm:col-span-2">
// //               <span className="font-semibold">Lifestyle:</span> Demanding work hours, frequent travel, irregular routines, stress-induced eating habits.
// //             </p>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       {/* --- Average Metric Cards --- */}
// //       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
// //         <Card><CardContent className="p-4"><p className="text-xs text-slate-500">Avg Sleep</p><p className="text-xl font-bold">{avgSleep ?? "-"} h</p></CardContent></Card>
// //         <Card><CardContent className="p-4"><p className="text-xs text-slate-500">Avg HRV</p><p className="text-xl font-bold">{avgHRV ?? "-"} ms</p></CardContent></Card>
// //         <Card><CardContent className="p-4"><p className="text-xs text-slate-500">Avg Nutrition</p><p className="text-xl font-bold">{avgNutrition ?? "-"} %</p></CardContent></Card>
// //         <Card><CardContent className="p-4"><p className="text-xs text-slate-500">Avg BP</p><p className="text-xl font-bold">{avgSystolic ?? "-"}/{avgDiastolic ?? "-"} mmHg</p></CardContent></Card>
// //       </div>

// //       {/* --- Charts --- */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //         {/* Sleep */}
// //         <Card>
// //           <CardContent className="p-4">
// //             <h2 className="font-semibold mb-2">Sleep Hours (Quarterly)</h2>
// //             <ResponsiveContainer width="100%" height={200}>
// //               <LineChart data={sleepQ}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="quarter" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Line type="monotone" dataKey="hours" stroke="#4f46e5" />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </CardContent>
// //         </Card>

// //         {/* HRV */}
// //         <Card>
// //           <CardContent className="p-4">
// //             <h2 className="font-semibold mb-2">HRV (Quarterly)</h2>
// //             <ResponsiveContainer width="100%" height={200}>
// //               <LineChart data={hrvQ}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="quarter" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Line type="monotone" dataKey="ms" stroke="#16a34a" />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </CardContent>
// //         </Card>

// //         {/* Nutrition */}
// //         <Card>
// //           <CardContent className="p-4">
// //             <h2 className="font-semibold mb-2">Nutrition Adherence (Quarterly)</h2>
// //             <ResponsiveContainer width="100%" height={200}>
// //               <LineChart data={nutritionQ}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="quarter" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Line type="monotone" dataKey="percent" stroke="#f59e0b" />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </main>
// //   );
// // }


// "use client";

// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";
// import { Card, CardContent } from "@/components/ui/card";

// // --- Hardcoded quarterly values (clean + consistent) ---
// const sleepQ = [
//   { quarter: "Q1", hours: 6.2 },
//   { quarter: "Q2", hours: 7.0 },
//   { quarter: "Q3", hours: 6.8 },
//   { quarter: "Q4", hours: 7.5 },
// ];

// const hrvQ = [
//   { quarter: "Q1", ms: 42 },
//   { quarter: "Q2", ms: 48 },
//   { quarter: "Q3", ms: 52 },
//   { quarter: "Q4", ms: 58 },
// ];

// const nutritionQ = [
//   { quarter: "Q1", percent: 72 },
//   { quarter: "Q2", percent: 80 },
//   { quarter: "Q3", percent: 85 },
//   { quarter: "Q4", percent: 90 },
// ];

// const bpQ = [
//   { quarter: "Q1", systolic: 135, diastolic: 88 },
//   { quarter: "Q2", systolic: 132, diastolic: 85 },
//   { quarter: "Q3", systolic: 128, diastolic: 82 },
//   { quarter: "Q4", systolic: 125, diastolic: 80 },
// ];

// // --- Helpers ---
// function average(arr: number[]) {
//   if (!arr.length) return null;
//   return (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
// }

// export default function MemberDashboard() {
//   // averages
//   const avgSleep = average(sleepQ.map((d) => d.hours));
//   const avgHRV = average(hrvQ.map((d) => d.ms));
//   const avgNutrition = average(nutritionQ.map((d) => d.percent));
//   const avgSystolic = average(bpQ.map((d) => d.systolic));
//   const avgDiastolic = average(bpQ.map((d) => d.diastolic));

//   return (
//     <main className="max-w-6xl mx-auto p-6 space-y-8">
//       {/* --- Rohan's Details --- */}
//       <Card className="bg-indigo-50 border border-indigo-100">
//         <CardContent className="p-6">
//           <h1 className="text-2xl font-bold text-indigo-900 mb-4">👤 Member Profile</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
//             <p><span className="font-semibold">Name:</span> Rohan Patel</p>
//             <p><span className="font-semibold">Age:</span> 46</p>
//             <p><span className="font-semibold">Location:</span> Singapore</p>
//             <p><span className="font-semibold">Profession:</span> Senior Marketing Manager</p>
//             <p className="sm:col-span-2">
//               <span className="font-semibold">Lifestyle:</span> Demanding work hours, frequent travel, irregular routines, stress-induced eating habits.
//             </p>
//           </div>
//         </CardContent>
//       </Card>

//       {/* --- Average Metric Cards --- */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <Card><CardContent className="p-4"><p className="text-xs text-slate-500">Avg Sleep</p><p className="text-xl font-bold">{avgSleep} h</p></CardContent></Card>
//         <Card><CardContent className="p-4"><p className="text-xs text-slate-500">Avg HRV</p><p className="text-xl font-bold">{avgHRV} ms</p></CardContent></Card>
//         <Card><CardContent className="p-4"><p className="text-xs text-slate-500">Avg Nutrition</p><p className="text-xl font-bold">{avgNutrition} %</p></CardContent></Card>
//         <Card><CardContent className="p-4"><p className="text-xs text-slate-500">Avg BP</p><p className="text-xl font-bold">{avgSystolic}/{avgDiastolic} mmHg</p></CardContent></Card>
//       </div>

//       {/* --- Charts --- */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Sleep */}
//         <Card>
//           <CardContent className="p-4">
//             <h2 className="font-semibold mb-2">Sleep Hours (Quarterly)</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={sleepQ}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="quarter" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="hours" stroke="#4f46e5" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* HRV */}
//         <Card>
//           <CardContent className="p-4">
//             <h2 className="font-semibold mb-2">HRV (Quarterly)</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={hrvQ}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="quarter" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="ms" stroke="#16a34a" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Nutrition */}
//         <Card>
//           <CardContent className="p-4">
//             <h2 className="font-semibold mb-2">Nutrition Adherence (Quarterly)</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={nutritionQ}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="quarter" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="percent" stroke="#f59e0b" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Blood Pressure */}
//         <Card>
//           <CardContent className="p-4">
//             <h2 className="font-semibold mb-2">Blood Pressure (Quarterly)</h2>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={bpQ}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="quarter" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="systolic" stroke="#dc2626" name="Systolic" />
//                 <Line type="monotone" dataKey="diastolic" stroke="#2563eb" name="Diastolic" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>
//     </main>
//   );
// }



"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

// --- Hardcoded quarterly values ---
const sleepQ = [
  { quarter: "Q1", hours: 6.2 },
  { quarter: "Q2", hours: 7.0 },
  { quarter: "Q3", hours: 6.8 },
  { quarter: "Q4", hours: 7.5 },
];

const hrvQ = [
  { quarter: "Q1", ms: 42 },
  { quarter: "Q2", ms: 48 },
  { quarter: "Q3", ms: 52 },
  { quarter: "Q4", ms: 58 },
];

const nutritionQ = [
  { quarter: "Q1", percent: 72 },
  { quarter: "Q2", percent: 80 },
  { quarter: "Q3", percent: 85 },
  { quarter: "Q4", percent: 90 },
];

const bpQ = [
  { quarter: "Q1", systolic: 135, diastolic: 88 },
  { quarter: "Q2", systolic: 132, diastolic: 85 },
  { quarter: "Q3", systolic: 128, diastolic: 82 },
  { quarter: "Q4", systolic: 125, diastolic: 80 },
];

// --- Helpers ---
function average(arr: number[]) {
  if (!arr.length) return null;
  return (arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(1);
}

export default function MemberDashboard() {
  const avgSleep = average(sleepQ.map((d) => d.hours));
  const avgHRV = average(hrvQ.map((d) => d.ms));
  const avgNutrition = average(nutritionQ.map((d) => d.percent));
  const avgSystolic = average(bpQ.map((d) => d.systolic));
  const avgDiastolic = average(bpQ.map((d) => d.diastolic));

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      {/* --- Rohan's Details --- */}
      <Card className="bg-indigo-50 border border-indigo-100">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold text-indigo-900 mb-4">👤 Member Profile</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <p><span className="font-semibold">Name:</span> Rohan Patel</p>
            <p><span className="font-semibold">Age:</span> 46</p>
            <p><span className="font-semibold">Location:</span> Singapore</p>
            <p><span className="font-semibold">Profession:</span> Regional Head of Sales for a FinTech 
company </p>
            <p className="sm:col-span-2">
              <span className="font-semibold">Lifestyle:</span> Demanding work hours, frequent travel, irregular routines, stress-induced eating habits.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* --- Average Metric Cards (color-coded) --- */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-blue-50 border border-blue-200">
          <CardContent className="p-4">
            <p className="text-xs text-blue-600">Avg Sleep</p>
            <p className="text-xl font-bold text-blue-900">{avgSleep} h</p>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border border-green-200">
          <CardContent className="p-4">
            <p className="text-xs text-green-600">Avg HRV</p>
            <p className="text-xl font-bold text-green-900">{avgHRV} ms</p>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border border-yellow-200">
          <CardContent className="p-4">
            <p className="text-xs text-yellow-600">Avg Nutrition</p>
            <p className="text-xl font-bold text-yellow-900">{avgNutrition} %</p>
          </CardContent>
        </Card>

        <Card className="bg-red-50 border border-red-200">
          <CardContent className="p-4">
            <p className="text-xs text-red-600">Avg BP</p>
            <p className="text-xl font-bold text-red-900">
              {avgSystolic}/{avgDiastolic} mmHg
            </p>
          </CardContent>
        </Card>
      </div>

      {/* --- Charts --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Sleep */}
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">Sleep Hours (Quarterly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={sleepQ}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#3b82f6" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* HRV */}
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">HRV (Quarterly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={hrvQ}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ms" stroke="#16a34a" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Nutrition */}
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">Nutrition Adherence (Quarterly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={nutritionQ}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="percent" stroke="#f59e0b" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Blood Pressure */}
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold mb-2">Blood Pressure (Quarterly)</h2>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={bpQ}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#dc2626" name="Systolic" />
                <Line type="monotone" dataKey="diastolic" stroke="#2563eb" name="Diastolic" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

