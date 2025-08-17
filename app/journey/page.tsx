// // app/journey/page.tsx
// "use client";

// import Link from "next/link";
// import { Card } from "@/components/ui/card";
// import { Clock, ArrowRight } from "lucide-react";

// /**
//  * Episodes data (keep these texts as placeholders; you can replace with full content)
//  */
// const episodes = [
//   {
//     id: 1,
//     title: "Episode 1: Establishing the Baseline",
//     weeks: "Weeks 1-4",
//     narrative:
//       "The journey began by establishing a clear, data-defined baseline for a high-performing individual navigating a high-stress world. Initial biometrics painted a picture of a system under load...",
//   },
//   {
//     id: 2,
//     title: "Episode 2: The First Experiment & The Clinical Baseline",
//     weeks: "Weeks 5-9",
//     narrative:
//       "Following initial onboarding, this five-week period emphasized quiet consistency—sleep as the primary lever. Improvements were incremental but meaningful...",
//   },
//   {
//     id: 3,
//     title: "Episode 3: Decoding the Data, Refining the Strategy",
//     weeks: "Weeks 10-14",
//     narrative:
//       "Quarterly labs revealed a genetically-elevated Lp(a). Strategy pivoted to aggressively optimize modifiable risks: sleep, cardio, nutrition. Travel recovery time halved...",
//   },
//   {
//     id: 4,
//     title: "Episode 4: Mastering Travel & Expanding Horizons",
//     weeks: "Weeks 15-20",
//     narrative:
//       "Rohan demonstrated travel resilience but uncovered a systemic workout-scheduling failure. This catalyzed a redesign of training and a new golf performance focus...",
//   },
//   {
//     id: 5,
//     title: "Episode 5: System Failure, Clinical Success",
//     weeks: "Weeks 21-26",
//     narrative:
//       "Despite scheduling issues the clinical program produced big wins: ApoB and hs-CRP dropped, acute illness handled via wearable-triggered protocols, genetic testing initiated...",
//   },
//   {
//     id: 6,
//     title: "Episode 6: Achieving Resilience, Personalizing the Future",
//     weeks: "Weeks 27-32",
//     narrative:
//       "The 32-week review validated the program: large reductions in cardiovascular risk and a plan to move to genetic-informed personalization (ApoE, MTHFR)...",
//   },
// ];

// function excerpt(text: string, n = 160) {
//   if (!text) return "";
//   return text.length <= n ? text : text.slice(0, n).trim() + "...";
// }

// export default function JourneyPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4">
//       <div className="mx-auto max-w-screen-xl">
//         <header className="mb-8 px-2">
//           <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Journey Timeline</h1>
//           <p className="mt-2 text-lg text-slate-600 max-w-3xl">
//             Six episodes across eight months — a clean vertical timeline. Click any episode to open a focused detail view.
//           </p>
//         </header>

//         {/* Timeline container: uses a 3-col grid via inline gridTemplateColumns so center column is fixed */}
//         <div className="relative mt-8">
//           {/* center rail - absolute so it covers full height */}
//           <div
//             className="hidden md:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-20"
//             aria-hidden
//           >
//             {/* thin rail visually centered inside the 80px column */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-100 to-indigo-200 rounded" />
//           </div>

//           <ol className="space-y-16">
//             {episodes.map((ep, idx) => {
//               const isLeft = idx % 2 === 0;

//               return (
//                 <li key={ep.id} className="relative">
//                   {/* grid: left | center-fixed | right. We use inline style for predictable center width */}
//                   <div
//                     className="grid items-start gap-6"
//                     style={{ gridTemplateColumns: "1fr 80px 1fr" }}
//                   >
//                     {/* Left column (card only visible here when isLeft) */}
//                     <div className={`flex ${isLeft ? "justify-end" : "justify-start"}`}>
//                       {isLeft && (
//                         <Card className="p-6 w-full max-w-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
//                           <div className="flex gap-5">
//                             <div className="flex-shrink-0">
//                               <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-lg shadow">
//                                 {ep.id}
//                               </div>
//                             </div>

//                             <div className="flex-1">
//                               <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2 text-sm text-slate-500">
//                                   <Clock className="h-4 w-4" />
//                                   <span>{ep.weeks}</span>
//                                 </div>
//                               </div>

//                               <h3 className="mt-2 text-xl font-semibold text-slate-900">{ep.title}</h3>
//                               <p className="mt-2 text-sm text-slate-600 leading-relaxed">{excerpt(ep.narrative)}</p>

//                               <div className="mt-4 flex items-center justify-between">
//                                 <span className="text-xs text-slate-500">Click to open episode</span>
//                                 <Link
//                                   href={`/journey/${ep.id}`}
//                                   className="inline-flex items-center gap-2 text-indigo-600 font-medium"
//                                 >
//                                   <span>View details</span>
//                                   <ArrowRight className="h-4 w-4" />
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </Card>
//                       )}
//                     </div>

//                     {/* Center fixed column with marker */}
//                     <div className="flex items-start justify-center">
//                       <div className="relative w-20 h-20">
//                         {/* marker sits centered, larger, no extra dots */}
//                         <div
//                           className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-20 h-20 rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center shadow-lg"
//                           style={{ top: "8px" }}
//                         >
//                           <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-lg">
//                             {ep.id}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Right column (card only visible when not isLeft) */}
//                     <div className={`flex ${isLeft ? "justify-start" : "justify-start"}`}>
//                       {!isLeft && (
//                         <Card className="p-6 w-full max-w-3xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
//                           <div className="flex gap-5">
//                             <div className="flex-shrink-0">
//                               <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-lg shadow">
//                                 {ep.id}
//                               </div>
//                             </div>

//                             <div className="flex-1">
//                               <div className="flex items-center justify-between">
//                                 <div className="flex items-center gap-2 text-sm text-slate-500">
//                                   <Clock className="h-4 w-4" />
//                                   <span>{ep.weeks}</span>
//                                 </div>
//                               </div>

//                               <h3 className="mt-2 text-xl font-semibold text-slate-900">{ep.title}</h3>
//                               <p className="mt-2 text-sm text-slate-600 leading-relaxed">{excerpt(ep.narrative)}</p>

//                               <div className="mt-4 flex items-center justify-between">
//                                 <span className="text-xs text-slate-500">Click to open episode</span>
//                                 <Link
//                                   href={`/journey/${ep.id}`}
//                                   className="inline-flex items-center gap-2 text-indigo-600 font-medium"
//                                 >
//                                   <span>View details</span>
//                                   <ArrowRight className="h-4 w-4" />
//                                 </Link>
//                               </div>
//                             </div>
//                           </div>
//                         </Card>
//                       )}
//                     </div>

//                     {/* Mobile fallback: stacked full-width card under marker */}
//                     <div className="md:hidden col-span-3 mt-4">
//                       <Card className="p-4">
//                         <div className="flex items-start gap-3">
//                           <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-semibold">
//                             {ep.id}
//                           </div>
//                           <div className="flex-1">
//                             <div className="flex items-center gap-2 text-sm text-slate-500">
//                               <Clock className="h-4 w-4" />
//                               <span>{ep.weeks}</span>
//                             </div>
//                             <h3 className="mt-1 font-semibold">{ep.title}</h3>
//                             <p className="mt-2 text-sm text-slate-600">{excerpt(ep.narrative)}</p>
//                             <div className="mt-3 flex items-center justify-between">
//                               <span className="text-xs text-slate-500">Tap to open</span>
//                               <Link href={`/journey/${ep.id}`} className="text-indigo-600 font-medium inline-flex items-center gap-2">
//                                 <span>View details</span>
//                                 <ArrowRight className="h-4 w-4" />
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </Card>
//                     </div>
//                   </div>
//                 </li>
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }



// app/journey/page.tsx
"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Clock, ArrowRight } from "lucide-react";

/**
 * Desktop-first Episodes data (replace with real text/fields)
 */
const episodes = [
  {
    id: 1,
    title: "Episode 1: Establishing the Baseline",
    weeks: "Weeks 1-4",
    narrative:
      "The journey began by establishing a clear, data-defined baseline for a high-performing individual navigating a high-stress world. Initial biometrics painted a picture of a system under load...",
  },
  {
    id: 2,
    title: "Episode 2: The First Experiment & The Clinical Baseline",
    weeks: "Weeks 5-9",
    narrative:
      "Following initial onboarding, this five-week period emphasized quiet consistency—sleep as the primary lever. Improvements were incremental but meaningful...",
  },
  {
    id: 3,
    title: "Episode 3: Decoding the Data, Refining the Strategy",
    weeks: "Weeks 10-14",
    narrative:
      "Quarterly labs revealed a genetically-elevated Lp(a). Strategy pivoted to aggressively optimize modifiable risks: sleep, cardio, nutrition. Travel recovery time halved...",
  },
  {
    id: 4,
    title: "Episode 4: Mastering Travel & Expanding Horizons",
    weeks: "Weeks 15-20",
    narrative:
      "Rohan demonstrated travel resilience but uncovered a systemic workout-scheduling failure. This catalyzed a redesign of training and a new golf performance focus...",
  },
  {
    id: 5,
    title: "Episode 5: System Failure, Clinical Success",
    weeks: "Weeks 21-26",
    narrative:
      "Despite scheduling issues the clinical program produced big wins: ApoB and hs-CRP dropped, acute illness handled via wearable-triggered protocols, genetic testing initiated...",
  },
  {
    id: 6,
    title: "Episode 6: Achieving Resilience, Personalizing the Future",
    weeks: "Weeks 27-32",
    narrative:
      "The 32-week review validated the program: large reductions in cardiovascular risk and a plan to move to genetic-informed personalization (ApoE, MTHFR)...",
  },
];

function excerpt(text: string, n = 200) {
  if (!text) return "";
  return text.length <= n ? text : text.slice(0, n).trim() + "...";
}

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-8">
      <div className="mx-auto max-w-screen-2xl">
        <header className="mb-10 px-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Journey Timeline</h1>
          <p className="mt-3 text-lg text-slate-600 max-w-4xl">
            Six focused episodes across eight months. Desktop-first layout — wide cards, centered rail, clear markers. Click any episode to open its detail page.
          </p>
        </header>

        {/* The timeline wrapper — desktop-first */}
        <div className="relative mt-10">
          {/* fixed center column background (rail) */}
          <div
            className="hidden xl:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-[120px] pointer-events-none"
            aria-hidden
          >
            <div className="absolute left-1/2 -translate-x-1/2 w-2 h-full rounded bg-gradient-to-b from-indigo-100 to-indigo-200" />
          </div>

          {/* iterate episodes */}
          <ol className="flex flex-col gap-20">
            {episodes.map((ep, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <li key={ep.id} className="relative">
                  {/* desktop grid with fixed center column 120px; left and right take remaining space */}
                  <div
                    className="grid items-start gap-8"
                    style={{ gridTemplateColumns: "1fr 120px 1fr", alignItems: "start" }}
                  >
                    {/* LEFT card (only shown on left items) */}
                    <div className={`flex ${isLeft ? "justify-end pr-6" : "justify-start pl-6"}`}>
                      {isLeft && (
                        <Card className="p-8 w-[78%] shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                          <div className="flex gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-xl shadow">
                                {ep.id}
                              </div>
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-sm text-slate-500">
                                  <Clock className="h-4 w-4" />
                                  <span>{ep.weeks}</span>
                                </div>
                              </div>

                              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{ep.title}</h3>
                              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{excerpt(ep.narrative, 260)}</p>

                              <div className="mt-5 flex items-center justify-between">
                                <span className="text-xs text-slate-500">Open episode</span>
                                <Link href={`/journey/${ep.id}`} className="inline-flex items-center gap-2 text-indigo-600 font-medium">
                                  <span>View details</span>
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )}
                    </div>

                    {/* CENTER marker column */}
                    <div className="flex items-start justify-center">
                      <div className="relative w-[120px] h-[120px] flex items-start justify-center">
                        <div
                          className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center shadow-2xl"
                          style={{ transformOrigin: "center" }}
                        >
                          <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-xl">
                            {ep.id}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT card (only shown on right items) */}
                    <div className={`flex ${isLeft ? "justify-start pl-6" : "justify-start pl-6"}`}>
                      {!isLeft && (
                        <Card className="p-8 w-[78%] shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                          <div className="flex gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 flex items-center justify-center text-white font-bold text-xl shadow">
                                {ep.id}
                              </div>
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-sm text-slate-500">
                                  <Clock className="h-4 w-4" />
                                  <span>{ep.weeks}</span>
                                </div>
                              </div>

                              <h3 className="mt-3 text-2xl font-semibold text-slate-900">{ep.title}</h3>
                              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{excerpt(ep.narrative, 260)}</p>

                              <div className="mt-5 flex items-center justify-between">
                                <span className="text-xs text-slate-500">Open episode</span>
                                <Link href={`/journey/${ep.id}`} className="inline-flex items-center gap-2 text-indigo-600 font-medium">
                                  <span>View details</span>
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )}
                    </div>

                    {/* Desktop-only — small spacer row to keep center rail continuous */}
                    <div className="hidden xl:block" />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
