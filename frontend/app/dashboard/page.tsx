// // // "use client";

// // // import journeyDataRaw from "@/data/journey.json";
// // // import fullStoryRaw from "@/data/fullStory.json";
// // // import MemberSnapshot from "@/components/MemberSnapshot";
// // // import { parseFullStory, deriveKPIs, extractExperiments } from "@/utils/parseLogs";
// // // import { JourneyData } from "@/types/journey";
// // // import { FullStoryItem } from "@/types/fullStory";
// // // import ExperimentCard from "@/components/ExperimentCard";
// // // import InsightsCard from "@/components/InsightsCard";
// // // import {
// // //   LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
// // //   BarChart, Bar, PieChart, Pie, Cell,
// // // } from "recharts";
// // // import { format } from "date-fns";
// // // import { Card, CardContent } from "@/components/ui/card";

// // // const journeyData = journeyDataRaw as JourneyData;
// // // const fullStory = fullStoryRaw as FullStoryItem[];

// // // export default function DashboardPage() {
// // //   const parsed = parseFullStory(fullStory);
// // //   const kpis = deriveKPIs(parsed);
// // //   const experiments = extractExperiments(journeyData);

// // //   // Safe display helpers
// // //   const avgHRVDisplay = kpis.avgHRV ?? "--";
// // //   const latestBPDisplay = kpis.latestBP ? `${kpis.latestBP.systolic}/${kpis.latestBP.diastolic}` : "--";
// // //   const nutritionDisplay = kpis.latestNutrition ?? "--";
// // //   const workoutDisplay = kpis.latestWorkout ?? "--";

// // //   // For charts: format points with readable dates
// // //   const hrvChart = parsed.hrvPoints.map(p => ({ date: format(new Date(p.date), "MMM d"), hrv: p.hrv }));
// // //   const bpChart = parsed.bpPoints.map((p, i) => ({ date: format(new Date(p.date), "MMM d"), systolic: p.systolic, diastolic: p.diastolic }));

// // //   // Insights heuristics (basic)
// // //   const insights: string[] = [];
// // //   if (kpis.avgHRV && kpis.avgHRV < 45) insights.push(`Avg HRV is ${kpis.avgHRV} ms — moderate; consider sleep / recovery interventions.`);
// // //   if (kpis.latestBP && (kpis.latestBP.systolic >= 130 || kpis.latestBP.diastolic >= 80)) insights.push(`Latest BP ${latestBPDisplay} — elevated; clinical focus on cardiovascular risk justified.`);
// // //   if (nutritionDisplay !== "--" && nutritionDisplay < 80) insights.push(`Nutrition adherence is ${nutritionDisplay}%; consider tighter meal support on travel days.`);
// // //   if (parsed.hrvPoints.length === 0) insights.push(`No HRV points available in full story logs — check wearable syncing.`);

// // //   return (
// // //     <div className="p-8 bg-gray-50 min-h-screen">
// // //       <MemberSnapshot member={journeyData.member} />

// // //       {/* KPI row */}
// // //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
// // //         <Card><CardContent className="text-center"><p className="text-gray-500">Avg HRV</p><p className="text-2xl font-bold text-blue-600">{avgHRVDisplay}{avgHRVDisplay !== "--" && " ms"}</p></CardContent></Card>
// // //         <Card><CardContent className="text-center"><p className="text-gray-500">Latest BP</p><p className="text-2xl font-bold text-red-600">{latestBPDisplay}{latestBPDisplay !== "--" && " mmHg"}</p></CardContent></Card>
// // //         <Card><CardContent className="text-center"><p className="text-gray-500">Nutrition</p><p className="text-2xl font-bold text-green-600">{nutritionDisplay !== "--" ? `${nutritionDisplay}%` : "--"}</p></CardContent></Card>
// // //         <Card><CardContent className="text-center"><p className="text-gray-500">Workout</p><p className="text-2xl font-bold text-purple-600">{workoutDisplay !== "--" ? `${workoutDisplay}%` : "--"}</p></CardContent></Card>
// // //       </div>

// // //       {/* Charts */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // //         <Card>
// // //           <CardContent>
// // //             <h3 className="font-semibold mb-3">HRV Trend</h3>
// // //             <ResponsiveContainer width="100%" height={250}>
// // //               <LineChart data={hrvChart}>
// // //                 <CartesianGrid strokeDasharray="3 3" />
// // //                 <XAxis dataKey="date" />
// // //                 <YAxis />
// // //                 <Tooltip />
// // //                 <Line type="monotone" dataKey="hrv" stroke="#2563eb" strokeWidth={2} dot />
// // //               </LineChart>
// // //             </ResponsiveContainer>
// // //           </CardContent>
// // //         </Card>

// // //         <Card>
// // //           <CardContent>
// // //             <h3 className="font-semibold mb-3">Blood Pressure</h3>
// // //             <ResponsiveContainer width="100%" height={250}>
// // //               <BarChart data={bpChart}>
// // //                 <CartesianGrid strokeDasharray="3 3" />
// // //                 <XAxis dataKey="date" />
// // //                 <YAxis />
// // //                 <Tooltip />
// // //                 <Bar dataKey="systolic" fill="#ef4444" />
// // //                 <Bar dataKey="diastolic" fill="#facc15" />
// // //               </BarChart>
// // //             </ResponsiveContainer>
// // //           </CardContent>
// // //         </Card>
// // //       </div>

// // //       {/* Experiments + Insights */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //         <div className="md:col-span-2 space-y-4">
// // //           <h3 className="font-semibold">Experiments</h3>
// // //           <div className="grid grid-cols-1 gap-3">
// // //             {experiments.length === 0 && <div className="text-sm text-gray-500">No experiments detected in episodes.</div>}
// // //             {experiments.map((ex) => (
// // //               <ExperimentCard key={ex.id} exp={ex} onWhy={(id) => { /* already shows sourceCommunication inline */ }} />
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <div>
// // //           <InsightsCard insights={insights} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // // app/dashboard/page.tsx
// // import Link from "next/link";

// // export default function DashboardPage() {
// //   return (
// //     <main className="max-w-5xl mx-auto p-8">
// //       <h1 className="text-3xl font-bold mb-8">📊 Dashboard</h1>
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <Link
// //           href="/dashboard/member"
// //           className="block bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
// //         >
// //           <h2 className="text-xl font-semibold mb-2">Member Dashboard</h2>
// //           <p className="text-slate-600 text-sm">Track Rohan’s progress, health metrics, and goals.</p>
// //         </Link>

// //         <Link
// //           href="/dashboard/elyx"
// //           className="block bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
// //         >
// //           <h2 className="text-xl font-semibold mb-2">Elyx Team Dashboard</h2>
// //           <p className="text-slate-600 text-sm">Monitor Elyx team metrics like response time and activity.</p>
// //         </Link>
// //       </div>
// //     </main>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import MemberDashboard from "../member/page";
// import ElyxDashboard from "../elyx/page";
// import { Button } from "@/components/ui/button";

// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState<"member" | "elyx">("member");

//   return (
//     <main className="max-w-screen-2xl mx-auto px-8 py-12">
//       <div className="flex items-center gap-4 mb-8">
//         <Button
//           variant={activeTab === "member" ? "default" : "outline"}
//           onClick={() => setActiveTab("member")}
//         >
//           Member Dashboard
//         </Button>
//         <Button
//           variant={activeTab === "elyx" ? "default" : "outline"}
//           onClick={() => setActiveTab("elyx")}
//         >
//           Elyx Dashboard
//         </Button>
//       </div>

//       {/* Render respective dashboard */}
//       {activeTab === "member" && <MemberDashboard />}
//       {activeTab === "elyx" && <ElyxDashboard />}
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import MemberDashboard from "@/components/MemberDashboard";
import ElyxDashboard from "@/components/ElyxDashboard";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"member" | "elyx">("member");

  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant={activeTab === "member" ? "default" : "outline"}
          onClick={() => setActiveTab("member")}
        >
          Member Dashboard
        </Button>
        <Button
          variant={activeTab === "elyx" ? "default" : "outline"}
          onClick={() => setActiveTab("elyx")}
        >
          Elyx Dashboard
        </Button>
      </div>

      {/* Render respective dashboard */}
      {activeTab === "member" && <MemberDashboard />}
      {activeTab === "elyx" && <ElyxDashboard />}
    </main>
  );
}
