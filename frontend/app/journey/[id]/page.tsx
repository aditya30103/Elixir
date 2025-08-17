// // // // // // // app/journey/[id]/page.tsx
// // // // // // "use client";

// // // // // // import React from "react";
// // // // // // import Link from "next/link";
// // // // // // import { BookOpen, Target, AlertTriangle, BarChart, CheckCircle, User, ArrowLeft } from "lucide-react";
// // // // // // import { Card } from "@/components/ui/card";

// // // // // // type Episode = {
// // // // // //   id: number;
// // // // // //   title: string;
// // // // // //   weeks: string;
// // // // // //   narrative: string;
// // // // // //   primaryGoals: string[];
// // // // // //   frictionPoints: string[];
// // // // // //   metrics: string[];
// // // // // //   finalOutcomes: string[];
// // // // // //   personaBefore: string;
// // // // // //   personaAfter: string;
// // // // // // };

// // // // // // const EPISODES: Episode[] = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     title: "Episode 1: Establishing the Baseline",
// // // // // //     weeks: "Weeks 1-4",
// // // // // //     narrative: `The journey began by establishing a clear, data-defined baseline for a high-performing individual navigating a high-stress world. Initial biometrics painted a picture of a system under load, with a baseline blood pressure of 136/88 mmHg and visible dips in Heart Rate Variability (HRV) tied to acute work stressors. The Elyx team initiated a foundational protocol targeting systemic inflammation and stress resilience through nutrition, mobility, and targeted supplementation. From the outset, the member revealed a key trait: a deep-seated need for evidence. He consistently requested the "why" behind the plan, demanding clinical data and the direct physiological mechanisms linking interventions to outcomes.

// // // // // // This foundational period was immediately put to the test with a high-stakes business trip to London in Week 4. The trip served as a powerful real-world stress test, and the data captured its impact with stark clarity. Recovery metrics plummeted by 25-30%, average blood pressure rose, and a powerful correlation emerged: as HRV dropped by 27.6% through the week, subjective fatigue scores soared by 167%. While the member felt the trip was a physiological "write-off," it provided the most critical insight of the month: a quantifiable measure of the true cost of travel. This data transformed the conversation from subjective feelings to objective facts, paving the way for a new, targeted strategy to manage anticipatory stress and accelerate post-travel recovery.`,
// // // // // //     primaryGoals: [
// // // // // //       "Establish a comprehensive physiological baseline",
// // // // // //       "Build foundational habits in nutrition and mobility",
// // // // // //       "Begin buffering the effects of a high-stress professional life",
// // // // // //     ],
// // // // // //     frictionPoints: [
// // // // // //       "Member requests deep scientific evidence and mechanism for every intervention",
// // // // // //       "Adherence challenges during social events and travel (deviations during client dinners)",
// // // // // //     ],
// // // // // //     metrics: [
// // // // // //       "Initial baseline: BP 136/88 mmHg; Resting HR ~58 bpm; Avg HRV ~42 ms",
// // // // // //       "London travel impact: recovery metrics dropped ~25–30%; avg BP rose to 138/88 mmHg",
// // // // // //       "Observed correlation: HRV ↓27.6% ↔ subjective fatigue ↑167%",
// // // // // //     ],
// // // // // //     finalOutcomes: [
// // // // // //       "Clear data-validated baseline created",
// // // // // //       "Anticipatory stress hypothesis (15–20% dip in HRV before travel) formulated",
// // // // // //       "Post-Travel Circadian Realignment and box-breathing experiment initiated",
// // // // // //     ],
// // // // // //     personaBefore:
// // // // // //       "Proactive and data-driven but lacked a coordinated plan; experiencing chronic stress markers.",
// // // // // //     personaAfter:
// // // // // //       "Engaged with a data-validated baseline and moving toward targeted interventions; demands evidence.",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 2,
// // // // // //     title: "Episode 2: The First Experiment & The Clinical Baseline",
// // // // // //     weeks: "Weeks 5-9",
// // // // // //     narrative:
// // // // // //       "Following initial onboarding, this five-week period emphasized quiet consistency—sleep as the primary lever. Improvements were incremental but meaningful. By focusing on sleep consistency, blood pressure and HRV began to improve.",
// // // // // //     primaryGoals: ["Establish a stable clinical baseline", "Improve sleep consistency"],
// // // // // //     frictionPoints: ["No major friction recorded; phase of high adherence"],
// // // // // //     metrics: ["BP improved from 138/88 to 134/85 by Week 8", "HRV increased from 38 ms to 42 ms", "Sleep consistency up from 75% to 82%"],
// // // // // //     finalOutcomes: ["New, healthier physiological baseline established"],
// // // // // //     personaBefore: "Inconsistent sleep and variable biometrics",
// // // // // //     personaAfter: "More consistent practitioner with improved recovery",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 3,
// // // // // //     title: "Episode 3: Decoding the Data, Refining the Strategy",
// // // // // //     weeks: "Weeks 10-14",
// // // // // //     narrative:
// // // // // //       "This period shifted to precision-guided strategy once labs showed genetically-elevated Lp(a). Focus moved to optimizing modifiable risks—sleep and cardio—and testing nutrition & dinner experiments.",
// // // // // //     primaryGoals: ["Lower modifiable cardiovascular risk factors", "Optimize ApoB"],
// // // // // //     frictionPoints: ["Late-night client dinners undermine recovery; low adherence (30%)"],
// // // // // //     metrics: ["ApoB ↓ 115 → 98 mg/dL", "hs-CRP ↓ 1.8 → 0.9 mg/L", "HRV quarterly avg +12%"],
// // // // // //     finalOutcomes: ["Refined nutrition and increased cardio volume", "Proposed dinner experiment"],
// // // // // //     personaBefore: "Frustrated by travel and late dinners",
// // // // // //     personaAfter: "Empowered by data and targeted strategy",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 4,
// // // // // //     title: "Episode 4: Mastering Travel & Expanding Horizons",
// // // // // //     weeks: "Weeks 15-20",
// // // // // //     narrative:
// // // // // //       "Rohan showed travel resilience but identified workout scheduling as a systemic failure. This resulted in a redesign of his training system and the addition of sport-specific goals (golf).",
// // // // // //     primaryGoals: ["Stress-test resilience under travel", "Redesign training to fit schedule"],
// // // // // //     frictionPoints: ["Work meetings conflict with workouts (60–67% failure)"],
// // // // // //     metrics: ["RHR improved to 52 bpm; HRV up to 68 ms", "Travel HRV -2% relative to baseline"],
// // // // // //     finalOutcomes: ["Workout system redesign", "New golf performance plan"],
// // // // // //     personaBefore: "Systems designed for predictable schedule",
// // // // // //     personaAfter: "Proactive systems thinker, identifying root causes",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 5,
// // // // // //     title: "Episode 5: System Failure, Clinical Success",
// // // // // //     weeks: "Weeks 21-26",
// // // // // //     narrative:
// // // // // //       "Despite scheduling struggle, clinical markers improved dramatically: ApoB, hs-CRP, and ASCVD risk fell. The team began genetic testing and gut-health protocols.",
// // // // // //     primaryGoals: ["Achieve reductions in cardiovascular risk markers"],
// // // // // //     frictionPoints: ["Missed evening workouts drop HRV; acute illness interruption"],
// // // // // //     metrics: ["ApoB ↓ to 78 mg/dL; hs-CRP ↓ to 0.8 mg/L", "10-year ASCVD risk ↓ to 4.9%"],
// // // // // //     finalOutcomes: ["Genetic testing initiated", "Adaptive sickness protocol added"],
// // // // // //     personaBefore: "Compliant but battling system issues",
// // // // // //     personaAfter: "Clinically optimized and empowered",
// // // // // //   },
// // // // // //   {
// // // // // //     id: 6,
// // // // // //     title: "Episode 6: Achieving Resilience, Personalizing the Future",
// // // // // //     weeks: "Weeks 27-32",
// // // // // //     narrative:
// // // // // //       "The 32-week review validated the program: big reductions in biomarkers and travel resilience. The team moved toward hyper-personalization with genetic tests (ApoE, MTHFR).",
// // // // // //     primaryGoals: ["Validate program effectiveness", "Plan for hyper-personalized optimization"],
// // // // // //     frictionPoints: [],
// // // // // //     metrics: ["10-yr ASCVD risk dramatically reduced; ApoB ~82 mg/dL; hs-CRP ~0.9 mg/L"],
// // // // // //     finalOutcomes: ["Genetic-driven personalization plan", "32-week program review scheduled"],
// // // // // //     personaBefore: "Focused on mastery of basics",
// // // // // //     personaAfter: "Confident and ready for precision optimization",
// // // // // //   },
// // // // // // ];

// // // // // // function findEpisode(idStr: string | undefined) {
// // // // // //   if (!idStr) return undefined;
// // // // // //   const id = Number(idStr);
// // // // // //   return EPISODES.find((e) => e.id === id);
// // // // // // }

// // // // // // export default function EpisodePage({ params }: { params?: { id?: string } }) {
// // // // // //   const episode = findEpisode(params?.id);

// // // // // //   if (!episode) {
// // // // // //     return (
// // // // // //       <div className="min-h-screen bg-gray-50 py-12 px-6">
// // // // // //         <div className="mx-auto max-w-4xl">
// // // // // //           <Link href="/journey" className="inline-flex items-center gap-2 text-slate-700">
// // // // // //             <ArrowLeft className="w-4 h-4" />
// // // // // //             Back to timeline
// // // // // //           </Link>
// // // // // //           <h2 className="mt-6 text-2xl font-semibold">Episode not found</h2>
// // // // // //           <p className="mt-2 text-slate-600">The episode id is invalid or missing.</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 py-8 px-6">
// // // // // //       <div className="mx-auto max-w-screen-2xl">
// // // // // //         <div className="mb-6">
// // // // // //           <Link href="/journey" className="inline-flex items-center gap-2 text-indigo-600 hover:underline">
// // // // // //             <ArrowLeft className="w-4 h-4" />
// // // // // //             Back to timeline
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         <div className="grid grid-cols-12 gap-8 items-start">
// // // // // //           <div className="col-span-8">
// // // // // //             <h1 className="text-2xl font-bold text-slate-900">{episode.title}</h1>
// // // // // //             <p className="mt-1 text-sm text-slate-500">{episode.weeks}</p>

// // // // // //             <section className="mt-6">
// // // // // //               <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
// // // // // //                 <Target className="w-5 h-5 text-indigo-600" /> Primary Goals
// // // // // //               </h3>
// // // // // //               <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
// // // // // //                 {episode.primaryGoals.map((g, i) => (
// // // // // //                   <li key={i} className="flex justify-between items-start gap-4">
// // // // // //                     <span>{g}</span>
// // // // // //                     <button
// // // // // //                       className="ml-4 text-xs text-indigo-600 hover:underline"
// // // // // //                       onClick={() => {
// // // // // //                         // placeholder for RAG "why" integration
// // // // // //                         window.alert("Why -> (RAG integration placeholder)");
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       Why?
// // // // // //                     </button>
// // // // // //                   </li>
// // // // // //                 ))}
// // // // // //               </ul>
// // // // // //             </section>

// // // // // //             <section className="mt-6">
// // // // // //               <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
// // // // // //                 <AlertTriangle className="w-5 h-5 text-rose-500" /> Friction Points
// // // // // //               </h3>
// // // // // //               <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
// // // // // //                 {episode.frictionPoints.length ? (
// // // // // //                   episode.frictionPoints.map((f, i) => <li key={i}>{f}</li>)
// // // // // //                 ) : (
// // // // // //                   <li className="text-slate-500">No friction points recorded.</li>
// // // // // //                 )}
// // // // // //               </ul>
// // // // // //             </section>

// // // // // //             <section className="mt-6">
// // // // // //               <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
// // // // // //                 <BarChart className="w-5 h-5 text-emerald-500" /> Key Metrics & Milestones
// // // // // //               </h3>
// // // // // //               <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
// // // // // //                 {episode.metrics.map((m, i) => (
// // // // // //                   <li key={i}>{m}</li>
// // // // // //                 ))}
// // // // // //               </ul>
// // // // // //             </section>

// // // // // //             <section className="mt-6">
// // // // // //               <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
// // // // // //                 <CheckCircle className="w-5 h-5 text-violet-600" /> Final Outcomes
// // // // // //               </h3>
// // // // // //               <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
// // // // // //                 {episode.finalOutcomes.map((o, i) => (
// // // // // //                   <li key={i}>{o}</li>
// // // // // //                 ))}
// // // // // //               </ul>
// // // // // //             </section>

// // // // // //             <section className="mt-8">
// // // // // //               <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
// // // // // //                 <User className="w-5 h-5 text-orange-500" /> Stateful Persona Analysis
// // // // // //               </h3>

// // // // // //               <div className="mt-4 grid grid-cols-2 gap-4">
// // // // // //                 <Card className="p-4 bg-white border">
// // // // // //                   <h4 className="text-sm font-medium text-slate-700">Before</h4>
// // // // // //                   <p className="mt-2 text-sm text-slate-600">{episode.personaBefore}</p>
// // // // // //                 </Card>

// // // // // //                 <Card className="p-4 bg-white border">
// // // // // //                   <h4 className="text-sm font-medium text-slate-700">After</h4>
// // // // // //                   <p className="mt-2 text-sm text-slate-600">{episode.personaAfter}</p>
// // // // // //                 </Card>
// // // // // //               </div>
// // // // // //             </section>
// // // // // //           </div>

// // // // // //           <aside className="col-span-4">
// // // // // //             <div className="sticky top-6">
// // // // // //               <Card className="p-6">
// // // // // //                 <div className="flex items-start justify-between">
// // // // // //                   <div>
// // // // // //                     <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
// // // // // //                       <BookOpen className="w-5 h-5 text-indigo-600" /> Narrative
// // // // // //                     </h3>
// // // // // //                     <p className="mt-1 text-xs text-slate-500">Full story (scrollable)</p>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 <div className="mt-4 h-[64vh] overflow-auto pr-2 text-sm text-slate-700 leading-relaxed">
// // // // // //                   <div className="prose prose-sm max-w-none">
// // // // // //                     <p style={{ whiteSpace: "pre-wrap" }}>{episode.narrative}</p>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 <div className="mt-4 flex items-center justify-between">
// // // // // //                   <div className="text-xs text-slate-500">Source: compiled conversation logs</div>
// // // // // //                   <div className="flex items-center gap-2">
// // // // // //                     <button
// // // // // //                       className="text-indigo-600 text-sm font-medium"
// // // // // //                       onClick={() => window.alert("Open full chat (placeholder)")}
// // // // // //                     >
// // // // // //                       Open full chat
// // // // // //                     </button>
// // // // // //                     <button
// // // // // //                       className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
// // // // // //                       onClick={() => window.alert("Request 'why' explanation (placeholder for RAG)")}
// // // // // //                     >
// // // // // //                       Why (explain)
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </Card>
// // // // // //             </div>
// // // // // //           </aside>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }




// // // // // // app/journey/[id]/page.tsx
// // // // // "use client";

// // // // // import React from "react";
// // // // // import Link from "next/link";
// // // // // import {
// // // // //   BookOpen,
// // // // //   Target,
// // // // //   AlertTriangle,
// // // // //   BarChart,
// // // // //   CheckCircle,
// // // // //   User,
// // // // //   ArrowLeft,
// // // // // } from "lucide-react";
// // // // // import { Card } from "@/components/ui/card";

// // // // // /**
// // // // //  * Copy-pasteable page for /journey/[id]
// // // // //  * - Client component so interactive buttons (Why / placeholders) work without server-component errors.
// // // // //  * - Layout: left column = full detailed sections (Primary Goal, Friction, Metrics, Final Outcome, Persona),
// // // // //  *   right column = long Narrative in a sticky, scrollable card (user requested narrative on the right).
// // // // //  *
// // // // //  * Replace existing file with this. If you use a different UI lib / CSS, adjust classNames.
// // // // //  */

// // // // // type EpisodeStruct = {
// // // // //   id: number;
// // // // //   title: string;
// // // // //   weeks: string;
// // // // //   narrative: string;
// // // // //   primaryGoalFull: string;
// // // // //   frictionFull: string;
// // // // //   metrics: {
// // // // //     biometricsAndSpecialMetrics?: string;
// // // // //     dataDrivenInsights?: string;
// // // // //     strategicPivots?: string;
// // // // //     memberInitiatedGoal?: string;
// // // // //   };
// // // // //   finalOutcomeFull: string;
// // // // //   persona: {
// // // // //     beforeFull: string;
// // // // //     afterFull: string;
// // // // //   };
// // // // // };

// // // // // const EPISODES: EpisodeStruct[] = [
// // // // //   {
// // // // //     id: 1,
// // // // //     title: "Episode 1: Establishing the Baseline",
// // // // //     weeks: "Weeks 1-4",
// // // // //     narrative: `The journey began by establishing a clear, data-defined baseline for a high-performing individual navigating a high-stress world. Initial biometrics painted a picture of a system under load, with a baseline blood pressure of 136/88 mmHg and visible dips in Heart Rate Variability (HRV) tied to acute work stressors. The Elyx team initiated a foundational protocol targeting systemic inflammation and stress resilience through nutrition, mobility, and targeted supplementation. From the outset, the member revealed a key trait: a deep-seated need for evidence. He consistently requested the "why" behind the plan, demanding clinical data and the direct physiological mechanisms linking interventions to outcomes.

// // // // // This foundational period was immediately put to the test with a high-stakes business trip to London in Week 4. The trip served as a powerful real-world stress test, and the data captured its impact with stark clarity. Recovery metrics plummeted by 25–30%, average blood pressure rose, and a powerful correlation emerged: as HRV dropped by 27.6% through the week, subjective fatigue scores soared by 167%. While the member felt the trip was a physiological "write-off," it provided the most critical insight of the month: a quantifiable measure of the true cost of travel. This data transformed the conversation from subjective feelings to objective facts, paving the way for a new, targeted strategy to manage anticipatory stress and accelerate post-travel recovery.`,
// // // // //     primaryGoalFull:
// // // // //       "Primary Goal — Establish a comprehensive physiological baseline, build foundational habits in nutrition and mobility, and begin buffering the effects of a high-stress professional life. In practice this meant onboarding wearable and clinical data sources, capturing resting vitals and variability metrics, and prescribing an initial set of nutrition/mobility fundamentals that could be measured against objective outcomes.",
// // // // //     frictionFull:
// // // // //       "Friction Points — The member repeatedly requested deep scientific evidence for every recommendation (clinical studies, mechanisms). Social and travel obligations produced adherence gaps (notably deviations during client dinners). Operationally this created a tension between pragmatic recommendations and the member's need for mechanistic justification, which impacted acceptance of some behavior changes.",
// // // // //     metrics: {
// // // // //       biometricsAndSpecialMetrics:
// // // // //         "Biometrics & Special Metrics — Initial baseline recorded BP 136/88 mmHg; Avg resting heart rate ≈58 bpm; Average HRV ≈42 ms. During the London trip, recovery metrics dropped ~25–30% and average BP rose to 138/88 mmHg.",
// // // // //       dataDrivenInsights:
// // // // //         "Data-Driven Insights — Analysis revealed a strong negative correlation: a 27.6% drop in average HRV corresponded with a 167% increase in subjective fatigue. We also observed nights preceding international travel commonly showed 15–20% dips in overnight HRV, suggesting an anticipatory stress response.",
// // // // //       strategicPivots:
// // // // //         "Strategic Pivots — Initiated a Post-Travel Circadian Realignment protocol (morning sunlight exposure, sleep temperature optimization). Proposed and scheduled a 5-minute box-breathing experiment placed before high-stakes calls to manage anticipatory stress.",
// // // // //       memberInitiatedGoal:
// // // // //         "Member-Initiated Goal — The member demanded that every intervention be paired with measurable outcomes and supporting clinical rationale, moving the program toward an 'evidence-first' framework.",
// // // // //     },
// // // // //     finalOutcomeFull:
// // // // //       "Final Outcome — By the end of Week 4 a clear, data-validated baseline was established. The London trip, though subjectively a write-off, provided critical objective data that enabled a targeted approach to anticipatory stress and post-travel recovery. The team moved from broad advice to precisely measured, testable interventions.",
// // // // //     persona: {
// // // // //       beforeFull:
// // // // //         "Before — Entered program with objective markers of chronic stress and a desire for measurable results, but lacked a coordinated, data-driven mitigation plan.",
// // // // //       afterFull:
// // // // //         "After — Possessed a validated baseline and concrete evidence of travel cost to physiology. This catalysed a focus on testable interventions and a collaborative, evidence-based strategy.",
// // // // //     },
// // // // //   },

// // // // //   {
// // // // //     id: 2,
// // // // //     title: "Episode 2: The First Experiment & The Clinical Baseline",
// // // // //     weeks: "Weeks 5-9",
// // // // //     narrative:
// // // // //       "Following the initial onboarding, this five-week period was defined by quiet consistency and the power of foundational habits. With no major interventions or strategic pivots, the member focused on one critical lever: sleep. By improving sleep consistency, they began to see the first subtle but significant shifts in their physiology. This phase wasn't about dramatic changes but about the diligent work of establishing a new, healthier baseline. The data from this period tells a clear story: small, consistent efforts in one area can create positive ripple effects across the entire system, lowering blood pressure and improving stress resilience without any active struggle being logged.",
// // // // //     primaryGoalFull:
// // // // //       "Primary Goal — Establish a stable clinical baseline and measure the downstream effect of foundational habit improvements, primarily sleep consistency. The team prioritized measuring adherence and tracking small, repeatable wins rather than launching new high-variance interventions.",
// // // // //     frictionFull:
// // // // //       "Friction Points — This period reported no major friction in logs; operationally it was a phase of steady adherence and measurement, which the team leveraged to validate the baseline and iterate small improvements.",
// // // // //     metrics: {
// // // // //       biometricsAndSpecialMetrics:
// // // // //         "Biometrics & Special Metrics — Blood pressure improved from 138/88 mmHg down to an average of 134/85 mmHg by Week 8. HRV increased from roughly 38 ms to 42 ms. Sleep consistency adherence rose from 75% to 82%.",
// // // // //       dataDrivenInsights:
// // // // //         "Data-Driven Insights — A clear correlation emerged: a 7-point increase in sleep consistency strongly associated with the observed improvements in both BP and HRV, suggesting sleep consistency is a primary driver for this member.",
// // // // //       strategicPivots:
// // // // //         "Strategic Pivots — No major tactical pivots; the team doubled down on the sleep plan and measurement strategy to entrench improvements.",
// // // // //       memberInitiatedGoal:
// // // // //         "Member-Initiated Goal — None recorded during this phase; the member remained focused on executing the foundational plan.",
// // // // //     },
// // // // //     finalOutcomeFull:
// // // // //       "Final Outcome — A new, healthier physiological baseline was validated. The period demonstrated that focused, low-variance changes produce measurable downstream benefits across cardiovascular and recovery metrics.",
// // // // //     persona: {
// // // // //       beforeFull:
// // // // //         "Before — The member entered with inconsistent sleep and room for improvement in biometrics (138/88 BP; HRV ~38 ms).",
// // // // //       afterFull:
// // // // //         "After — Became a more consistent practitioner with improved recovery and clearer evidence linking habit to outcome.",
// // // // //     },
// // // // //   },

// // // // //   {
// // // // //     id: 3,
// // // // //     title: "Episode 3: Decoding the Data, Refining the Strategy",
// // // // //     weeks: "Weeks 10-14",
// // // // //     narrative:
// // // // //       "This period marked a critical turning point, shifting the journey from broad lifestyle changes to a precision-guided strategy. The quarterly lab results revealed a formidable challenge: a genetically-elevated Lipoprotein(a) [Lp(a)] that was unresponsive to initial efforts. This static risk factor triggered a strategic pivot. Instead of trying to move the unmovable, the new mission became to aggressively optimize every other modifiable risk factor. The data provided a clear playbook: better sleep was directly crushing inflammation (hs-CRP), and consistent cardio was boosting resilience (HRV). The member saw tangible proof of progress�slashing travel recovery time in half and significantly lowering Apolipoprotein B. This success brought the next major obstacle into sharp focus: the structural problem of late-night client dinners, which were single-handedly tanking recovery. The focus now is on designing a tactical protocol to conquer this final, high-stakes environment.",
// // // // //     primaryGoalFull:
// // // // //       "Primary Goal — Aggressively lower all modifiable cardiovascular risk factors (ApoB, hs-CRP, lifestyle drivers) to mitigate the upstream risk from a static genetic Lp(a). The program prioritized targeted nutrition and cardio volume increases to drive measurable biochemical change.",
// // // // //     frictionFull:
// // // // //       "Friction Points — The major friction was structural: late-night client dinners during travel undermined recovery. Adherence at these times dropped to ~30%, directly correlating with suppressed HRV and reduced next-day cognitive focus.",
// // // // //     metrics: {
// // // // //       biometricsAndSpecialMetrics:
// // // // //         "Biometrics & Special Metrics — ApoB decreased from 115 mg/dL to 98 mg/dL. hs-CRP halved from 1.8 mg/L to 0.9 mg/L. Lp(a) stayed at 150 nmol/L (genetic). Quarterly HRV average increased by ~12% (48 → 54 ms). Travel recovery time reduced by 50% (96 → 48 hours).",
// // // // //       dataDrivenInsights:
// // // // //         "Data-Driven Insights — Sleep drove reductions in inflammation (50% drop in hs-CRP aligned with an 18% increase in Whoop Sleep Performance). Weeks with Zone 2 cardio >100 minutes showed average overnight HRV increases of ~7 ms. Nights after heavy dinners produced ~15 ms drops in HRV.",
// // // // //       strategicPivots:
// // // // //         "Strategic Pivots — Nutrition targets were refined (saturated fat <7% of calories; added plant sterol–fortified foods). Cardio volume increased (150 → 180 minutes/week). A dinner experiment protocol (prioritize protein/veg; cap alcohol) was proposed for testing.",
// // // // //       memberInitiatedGoal:
// // // // //         "Member-Initiated Goal — Develop a specific evidence-based playbook for handling late-night client dinners and isolate the travel protocols most effective at reducing recovery time.",
// // // // //     },
// // // // //     finalOutcomeFull:
// // // // //       "Final Outcome — The targeted strategy validated that improving sleep and cardio volume and refining nutrition produced clinically meaningful improvements, while revealing a persistent structural adherence challenge (late dinners) to be tested and solved.",
// // // // //     persona: {
// // // // //       beforeFull:
// // // // //         "Before — Concerned about the high genetic Lp(a) and unsure which behaviors drove risk; frustrated by travel and late dinners.",
// // // // //       afterFull:
// // // // //         "After — Empowered by evidence connecting specific actions to outcomes and focused on building precise tactical protocols to offset genetic risk.",
// // // // //     },
// // // // //   },

// // // // //   {
// // // // //     id: 4,
// // // // //     title: "Episode 4: Mastering Travel & Expanding Horizons",
// // // // //     weeks: "Weeks 15-20",
// // // // //     narrative:
// // // // //       "This period marked a significant turning point for Rohan, characterized by a powerful duality: achieving a new level of physiological mastery while simultaneously confronting a critical system failure. The episode began with impressive biometric gains, including a stabilized blood pressure and a dramatically improved heart rate profile (RHR down to 52 bpm, HRV up to 68 ms). This new resilience was put to the ultimate test during a high-stakes business trip to Singapore, where Rohan�s body remained remarkably stable, performing near his at-home baseline despite the stress of international travel. This success, however, cast a harsh light on a growing problem: his workout schedule was fundamentally broken. The conflict between late-day work meetings and training reached a crisis point, with a 67% failure rate during the trip. Rohan himself connected this scheduling failure to a direct drop in his recovery scores, declaring, This model is broken. Rather than being a setback, this became a catalyst for evolution. The team pivoted, scheduling a complete overhaul of his training system and designing more flexible, constraint-driven protocols for his demanding work. Simultaneously, Rohan began to look beyond foundational health, initiating a new, performance-focused goal: optimizing his body for golf.",
// // // // //     primaryGoalFull:
// // // // //       "Primary Goal — Stress-test physiological resilience under travel and re-design training systems to accommodate an unpredictable work schedule. The aim was to retain the program's physiological gains while reducing scheduling friction.",
// // // // //     frictionFull:
// // // // //       "Friction Points — The scheduling model was incompatible with late-day meetings. Workouts scheduled after 5 PM had a ~60% failure rate; during Singapore the strength session miss-rate climbed to ~67%. This produced measurable performance and recovery costs.",
// // // // //     metrics: {
// // // // //       biometricsAndSpecialMetrics:
// // // // //         "Biometrics & Special Metrics — Resting HR improved to ~52 bpm (from 57). HRV rose to ~68 ms (from ~59). During travel the HRV stayed near baseline (≈51 ms; −2%). Sleep performance held relatively high (~87%).",
// // // // //       dataDrivenInsights:
// // // // //         "Data-Driven Insights — A clear day-after-workout signal: days after completed workouts had average HRV ≈51 ms and sleep scores ≈82; days after missed workouts had HRV ≈45 ms and sleep ≈74, showing direct short-term physiological cost from missed sessions.",
// // // // //       strategicPivots:
// // // // //         "Strategic Pivots — Overhauled workout delivery to be more flexible and constraint-driven (shorter blocks, opportunistic micro-sessions). Introduced a 60-second physiological sigh protocol for immediate stress mitigation.",
// // // // //       memberInitiatedGoal:
// // // // //         "Member-Initiated Goal — Pursue sport-specific optimization (golf): rotational power, hip mobility and a golf-specific nutrition block were added.",
// // // // //     },
// // // // //     finalOutcomeFull:
// // // // //       "Final Outcome — Travel resilience was validated, and the team recognized and began correcting a systemic training delivery failure. The program began to transition from rigid scheduling to resilient, context-aware training.",
// // // // //     persona: {
// // // // //       beforeFull:
// // // // //         "Before — Systems were designed around a predictable schedule and hadn't been stress-tested against the member's real work life.",
// // // // //       afterFull:
// // // // //         "After — The member evolved into a proactive systems-thinker, identifying root causes and working on sustainable solutions for long-term adherence.",
// // // // //     },
// // // // //   },

// // // // //   {
// // // // //     id: 5,
// // // // //     title: "Episode 5: System Failure, Clinical Success",
// // // // //     weeks: "Weeks 21-26",
// // // // //     narrative:
// // // // //       "This period marked a paradoxical triumph. While a systemic failure in workout scheduling was causing frustration and measurable physiological setbacks, the members underlying protocol was so effective that it produced dramatic, clinically significant health improvements. The quarterly diagnostic panel revealed a stunning success: key markers for cardiovascular risk and inflammation plummeted, validating the program's core strategies. This success was underscored by the members remarkable physiological resilience during international travel to South Korea. The journey wasn't without its challenges, including a brief but acute illness that was expertly managed using real-time wearable data. Armed with powerful new health data and a member-driven analysis that pinpointed the scheduling flaw, the team recalibrated. They made the strategic decision to move beyond standard protocols, initiating genetic testing and advanced gut health interventions to architect the next, even more personalized, phase of the member's health optimization.",
// // // // //     primaryGoalFull:
// // // // //       "Primary Goal — Achieve clinically meaningful reductions in cardiovascular and inflammatory markers while maintaining operational resilience. The team pursued diagnostic and personalized interventions (genetics, gut health) after confirming clinical progress.",
// // // // //     frictionFull:
// // // // //       "Friction Points — Continued missed evening workouts and a short acute illness limited performance in the short-term. The member's own workout cancellation analysis highlighted a 60% failure rate for post-5 PM sessions, indicating a systemic scheduling problem.",
// // // // //     metrics: {
// // // // //       biometricsAndSpecialMetrics:
// // // // //         "Biometrics & Special Metrics — ApoB reduced to ~78 mg/dL (−18%); hs-CRP dropped to ~0.8 mg/L (−47%); 10-year ASCVD risk fell from 7.1% to ~4.9%. During South Korea travel, HRV averaged ~72 ms and recovery ~89%.",
// // // // //       dataDrivenInsights:
// // // // //         "Data-Driven Insights — Sustained HRV increases correlated with sharp reductions in inflammation (hs-CRP). The team also noted cognitive and wellbeing gains (self-reported metrics ~8/10).",
// // // // //       strategicPivots:
// // // // //         "Strategic Pivots — The team initiated genetic testing (MTHFR, ApoE), added prebiotic fiber interventions for gut–inflammation axis, and formalized an adaptive sickness protocol triggered by wearable-derived signals (low recovery, elevated RHR).",
// // // // //       memberInitiatedGoal:
// // // // //         "Member-Initiated Goal — The member’s collected workout cancellation data directly drove a collaborative redesign of the scheduling system.",
// // // // //     },
// // // // //     finalOutcomeFull:
// // // // //       "Final Outcome — Clinical markers improved dramatically despite scheduling failures. The program validated its core strategies and began moving toward hyper-personalization informed by genetics and microbiome work.",
// // // // //     persona: {
// // // // //       beforeFull:
// // // // //         "Before — Compliant with the program but hampered by a hidden systemic issue (late scheduling) that produced physiological cost.",
// // // // //       afterFull:
// // // // //         "After — Clinically optimized in key cardiovascular areas, empowered by results, and ready for precision personalization.",
// // // // //     },
// // // // //   },

// // // // //   {
// // // // //     id: 6,
// // // // //     title: "Episode 6: Achieving Resilience, Personalizing the Future",
// // // // //     weeks: "Weeks 27-32",
// // // // //     narrative:
// // // // //       "This period marked a turning point, transforming months of disciplined effort into undeniable proof of success. The journey began with a critical test: another demanding travel schedule in Week 29. This time, however, the member navigated it with practiced ease, reporting that the established travel protocols had become second nature. The objective data from his Whoop strap confirmed this newfound resilience, showing consistently high recovery scores and a remarkable 40% reduction in heart rate volatility compared to earlier trips. This mastery set the stage for the main event: the 32-week biomarker review. The results were dramatic. The members 10-year cardiovascular risk score had been slashed by nearly half, and key inflammatory and lipid markers plummeted to healthy ranges. Staring at the data, the member's reaction was one of pure validation: Those are impressive reductions... Clear ROI. This moment of triumph wasn't an endpoint, but a launchpad. With foundational health so significantly improved, the focus shifted from broad strategies to hyper-personalization, culminating in the decision to integrate genetic testing to tailor the next phase of his health journey with unprecedented precision.",
// // // // //     primaryGoalFull:
// // // // //       "Primary Goal — Validate program effectiveness via biomarker review and plan a long-term, genetically-informed personalization strategy. This included integrating genetic panels and defining the next program phase around the member’s unique biology.",
// // // // //     frictionFull:
// // // // //       "Friction Points — This phase reported minimal friction; it was characterized by high adherence and strategic planning rather than operational failure.",
// // // // //     metrics: {
// // // // //       biometricsAndSpecialMetrics:
// // // // //         "Biometrics & Special Metrics — 10-year ASCVD risk reduced markedly (example reduction from 12.5% to 6.8% in some slices), ApoB averaged ~82 mg/dL, hs-CRP ~0.9 mg/L. Travel resilience metrics: recovery ~88% and sleep performance ~92% during Week 29 travel with ~40% reduction in HRV volatility vs prior trips.",
// // // // //       dataDrivenInsights:
// // // // //         "Data-Driven Insights — Consistent execution of travel protocols built durable physiological resilience; objective data and subjective reports aligned in affirming clear program ROI.",
// // // // //       strategicPivots:
// // // // //         "Strategic Pivots — Decision to proceed with genetic testing (ApoE, MTHFR) and to craft a more personalized long-term roadmap.",
// // // // //       memberInitiatedGoal:
// // // // //         "Member-Initiated Goal — Sustain momentum and set new, higher-performance targets informed by genetics and long-term biomarker trends.",
// // // // //     },
// // // // //     finalOutcomeFull:
// // // // //       "Final Outcome — The program was unequivocally validated. The member saw clinically meaningful reductions in risk and was positioned to begin a new phase of hyper-personalized optimization.",
// // // // //     persona: {
// // // // //       beforeFull:
// // // // //         "Before — Focused on mastering the fundamentals and building resilience to travel and work stressors.",
// // // // //       afterFull:
// // // // //         "After — Confident, validated, and ready to pursue precision optimization grounded in genetic and biomarker evidence.",
// // // // //     },
// // // // //   },
// // // // // ];

// // // // // function findEpisode(idStr: string | undefined) {
// // // // //   if (!idStr) return undefined;
// // // // //   const id = Number(idStr);
// // // // //   return EPISODES.find((e) => e.id === id);
// // // // // }

// // // // // export default function EpisodePage({ params }: { params?: { id?: string } }) {
// // // // //   const episode = findEpisode(params?.id);

// // // // //   if (!episode) {
// // // // //     return (
// // // // //       <div className="min-h-screen bg-gray-50 py-12 px-6">
// // // // //         <div className="mx-auto max-w-4xl">
// // // // //           <Link href="/journey" className="inline-flex items-center gap-2 text-slate-700">
// // // // //             <ArrowLeft className="w-4 h-4" />
// // // // //             Back to timeline
// // // // //           </Link>
// // // // //           <h2 className="mt-6 text-2xl font-semibold">Episode not found</h2>
// // // // //           <p className="mt-2 text-slate-600">The episode id is invalid or missing.</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 py-10 px-8">
// // // // //       <div className="mx-auto max-w-screen-2xl">
// // // // //         <div className="mb-6">
// // // // //           <Link href="/journey" className="inline-flex items-center gap-2 text-indigo-600 hover:underline">
// // // // //             <ArrowLeft className="w-4 h-4" />
// // // // //             Back to timeline
// // // // //           </Link>
// // // // //         </div>

// // // // //         <div className="grid grid-cols-12 gap-8 items-start">
// // // // //           {/* LEFT: details (wide) */}
// // // // //           <main className="col-span-8">
// // // // //             <h1 className="text-3xl font-bold text-slate-900">{episode.title}</h1>
// // // // //             <p className="mt-1 text-sm text-slate-500">{episode.weeks}</p>

// // // // //             <section className="mt-8">
// // // // //               <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-800">
// // // // //                 <Target className="w-6 h-6 text-indigo-600" /> Primary Goal
// // // // //               </h2>
// // // // //               <div className="mt-3 text-slate-700 leading-relaxed">
// // // // //                 <p>{episode.primaryGoalFull}</p>
// // // // //               </div>
// // // // //             </section>

// // // // //             <section className="mt-8">
// // // // //               <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-800">
// // // // //                 <AlertTriangle className="w-6 h-6 text-rose-500" /> Friction Points
// // // // //               </h2>
// // // // //               <div className="mt-3 text-slate-700 leading-relaxed">
// // // // //                 <p>{episode.frictionFull}</p>
// // // // //               </div>
// // // // //             </section>

// // // // //             <section className="mt-8">
// // // // //               <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-800">
// // // // //                 <BarChart className="w-6 h-6 text-emerald-500" /> Key Metrics & Milestones
// // // // //               </h2>

// // // // //               <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
// // // // //                 {episode.metrics.biometricsAndSpecialMetrics && (
// // // // //                   <div>
// // // // //                     <h3 className="text-sm font-medium text-slate-800">Biometrics & Special Metrics</h3>
// // // // //                     <p className="mt-1">{episode.metrics.biometricsAndSpecialMetrics}</p>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {episode.metrics.dataDrivenInsights && (
// // // // //                   <div>
// // // // //                     <h3 className="text-sm font-medium text-slate-800">Data-Driven Insights</h3>
// // // // //                     <p className="mt-1">{episode.metrics.dataDrivenInsights}</p>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {episode.metrics.strategicPivots && (
// // // // //                   <div>
// // // // //                     <h3 className="text-sm font-medium text-slate-800">Strategic Pivots</h3>
// // // // //                     <p className="mt-1">{episode.metrics.strategicPivots}</p>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 {episode.metrics.memberInitiatedGoal && (
// // // // //                   <div>
// // // // //                     <h3 className="text-sm font-medium text-slate-800">Member-Initiated Goal</h3>
// // // // //                     <p className="mt-1">{episode.metrics.memberInitiatedGoal}</p>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             </section>

// // // // //             <section className="mt-8">
// // // // //               <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-800">
// // // // //                 <CheckCircle className="w-6 h-6 text-violet-600" /> Final Outcome
// // // // //               </h2>
// // // // //               <div className="mt-3 text-slate-700 leading-relaxed">
// // // // //                 <p>{episode.finalOutcomeFull}</p>
// // // // //               </div>
// // // // //             </section>

// // // // //             <section className="mt-10">
// // // // //               <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-800">
// // // // //                 <User className="w-6 h-6 text-orange-500" /> Stateful Persona Analysis
// // // // //               </h2>

// // // // //               <div className="mt-4 grid grid-cols-2 gap-4">
// // // // //                 <Card className="p-5 bg-white border">
// // // // //                   <h4 className="text-sm font-semibold text-slate-700">Before</h4>
// // // // //                   <p className="mt-2 text-slate-600 leading-relaxed">{episode.persona.beforeFull}</p>
// // // // //                 </Card>

// // // // //                 <Card className="p-5 bg-white border">
// // // // //                   <h4 className="text-sm font-semibold text-slate-700">After</h4>
// // // // //                   <p className="mt-2 text-slate-600 leading-relaxed">{episode.persona.afterFull}</p>
// // // // //                 </Card>
// // // // //               </div>
// // // // //             </section>
// // // // //           </main>

// // // // //           {/* RIGHT: Narrative (sticky, scrollable) */}
// // // // //           <aside className="col-span-4">
// // // // //             <div className="sticky top-6">
// // // // //               <Card className="p-6">
// // // // //                 <div className="flex items-start justify-between">
// // // // //                   <div>
// // // // //                     <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
// // // // //                       <BookOpen className="w-5 h-5 text-indigo-600" /> Narrative
// // // // //                     </h3>
// // // // //                     <p className="mt-1 text-xs text-slate-500">Full episode story — scroll to read.</p>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <div className="mt-4 h-[70vh] overflow-auto pr-2 text-sm text-slate-700 leading-relaxed">
// // // // //                   <div style={{ whiteSpace: "pre-wrap" }}>{episode.narrative}</div>
// // // // //                 </div>

// // // // //                 <div className="mt-4 flex items-center justify-between">
// // // // //                   <div className="text-xs text-slate-500">Source: conversation logs & compiled notes</div>

// // // // //                   <div className="flex items-center gap-2">
// // // // //                     <button
// // // // //                       className="text-indigo-600 text-sm font-medium"
// // // // //                       onClick={() => window.alert("Open full chat (placeholder)")}
// // // // //                     >
// // // // //                       Open full chat
// // // // //                     </button>

// // // // //                     <button
// // // // //                       className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
// // // // //                       onClick={() => window.alert("'Why' explanation requested — placeholder for RAG")}
// // // // //                     >
// // // // //                       Why (explain)
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </Card>
// // // // //             </div>
// // // // //           </aside>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // // app/journey/[id]/page.tsx
// // // // import React from "react";
// // // // import Link from "next/link";
// // // // import { EPISODES } from "@/data/journey";
// // // // import type { EpisodeStruct } from "@/types/journey";

// // // // type Props = { params: { id: string } };

// // // // export default function EpisodePage({ params }: Props) {
// // // //   const idNum = Number(params.id);
// // // //   const ep = EPISODES.find((e) => e.id === idNum);

// // // //   if (!ep) {
// // // //     return (
// // // //       <main className="max-w-screen-2xl mx-auto px-8 py-12">
// // // //         <Link href="/journey" className="text-sm text-indigo-600 hover:underline">← Back to timeline</Link>
// // // //         <div className="mt-8 bg-white p-8 rounded shadow">
// // // //           <h2 className="text-xl font-semibold">Episode not found</h2>
// // // //           <p className="text-sm text-slate-600 mt-2">No episode found for id {params.id}</p>
// // // //         </div>
// // // //       </main>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <main className="max-w-screen-2xl mx-auto px-8 py-10">
// // // //       <Link href="/journey" className="text-sm text-indigo-600 hover:underline">← Back to timeline</Link>

// // // //       <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
// // // //         {/* Left big content */}
// // // //         <div className="lg:col-span-8 space-y-6">
// // // //           <div>
// // // //             <h1 className="text-3xl font-bold">{ep.title}</h1>
// // // //             <div className="text-sm text-slate-500 mt-1">{ep.weeks}</div>
// // // //           </div>

// // // //           <section className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
// // // //             <h3 className="text-lg font-semibold">Primary Goal</h3>
// // // //             <p className="mt-3 text-slate-700 leading-relaxed">{ep.primaryGoalFull}</p>
// // // //           </section>

// // // //           <section className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
// // // //             <h3 className="text-lg font-semibold">Friction Points</h3>
// // // //             <p className="mt-3 text-slate-700 leading-relaxed">{ep.frictionFull}</p>
// // // //           </section>

// // // //           <section className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
// // // //             <h3 className="text-lg font-semibold">Key Metrics & Milestones</h3>
// // // //             <div className="mt-4 space-y-4 text-slate-700">
// // // //               <div>
// // // //                 <div className="font-semibold">Biometrics & Special Metrics</div>
// // // //                 <div className="mt-1 text-sm">{ep.metrics?.biometricsAndSpecialMetrics}</div>
// // // //               </div>
// // // //               <div>
// // // //                 <div className="font-semibold">Data-Driven Insights</div>
// // // //                 <div className="mt-1 text-sm">{ep.metrics?.dataDrivenInsights}</div>
// // // //               </div>
// // // //               <div>
// // // //                 <div className="font-semibold">Strategic Pivots</div>
// // // //                 <div className="mt-1 text-sm">{ep.metrics?.strategicPivots}</div>
// // // //               </div>
// // // //               <div>
// // // //                 <div className="font-semibold">Member-Initiated Goal</div>
// // // //                 <div className="mt-1 text-sm">{ep.metrics?.memberInitiatedGoal}</div>
// // // //               </div>
// // // //             </div>
// // // //           </section>

// // // //           <section className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
// // // //             <h3 className="text-lg font-semibold">Final Outcome</h3>
// // // //             <p className="mt-3 text-slate-700 leading-relaxed">{ep.finalOutcomeFull}</p>
// // // //           </section>

// // // //           <section className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
// // // //             <h3 className="text-lg font-semibold">Stateful Persona Analysis</h3>
// // // //             <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //               <div className="bg-slate-50 p-4 rounded">
// // // //                 <div className="font-semibold">Before</div>
// // // //                 <div className="mt-2 text-sm text-slate-700">{ep.persona?.beforeFull}</div>
// // // //               </div>
// // // //               <div className="bg-slate-50 p-4 rounded">
// // // //                 <div className="font-semibold">After</div>
// // // //                 <div className="mt-2 text-sm text-slate-700">{ep.persona?.afterFull}</div>
// // // //               </div>
// // // //             </div>
// // // //           </section>
// // // //         </div>

// // // //         {/* Right narrative */}
// // // //         <aside className="lg:col-span-4">
// // // //           <div className="sticky top-6 bg-white rounded-lg shadow-sm border border-slate-100 p-5 h-[70vh] overflow-y-auto">
// // // //             <div className="flex items-center gap-3">
// // // //               <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                 <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3M3 11h18M5 21h14" />
// // // //               </svg>
// // // //               <div>
// // // //                 <div className="text-sm font-semibold">Narrative</div>
// // // //                 <div className="text-xs text-slate-400">Full episode story — scroll to read.</div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="mt-4 text-slate-700 leading-relaxed whitespace-pre-line">{ep.narrative}</div>

// // // //             <div className="mt-6 text-xs text-slate-400">Source: conversation logs & compiled notes</div>
// // // //             <div className="mt-3">
// // // //               {/* Use a link — if you later implement RAG, point this to a client page or route */}
// // // //               <Link href={`/journey/${ep.id}/why`} className="inline-block mt-2 text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:opacity-95">Why (explain)</Link>
// // // //             </div>
// // // //           </div>
// // // //         </aside>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }


// // // // app/journey/[id]/page.tsx
// // // import React from "react";
// // // import Link from "next/link";
// // // import { notFound } from "next/navigation";
// // // import { EPISODES } from "@/data/journey"; // adjust path if your data file is elsewhere
// // // // Optionally import a type if you have one
// // // // import type { EpisodeStruct } from "@/types/journey";

// // // type Params = { params: { id: string } };

// // // function escapeRegExp(str: string) {
// // //   return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// // // }

// // // /**
// // //  * Remove a leading 'Title — ' or 'Title - ' or 'Title: ' prefix from content,
// // //  * only if it matches exactly (case-insensitive).
// // //  */
// // // function removeTitlePrefix(title: string, content?: string) {
// // //   if (!content) return "";
// // //   const t = title.trim();
// // //   if (!t) return content;
// // //   // regex to match: ^\s*title\s*[—:-]\s*  (case-insensitive)
// // //   const rx = new RegExp(`^\\s*${escapeRegExp(t)}\\s*(?:—|:|-)\\s*`, "i");
// // //   return content.replace(rx, "").trim();
// // // }

// // // /** Small layout helper for persona before/after cards */
// // // function PersonaCard({ heading, text }: { heading: string; text?: string }) {
// // //   return (
// // //     <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm">
// // //       <div className="text-sm font-semibold text-slate-800 mb-2">{heading}</div>
// // //       <div className="text-sm text-slate-600">{text}</div>
// // //     </div>
// // //   );
// // // }

// // // export default function EpisodePage({ params }: Params) {
// // //   const id = Number(params.id);
// // //   const episode = EPISODES.find((e) => e.id === id);

// // //   if (!episode) {
// // //     notFound();
// // //     return null;
// // //   }

// // //   // Clean top-level fields by removing duplicated title prefixes if present.
// // //   const primaryGoal = removeTitlePrefix("Primary Goal", episode.primaryGoalFull);
// // //   const friction = removeTitlePrefix("Friction Points", episode.frictionFull);
// // //   const finalOutcome = removeTitlePrefix("Final Outcome", episode.finalOutcomeFull);

// // //   // For metrics, subsection titles exist; remove repeated subsection labels similarly.
// // //   const biometrics = removeTitlePrefix("Biometrics & Special Metrics", episode.metrics?.biometricsAndSpecialMetrics);
// // //   const dataDriven = removeTitlePrefix("Data-Driven Insights", episode.metrics?.dataDrivenInsights);
// // //   const strategic = removeTitlePrefix("Strategic Pivots", episode.metrics?.strategicPivots);
// // //   const memberGoal = removeTitlePrefix("Member-Initiated Goal", episode.metrics?.memberInitiatedGoal);

// // //   const personaBefore = removeTitlePrefix("Before", episode.persona?.beforeFull);
// // //   const personaAfter = removeTitlePrefix("After", episode.persona?.afterFull);

// // //   return (
// // //     <main className="max-w-screen-2xl mx-auto px-8 py-12">
// // //       <div className="mb-6">
// // //         <Link href="/journey" className="text-indigo-600 text-sm hover:underline">
// // //           ← Back to timeline
// // //         </Link>
// // //       </div>

// // //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
// // //         {/* Left column: main sections */}
// // //         <div className="lg:col-span-8 space-y-6">
// // //           <header>
// // //             <h1 className="text-3xl font-extrabold text-slate-900">{episode.title}</h1>
// // //             <div className="text-sm text-slate-500 mt-1">{episode.weeks}</div>
// // //           </header>

// // //           {/* Primary Goal */}
// // //           <section aria-labelledby="primary-goal">
// // //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
// // //               <h2 id="primary-goal" className="text-lg font-semibold text-slate-800">Primary Goal</h2>
// // //               <p className="mt-3 text-sm text-slate-600">{primaryGoal}</p>
// // //             </div>
// // //           </section>

// // //           {/* Friction Points */}
// // //           <section aria-labelledby="friction-points">
// // //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
// // //               <h2 id="friction-points" className="text-lg font-semibold text-slate-800">Friction Points</h2>
// // //               <p className="mt-3 text-sm text-slate-600">{friction}</p>
// // //             </div>
// // //           </section>

// // //           {/* Key Metrics & Milestones */}
// // //           <section aria-labelledby="key-metrics">
// // //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-4">
// // //               <h2 id="key-metrics" className="text-lg font-semibold text-slate-800">Key Metrics &amp; Milestones</h2>

// // //               <div>
// // //                 <h3 className="text-sm font-medium text-slate-700">Biometrics &amp; Special Metrics</h3>
// // //                 <p className="mt-2 text-sm text-slate-600">{biometrics}</p>
// // //               </div>

// // //               <div>
// // //                 <h3 className="text-sm font-medium text-slate-700">Data-Driven Insights</h3>
// // //                 <p className="mt-2 text-sm text-slate-600">{dataDriven}</p>
// // //               </div>

// // //               <div>
// // //                 <h3 className="text-sm font-medium text-slate-700">Strategic Pivots</h3>
// // //                 <p className="mt-2 text-sm text-slate-600">{strategic}</p>
// // //               </div>

// // //               <div>
// // //                 <h3 className="text-sm font-medium text-slate-700">Member-Initiated Goal</h3>
// // //                 <p className="mt-2 text-sm text-slate-600">{memberGoal}</p>
// // //               </div>
// // //             </div>
// // //           </section>

// // //           {/* Final Outcome */}
// // //           <section aria-labelledby="final-outcome">
// // //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
// // //               <h2 id="final-outcome" className="text-lg font-semibold text-slate-800">Final Outcome</h2>
// // //               <p className="mt-3 text-sm text-slate-600">{finalOutcome}</p>
// // //             </div>
// // //           </section>

// // //           {/* Stateful Persona Analysis */}
// // //           <section aria-labelledby="persona-analysis">
// // //             <div>
// // //               <h2 id="persona-analysis" className="text-lg font-semibold text-slate-800 mb-4">Stateful Persona Analysis</h2>
// // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                 <PersonaCard heading="Before" text={personaBefore} />
// // //                 <PersonaCard heading="After" text={personaAfter} />
// // //               </div>
// // //             </div>
// // //           </section>
// // //         </div>

// // //         {/* Right column: Narrative scrollable box */}
// // //         <aside className="lg:col-span-4">
// // //           <div className="sticky top-24">
// // //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm h-[70vh] overflow-auto">
// // //               <div className="flex items-center gap-3 mb-4">
// // //                 <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" aria-hidden>
// // //                   <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// // //                 </svg>
// // //                 <div>
// // //                   <div className="text-sm font-semibold text-slate-800">Narrative</div>
// // //                   <div className="text-xs text-slate-400">Full episode story — scroll to read.</div>
// // //                 </div>
// // //               </div>

// // //               <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
// // //                 {episode.narrative}
// // //               </div>

// // //               <div className="mt-6 text-xs text-slate-400">
// // //                 Source: conversation logs & compiled notes
// // //               </div>

// // //               <div className="mt-4 flex gap-2">
// // //                 <Link href="/full-chat" className="text-indigo-600 text-sm font-medium hover:underline">Open full chat</Link>
// // //                 <button className="ml-auto bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-md">Why (explain)</button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </aside>
// // //       </div>
// // //     </main>
// // //   );
// // // }




// // // app/journey/[id]/page.tsx
// // "use client";

// // import React, { useState } from "react";
// // import Link from "next/link";
// // import { notFound } from "next/navigation";
// // import { EPISODES } from "@/data/journey"; // adjust path if your data file is elsewhere

// // type Params = { params: { id: string } };

// // function escapeRegExp(str: string) {
// //   return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// // }

// // function removeTitlePrefix(title: string, content?: string) {
// //   if (!content) return "";
// //   const t = title.trim();
// //   if (!t) return content;
// //   const rx = new RegExp(`^\\s*${escapeRegExp(t)}\\s*(?:—|:|-)\\s*`, "i");
// //   return content.replace(rx, "").trim();
// // }

// // function PersonaCard({ heading, text }: { heading: string; text?: string }) {
// //   return (
// //     <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm">
// //       <div className="text-sm font-semibold text-slate-800 mb-2">{heading}</div>
// //       <div className="text-sm text-slate-600">{text}</div>
// //     </div>
// //   );
// // }

// // export default function EpisodePage({ params }: Params) {
// //   const id = Number(params.id);
// //   const episode = EPISODES.find((e) => e.id === id);

// //   if (!episode) {
// //     notFound();
// //     return null;
// //   }

// //   const primaryGoal = removeTitlePrefix("Primary Goal", episode.primaryGoalFull);
// //   const friction = removeTitlePrefix("Friction Points", episode.frictionFull);
// //   const finalOutcome = removeTitlePrefix("Final Outcome", episode.finalOutcomeFull);

// //   const biometrics = removeTitlePrefix("Biometrics & Special Metrics", episode.metrics?.biometricsAndSpecialMetrics);
// //   const dataDriven = removeTitlePrefix("Data-Driven Insights", episode.metrics?.dataDrivenInsights);
// //   const strategic = removeTitlePrefix("Strategic Pivots", episode.metrics?.strategicPivots);
// //   const memberGoal = removeTitlePrefix("Member-Initiated Goal", episode.metrics?.memberInitiatedGoal);

// //   const personaBefore = removeTitlePrefix("Before", episode.persona?.beforeFull);
// //   const personaAfter = removeTitlePrefix("After", episode.persona?.afterFull);

// //   // ✅ State for Ask Elixir chat
// //   const [chat, setChat] = useState<{ role: "user" | "elixir"; text: string }[]>([]);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const sendMessage = async () => {
// //     if (!input.trim()) return;
// //     const userMsg = { role: "user", text: input };
// //     setChat((prev) => [...prev, userMsg]);
// //     setInput("");
// //     setLoading(true);

// //     try {
// //       // Placeholder fetch to your API route (RAG + LLM backend)
// //       const res = await fetch("/api/ask-elixir", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ question: input, episodeId: id }),
// //       });

// //       const data = await res.json();
// //       const answer = data.answer || "Elixir could not find an answer.";
// //       setChat((prev) => [...prev, { role: "elixir", text: answer }]);
// //     } catch (err) {
// //       setChat((prev) => [
// //         ...prev,
// //         { role: "elixir", text: "⚠️ Something went wrong, please try again." },
// //       ]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <main className="max-w-screen-2xl mx-auto px-8 py-12">
// //       <div className="mb-6">
// //         <Link href="/journey" className="text-indigo-600 text-sm hover:underline">
// //           ← Back to timeline
// //         </Link>
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
// //         {/* Left column */}
// //         <div className="lg:col-span-8 space-y-6">
// //           <header>
// //             <h1 className="text-3xl font-extrabold text-slate-900">{episode.title}</h1>
// //             <div className="text-sm text-slate-500 mt-1">{episode.weeks}</div>
// //           </header>

// //           {/* Primary Goal */}
// //           <section aria-labelledby="primary-goal">
// //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
// //               <h2 id="primary-goal" className="text-lg font-semibold text-slate-800">
// //                 Primary Goal
// //               </h2>
// //               <p className="mt-3 text-sm text-slate-600">{primaryGoal}</p>
// //             </div>
// //           </section>

// //           {/* Friction Points */}
// //           <section aria-labelledby="friction-points">
// //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
// //               <h2 id="friction-points" className="text-lg font-semibold text-slate-800">
// //                 Friction Points
// //               </h2>
// //               <p className="mt-3 text-sm text-slate-600">{friction}</p>
// //             </div>
// //           </section>

// //           {/* Key Metrics & Milestones */}
// //           <section aria-labelledby="key-metrics">
// //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-4">
// //               <h2 id="key-metrics" className="text-lg font-semibold text-slate-800">
// //                 Key Metrics &amp; Milestones
// //               </h2>

// //               <div>
// //                 <h3 className="text-sm font-medium text-slate-700">Biometrics &amp; Special Metrics</h3>
// //                 <p className="mt-2 text-sm text-slate-600">{biometrics}</p>
// //               </div>

// //               <div>
// //                 <h3 className="text-sm font-medium text-slate-700">Data-Driven Insights</h3>
// //                 <p className="mt-2 text-sm text-slate-600">{dataDriven}</p>
// //               </div>

// //               <div>
// //                 <h3 className="text-sm font-medium text-slate-700">Strategic Pivots</h3>
// //                 <p className="mt-2 text-sm text-slate-600">{strategic}</p>
// //               </div>

// //               <div>
// //                 <h3 className="text-sm font-medium text-slate-700">Member-Initiated Goal</h3>
// //                 <p className="mt-2 text-sm text-slate-600">{memberGoal}</p>
// //               </div>
// //             </div>
// //           </section>

// //           {/* Final Outcome */}
// //           <section aria-labelledby="final-outcome">
// //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
// //               <h2 id="final-outcome" className="text-lg font-semibold text-slate-800">
// //                 Final Outcome
// //               </h2>
// //               <p className="mt-3 text-sm text-slate-600">{finalOutcome}</p>
// //             </div>
// //           </section>

// //           {/* Persona Analysis */}
// //           <section aria-labelledby="persona-analysis">
// //             <div>
// //               <h2 id="persona-analysis" className="text-lg font-semibold text-slate-800 mb-4">
// //                 Stateful Persona Analysis
// //               </h2>
// //               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <PersonaCard heading="Before" text={personaBefore} />
// //                 <PersonaCard heading="After" text={personaAfter} />
// //               </div>
// //             </div>
// //           </section>
// //         </div>

// //         {/* Right column */}
// //         <aside className="lg:col-span-4 space-y-6">
// //           {/* Narrative box */}
// //           <div className="sticky top-24">
// //             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm h-[70vh] overflow-auto">
// //               <div className="flex items-center gap-3 mb-4">
// //                 <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" aria-hidden>
// //                   <path
// //                     d="M4 6h16M4 12h16M4 18h16"
// //                     stroke="currentColor"
// //                     strokeWidth="1.5"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                 </svg>
// //                 <div>
// //                   <div className="text-sm font-semibold text-slate-800">Narrative</div>
// //                   <div className="text-xs text-slate-400">Full episode story — scroll to read.</div>
// //                 </div>
// //               </div>

// //               <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
// //                 {episode.narrative}
// //               </div>

// //               <div className="mt-6 text-xs text-slate-400">
// //                 Source: conversation logs & compiled notes
// //               </div>

// //               <div className="mt-4 flex gap-2">
// //                 <Link href="/full-chat" className="text-indigo-600 text-sm font-medium hover:underline">
// //                   Open full chat
// //                 </Link>
// //                 <button className="ml-auto bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-md">
// //                   Why (explain)
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           {/* ✅ Ask Elixir chatbox */}
// //           <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm h-[60vh] flex flex-col">
// //             <h2 className="text-lg font-semibold text-slate-800 mb-3">🤖 Ask Elixir</h2>
// //             <div className="flex-1 overflow-auto space-y-3 mb-3">
// //               {chat.map((c, i) => (
// //                 <div
// //                   key={i}
// //                   className={`p-3 rounded-lg text-sm max-w-[80%] ${
// //                     c.role === "user"
// //                       ? "bg-indigo-100 ml-auto text-right"
// //                       : "bg-gray-100 mr-auto text-left"
// //                   }`}
// //                 >
// //                   {c.text}
// //                 </div>
// //               ))}
// //               {loading && <div className="text-xs text-gray-400">Elixir is thinking...</div>}
// //             </div>
// //             <div className="flex gap-2">
// //               <input
// //                 type="text"
// //                 value={input}
// //                 onChange={(e) => setInput(e.target.value)}
// //                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
// //                 placeholder="Ask me anything about this episode..."
// //                 className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               />
// //               <button
// //                 onClick={sendMessage}
// //                 disabled={loading}
// //                 className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm disabled:opacity-50"
// //               >
// //                 Send
// //               </button>
// //             </div>
// //           </div>
// //         </aside>
// //       </div>
// //     </main>
// //   );
// // }


// // app/journey/[id]/page.tsx
// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { EPISODES } from "@/data/journey"; // adjust path if your data file is elsewhere

// type Params = { params: { id: string } };

// function escapeRegExp(str: string) {
//   return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
// }

// function removeTitlePrefix(title: string, content?: string) {
//   if (!content) return "";
//   const t = title.trim();
//   if (!t) return content;
//   const rx = new RegExp(`^\\s*${escapeRegExp(t)}\\s*(?:—|:|-)\\s*`, "i");
//   return content.replace(rx, "").trim();
// }

// function PersonaCard({ heading, text }: { heading: string; text?: string }) {
//   return (
//     <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm">
//       <div className="text-sm font-semibold text-slate-800 mb-2">{heading}</div>
//       <div className="text-sm text-slate-600">{text}</div>
//     </div>
//   );
// }

// export default function EpisodePage({ params }: Params) {
//   const id = Number(params.id);
//   const episode = EPISODES.find((e) => e.id === id);

//   if (!episode) {
//     notFound();
//     return null;
//   }

//   const primaryGoal = removeTitlePrefix("Primary Goal", episode.primaryGoalFull);
//   const friction = removeTitlePrefix("Friction Points", episode.frictionFull);
//   const finalOutcome = removeTitlePrefix("Final Outcome", episode.finalOutcomeFull);

//   const biometrics = removeTitlePrefix("Biometrics & Special Metrics", episode.metrics?.biometricsAndSpecialMetrics);
//   const dataDriven = removeTitlePrefix("Data-Driven Insights", episode.metrics?.dataDrivenInsights);
//   const strategic = removeTitlePrefix("Strategic Pivots", episode.metrics?.strategicPivots);
//   const memberGoal = removeTitlePrefix("Member-Initiated Goal", episode.metrics?.memberInitiatedGoal);

//   const personaBefore = removeTitlePrefix("Before", episode.persona?.beforeFull);
//   const personaAfter = removeTitlePrefix("After", episode.persona?.afterFull);

//   // ✅ State for Ask Elixir chat
//   const [chat, setChat] = useState<{ role: "user" | "elixir"; text: string }[]>([]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);

//   const sendMessage = async () => {
//     if (!input.trim()) return;
//     const userMsg = { role: "user", text: input };
//     setChat((prev) => [...prev, userMsg]);
//     setInput("");
//     setLoading(true);

//     try {
//       // Placeholder fetch to your API route (RAG + LLM backend)
//       const res = await fetch("/api/ask-elixir", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ question: input, episodeId: id }),
//       });

//       const data = await res.json();
//       const answer = data.answer || "Elixir could not find an answer.";
//       setChat((prev) => [...prev, { role: "elixir", text: answer }]);
//     } catch (err) {
//       setChat((prev) => [
//         ...prev,
//         { role: "elixir", text: "⚠️ Something went wrong, please try again." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="max-w-screen-2xl mx-auto px-8 py-12">
//       <div className="mb-6">
//         <Link href="/journey" className="text-indigo-600 text-sm hover:underline">
//           ← Back to timeline
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//         {/* Left column */}
//         <div className="lg:col-span-8 space-y-6">
//           <header>
//             <h1 className="text-3xl font-extrabold text-slate-900">{episode.title}</h1>
//             <div className="text-sm text-slate-500 mt-1">{episode.weeks}</div>
//           </header>

//           {/* Primary Goal */}
//           <section aria-labelledby="primary-goal">
//             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
//               <h2 id="primary-goal" className="text-lg font-semibold text-slate-800">
//                 Primary Goal
//               </h2>
//               <p className="mt-3 text-sm text-slate-600">{primaryGoal}</p>
//             </div>
//           </section>

//           {/* Friction Points */}
//           <section aria-labelledby="friction-points">
//             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
//               <h2 id="friction-points" className="text-lg font-semibold text-slate-800">
//                 Friction Points
//               </h2>
//               <p className="mt-3 text-sm text-slate-600">{friction}</p>
//             </div>
//           </section>

//           {/* Key Metrics & Milestones */}
//           <section aria-labelledby="key-metrics">
//             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-4">
//               <h2 id="key-metrics" className="text-lg font-semibold text-slate-800">
//                 Key Metrics &amp; Milestones
//               </h2>

//               <div>
//                 <h3 className="text-sm font-medium text-slate-700">Biometrics &amp; Special Metrics</h3>
//                 <p className="mt-2 text-sm text-slate-600">{biometrics}</p>
//               </div>

//               <div>
//                 <h3 className="text-sm font-medium text-slate-700">Data-Driven Insights</h3>
//                 <p className="mt-2 text-sm text-slate-600">{dataDriven}</p>
//               </div>

//               <div>
//                 <h3 className="text-sm font-medium text-slate-700">Strategic Pivots</h3>
//                 <p className="mt-2 text-sm text-slate-600">{strategic}</p>
//               </div>

//               <div>
//                 <h3 className="text-sm font-medium text-slate-700">Member-Initiated Goal</h3>
//                 <p className="mt-2 text-sm text-slate-600">{memberGoal}</p>
//               </div>
//             </div>
//           </section>

//           {/* Final Outcome */}
//           <section aria-labelledby="final-outcome">
//             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
//               <h2 id="final-outcome" className="text-lg font-semibold text-slate-800">
//                 Final Outcome
//               </h2>
//               <p className="mt-3 text-sm text-slate-600">{finalOutcome}</p>
//             </div>
//           </section>

//           {/* Persona Analysis */}
//           <section aria-labelledby="persona-analysis">
//             <div>
//               <h2 id="persona-analysis" className="text-lg font-semibold text-slate-800 mb-4">
//                 Stateful Persona Analysis
//               </h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <PersonaCard heading="Before" text={personaBefore} />
//                 <PersonaCard heading="After" text={personaAfter} />
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Right column */}
//         <aside className="lg:col-span-4 space-y-6">
//           {/* Narrative box */}
//           <div className="sticky top-24">
//             <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm h-[70vh] overflow-auto">
//               <div className="flex items-center gap-3 mb-4">
//                 <svg className="w-5 h-5 text-indigo-600" viewBox="0 0 24 24" fill="none" aria-hidden>
//                   <path
//                     d="M4 6h16M4 12h16M4 18h16"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <div>
//                   <div className="text-sm font-semibold text-slate-800">Narrative</div>
//                   <div className="text-xs text-slate-400">Full episode story — scroll to read.</div>
//                 </div>
//               </div>

//               <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
//                 {episode.narrative}
//               </div>

//               <div className="mt-6 text-xs text-slate-400">
//                 Source: conversation logs & compiled notes
//               </div>

//               <div className="mt-4 flex gap-2">
//                 <Link href="/full-chat" className="text-indigo-600 text-sm font-medium hover:underline">
//                   Open full chat
//                 </Link>
//                 <button className="ml-auto bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-md">
//                   Why (explain)
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* ✅ Ask Elixir chatbox */}
//           <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm h-[60vh] flex flex-col">
//             <h2 className="text-lg font-semibold text-slate-800 mb-3">🤖 Ask Elixir</h2>
//             <div className="flex-1 overflow-auto space-y-3 mb-3">
//               {chat.map((c, i) => (
//                 <div
//                   key={i}
//                   className={`p-3 rounded-lg text-sm max-w-[80%] ${
//                     c.role === "user"
//                       ? "bg-indigo-100 ml-auto text-right"
//                       : "bg-gray-100 mr-auto text-left"
//                   }`}
//                 >
//                   {c.text}
//                 </div>
//               ))}
//               {loading && <div className="text-xs text-gray-400">Elixir is thinking...</div>}
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && sendMessage()}
//                 placeholder="Ask me anything about this episode..."
//                 className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//               <button
//                 onClick={sendMessage}
//                 disabled={loading}
//                 className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm disabled:opacity-50"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </main>
//   );
// }




"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EPISODES } from "@/data/journey"; // adjust path if your data file is elsewhere

type Params = { params: { id: string } };

function escapeRegExp(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Remove a leading 'Title — ' or 'Title - ' or 'Title: ' prefix from content,
 * only if it matches exactly (case-insensitive).
 */
function removeTitlePrefix(title: string, content?: string) {
  if (!content) return "";
  const t = title.trim();
  if (!t) return content;
  // regex to match: ^\s*title\s*[—:-]\s*  (case-insensitive)
  const rx = new RegExp(`^\\s*${escapeRegExp(t)}\\s*(?:—|:|-)\\s*`, "i");
  return content.replace(rx, "").trim();
}

/** Small layout helper for persona before/after cards */
function PersonaCard({ heading, text }: { heading: string; text?: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-lg p-4 shadow-sm">
      <div className="text-sm font-semibold text-slate-800 mb-2">{heading}</div>
      <div className="text-sm text-slate-600">{text}</div>
    </div>
  );
}

export default function EpisodePage({ params }: Params) {
  const id = Number(params.id);
  const episode = EPISODES.find((e) => e.id === id);

  if (!episode) {
    notFound();
    return null;
  }

  // Clean top-level fields by removing duplicated title prefixes if present.
  const primaryGoal = removeTitlePrefix("Primary Goal", episode.primaryGoalFull);
  const friction = removeTitlePrefix("Friction Points", episode.frictionFull);
  const finalOutcome = removeTitlePrefix("Final Outcome", episode.finalOutcomeFull);

  // For metrics, subsection titles exist; remove repeated subsection labels similarly.
  const biometrics = removeTitlePrefix(
    "Biometrics & Special Metrics",
    episode.metrics?.biometricsAndSpecialMetrics
  );
  const dataDriven = removeTitlePrefix(
    "Data-Driven Insights",
    episode.metrics?.dataDrivenInsights
  );
  const strategic = removeTitlePrefix("Strategic Pivots", episode.metrics?.strategicPivots);
  const memberGoal = removeTitlePrefix(
    "Member-Initiated Goal",
    episode.metrics?.memberInitiatedGoal
  );

  const personaBefore = removeTitlePrefix("Before", episode.persona?.beforeFull);
  const personaAfter = removeTitlePrefix("After", episode.persona?.afterFull);

  // ✅ Ask Elixir state
  const [chat, setChat] = useState<{ role: "user" | "elixir"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newChat = [...chat, { role: "user", text: input }];
    setChat(newChat);
    setInput("");
    setLoading(true);

    try {
      // 🔥 Replace with real LLM+RAG call
      const response = `Elixir's answer to: "${input}"`;
      setChat([...newChat, { role: "elixir", text: response }]);
    } catch (err) {
      setChat([...newChat, { role: "elixir", text: "⚠️ Error: Unable to fetch answer." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-12">
      <div className="mb-6">
        <Link href="/journey" className="text-indigo-600 text-sm hover:underline">
          ← Back to timeline
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column: main sections */}
        <div className="lg:col-span-8 space-y-6">
          <header>
            <h1 className="text-3xl font-extrabold text-slate-900">{episode.title}</h1>
            <div className="text-sm text-slate-500 mt-1">{episode.weeks}</div>
          </header>

          {/* Primary Goal */}
          <section aria-labelledby="primary-goal">
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
              <h2 id="primary-goal" className="text-lg font-semibold text-slate-800">
                Primary Goal
              </h2>
              <p className="mt-3 text-sm text-slate-600">{primaryGoal}</p>
            </div>
          </section>

          {/* Friction Points */}
          <section aria-labelledby="friction-points">
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
              <h2 id="friction-points" className="text-lg font-semibold text-slate-800">
                Friction Points
              </h2>
              <p className="mt-3 text-sm text-slate-600">{friction}</p>
            </div>
          </section>

          {/* Key Metrics & Milestones */}
          <section aria-labelledby="key-metrics">
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm space-y-4">
              <h2 id="key-metrics" className="text-lg font-semibold text-slate-800">
                Key Metrics &amp; Milestones
              </h2>

              <div>
                <h3 className="text-sm font-medium text-slate-700">
                  Biometrics &amp; Special Metrics
                </h3>
                <p className="mt-2 text-sm text-slate-600">{biometrics}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-700">Data-Driven Insights</h3>
                <p className="mt-2 text-sm text-slate-600">{dataDriven}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-700">Strategic Pivots</h3>
                <p className="mt-2 text-sm text-slate-600">{strategic}</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-slate-700">Member-Initiated Goal</h3>
                <p className="mt-2 text-sm text-slate-600">{memberGoal}</p>
              </div>
            </div>
          </section>

          {/* Final Outcome */}
          <section aria-labelledby="final-outcome">
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm">
              <h2 id="final-outcome" className="text-lg font-semibold text-slate-800">
                Final Outcome
              </h2>
              <p className="mt-3 text-sm text-slate-600">{finalOutcome}</p>
            </div>
          </section>

          {/* Stateful Persona Analysis */}
          <section aria-labelledby="persona-analysis">
            <div>
              <h2
                id="persona-analysis"
                className="text-lg font-semibold text-slate-800 mb-4"
              >
                Stateful Persona Analysis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PersonaCard heading="Before" text={personaBefore} />
                <PersonaCard heading="After" text={personaAfter} />
              </div>
            </div>
          </section>

          {/* ✅ Ask Elixir Chatbox */}
          <section aria-labelledby="ask-elixir">
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm h-[60vh] flex flex-col">
              <h2 id="ask-elixir" className="text-lg font-semibold text-slate-800 mb-3">
                🤖 Ask Elixir
              </h2>
              <div className="flex-1 overflow-auto space-y-3 mb-3">
                {chat.map((c, i) => (
                  <div
                    key={i}
                    className={`p-3 rounded-lg text-sm max-w-[80%] ${
                      c.role === "user"
                        ? "bg-indigo-100 ml-auto text-right"
                        : "bg-gray-100 mr-auto text-left"
                    }`}
                  >
                    {c.text}
                  </div>
                ))}
                {loading && (
                  <div className="text-xs text-gray-400">Elixir is thinking...</div>
                )}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Ask me anything about this episode..."
                  className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={sendMessage}
                  disabled={loading}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right column: Narrative scrollable box */}
        <aside className="lg:col-span-4">
          <div className="sticky top-24">
            <div className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm h-[70vh] overflow-auto">
              <div className="flex items-center gap-3 mb-4">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <div className="text-sm font-semibold text-slate-800">
                    Narrative
                  </div>
                  <div className="text-xs text-slate-400">
                    Full episode story — scroll to read.
                  </div>
                </div>
              </div>

              <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {episode.narrative}
              </div>

              <div className="mt-6 text-xs text-slate-400">
                Source: conversation logs & compiled notes
              </div>

              <div className="mt-4 flex gap-2">
                {/* <Link
                  href="/full-chat"
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  Open full chat
                </Link>
                <button className="ml-auto bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-md">
                  Why (explain)
                </button> */}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

