// // // // // // // // // // // // // // app/journey/page.tsx
// // // // // // // // // // // // // "use client";

// // // // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // // // import { Card } from "@/components/ui/card";
// // // // // // // // // // // // // import { Clock, ArrowRight } from "lucide-react";

// // // // // // // // // // // // // /**
// // // // // // // // // // // // //  * Episodes data (keep these texts as placeholders; you can replace with full content)
// // // // // // // // // // // // //  */
// // // // // // // // // // // // // const episodes = [
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 1,
// // // // // // // // // // // // //     title: "Episode 1: Establishing the Baseline",
// // // // // // // // // // // // //     weeks: "Weeks 1-4",
// // // // // // // // // // // // //     narrative:
// // // // // // // // // // // // //       "The journey began by establishing a clear, data-defined baseline for a high-performing individual navigating a high-stress world. Initial biometrics painted a picture of a system under load...",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 2,
// // // // // // // // // // // // //     title: "Episode 2: The First Experiment & The Clinical Baseline",
// // // // // // // // // // // // //     weeks: "Weeks 5-9",
// // // // // // // // // // // // //     narrative:
// // // // // // // // // // // // //       "Following initial onboarding, this five-week period emphasized quiet consistency—sleep as the primary lever. Improvements were incremental but meaningful...",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 3,
// // // // // // // // // // // // //     title: "Episode 3: Decoding the Data, Refining the Strategy",
// // // // // // // // // // // // //     weeks: "Weeks 10-14",
// // // // // // // // // // // // //     narrative:
// // // // // // // // // // // // //       "Quarterly labs revealed a genetically-elevated Lp(a). Strategy pivoted to aggressively optimize modifiable risks: sleep, cardio, nutrition. Travel recovery time halved...",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 4,
// // // // // // // // // // // // //     title: "Episode 4: Mastering Travel & Expanding Horizons",
// // // // // // // // // // // // //     weeks: "Weeks 15-20",
// // // // // // // // // // // // //     narrative:
// // // // // // // // // // // // //       "Rohan demonstrated travel resilience but uncovered a systemic workout-scheduling failure. This catalyzed a redesign of training and a new golf performance focus...",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 5,
// // // // // // // // // // // // //     title: "Episode 5: System Failure, Clinical Success",
// // // // // // // // // // // // //     weeks: "Weeks 21-26",
// // // // // // // // // // // // //     narrative:
// // // // // // // // // // // // //       "Despite scheduling issues the clinical program produced big wins: ApoB and hs-CRP dropped, acute illness handled via wearable-triggered protocols, genetic testing initiated...",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // //   {
// // // // // // // // // // // // //     id: 6,
// // // // // // // // // // // // //     title: "Episode 6: Achieving Resilience, Personalizing the Future",
// // // // // // // // // // // // //     weeks: "Weeks 27-32",
// // // // // // // // // // // // //     narrative:
// // // // // // // // // // // // //       "The 32-week review validated the program: large reductions in cardiovascular risk and a plan to move to genetic-informed personalization (ApoE, MTHFR)...",
// // // // // // // // // // // // //   },
// // // // // // // // // // // // // ];

// // // // // // // // // // // // // function excerpt(text: string, n = 160) {
// // // // // // // // // // // // //   if (!text) return "";
// // // // // // // // // // // // //   return text.length <= n ? text : text.slice(0, n).trim() + "...";
// // // // // // // // // // // // // }

// // // // // // // // // // // // // export default function JourneyPage() {
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className="min-h-screen bg-gray-50 py-12 px-4">
// // // // // // // // // // // // //       <div className="mx-auto max-w-screen-xl">
// // // // // // // // // // // // //         <header className="mb-8 px-2">
// // // // // // // // // // // // //           <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Journey Timeline</h1>
// // // // // // // // // // // // //           <p className="mt-2 text-lg text-slate-600 max-w-3xl">
// // // // // // // // // // // // //             Six episodes across eight months — a clean vertical timeline. Click any episode to open a focused detail view.
// // // // // // // // // // // // //           </p>
// // // // // // // // // // // // //         </header>

// // // // // // // // // // // // //         {/* Timeline container: uses a 3-col grid via inline gridTemplateColumns so center column is fixed */}
// // // // // // // // // // // // //         <div className="relative mt-8">
// // // // // // // // // // // // //           {/* center rail - absolute so it covers full height */}
// // // // // // // // // // // // //           <div
// // // // // // // // // // // // //             className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-20"
// // // // // // // // // // // // //             aria-hidden
// // // // // // // // // // // // //           >
// // // // // // // // // // // // //             {/* thin rail visually centered inside the 80px column */}
// // // // // // // // // // // // //             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-100 to-indigo-200 rounded" />
// // // // // // // // // // // // //           </div>

// // // // // // // // // // // // //           <ol className="space-y-16">
// // // // // // // // // // // // //             {episodes.map((ep, idx) => {
// // // // // // // // // // // // //               const isLeft = idx % 2 === 0;

// // // // // // // // // // // // //               return (
// // // // // // // // // // // // //                 <li key={ep.id} className="relative">
// // // // // // // // // // // // //                   {/* grid: left | center-fixed | right. We use inline style for predictable center width */}
// // // // // // // // // // // // //                   <div
// // // // // // // // // // // // //                     className="grid items-start gap-6"
// // // // // // // // // // // // //                     style={{ gridTemplateColumns: "1fr 80px 1fr" }}
// // // // // // // // // // // // //                   >
// // // // // // // // // // // // //                     {/* Left column (card only visible here when isLeft) */}
// // // // // // // // // // // // //                     <div className={`flex ${isLeft ? "justify-end" : "justify-start"}`}>
// // // // // // // // // // // // //                       {isLeft && (
// // // // // // // // // // // // //                         <Card className="p-6 w-full max-w-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
// // // // // // // // // // // // //                           <div className="flex gap-5">
// // // // // // // // // // // // //                             <div className="flex-shrink-0">
// // // // // // // // // // // // //                               <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-lg shadow">
// // // // // // // // // // // // //                                 {ep.id}
// // // // // // // // // // // // //                               </div>
// // // // // // // // // // // // //                             </div>

// // // // // // // // // // // // //                             <div className="flex-1">
// // // // // // // // // // // // //                               <div className="flex items-center justify-between">
// // // // // // // // // // // // //                                 <div className="flex items-center gap-2 text-sm text-slate-500">
// // // // // // // // // // // // //                                   <Clock className="h-4 w-4" />
// // // // // // // // // // // // //                                   <span>{ep.weeks}</span>
// // // // // // // // // // // // //                                 </div>
// // // // // // // // // // // // //                               </div>

// // // // // // // // // // // // //                               <h3 className="mt-2 text-xl font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // // // // // //                               <p className="mt-2 text-sm text-slate-600 leading-relaxed">{excerpt(ep.narrative)}</p>

// // // // // // // // // // // // //                               <div className="mt-4 flex items-center justify-between">
// // // // // // // // // // // // //                                 <span className="text-xs text-slate-500">Click to open episode</span>
// // // // // // // // // // // // //                                 <Link
// // // // // // // // // // // // //                                   href={`/journey/${ep.id}`}
// // // // // // // // // // // // //                                   className="inline-flex items-center gap-2 text-indigo-600 font-medium"
// // // // // // // // // // // // //                                 >
// // // // // // // // // // // // //                                   <span>View details</span>
// // // // // // // // // // // // //                                   <ArrowRight className="h-4 w-4" />
// // // // // // // // // // // // //                                 </Link>
// // // // // // // // // // // // //                               </div>
// // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                         </Card>
// // // // // // // // // // // // //                       )}
// // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // //                     {/* Center fixed column with marker */}
// // // // // // // // // // // // //                     <div className="flex items-start justify-center">
// // // // // // // // // // // // //                       <div className="relative w-20 h-20">
// // // // // // // // // // // // //                         {/* marker sits centered, larger, no extra dots */}
// // // // // // // // // // // // //                         <div
// // // // // // // // // // // // //                           className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-20 h-20 rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center shadow-lg"
// // // // // // // // // // // // //                           style={{ top: "8px" }}
// // // // // // // // // // // // //                         >
// // // // // // // // // // // // //                           <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
// // // // // // // // // // // // //                             {ep.id}
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // //                     {/* Right column (card only visible when not isLeft) */}
// // // // // // // // // // // // //                     <div className={`flex ${isLeft ? "justify-start" : "justify-start"}`}>
// // // // // // // // // // // // //                       {!isLeft && (
// // // // // // // // // // // // //                         <Card className="p-6 w-full max-w-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
// // // // // // // // // // // // //                           <div className="flex gap-5">
// // // // // // // // // // // // //                             <div className="flex-shrink-0">
// // // // // // // // // // // // //                               <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-lg shadow">
// // // // // // // // // // // // //                                 {ep.id}
// // // // // // // // // // // // //                               </div>
// // // // // // // // // // // // //                             </div>

// // // // // // // // // // // // //                             <div className="flex-1">
// // // // // // // // // // // // //                               <div className="flex items-center justify-between">
// // // // // // // // // // // // //                                 <div className="flex items-center gap-2 text-sm text-slate-500">
// // // // // // // // // // // // //                                   <Clock className="h-4 w-4" />
// // // // // // // // // // // // //                                   <span>{ep.weeks}</span>
// // // // // // // // // // // // //                                 </div>
// // // // // // // // // // // // //                               </div>

// // // // // // // // // // // // //                               <h3 className="mt-2 text-xl font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // // // // // //                               <p className="mt-2 text-sm text-slate-600 leading-relaxed">{excerpt(ep.narrative)}</p>

// // // // // // // // // // // // //                               <div className="mt-4 flex items-center justify-between">
// // // // // // // // // // // // //                                 <span className="text-xs text-slate-500">Click to open episode</span>
// // // // // // // // // // // // //                                 <Link
// // // // // // // // // // // // //                                   href={`/journey/${ep.id}`}
// // // // // // // // // // // // //                                   className="inline-flex items-center gap-2 text-indigo-600 font-medium"
// // // // // // // // // // // // //                                 >
// // // // // // // // // // // // //                                   <span>View details</span>
// // // // // // // // // // // // //                                   <ArrowRight className="h-4 w-4" />
// // // // // // // // // // // // //                                 </Link>
// // // // // // // // // // // // //                               </div>
// // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                         </Card>
// // // // // // // // // // // // //                       )}
// // // // // // // // // // // // //                     </div>

// // // // // // // // // // // // //                     {/* Mobile fallback: stacked full-width card under marker */}
// // // // // // // // // // // // //                     <div className="md:hidden col-span-3 mt-4">
// // // // // // // // // // // // //                       <Card className="p-4">
// // // // // // // // // // // // //                         <div className="flex items-start gap-3">
// // // // // // // // // // // // //                           <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-semibold">
// // // // // // // // // // // // //                             {ep.id}
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                           <div className="flex-1">
// // // // // // // // // // // // //                             <div className="flex items-center gap-2 text-sm text-slate-500">
// // // // // // // // // // // // //                               <Clock className="h-4 w-4" />
// // // // // // // // // // // // //                               <span>{ep.weeks}</span>
// // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // //                             <h3 className="mt-1 font-semibold">{ep.title}</h3>
// // // // // // // // // // // // //                             <p className="mt-2 text-sm text-slate-600">{excerpt(ep.narrative)}</p>
// // // // // // // // // // // // //                             <div className="mt-3 flex items-center justify-between">
// // // // // // // // // // // // //                               <span className="text-xs text-slate-500">Tap to open</span>
// // // // // // // // // // // // //                               <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium inline-flex items-center gap-2">
// // // // // // // // // // // // //                                 <span>View details</span>
// // // // // // // // // // // // //                                 <ArrowRight className="h-4 w-4" />
// // // // // // // // // // // // //                               </Link>
// // // // // // // // // // // // //                             </div>
// // // // // // // // // // // // //                           </div>
// // // // // // // // // // // // //                         </div>
// // // // // // // // // // // // //                       </Card>
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </li>
// // // // // // // // // // // // //               );
// // // // // // // // // // // // //             })}
// // // // // // // // // // // // //           </ol>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }



// // // // // // // // // // // // // app/journey/page.tsx
// // // // // // // // // // // // "use client";

// // // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // // import { Card } from "@/components/ui/card";
// // // // // // // // // // // // import { Clock, ArrowRight } from "lucide-react";

// // // // // // // // // // // // /**
// // // // // // // // // // // //  * Desktop-first Episodes data (replace with real text/fields)
// // // // // // // // // // // //  */
// // // // // // // // // // // // const episodes = [
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 1,
// // // // // // // // // // // //     title: "Episode 1: Establishing the Baseline",
// // // // // // // // // // // //     weeks: "Weeks 1-4",
// // // // // // // // // // // //     narrative:
// // // // // // // // // // // //       "The journey began by establishing a clear, data-defined baseline for a high-performing individual navigating a high-stress world. Initial biometrics painted a picture of a system under load...",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 2,
// // // // // // // // // // // //     title: "Episode 2: The First Experiment & The Clinical Baseline",
// // // // // // // // // // // //     weeks: "Weeks 5-9",
// // // // // // // // // // // //     narrative:
// // // // // // // // // // // //       "Following initial onboarding, this five-week period emphasized quiet consistency—sleep as the primary lever. Improvements were incremental but meaningful...",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 3,
// // // // // // // // // // // //     title: "Episode 3: Decoding the Data, Refining the Strategy",
// // // // // // // // // // // //     weeks: "Weeks 10-14",
// // // // // // // // // // // //     narrative:
// // // // // // // // // // // //       "Quarterly labs revealed a genetically-elevated Lp(a). Strategy pivoted to aggressively optimize modifiable risks: sleep, cardio, nutrition. Travel recovery time halved...",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 4,
// // // // // // // // // // // //     title: "Episode 4: Mastering Travel & Expanding Horizons",
// // // // // // // // // // // //     weeks: "Weeks 15-20",
// // // // // // // // // // // //     narrative:
// // // // // // // // // // // //       "Rohan demonstrated travel resilience but uncovered a systemic workout-scheduling failure. This catalyzed a redesign of training and a new golf performance focus...",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 5,
// // // // // // // // // // // //     title: "Episode 5: System Failure, Clinical Success",
// // // // // // // // // // // //     weeks: "Weeks 21-26",
// // // // // // // // // // // //     narrative:
// // // // // // // // // // // //       "Despite scheduling issues the clinical program produced big wins: ApoB and hs-CRP dropped, acute illness handled via wearable-triggered protocols, genetic testing initiated...",
// // // // // // // // // // // //   },
// // // // // // // // // // // //   {
// // // // // // // // // // // //     id: 6,
// // // // // // // // // // // //     title: "Episode 6: Achieving Resilience, Personalizing the Future",
// // // // // // // // // // // //     weeks: "Weeks 27-32",
// // // // // // // // // // // //     narrative:
// // // // // // // // // // // //       "The 32-week review validated the program: large reductions in cardiovascular risk and a plan to move to genetic-informed personalization (ApoE, MTHFR)...",
// // // // // // // // // // // //   },
// // // // // // // // // // // // ];

// // // // // // // // // // // // function excerpt(text: string, n = 200) {
// // // // // // // // // // // //   if (!text) return "";
// // // // // // // // // // // //   return text.length <= n ? text : text.slice(0, n).trim() + "...";
// // // // // // // // // // // // }

// // // // // // // // // // // // export default function JourneyPage() {
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-8">
// // // // // // // // // // // //       <div className="mx-auto max-w-screen-2xl">
// // // // // // // // // // // //         <header className="mb-10 px-4">
// // // // // // // // // // // //           <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Journey Timeline</h1>
// // // // // // // // // // // //           <p className="mt-3 text-lg text-slate-600 max-w-4xl">
// // // // // // // // // // // //             Six focused episodes across eight months. Desktop-first layout — wide cards, centered rail, clear markers. Click any episode to open its detail page.
// // // // // // // // // // // //           </p>
// // // // // // // // // // // //         </header>

// // // // // // // // // // // //         {/* The timeline wrapper — desktop-first */}
// // // // // // // // // // // //         <div className="relative mt-10">
// // // // // // // // // // // //           {/* fixed center column background (rail) */}
// // // // // // // // // // // //           <div
// // // // // // // // // // // //             className="hidden xl:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[120px] pointer-events-none"
// // // // // // // // // // // //             aria-hidden
// // // // // // // // // // // //           >
// // // // // // // // // // // //             <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full rounded bg-gradient-to-b from-indigo-100 to-indigo-200" />
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           {/* iterate episodes */}
// // // // // // // // // // // //           <ol className="flex flex-col gap-20">
// // // // // // // // // // // //             {episodes.map((ep, idx) => {
// // // // // // // // // // // //               const isLeft = idx % 2 === 0;

// // // // // // // // // // // //               return (
// // // // // // // // // // // //                 <li key={ep.id} className="relative">
// // // // // // // // // // // //                   {/* desktop grid with fixed center column 120px; left and right take remaining space */}
// // // // // // // // // // // //                   <div
// // // // // // // // // // // //                     className="grid items-start gap-8"
// // // // // // // // // // // //                     style={{ gridTemplateColumns: "1fr 120px 1fr", alignItems: "start" }}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     {/* LEFT card (only shown on left items) */}
// // // // // // // // // // // //                     <div className={`flex ${isLeft ? "justify-end pr-6" : "justify-start pl-6"}`}>
// // // // // // // // // // // //                       {isLeft && (
// // // // // // // // // // // //                         <Card className="p-8 w-[78%] shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
// // // // // // // // // // // //                           <div className="flex gap-6">
// // // // // // // // // // // //                             <div className="flex-shrink-0">
// // // // // // // // // // // //                               <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-xl shadow">
// // // // // // // // // // // //                                 {ep.id}
// // // // // // // // // // // //                               </div>
// // // // // // // // // // // //                             </div>

// // // // // // // // // // // //                             <div className="flex-1">
// // // // // // // // // // // //                               <div className="flex items-center justify-between">
// // // // // // // // // // // //                                 <div className="flex items-center gap-3 text-sm text-slate-500">
// // // // // // // // // // // //                                   <Clock className="h-4 w-4" />
// // // // // // // // // // // //                                   <span>{ep.weeks}</span>
// // // // // // // // // // // //                                 </div>
// // // // // // // // // // // //                               </div>

// // // // // // // // // // // //                               <h3 className="mt-3 text-2xl font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // // // // //                               <p className="mt-3 text-sm text-slate-600 leading-relaxed">{excerpt(ep.narrative, 260)}</p>

// // // // // // // // // // // //                               <div className="mt-5 flex items-center justify-between">
// // // // // // // // // // // //                                 <span className="text-xs text-slate-500">Open episode</span>
// // // // // // // // // // // //                                 <Link href={`/journey/${ep.id}`} className="inline-flex items-center gap-2 text-indigo-600 font-medium">
// // // // // // // // // // // //                                   <span>View details</span>
// // // // // // // // // // // //                                   <ArrowRight className="h-4 w-4" />
// // // // // // // // // // // //                                 </Link>
// // // // // // // // // // // //                               </div>
// // // // // // // // // // // //                             </div>
// // // // // // // // // // // //                           </div>
// // // // // // // // // // // //                         </Card>
// // // // // // // // // // // //                       )}
// // // // // // // // // // // //                     </div>

// // // // // // // // // // // //                     {/* CENTER marker column */}
// // // // // // // // // // // //                     <div className="flex items-start justify-center">
// // // // // // // // // // // //                       <div className="relative w-[120px] h-[120px] flex items-start justify-center">
// // // // // // // // // // // //                         <div
// // // // // // // // // // // //                           className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center shadow-2xl"
// // // // // // // // // // // //                           style={{ transformOrigin: "center" }}
// // // // // // // // // // // //                         >
// // // // // // // // // // // //                           <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-xl">
// // // // // // // // // // // //                             {ep.id}
// // // // // // // // // // // //                           </div>
// // // // // // // // // // // //                         </div>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                     </div>

// // // // // // // // // // // //                     {/* RIGHT card (only shown on right items) */}
// // // // // // // // // // // //                     <div className={`flex ${isLeft ? "justify-start pl-6" : "justify-start pl-6"}`}>
// // // // // // // // // // // //                       {!isLeft && (
// // // // // // // // // // // //                         <Card className="p-8 w-[78%] shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
// // // // // // // // // // // //                           <div className="flex gap-6">
// // // // // // // // // // // //                             <div className="flex-shrink-0">
// // // // // // // // // // // //                               <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-xl shadow">
// // // // // // // // // // // //                                 {ep.id}
// // // // // // // // // // // //                               </div>
// // // // // // // // // // // //                             </div>

// // // // // // // // // // // //                             <div className="flex-1">
// // // // // // // // // // // //                               <div className="flex items-center justify-between">
// // // // // // // // // // // //                                 <div className="flex items-center gap-3 text-sm text-slate-500">
// // // // // // // // // // // //                                   <Clock className="h-4 w-4" />
// // // // // // // // // // // //                                   <span>{ep.weeks}</span>
// // // // // // // // // // // //                                 </div>
// // // // // // // // // // // //                               </div>

// // // // // // // // // // // //                               <h3 className="mt-3 text-2xl font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // // // // //                               <p className="mt-3 text-sm text-slate-600 leading-relaxed">{excerpt(ep.narrative, 260)}</p>

// // // // // // // // // // // //                               <div className="mt-5 flex items-center justify-between">
// // // // // // // // // // // //                                 <span className="text-xs text-slate-500">Open episode</span>
// // // // // // // // // // // //                                 <Link href={`/journey/${ep.id}`} className="inline-flex items-center gap-2 text-indigo-600 font-medium">
// // // // // // // // // // // //                                   <span>View details</span>
// // // // // // // // // // // //                                   <ArrowRight className="h-4 w-4" />
// // // // // // // // // // // //                                 </Link>
// // // // // // // // // // // //                               </div>
// // // // // // // // // // // //                             </div>
// // // // // // // // // // // //                           </div>
// // // // // // // // // // // //                         </Card>
// // // // // // // // // // // //                       )}
// // // // // // // // // // // //                     </div>

// // // // // // // // // // // //                     {/* Desktop-only — small spacer row to keep center rail continuous */}
// // // // // // // // // // // //                     <div className="hidden xl:block" />
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </li>
// // // // // // // // // // // //               );
// // // // // // // // // // // //             })}
// // // // // // // // // // // //           </ol>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }





// // // // // // // // // // // // app/journey/page.tsx
// // // // // // // // // // // import React from "react";
// // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // import { EPISODES } from "@/data/journey";
// // // // // // // // // // // import type { EpisodeStruct } from "@/types/journey";

// // // // // // // // // // // export default function Page() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <main className="max-w-screen-2xl mx-auto px-8 py-12">
// // // // // // // // // // //       <h1 className="text-4xl font-bold mb-2">Journey Timeline</h1>
// // // // // // // // // // //       <p className="text-slate-600 mb-8">Six episodes across eight months — click any episode to open the full detail view.</p>

// // // // // // // // // // //       <div className="relative">
// // // // // // // // // // //         {/* center vertical line */}
// // // // // // // // // // //         <div className="absolute left-1/2 -ml-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-200 to-indigo-50"></div>

// // // // // // // // // // //         <ol className="space-y-12">
// // // // // // // // // // //           {EPISODES.map((ep: EpisodeStruct, idx: number) => {
// // // // // // // // // // //             const isLeft = idx % 2 === 0;
// // // // // // // // // // //             return (
// // // // // // // // // // //               <li key={ep.id} className="relative">
// // // // // // // // // // //                 <div
// // // // // // // // // // //                   className={`grid grid-cols-1 lg:grid-cols-12 items-center gap-6`}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   {/* Left card */}
// // // // // // // // // // //                   <div className={`${isLeft ? "lg:col-span-5 lg:col-start-1" : "lg:col-span-5 lg:col-start-8"} order-2 lg:order-1`}>
// // // // // // // // // // //                     <div className="bg-white rounded-xl shadow p-6 border border-slate-100">
// // // // // // // // // // //                       <div className="flex items-start justify-between">
// // // // // // // // // // //                         <div>
// // // // // // // // // // //                           <div className="text-xs text-slate-400 mb-1">{ep.weeks}</div>
// // // // // // // // // // //                           <h3 className="text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // // // //                           <p className="text-sm text-slate-600 mt-3 line-clamp-3">{ep.narrative?.slice(0, 220) ?? ""}...</p>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                         <div className="ml-4 flex items-center">
// // // // // // // // // // //                           <Link href={`/journey/${ep.id}`} className="text-indigo-600 hover:underline text-sm font-medium">View details →</Link>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   {/* spacer column to center visual alignment */}
// // // // // // // // // // //                   <div className="hidden lg:block lg:col-span-2 relative">
// // // // // // // // // // //                     {/* circle marker */}
// // // // // // // // // // //                     <div className="absolute -left-6 lg:left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center text-lg font-bold shadow-lg">
// // // // // // // // // // //                       {ep.id}
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   {/* Right empty (or right card) - keep symmetric */}
// // // // // // // // // // //                   <div className={`${isLeft ? "lg:col-span-5 lg:col-start-8" : "lg:col-span-5 lg:col-start-1"} order-1 lg:order-2`}>
// // // // // // // // // // //                     {/* keep empty to create alternating feel; could add small summary or KPI */}
// // // // // // // // // // //                     <div className="hidden lg:block">
// // // // // // // // // // //                       <div className="h-full flex items-center justify-center text-sm text-slate-400">
// // // // // // // // // // //                         {/* small metadata or leave empty for visual breathing space */}
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </li>
// // // // // // // // // // //             );
// // // // // // // // // // //           })}
// // // // // // // // // // //         </ol>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </main>
// // // // // // // // // // //   );
// // // // // // // // // // // }



// // // // // // // // // // // app/journey/page.tsx
// // // // // // // // // // import React from "react";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { EPISODES } from "@/data/journey";
// // // // // // // // // // import type { EpisodeStruct } from "@/types/journey";

// // // // // // // // // // export default function Page() {
// // // // // // // // // //   return (
// // // // // // // // // //     <main className="max-w-screen-2xl mx-auto px-8 py-12">
// // // // // // // // // //       <header className="mb-8">
// // // // // // // // // //         <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Journey Timeline</h1>
// // // // // // // // // //         <p className="text-slate-600">Six episodes across eight months — click any episode to open the full detail view.</p>
// // // // // // // // // //       </header>

// // // // // // // // // //       <div className="relative">
// // // // // // // // // //         {/* full-height subtle center line */}
// // // // // // // // // //         <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-50 to-indigo-100"></div>

// // // // // // // // // //         <ol className="space-y-10">
// // // // // // // // // //           {EPISODES.map((ep: EpisodeStruct, idx: number) => {
// // // // // // // // // //             const isLeft = idx % 2 === 0; // even index => card on left
// // // // // // // // // //             return (
// // // // // // // // // //               <li key={ep.id}>
// // // // // // // // // //                 {/* row grid: left card | center marker | right card */}
// // // // // // // // // //                 <div className="grid grid-cols-12 gap-6 items-start">
// // // // // // // // // //                   {/* Left column (cols 1-5) */}
// // // // // // // // // //                   <div className={`${isLeft ? "col-span-5 col-start-1" : "col-span-5 col-start-1 lg:col-start-8 lg:col-span-5"} order-1 lg:order-1`}>
// // // // // // // // // //                     {isLeft ? (
// // // // // // // // // //                       <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
// // // // // // // // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // // // // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // // //                         <p className="mt-3 text-sm text-slate-600 line-clamp-3">{ep.narrative?.slice(0, 260) ?? ""}...</p>
// // // // // // // // // //                         <div className="mt-4 text-right">
// // // // // // // // // //                           <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium hover:underline">View details →</Link>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </article>
// // // // // // // // // //                     ) : (
// // // // // // // // // //                       /* keep blank on left when card is right to maintain alignment on small screens */
// // // // // // // // // //                       <div className="hidden lg:block h-full"></div>
// // // // // // // // // //                     )}
// // // // // // // // // //                   </div>

// // // // // // // // // //                   {/* center marker column (col 6) */}
// // // // // // // // // //                   <div className="col-span-2 col-start-6 lg:col-start-6 relative flex items-start lg:items-center justify-center">
// // // // // // // // // //                     {/* For each row we place the marker centered vertically relative to the row */}
// // // // // // // // // //                     <div className="relative w-full flex items-center justify-center py-2">
// // // // // // // // // //                       {/* small connector line (only visible on large screens) */}
// // // // // // // // // //                       <div className="hidden lg:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-indigo-50"></div>

// // // // // // // // // //                       {/* episode bubble */}
// // // // // // // // // //                       <div className="relative z-10">
// // // // // // // // // //                         <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-semibold shadow-lg">
// // // // // // // // // //                           {ep.id}
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>

// // // // // // // // // //                   {/* Right column (cols 7-12) */}
// // // // // // // // // //                   <div className={`${isLeft ? "col-span-5 col-start-8 lg:col-start-8" : "col-span-5 col-start-8 order-1 lg:order-1"}`}>
// // // // // // // // // //                     {!isLeft ? (
// // // // // // // // // //                       <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
// // // // // // // // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // // // // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // // //                         <p className="mt-3 text-sm text-slate-600 line-clamp-3">{ep.narrative?.slice(0, 260) ?? ""}...</p>
// // // // // // // // // //                         <div className="mt-4 text-right">
// // // // // // // // // //                           <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium hover:underline">View details →</Link>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </article>
// // // // // // // // // //                     ) : (
// // // // // // // // // //                       <div className="hidden lg:block h-full"></div>
// // // // // // // // // //                     )}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </li>
// // // // // // // // // //             );
// // // // // // // // // //           })}
// // // // // // // // // //         </ol>
// // // // // // // // // //       </div>
// // // // // // // // // //     </main>
// // // // // // // // // //   );
// // // // // // // // // // }



// // // // // // // // // // app/journey/page.tsx
// // // // // // // // // import React from "react";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { EPISODES } from "@/data/journey";
// // // // // // // // // import type { EpisodeStruct } from "@/types/journey";

// // // // // // // // // export default function JourneyPage() {
// // // // // // // // //   return (
// // // // // // // // //     <main className="max-w-screen-2xl mx-auto px-8 py-12">
// // // // // // // // //       <header className="mb-10">
// // // // // // // // //         <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Journey Timeline</h1>
// // // // // // // // //         <p className="text-slate-600 max-w-2xl">
// // // // // // // // //           Six episodes across eight months — click any episode to open the full detail view.
// // // // // // // // //         </p>
// // // // // // // // //       </header>

// // // // // // // // //       {/* center vertical line spanning the timeline (desktop only) */}
// // // // // // // // //       <div className="relative">
// // // // // // // // //         <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-50 to-indigo-100" />

// // // // // // // // //         <ol className="space-y-12">
// // // // // // // // //           {EPISODES.map((ep: EpisodeStruct, idx: number) => {
// // // // // // // // //             const isLeft = idx % 2 === 0; // even -> place card left, odd -> place card right
// // // // // // // // //             return (
// // // // // // // // //               <li key={ep.id}>
// // // // // // // // //                 <div
// // // // // // // // //                   className="relative flex flex-col lg:flex-row items-center lg:items-stretch gap-6 min-h-[140px]"
// // // // // // // // //                 >
// // // // // // // // //                   {/* LEFT CARD (or placeholder) */}
// // // // // // // // //                   <div className="w-full lg:w-5/12 flex justify-start">
// // // // // // // // //                     {isLeft ? (
// // // // // // // // //                       <article className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm min-h-[120px] w-full">
// // // // // // // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // // // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // //                         <p className="mt-3 text-sm text-slate-600">{truncate(ep.narrative, 260)}</p>
// // // // // // // // //                         <div className="mt-4 text-right">
// // // // // // // // //                           <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium hover:underline">View details →</Link>
// // // // // // // // //                         </div>
// // // // // // // // //                       </article>
// // // // // // // // //                     ) : (
// // // // // // // // //                       // placeholder keeps layout consistent on large screens when card is right
// // // // // // // // //                       <div className="hidden lg:block w-full" />
// // // // // // // // //                     )}
// // // // // // // // //                   </div>

// // // // // // // // //                   {/* CENTER marker column */}
// // // // // // // // //                   <div className="w-full lg:w-16 flex justify-center items-center relative">
// // // // // // // // //                     {/* ensure bubble is vertically centered in row */}
// // // // // // // // //                     <div className="flex flex-col items-center">
// // // // // // // // //                       <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow-md ring-4 ring-white">
// // // // // // // // //                         {ep.id}
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>

// // // // // // // // //                   {/* RIGHT CARD (or placeholder) */}
// // // // // // // // //                   <div className="w-full lg:w-5/12 flex justify-end">
// // // // // // // // //                     {!isLeft ? (
// // // // // // // // //                       <article className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm min-h-[120px] w-full">
// // // // // // // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // // // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // // //                         <p className="mt-3 text-sm text-slate-600">{truncate(ep.narrative, 260)}</p>
// // // // // // // // //                         <div className="mt-4 text-right">
// // // // // // // // //                           <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium hover:underline">View details →</Link>
// // // // // // // // //                         </div>
// // // // // // // // //                       </article>
// // // // // // // // //                     ) : (
// // // // // // // // //                       <div className="hidden lg:block w-full" />
// // // // // // // // //                     )}
// // // // // // // // //                   </div>

// // // // // // // // //                   {/* Mobile stacked layout fallback: show bubble between stacked cards */}
// // // // // // // // //                   <div className="lg:hidden mt-3 w-full flex justify-center">
// // // // // // // // //                     <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow-md">
// // // // // // // // //                       {ep.id}
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </li>
// // // // // // // // //             );
// // // // // // // // //           })}
// // // // // // // // //         </ol>
// // // // // // // // //       </div>
// // // // // // // // //     </main>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // /* small util - truncate safely */
// // // // // // // // // function truncate(text?: string, n = 200) {
// // // // // // // // //   if (!text) return "";
// // // // // // // // //   if (text.length <= n) return text;
// // // // // // // // //   return text.slice(0, n).trim() + "…";
// // // // // // // // // }



// // // // // // // // // app/journey/page.tsx
// // // // // // // // "use client";

// // // // // // // // import React, { useState } from "react";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { EPISODES } from "@/data/journey"; // <-- your EPISODES array
// // // // // // // // import type { EpisodeStruct } from "@/types/journey"; // optional, if you have types

// // // // // // // // export default function JourneyPageClient() {
// // // // // // // //   const [variant, setVariant] = useState<"alternating" | "left" | "polished">(
// // // // // // // //     "polished"
// // // // // // // //   );

// // // // // // // //   return (
// // // // // // // //     <main className="max-w-screen-2xl mx-auto px-8 py-12">
// // // // // // // //       <header className="mb-8">
// // // // // // // //         <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Journey Timeline</h1>
// // // // // // // //         <p className="text-slate-600 max-w-2xl">
// // // // // // // //           Six episodes across eight months — pick a layout to preview. Click any episode to open the full detail view.
// // // // // // // //         </p>

// // // // // // // //         <div className="mt-6 flex gap-3">
// // // // // // // //           <VariantButton active={variant === "polished"} onClick={() => setVariant("polished")}>Polished (recommended)</VariantButton>
// // // // // // // //           <VariantButton active={variant === "alternating"} onClick={() => setVariant("alternating")}>Alternating</VariantButton>
// // // // // // // //           <VariantButton active={variant === "left"} onClick={() => setVariant("left")}>Left aligned</VariantButton>
// // // // // // // //         </div>
// // // // // // // //       </header>

// // // // // // // //       <section>
// // // // // // // //         {variant === "alternating" && <AlternatingTimeline episodes={EPISODES} />}
// // // // // // // //         {variant === "left" && <LeftAlignedTimeline episodes={EPISODES} />}
// // // // // // // //         {variant === "polished" && <PolishedTimeline episodes={EPISODES} />}
// // // // // // // //       </section>
// // // // // // // //     </main>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* -------------------- small UI building blocks -------------------- */

// // // // // // // // function VariantButton({ children, active, onClick }: { children: React.ReactNode; active?: boolean; onClick?: () => void }) {
// // // // // // // //   return (
// // // // // // // //     <button
// // // // // // // //       onClick={onClick}
// // // // // // // //       className={`px-4 py-2 rounded-md text-sm font-medium transition ${
// // // // // // // //         active ? "bg-indigo-600 text-white shadow-md" : "bg-white border border-slate-200 text-slate-700 hover:shadow-sm"
// // // // // // // //       }`}
// // // // // // // //     >
// // // // // // // //       {children}
// // // // // // // //     </button>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* -------------------- Alternating Layout -------------------- */

// // // // // // // // function AlternatingTimeline({ episodes }: { episodes: EpisodeStruct[] }) {
// // // // // // // //   return (
// // // // // // // //     <div className="relative">
// // // // // // // //       {/* vertical center line on large screens */}
// // // // // // // //       <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-50 to-indigo-100" />
// // // // // // // //       <ol className="space-y-12">
// // // // // // // //         {episodes.map((ep, idx) => {
// // // // // // // //           const isLeft = idx % 2 === 0;
// // // // // // // //           return (
// // // // // // // //             <li key={ep.id}>
// // // // // // // //               <div className="relative flex flex-col lg:flex-row items-center gap-6 min-h-[140px]">
// // // // // // // //                 <div className="w-full lg:w-5/12 flex justify-start">
// // // // // // // //                   {isLeft ? <TimelineCard ep={ep} /> : <div className="hidden lg:block w-full" />}
// // // // // // // //                 </div>

// // // // // // // //                 <div className="w-full lg:w-16 flex justify-center">
// // // // // // // //                   <div className="flex items-center">
// // // // // // // //                     <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow-md ring-4 ring-white">
// // // // // // // //                       {ep.id}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 <div className="w-full lg:w-5/12 flex justify-end">
// // // // // // // //                   {!isLeft ? <TimelineCard ep={ep} /> : <div className="hidden lg:block w-full" />}
// // // // // // // //                 </div>

// // // // // // // //                 {/* mobile bubble centered between stacked cards */}
// // // // // // // //                 <div className="lg:hidden mt-3 w-full flex justify-center">
// // // // // // // //                   <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow-md">
// // // // // // // //                     {ep.id}
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </li>
// // // // // // // //           );
// // // // // // // //         })}
// // // // // // // //       </ol>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* -------------------- Left Aligned Layout -------------------- */

// // // // // // // // function LeftAlignedTimeline({ episodes }: { episodes: EpisodeStruct[] }) {
// // // // // // // //   return (
// // // // // // // //     <div className="relative">
// // // // // // // //       {/* line on right side */}
// // // // // // // //       <div className="hidden lg:block absolute right-24 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-50 to-indigo-100" />
// // // // // // // //       <ol className="space-y-10">
// // // // // // // //         {episodes.map((ep) => (
// // // // // // // //           <li key={ep.id}>
// // // // // // // //             <div className="flex flex-col lg:flex-row items-start gap-6">
// // // // // // // //               <div className="w-full lg:w-3/4">
// // // // // // // //                 <article className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
// // // // // // // //                   <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // // //                   <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // //                   <p className="mt-3 text-sm text-slate-600">{truncate(ep.narrative, 420)}</p>
// // // // // // // //                   <div className="mt-4 text-right">
// // // // // // // //                     <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium hover:underline">View details →</Link>
// // // // // // // //                   </div>
// // // // // // // //                 </article>
// // // // // // // //               </div>

// // // // // // // //               {/* marker on right */}
// // // // // // // //               <div className="hidden lg:flex lg:w-24 lg:justify-center">
// // // // // // // //                 <div className="flex items-start">
// // // // // // // //                   <div className="mt-3 w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow-md">
// // // // // // // //                     {ep.id}
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* mobile compact marker */}
// // // // // // // //               <div className="lg:hidden mt-3 w-full flex justify-start">
// // // // // // // //                 <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold shadow-md">
// // // // // // // //                   {ep.id}
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </li>
// // // // // // // //         ))}
// // // // // // // //       </ol>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* -------------------- Polished Layout (hover, micro-interactions) -------------------- */

// // // // // // // // function PolishedTimeline({ episodes }: { episodes: EpisodeStruct[] }) {
// // // // // // // //   return (
// // // // // // // //     <div className="relative">
// // // // // // // //       {/* center thin line */}
// // // // // // // //       <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-50 to-indigo-100" />

// // // // // // // //       <ol className="space-y-14">
// // // // // // // //         {episodes.map((ep, idx) => {
// // // // // // // //           const isLeft = idx % 2 === 0;
// // // // // // // //           return (
// // // // // // // //             <li key={ep.id}>
// // // // // // // //               <div className="relative flex flex-col lg:flex-row items-center gap-6 min-h-[160px]">
// // // // // // // //                 <div className="w-full lg:w-5/12 flex justify-start">
// // // // // // // //                   {isLeft ? (
// // // // // // // //                     <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm w-full transform transition hover:-translate-y-1 hover:shadow-lg">
// // // // // // // //                       <div className="flex items-start justify-between">
// // // // // // // //                         <div>
// // // // // // // //                           <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // // //                           <h3 className="mt-1 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // //                         </div>
// // // // // // // //                         <div className="ml-4 text-indigo-600 font-semibold">{/* badge area if needed */}</div>
// // // // // // // //                       </div>

// // // // // // // //                       <p className="mt-3 text-sm text-slate-600">{truncate(ep.narrative, 340)}</p>

// // // // // // // //                       <div className="mt-4 flex justify-between items-center">
// // // // // // // //                         <div className="text-xs text-slate-400">Tap to open episode</div>
// // // // // // // //                         <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium hover:underline">View details →</Link>
// // // // // // // //                       </div>
// // // // // // // //                     </article>
// // // // // // // //                   ) : (
// // // // // // // //                     <div className="hidden lg:block w-full" />
// // // // // // // //                   )}
// // // // // // // //                 </div>

// // // // // // // //                 <div className="w-full lg:w-16 flex justify-center">
// // // // // // // //                   <div className="relative flex items-center">
// // // // // // // //                     <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center text-sm font-semibold shadow-xl ring-4 ring-white transform transition hover:scale-105">
// // // // // // // //                       {ep.id}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>

// // // // // // // //                 <div className="w-full lg:w-5/12 flex justify-end">
// // // // // // // //                   {!isLeft ? (
// // // // // // // //                     <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm w-full transform transition hover:-translate-y-1 hover:shadow-lg">
// // // // // // // //                       <div className="flex items-start justify-between">
// // // // // // // //                         <div>
// // // // // // // //                           <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // // //                           <h3 className="mt-1 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // //                         </div>
// // // // // // // //                       </div>
// // // // // // // //                       <p className="mt-3 text-sm text-slate-600">{truncate(ep.narrative, 340)}</p>
// // // // // // // //                       <div className="mt-4 flex justify-between items-center">
// // // // // // // //                         <div className="text-xs text-slate-400">Tap to open episode</div>
// // // // // // // //                         <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium hover:underline">View details →</Link>
// // // // // // // //                       </div>
// // // // // // // //                     </article>
// // // // // // // //                   ) : (
// // // // // // // //                     <div className="hidden lg:block w-full" />
// // // // // // // //                   )}
// // // // // // // //                 </div>

// // // // // // // //                 {/* mobile stacked bubble */}
// // // // // // // //                 <div className="lg:hidden mt-3 w-full flex justify-center">
// // // // // // // //                   <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white flex items-center justify-center text-sm font-semibold shadow-md">
// // // // // // // //                     {ep.id}
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </li>
// // // // // // // //           );
// // // // // // // //         })}
// // // // // // // //       </ol>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // /* -------------------- small helpers -------------------- */

// // // // // // // // function TimelineCard({ ep }: { ep: EpisodeStruct }) {
// // // // // // // //   return (
// // // // // // // //     <article className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm min-h-[120px] w-full">
// // // // // // // //       <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // // //       <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // // // // // //       <p className="mt-3 text-sm text-slate-600">{truncate(ep.narrative, 260)}</p>
// // // // // // // //       <div className="mt-4 text-right">
// // // // // // // //         <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium hover:underline">View details →</Link>
// // // // // // // //       </div>
// // // // // // // //     </article>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // function truncate(text?: string, n = 200) {
// // // // // // // //   if (!text) return "";
// // // // // // // //   if (text.length <= n) return text;
// // // // // // // //   return text.slice(0, n).trim() + "…";
// // // // // // // // }




// // // // // // // // app/journey/page.tsx
// // // // // // // "use client";

// // // // // // // import React, { useState } from "react";
// // // // // // // import Link from "next/link";
// // // // // // // import { EPISODES } from "@/data/journey"; // adjust path if needed

// // // // // // // export default function JourneyTimelinePage() {
// // // // // // //   const [layout, setLayout] = useState<"polished" | "alternating" | "left">(
// // // // // // //     "polished"
// // // // // // //   );

// // // // // // //   // Helper to decide which side a card should sit on for the 'alternating' / 'polished' layouts.
// // // // // // //   const cardSide = (index: number) => {
// // // // // // //     if (layout === "left") return "left";
// // // // // // //     // polished: alternate left/right but start left for index 0
// // // // // // //     if (layout === "polished") return index % 2 === 0 ? "left" : "right";
// // // // // // //     // alternating option (same as polished but can be toggled)
// // // // // // //     return index % 2 === 0 ? "left" : "right";
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <main className="max-w-screen-2xl mx-auto px-8 py-12">
// // // // // // //       <header className="mb-8">
// // // // // // //         <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
// // // // // // //         <p className="mt-2 text-sm text-slate-600">
// // // // // // //           Six episodes across eight months — pick a layout to preview. Click any
// // // // // // //           episode to open the full detail view.
// // // // // // //         </p>

// // // // // // //         <div className="mt-6 flex items-center gap-3">
// // // // // // //           <button
// // // // // // //             onClick={() => setLayout("polished")}
// // // // // // //             className={`px-4 py-2 rounded-md text-sm font-medium ${
// // // // // // //               layout === "polished"
// // // // // // //                 ? "bg-indigo-600 text-white shadow"
// // // // // // //                 : "bg-white border border-slate-200 text-slate-700"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             Polished (recommended)
// // // // // // //           </button>

// // // // // // //           <button
// // // // // // //             onClick={() => setLayout("alternating")}
// // // // // // //             className={`px-4 py-2 rounded-md text-sm font-medium ${
// // // // // // //               layout === "alternating"
// // // // // // //                 ? "bg-indigo-600 text-white shadow"
// // // // // // //                 : "bg-white border border-slate-200 text-slate-700"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             Alternating
// // // // // // //           </button>

// // // // // // //           <button
// // // // // // //             onClick={() => setLayout("left")}
// // // // // // //             className={`px-4 py-2 rounded-md text-sm font-medium ${
// // // // // // //               layout === "left"
// // // // // // //                 ? "bg-indigo-600 text-white shadow"
// // // // // // //                 : "bg-white border border-slate-200 text-slate-700"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             Left aligned
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </header>

// // // // // // //       {/* Timeline container */}
// // // // // // //       <section className="relative">
// // // // // // //         {/* The grid has 3 columns: left cards | center (dots + line) | right cards */}
// // // // // // //         <div className="relative">
// // // // // // //           {/* center vertical line - absolute and full height of this container */}
// // // // // // //           <div className="absolute inset-x-1/2 -translate-x-1/2 top-24 bottom-0 pointer-events-none">
// // // // // // //             <div className="relative h-full">
// // // // // // //               {/* thin connecting line */}
// // // // // // //               <span
// // // // // // //                 className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b from-indigo-100 to-indigo-200 opacity-90"
// // // // // // //                 style={{ transform: "translateX(-50%)" }}
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           <div className="grid grid-cols-[1fr,120px,1fr] gap-y-12 gap-x-6">
// // // // // // //             {EPISODES.map((ep, idx) => {
// // // // // // //               const side = cardSide(idx);
// // // // // // //               const isLeft = side === "left";
// // // // // // //               return (
// // // // // // //                 <React.Fragment key={ep.id}>
// // // // // // //                   {/* left column */}
// // // // // // //                   <div
// // // // // // //                     className={`px-4 ${isLeft ? "self-start" : "hidden lg:block"}`}
// // // // // // //                     // Keep left column visible on small screens if layout=left
// // // // // // //                     style={{
// // // // // // //                       display:
// // // // // // //                         layout === "left" || isLeft ? undefined : "none",
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     {isLeft || layout === "left" ? (
// // // // // // //                       <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm max-w-xl">
// // // // // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">
// // // // // // //                           {ep.title}
// // // // // // //                         </h3>
// // // // // // //                         <p className="mt-3 text-sm text-slate-600 line-clamp-4">
// // // // // // //                           {ep.narrative}
// // // // // // //                         </p>
// // // // // // //                         <div className="mt-4 flex items-center">
// // // // // // //                           <div className="text-xs text-slate-400">Tap to open episode</div>
// // // // // // //                           <Link
// // // // // // //                             href={`/journey/${ep.id}`}
// // // // // // //                             className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// // // // // // //                           >
// // // // // // //                             View details → 
// // // // // // //                           </Link>
// // // // // // //                         </div>
// // // // // // //                       </article>
// // // // // // //                     ) : null}
// // // // // // //                   </div>

// // // // // // //                   {/* center column - dot area (always render) */}
// // // // // // //                   <div className="flex items-start justify-center">
// // // // // // //                     <div className="relative w-full flex items-start justify-center">
// // // // // // //                       {/* place the dot positioned relative to the center column; negative margin to overlap line */}
// // // // // // //                       <div
// // // // // // //                         className="flex items-center justify-center rounded-full shadow-lg"
// // // // // // //                         style={{
// // // // // // //                           width: 48,
// // // // // // //                           height: 48,
// // // // // // //                           marginTop: -8,
// // // // // // //                           background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
// // // // // // //                           color: "white",
// // // // // // //                         }}
// // // // // // //                         aria-hidden
// // // // // // //                       >
// // // // // // //                         <span className="text-sm font-bold">{ep.id}</span>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   </div>

// // // // // // //                   {/* right column */}
// // // // // // //                   <div
// // // // // // //                     className={`px-4 ${!isLeft ? "self-start" : "hidden lg:block"}`}
// // // // // // //                     style={{
// // // // // // //                       display:
// // // // // // //                         layout === "left" ? "none" : undefined,
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     {!isLeft ? (
// // // // // // //                       <article className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm max-w-xl ml-auto">
// // // // // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">
// // // // // // //                           {ep.title}
// // // // // // //                         </h3>
// // // // // // //                         <p className="mt-3 text-sm text-slate-600 line-clamp-4">
// // // // // // //                           {ep.narrative}
// // // // // // //                         </p>
// // // // // // //                         <div className="mt-4 flex items-center">
// // // // // // //                           <div className="text-xs text-slate-400">Tap to open episode</div>
// // // // // // //                           <Link
// // // // // // //                             href={`/journey/${ep.id}`}
// // // // // // //                             className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// // // // // // //                           >
// // // // // // //                             View details → 
// // // // // // //                           </Link>
// // // // // // //                         </div>
// // // // // // //                       </article>
// // // // // // //                     ) : null}
// // // // // // //                   </div>
// // // // // // //                 </React.Fragment>
// // // // // // //               );
// // // // // // //             })}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* Mobile fallback list (stacked) */}
// // // // // // //       <section className="mt-12 lg:hidden">
// // // // // // //         <h2 className="text-lg font-semibold mb-4">All Episodes</h2>
// // // // // // //         <div className="space-y-4">
// // // // // // //           {EPISODES.map((ep) => (
// // // // // // //             <Link
// // // // // // //               key={ep.id}
// // // // // // //               href={`/journey/${ep.id}`}
// // // // // // //               className="block bg-white rounded-xl border border-slate-100 p-4 shadow-sm"
// // // // // // //             >
// // // // // // //               <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // // //               <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
// // // // // // //               <p className="mt-2 text-sm text-slate-600 line-clamp-3">{ep.narrative}</p>
// // // // // // //             </Link>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </section>
// // // // // // //     </main>
// // // // // // //   );
// // // // // // // }

// // // // // // // app/journey/page.tsx
// // // // // // "use client";

// // // // // // import React from "react";
// // // // // // import Link from "next/link";
// // // // // // import { EPISODES } from "@/data/journey"; // adjust path if needed

// // // // // // export default function JourneyTimelinePage() {
// // // // // //   const episodes = EPISODES ?? [];
// // // // // //   const n = episodes.length || 1;

// // // // // //   // Compute percent positions (0%..100%) evenly spaced top->bottom
// // // // // //   const positions = episodes.map((_, i) =>
// // // // // //     n === 1 ? 50 : (i / (n - 1)) * 100
// // // // // //   );

// // // // // //   // Set a reasonable container height that grows with episodes
// // // // // //   const timelineHeight = Math.max(700, n * 180); // px

// // // // // //   // Top and height for the connecting line (from first dot to last dot)
// // // // // //   const lineTop = `${positions[0]}%`;
// // // // // //   const lineHeight = `${positions[n - 1] - positions[0]}%`;

// // // // // //   return (
// // // // // //     <main className="max-w-screen-2xl mx-auto px-8 py-12">
// // // // // //       <header className="mb-8">
// // // // // //         <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
// // // // // //         <p className="mt-2 text-sm text-slate-600">
// // // // // //           Six episodes across eight months — click any episode to open the full detail view.
// // // // // //         </p>
// // // // // //       </header>

// // // // // //       <section
// // // // // //         className="relative"
// // // // // //         aria-label="timeline"
// // // // // //         style={{ minHeight: timelineHeight }}
// // // // // //       >
// // // // // //         {/* center vertical connecting line (only between first and last dot) */}
// // // // // //         <div
// // // // // //           className="absolute left-1/2 -translate-x-1/2 w-[4px] bg-gradient-to-b from-indigo-100 to-indigo-200 rounded-md"
// // // // // //           style={{ top: lineTop, height: lineHeight }}
// // // // // //           aria-hidden
// // // // // //         />

// // // // // //         {/* render dots and absolute-positioned cards */}
// // // // // //         {episodes.map((ep, idx) => {
// // // // // //           const pos = positions[idx];
// // // // // //           const isLeft = idx % 2 === 0; // polished alternating: even → left, odd → right

// // // // // //           // card style: absolute positioning anchored to vertical percent
// // // // // //           const cardTop = `calc(${pos}% - 64px)`; // shift so card centers around dot (adjust 64 to suit)
// // // // // //           const dotTop = `calc(${pos}% - 24px)`; // center the dot (24 = half dot size)

// // // // // //           return (
// // // // // //             <React.Fragment key={ep.id}>
// // // // // //               {/* Dot centered horizontally */}
// // // // // //               <div
// // // // // //                 className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
// // // // // //                 style={{ top: dotTop, zIndex: 30 }}
// // // // // //               >
// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     width: 48,
// // // // // //                     height: 48,
// // // // // //                     borderRadius: 999,
// // // // // //                     background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
// // // // // //                     boxShadow: "0 6px 14px rgba(91,51,214,0.18)",
// // // // // //                   }}
// // // // // //                   className="flex items-center justify-center text-white font-semibold"
// // // // // //                 >
// // // // // //                   {ep.id}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Card (left) */}
// // // // // //               <article
// // // // // //                 className="hidden lg:block absolute max-w-[560px] z-20"
// // // // // //                 style={{
// // // // // //                   top: cardTop,
// // // // // //                   left: isLeft ? "6%" : undefined,
// // // // // //                   right: isLeft ? undefined : "6%",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
// // // // // //                   <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // //                   <h3 className="mt-2 text-lg font-semibold text-slate-900">
// // // // // //                     {ep.title}
// // // // // //                   </h3>
// // // // // //                   <p className="mt-3 text-sm text-slate-600" style={{ maxWidth: "46ch" }}>
// // // // // //                     {ep.narrative}
// // // // // //                   </p>

// // // // // //                   <div className="mt-4 flex items-center">
// // // // // //                     <div className="text-xs text-slate-400">Tap to open episode</div>
// // // // // //                     <Link
// // // // // //                       href={`/journey/${ep.id}`}
// // // // // //                       className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// // // // // //                     >
// // // // // //                       View details →
// // // // // //                     </Link>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </article>

// // // // // //               {/* Mobile / stacked (visible on small screens) */}
// // // // // //               <Link
// // // // // //                 href={`/journey/${ep.id}`}
// // // // // //                 className="lg:hidden block bg-white rounded-xl border border-slate-100 p-4 shadow-sm mb-6"
// // // // // //                 style={{ position: "relative", top: undefined }}
// // // // // //                 key={`mobile-${ep.id}`}
// // // // // //               >
// // // // // //                 <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // // //                 <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
// // // // // //                 <p className="mt-2 text-sm text-slate-600 line-clamp-3">{ep.narrative}</p>
// // // // // //               </Link>
// // // // // //             </React.Fragment>
// // // // // //           );
// // // // // //         })}
// // // // // //       </section>

// // // // // //       {/* Accessibility note */}
// // // // // //       <p className="mt-10 text-sm text-slate-500">
// // // // // //         Tip: click an episode card's "View details" to open the full, focused episode view.
// // // // // //       </p>
// // // // // //     </main>
// // // // // //   );
// // // // // // }



// // // // // // app/journey/page.tsx
// // // // // "use client";

// // // // // import React from "react";
// // // // // import Link from "next/link";
// // // // // import { EPISODES } from "@/data/journey"; // adjust if file is elsewhere

// // // // // export default function JourneyTimelinePage() {
// // // // //   const episodes = Array.isArray(EPISODES) ? EPISODES : [];
// // // // //   const n = Math.max(episodes.length, 1);

// // // // //   // Even vertical positions 0..100%
// // // // //   const positions = episodes.map((_, i) => (n === 1 ? 50 : (i / (n - 1)) * 100));

// // // // //   // Compute a timeline container height that scales with number of items.
// // // // //   // Cards are fixed height, but we need some vertical breathing room.
// // // // //   const cardHeight = 260; // px (fixed)
// // // // //   const verticalGap = 80; // px between cards visually
// // // // //   const timelineHeight = Math.max(800, episodes.length * (cardHeight + verticalGap));

// // // // //   return (
// // // // //     <main className="min-h-screen bg-slate-50">
// // // // //       <div className="max-w-screen-2xl mx-auto px-10 py-12">
// // // // //         <header className="mb-8">
// // // // //           <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
// // // // //           <p className="mt-2 text-sm text-slate-600">
// // // // //             Six episodes across eight months — click any episode to open the full detail view.
// // // // //           </p>
// // // // //         </header>

// // // // //         <section
// // // // //           className="relative"
// // // // //           aria-label="Polished timeline"
// // // // //           style={{ minHeight: timelineHeight }}
// // // // //         >
// // // // //           {/* Center vertical line: full height from first to last dot */}
// // // // //           <div
// // // // //             className="absolute left-1/2 -translate-x-1/2"
// // // // //             style={{ top: 0, bottom: 0, width: 2 }}
// // // // //             aria-hidden
// // // // //           >
// // // // //             <div
// // // // //               style={{
// // // // //                 background:
// // // // //                   "linear-gradient(180deg, rgba(99,102,241,0.08), rgba(99,102,241,0.04))",
// // // // //                 width: 2,
// // // // //                 height: "100%",
// // // // //                 margin: "0 auto",
// // // // //                 borderRadius: 2,
// // // // //               }}
// // // // //             />
// // // // //           </div>

// // // // //           {/* Timeline items (dots + cards). Cards are fixed size. */}
// // // // //           {episodes.map((ep, idx) => {
// // // // //             const pos = positions[idx];
// // // // //             const isLeft = idx % 2 === 0;
// // // // //             // place dot centered on timeline at pos%
// // // // //             const dotTop = `calc(${pos}% - 24px)`; // dot is 48px tall -> offset 24
// // // // //             // place card so its center aligns approximately with the dot
// // // // //             const cardTop = `calc(${pos}% - ${cardHeight / 2}px)`;

// // // // //             // Desktop horizontal offsets (fixed card width)
// // // // //             const cardWidth = 520; // px
// // // // //             // left card: offset from left edge (use percentage for responsiveness)
// // // // //             const leftOffset = "6%";
// // // // //             // right card: offset from right edge
// // // // //             const rightOffset = "6%";

// // // // //             return (
// // // // //               <React.Fragment key={ep.id}>
// // // // //                 {/* Dot */}
// // // // //                 <div
// // // // //                   className="absolute -translate-x-1/2 left-1/2 flex items-center justify-center"
// // // // //                   style={{ top: dotTop, zIndex: 40 }}
// // // // //                 >
// // // // //                   <div
// // // // //                     style={{
// // // // //                       width: 48,
// // // // //                       height: 48,
// // // // //                       borderRadius: 999,
// // // // //                       background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
// // // // //                       boxShadow: "0 8px 20px rgba(91,51,214,0.18)",
// // // // //                       display: "flex",
// // // // //                       alignItems: "center",
// // // // //                       justifyContent: "center",
// // // // //                       color: "white",
// // // // //                       fontWeight: 700,
// // // // //                     }}
// // // // //                     aria-hidden
// // // // //                   >
// // // // //                     {ep.id}
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Card (desktop) */}
// // // // //                 <article
// // // // //                   className="hidden lg:block absolute"
// // // // //                   style={{
// // // // //                     top: cardTop,
// // // // //                     left: isLeft ? leftOffset : undefined,
// // // // //                     right: isLeft ? undefined : rightOffset,
// // // // //                     width: `${cardWidth}px`,
// // // // //                     height: `${cardHeight}px`,
// // // // //                     zIndex: 30,
// // // // //                   }}
// // // // //                 >
// // // // //                   <div className="h-full bg-white border border-slate-100 rounded-2xl p-5 shadow-sm flex flex-col">
// // // // //                     <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // //                     <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>

// // // // //                     {/* Fixed height content area with internal scroll for long text */}
// // // // //                     <div
// // // // //                       className="mt-3 text-sm text-slate-600 overflow-auto"
// // // // //                       style={{ flex: 1, maxHeight: `${cardHeight - 120}px` }}
// // // // //                     >
// // // // //                       <p style={{ whiteSpace: "pre-wrap" }}>{ep.narrative}</p>
// // // // //                     </div>

// // // // //                     <div className="mt-3 flex items-center">
// // // // //                       <div className="text-xs text-slate-400">Tap to open episode</div>
// // // // //                       <Link
// // // // //                         href={`/journey/${ep.id}`}
// // // // //                         className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// // // // //                       >
// // // // //                         View details →
// // // // //                       </Link>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </article>

// // // // //                 {/* Mobile stacked card */}
// // // // //                 <Link
// // // // //                   key={`mobile-${ep.id}`}
// // // // //                   href={`/journey/${ep.id}`}
// // // // //                   className="lg:hidden block bg-white rounded-xl border border-slate-100 p-4 shadow-sm mb-6"
// // // // //                 >
// // // // //                   <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // // //                   <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
// // // // //                   <p className="mt-2 text-sm text-slate-600 line-clamp-4">{ep.narrative}</p>
// // // // //                 </Link>
// // // // //               </React.Fragment>
// // // // //             );
// // // // //           })}
// // // // //         </section>

// // // // //         <p className="mt-10 text-sm text-slate-500">
// // // // //           Note: cards are fixed size for consistent desktop layout. On mobile they stack for
// // // // //           readability.
// // // // //         </p>
// // // // //       </div>
// // // // //     </main>
// // // // //   );
// // // // // }




// // // // // app/journey/page.tsx
// // // // "use client";

// // // // import React from "react";
// // // // import Link from "next/link";
// // // // import { EPISODES } from "@/data/journey"; // adjust path if needed

// // // // const ROW_HEIGHT = 320; // px per episode row on desktop
// // // // const CARD_WIDTH = 520; // px
// // // // const CARD_HEIGHT = 260; // px
// // // // const DOT_SIZE = 48; // px

// // // // function excerpt(text: string, n = 260) {
// // // //   if (!text) return "";
// // // //   return text.length <= n ? text : text.slice(0, n).trim() + "…";
// // // // }

// // // // export default function JourneyTimelinePage() {
// // // //   const episodes = Array.isArray(EPISODES) ? EPISODES : [];
// // // //   const totalHeight = Math.max(episodes.length * ROW_HEIGHT, 600);

// // // //   return (
// // // //     <main className="min-h-screen bg-slate-50">
// // // //       <div className="max-w-screen-2xl mx-auto px-8 py-12">
// // // //         <header className="mb-8">
// // // //           <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
// // // //           <p className="mt-2 text-sm text-slate-600">
// // // //             Six episodes across eight months — click any episode to open the full detail view.
// // // //           </p>
// // // //         </header>

// // // //         <section className="relative">
// // // //           {/* continuous center line */}
// // // //           <div
// // // //             className="hidden lg:block absolute left-1/2 -translate-x-1/2"
// // // //             style={{
// // // //               width: 4,
// // // //               height: totalHeight,
// // // //               top: 0,
// // // //               borderRadius: 4,
// // // //               background:
// // // //                 "linear-gradient(180deg, rgba(99,102,241,0.08), rgba(99,102,241,0.04))",
// // // //             }}
// // // //             aria-hidden
// // // //           />

// // // //           {/* episodes rows */}
// // // //           <div style={{ height: totalHeight }} className="relative">
// // // //             {episodes.map((ep, idx) => {
// // // //               const isLeft = idx % 2 === 0;
// // // //               const top = idx * ROW_HEIGHT;
// // // //               return (
// // // //                 <div
// // // //                   key={ep.id}
// // // //                   className="flex w-full items-center relative"
// // // //                   style={{ height: ROW_HEIGHT, top }}
// // // //                 >
// // // //                   {/* LEFT CARD (desktop) */}
// // // //                   <div
// // // //                     className={`hidden lg:flex justify-end items-center`}
// // // //                     style={{
// // // //                       width: "50%",
// // // //                       paddingRight: "4%",
// // // //                     }}
// // // //                   >
// // // //                     {isLeft ? (
// // // //                       <article
// // // //                         className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5"
// // // //                         style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
// // // //                       >
// // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // //                         <div className="mt-3 text-sm text-slate-600">
// // // //                           <p>{excerpt(ep.narrative, 420)}</p>
// // // //                         </div>
// // // //                         <div className="mt-4 flex items-center">
// // // //                           <div className="text-xs text-slate-400">Tap to open episode</div>
// // // //                           <Link
// // // //                             href={`/journey/${ep.id}`}
// // // //                             className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// // // //                           >
// // // //                             View details →
// // // //                           </Link>
// // // //                         </div>
// // // //                       </article>
// // // //                     ) : (
// // // //                       <div style={{ width: CARD_WIDTH }} />
// // // //                     )}
// // // //                   </div>

// // // //                   {/* center column: dot (desktop) and mobile stacked card container */}
// // // //                   <div className="w-[72px] flex justify-center">
// // // //                     {/* Dot on desktop */}
// // // //                     <div className="hidden lg:flex items-center justify-center" style={{ height: ROW_HEIGHT }}>
// // // //                       <div
// // // //                         style={{
// // // //                           width: DOT_SIZE,
// // // //                           height: DOT_SIZE,
// // // //                           borderRadius: DOT_SIZE,
// // // //                           background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
// // // //                           boxShadow: "0 8px 20px rgba(91,51,214,0.18)",
// // // //                           color: "white",
// // // //                           fontWeight: 700,
// // // //                           display: "flex",
// // // //                           alignItems: "center",
// // // //                           justifyContent: "center",
// // // //                           zIndex: 30,
// // // //                         }}
// // // //                         aria-hidden
// // // //                       >
// // // //                         {ep.id}
// // // //                       </div>
// // // //                     </div>

// // // //                     {/* Mobile stacked card (visible on small screens) */}
// // // //                     <div className="lg:hidden w-full px-2">
// // // //                       <Link
// // // //                         href={`/journey/${ep.id}`}
// // // //                         className="block bg-white rounded-xl border border-slate-100 p-4 shadow-sm mb-6"
// // // //                       >
// // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // //                         <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
// // // //                         <p className="mt-2 text-sm text-slate-600 line-clamp-4">{excerpt(ep.narrative, 220)}</p>
// // // //                       </Link>
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* RIGHT CARD (desktop) */}
// // // //                   <div
// // // //                     className="hidden lg:flex items-center"
// // // //                     style={{
// // // //                       width: "50%",
// // // //                       paddingLeft: "4%",
// // // //                     }}
// // // //                   >
// // // //                     {!isLeft ? (
// // // //                       <article
// // // //                         className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5"
// // // //                         style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
// // // //                       >
// // // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // // //                         <div className="mt-3 text-sm text-slate-600">
// // // //                           <p>{excerpt(ep.narrative, 420)}</p>
// // // //                         </div>
// // // //                         <div className="mt-4 flex items-center">
// // // //                           <div className="text-xs text-slate-400">Tap to open episode</div>
// // // //                           <Link
// // // //                             href={`/journey/${ep.id}`}
// // // //                             className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// // // //                           >
// // // //                             View details →
// // // //                           </Link>
// // // //                         </div>
// // // //                       </article>
// // // //                     ) : (
// // // //                       <div style={{ width: CARD_WIDTH }} />
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         </section>

// // // //         <p className="mt-8 text-sm text-slate-500">
          
// // // //         </p>
// // // //       </div>
// // // //     </main>
// // // //   );
// // // // }


// // // // app/journey/page.tsx
// // // "use client";

// // // import React from "react";
// // // import Link from "next/link";
// // // import { EPISODES } from "@/data/journey"; // adjust path if needed

// // // // --- layout tuning (edit these numbers if you want even tighter/looser spacing) ---
// // // const ROW_HEIGHT = 200; // reduced from 320 -> tighter rows
// // // const CARD_WIDTH = 520;
// // // const CARD_HEIGHT = 160; // card body height (keeps cards compact)
// // // const DOT_SIZE = 44;

// // // function excerpt(text: string, n = 300) {
// // //   if (!text) return "";
// // //   return text.length <= n ? text : text.slice(0, n).trim() + "…";
// // // }

// // // export default function JourneyTimelinePage() {
// // //   const episodes = Array.isArray(EPISODES) ? EPISODES : [];
// // //   const totalHeight = Math.max(episodes.length * ROW_HEIGHT, 600);

// // //   // connector width calc string for CSS calc usage:
// // //   // We want connector from center to the start of the card; formula: calc(50% - CARD_WIDTH/2 - offset)
// // //   const leftConnectorCalc = `calc(50% - ${CARD_WIDTH / 2}px - 36px)`;
// // //   const rightConnectorCalc = `calc(50% - ${CARD_WIDTH / 2}px - 36px)`;

// // //   return (
// // //     <main className="min-h-screen bg-slate-50">
// // //       <div className="max-w-screen-2xl mx-auto px-8 py-12">
// // //         <header className="mb-6">
// // //           <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
// // //           <p className="mt-2 text-sm text-slate-600">
// // //             Six episodes across eight months — click any episode to open the full detail view.
// // //           </p>
// // //         </header>

// // //         <section className="relative">
// // //           {/* full-length center line */}
// // //           <div
// // //             className="hidden lg:block absolute left-1/2 -translate-x-1/2"
// // //             style={{
// // //               width: 4,
// // //               height: totalHeight,
// // //               top: 0,
// // //               borderRadius: 4,
// // //               background: "linear-gradient(180deg, rgba(99,102,241,0.08), rgba(99,102,241,0.04))",
// // //               zIndex: 5,
// // //             }}
// // //             aria-hidden
// // //           />

// // //           {/* episodes rows */}
// // //           <div style={{ height: totalHeight }} className="relative">
// // //             {episodes.map((ep, idx) => {
// // //               const isLeft = idx % 2 === 0;
// // //               const top = idx * ROW_HEIGHT;

// // //               return (
// // //                 <div
// // //                   key={ep.id}
// // //                   className="relative w-full"
// // //                   style={{ height: ROW_HEIGHT, top }}
// // //                 >
// // //                   {/* LEFT CARD slot (desktop) */}
// // //                   <div
// // //                     className="hidden lg:flex absolute left-0 items-center justify-end"
// // //                     style={{ width: "50%", height: "100%", paddingRight: 24 }}
// // //                   >
// // //                     {isLeft ? (
// // //                       <article
// // //                         className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-5 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
// // //                         style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
// // //                       >
// // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // //                         <div className="mt-2 text-sm text-slate-600">
// // //                           <p>{excerpt(ep.narrative, 380)}</p>
// // //                         </div>
// // //                         <div className="mt-3 flex items-center">
// // //                           <div className="text-xs text-slate-400">Tap to open episode</div>
// // //                           <Link
// // //                             href={`/journey/${ep.id}`}
// // //                             className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// // //                           >
// // //                             View details →
// // //                           </Link>
// // //                         </div>
// // //                       </article>
// // //                     ) : (
// // //                       <div style={{ width: CARD_WIDTH, height: CARD_HEIGHT }} />
// // //                     )}
// // //                   </div>

// // //                   {/* RIGHT CARD slot (desktop) */}
// // //                   <div
// // //                     className="hidden lg:flex absolute right-0 items-center"
// // //                     style={{ width: "50%", height: "100%", paddingLeft: 24 }}
// // //                   >
// // //                     {!isLeft ? (
// // //                       <article
// // //                         className="group bg-white border border-slate-100 rounded-2xl shadow-sm p-5 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
// // //                         style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
// // //                       >
// // //                         <div className="text-xs text-slate-400">{ep.weeks}</div>
// // //                         <h3 className="mt-2 text-lg font-semibold text-slate-900">{ep.title}</h3>
// // //                         <div className="mt-2 text-sm text-slate-600">
// // //                           <p>{excerpt(ep.narrative, 380)}</p>
// // //                         </div>
// // //                         <div className="mt-3 flex items-center">
// // //                           <div className="text-xs text-slate-400">Tap to open episode</div>
// // //                           <Link
// // //                             href={`/journey/${ep.id}`}
// // //                             className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// // //                           >
// // //                             View details →
// // //                           </Link>
// // //                         </div>
// // //                       </article>
// // //                     ) : (
// // //                       <div style={{ width: CARD_WIDTH, height: CARD_HEIGHT }} />
// // //                     )}
// // //                   </div>

// // //                   {/* center column containing dot + connector */}
// // //                   <div
// // //                     className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
// // //                     style={{ width: 96, height: "100%", zIndex: 30 }}
// // //                   >
// // //                     {/* dot */}
// // //                     <div
// // //                       style={{
// // //                         width: DOT_SIZE,
// // //                         height: DOT_SIZE,
// // //                         borderRadius: DOT_SIZE,
// // //                         background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
// // //                         boxShadow: "0 8px 20px rgba(91,51,214,0.18)",
// // //                         color: "white",
// // //                         fontWeight: 700,
// // //                         display: "flex",
// // //                         alignItems: "center",
// // //                         justifyContent: "center",
// // //                         zIndex: 40,
// // //                       }}
// // //                     >
// // //                       {ep.id}
// // //                     </div>

// // //                     {/* horizontal connector to card (desktop) */}
// // //                     <div
// // //                       aria-hidden
// // //                       style={{
// // //                         position: "absolute",
// // //                         height: 2,
// // //                         top: "50%",
// // //                         transform: "translateY(-50%)",
// // //                         left: isLeft ? `-${leftConnectorCalc}` : "50%",
// // //                         right: isLeft ? "auto" : `-${rightConnectorCalc}`,
// // //                         width: isLeft ? leftConnectorCalc : rightConnectorCalc,
// // //                         background: "linear-gradient(90deg, rgba(99,102,241,0.06), rgba(99,102,241,0.02))",
// // //                         borderRadius: 2,
// // //                         zIndex: 10,
// // //                       }}
// // //                     />
// // //                   </div>

// // //                   {/* mobile stacked card (visible on small screens) */}
// // //                   <div className="lg:hidden px-2">
// // //                     <Link
// // //                       href={`/journey/${ep.id}`}
// // //                       className="block bg-white rounded-xl border border-slate-100 p-4 shadow-sm mb-5"
// // //                     >
// // //                       <div className="text-xs text-slate-400">{ep.weeks}</div>
// // //                       <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
// // //                       <p className="mt-2 text-sm text-slate-600 line-clamp-4">
// // //                         {excerpt(ep.narrative, 220)}
// // //                       </p>
// // //                     </Link>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </section>

// // //         <p className="mt-6 text-sm text-slate-500">
// // //           Compact desktop layout with tighter vertical spacing. Hover cards to lift slightly.
// // //         </p>
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // // app/journey/page.tsx
// // "use client";

// // import React from "react";
// // import Link from "next/link";
// // import { EPISODES } from "@/data/journey"; // <-- change path if needed

// // // visual constants (tweak if needed)
// // const GRID_COLS = "1fr 88px 1fr";
// // const ROW_HEIGHT_PX = 180;     // controls vertical spacing between episodes
// // const CARD_WIDTH_PX = 520;     // fixed card width on desktop
// // const CARD_HEIGHT_PX = 140;    // fixed card height on desktop
// // const DOT_SIZE_PX = 48;

// // function excerpt(text: string, chars = 300) {
// //   if (!text) return "";
// //   return text.length > chars ? text.slice(0, chars).trim() + "…" : text;
// // }

// // export default function JourneyTimeline() {
// //   const episodes = Array.isArray(EPISODES) ? EPISODES : [];

// //   return (
// //     <main className="min-h-screen bg-slate-50">
// //       <div className="max-w-screen-2xl mx-auto px-8 py-12">
// //         <header className="mb-6">
// //           <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
// //           <p className="mt-2 text-sm text-slate-600">
// //             Six episodes across eight months — click any episode to open the full detail view.
// //           </p>
// //         </header>

// //         {/* Grid wrapper */}
// //         <div
// //           className="relative"
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: GRID_COLS,
// //             gridAutoRows: `${ROW_HEIGHT_PX}px`,
// //             gap: "18px 24px",
// //             alignItems: "start",
// //           }}
// //         >
// //           {/* continuous center line (full height of grid) */}
// //           <div
// //             aria-hidden
// //             style={{
// //               position: "absolute",
// //               left: "50%",
// //               transform: "translateX(-50%)",
// //               top: 0,
// //               bottom: 0,
// //               width: 4,
// //               background: "linear-gradient(180deg, rgba(99,102,241,0.08), rgba(99,102,241,0.03))",
// //               borderRadius: 2,
// //               zIndex: 1,
// //             }}
// //           />

// //           {episodes.map((ep, idx) => {
// //             const leftSide = idx % 2 === 0;
// //             const gridRow = idx + 1;

// //             // card wrapper (desktop) placed either in col 1 or col 3
// //             const cardStyle: React.CSSProperties = {
// //               gridRow,
// //               gridColumn: leftSide ? "1" : "3",
// //               display: "flex",
// //               justifyContent: leftSide ? "end" : "start",
// //             };

// //             // center dot placement (column 2)
// //             const dotStyle: React.CSSProperties = {
// //               gridRow,
// //               gridColumn: "2",
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //               zIndex: 5,
// //             };

// //             return (
// //               <React.Fragment key={ep.id}>
// //                 {/* desktop card */}
// //                 <div style={cardStyle} className="hidden lg:flex">
// //                   <article
// //                     className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
// //                     style={{
// //                       width: CARD_WIDTH_PX,
// //                       height: CARD_HEIGHT_PX,
// //                       overflow: "hidden",
// //                       position: "relative",
// //                       zIndex: 3,
// //                     }}
// //                   >
// //                     <div className="text-xs text-slate-400">{ep.weeks}</div>
// //                     <h3 className="mt-1 text-lg font-semibold text-slate-900">{ep.title}</h3>

// //                     <div
// //                       className="mt-2 text-sm text-slate-600"
// //                       style={{
// //                         maxHeight: CARD_HEIGHT_PX - 78, // keep room for header + footer
// //                         overflow: "hidden",
// //                       }}
// //                     >
// //                       <p style={{ lineHeight: 1.45 }}>{excerpt(ep.narrative, 360)}</p>
// //                     </div>

// //                     <div
// //                       className="absolute left-5 bottom-3 right-5 flex items-center"
// //                       style={{ zIndex: 4 }}
// //                     >
// //                       <div className="text-xs text-slate-400">Tap to open episode</div>
// //                       <Link
// //                         href={`/journey/${ep.id}`}
// //                         className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
// //                       >
// //                         View details →
// //                       </Link>
// //                     </div>
// //                   </article>
// //                 </div>

// //                 {/* center dot */}
// //                 <div style={dotStyle}>
// //                   <div
// //                     aria-hidden
// //                     style={{
// //                       width: DOT_SIZE_PX,
// //                       height: DOT_SIZE_PX,
// //                       borderRadius: DOT_SIZE_PX,
// //                       background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
// //                       color: "white",
// //                       display: "flex",
// //                       alignItems: "center",
// //                       justifyContent: "center",
// //                       boxShadow: "0 10px 22px rgba(91,51,214,0.16)",
// //                       fontWeight: 700,
// //                       zIndex: 10,
// //                     }}
// //                   >
// //                     {ep.id}
// //                   </div>
// //                 </div>

// //                 {/* mobile stacked card (visible on small screens) */}
// //                 <div
// //                   style={{ gridRow, gridColumn: "1 / 4" }}
// //                   className="lg:hidden"
// //                 >
// //                   <Link
// //                     href={`/journey/${ep.id}`}
// //                     className="block bg-white rounded-xl border border-slate-100 p-4 shadow-sm mb-2"
// //                   >
// //                     <div className="text-xs text-slate-400">{ep.weeks}</div>
// //                     <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
// //                     <p className="mt-2 text-sm text-slate-600 line-clamp-4">
// //                       {excerpt(ep.narrative, 220)}
// //                     </p>
// //                   </Link>
// //                 </div>
// //               </React.Fragment>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// // app/journey/page.tsx
// "use client";

// import React from "react";
// import Link from "next/link";
// import { EPISODES } from "@/data/journey"; // <- ensure this path matches your project

// // Layout config - tweak if you want tighter/looser spacing
// const ROW_HEIGHT = 200; // px per episode row (controls vertical spacing)
// const CARD_W = 520; // desktop card width
// const CARD_H = 160; // desktop card height
// const DOT_SIZE = 48;

// function excerpt(text = "", chars = 340) {
//   return text.length > chars ? text.slice(0, chars).trim() + "…" : text;
// }

// export default function JourneyTimeline() {
//   const episodes = Array.isArray(EPISODES) ? EPISODES : [];

//   return (
//     <main className="min-h-screen bg-slate-50">
//       <div className="max-w-screen-2xl mx-auto px-8 py-12">
//         <header className="mb-8">
//           <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
//           <p className="mt-2 text-sm text-slate-600">
//             Six episodes across eight months — click any episode to open the full detail view.
//           </p>
//         </header>

//         {/* Grid container: left / center / right */}
//         <div
//           className="relative"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 96px 1fr",
//             gridAutoRows: `${ROW_HEIGHT}px`,
//             gap: "24px 32px",
//           }}
//         >
//           {/* Full-height center line behind everything */}
//           <div
//             aria-hidden
//             style={{
//               position: "absolute",
//               left: "50%",
//               transform: "translateX(-50%)",
//               top: 0,
//               bottom: 0,
//               width: 4,
//               background: "linear-gradient(180deg, rgba(99,102,241,0.08), rgba(99,102,241,0.03))",
//               borderRadius: 3,
//               zIndex: 1,
//             }}
//           />

//           {episodes.map((ep, i) => {
//             const row = i + 1;
//             const placeLeft = i % 2 === 0; // even index -> left card, odd -> right card

//             const cardContainerStyle: React.CSSProperties = {
//               gridRow: row,
//               gridColumn: placeLeft ? "1" : "3",
//               display: "flex",
//               justifyContent: placeLeft ? "end" : "start",
//               alignItems: "center",
//             };

//             const dotCellStyle: React.CSSProperties = {
//               gridRow: row,
//               gridColumn: "2",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             };

//             return (
//               <React.Fragment key={ep.id}>
//                 {/* Desktop card */}
//                 <div style={cardContainerStyle} className="hidden lg:flex">
//                   <article
//                     className="bg-white border border-slate-100 rounded-2xl shadow-sm relative"
//                     style={{
//                       width: CARD_W,
//                       height: CARD_H,
//                       padding: 20,
//                       zIndex: 3,
//                     }}
//                   >
//                     <div className="text-xs text-slate-400">{ep.weeks}</div>
//                     <h3 className="mt-1 text-lg font-semibold text-slate-900">{ep.title}</h3>

//                     <div
//                       className="mt-2 text-sm text-slate-600"
//                       style={{
//                         // enforce consistent height and clamp content
//                         display: "-webkit-box",
//                         WebkitLineClamp: 5,
//                         WebkitBoxOrient: "vertical",
//                         overflow: "hidden",
//                         lineHeight: 1.45,
//                         maxHeight: CARD_H - 86,
//                       }}
//                     >
//                       {ep.narrative}
//                     </div>

//                     <div
//                       className="absolute left-6 right-6 bottom-4 flex items-center"
//                       style={{ zIndex: 4 }}
//                     >
//                       <div className="text-xs text-slate-400">Tap to open episode</div>
//                       <Link
//                         href={`/journey/${ep.id}`}
//                         className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
//                       >
//                         View details →
//                       </Link>
//                     </div>
//                   </article>
//                 </div>

//                 {/* center dot */}
//                 <div style={dotCellStyle}>
//                   <div
//                     role="img"
//                     aria-label={`Episode ${ep.id}`}
//                     style={{
//                       width: DOT_SIZE,
//                       height: DOT_SIZE,
//                       borderRadius: DOT_SIZE,
//                       background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
//                       color: "white",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       boxShadow: "0 10px 28px rgba(91,51,214,0.16)",
//                       fontWeight: 700,
//                       zIndex: 6,
//                     }}
//                   >
//                     {ep.id}
//                   </div>
//                 </div>

//                 {/* Mobile stacked card (spans full width); visible on small screens only */}
//                 <div style={{ gridRow: row, gridColumn: "1 / 4" }} className="lg:hidden">
//                   <Link
//                     href={`/journey/${ep.id}`}
//                     className="block bg-white rounded-xl border border-slate-100 p-4 shadow-sm mb-2"
//                   >
//                     <div className="text-xs text-slate-400">{ep.weeks}</div>
//                     <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
//                     <p
//                       className="mt-2 text-sm text-slate-600"
//                       style={{
//                         display: "-webkit-box",
//                         WebkitLineClamp: 4,
//                         WebkitBoxOrient: "vertical",
//                         overflow: "hidden",
//                       }}
//                     >
//                       {ep.narrative}
//                     </p>
//                   </Link>
//                 </div>
//               </React.Fragment>
//             );
//           })}
//         </div>
//       </div>
//     </main>
//   );
// }


// app/journey/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { EPISODES } from "@/data/journey"; // keep your data file path

// layout knobs
const ROW_HEIGHT = 180; // controls vertical spacing between items
const CARD_W = 520;
const CARD_H = 160;
const DOT_SIZE = 48;

export default function JourneyTimeline() {
  const episodes = Array.isArray(EPISODES) ? EPISODES : [];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
          <p className="mt-2 text-sm text-slate-600">
            Six episodes across eight months — click any episode to open the full detail view.
          </p>
        </header>

        {/* Grid: left / center / right */}
        <div
          className="relative"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 96px 1fr",
            gridAutoRows: `${ROW_HEIGHT}px`,
            gap: "22px 28px",
          }}
        >
          {/* center full-height faint line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              bottom: 0,
              width: 4,
              background: "linear-gradient(180deg, rgba(99,102,241,0.08), rgba(99,102,241,0.02))",
              borderRadius: 3,
              zIndex: 1,
            }}
          />

          {episodes.map((ep, i) => {
            const index = i + 1;
            const leftSide = i % 2 === 0; // even idx -> left

            const cardContainerStyle: React.CSSProperties = {
              gridRow: index,
              gridColumn: leftSide ? "1" : "3",
              display: "flex",
              justifyContent: leftSide ? "end" : "start",
              alignItems: "center",
            };

            const dotCellStyle: React.CSSProperties = {
              gridRow: index,
              gridColumn: "2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };

            return (
              <React.Fragment key={ep.id}>
                {/* Desktop card - fixed sized, internal grid to avoid footer overlap */}
                <div style={cardContainerStyle} className="hidden lg:flex">
                  <article
                    className="bg-white border border-slate-100 rounded-2xl shadow-sm"
                    style={{
                      width: CARD_W,
                      height: CARD_H,
                      padding: 18,
                      zIndex: 3,
                      display: "grid",
                      gridTemplateRows: "auto 1fr auto", // header / content / footer
                      gap: 8,
                      boxSizing: "border-box",
                    }}
                  >
                    {/* header */}
                    <div>
                      <div className="text-xs text-slate-400">{ep.weeks}</div>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900">{ep.title}</h3>
                    </div>

                    {/* content - clamp & overflow-hidden so it doesn't overlap footer */}
                    <div
                      style={{
                        fontSize: 13,
                        color: "#475569",
                        lineHeight: 1.45,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {ep.narrative}
                    </div>

                    {/* footer - stays at bottom; not absolute */}
                    <div className="flex items-center">
                      <div className="text-xs text-slate-400">Tap to open episode</div>
                      <Link
                        href={`/journey/${ep.id}`}
                        className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
                      >
                        View details →
                      </Link>
                    </div>
                  </article>
                </div>

                {/* center dot */}
                <div style={dotCellStyle}>
                  <div
                    role="img"
                    aria-label={`Episode ${ep.id}`}
                    style={{
                      width: DOT_SIZE,
                      height: DOT_SIZE,
                      borderRadius: DOT_SIZE,
                      background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 28px rgba(91,51,214,0.16)",
                      fontWeight: 700,
                      zIndex: 6,
                    }}
                  >
                    {ep.id}
                  </div>
                </div>

                {/* mobile stacked card (full width) */}
                <div style={{ gridRow: index, gridColumn: "1 / 4" }} className="lg:hidden">
                  <Link
                    href={`/journey/${ep.id}`}
                    className="block bg-white rounded-xl border border-slate-100 p-4 shadow-sm mb-2"
                  >
                    <div className="text-xs text-slate-400">{ep.weeks}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
                    <p
                      className="mt-2 text-sm text-slate-600"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {ep.narrative}
                    </p>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </main>
  );
}

