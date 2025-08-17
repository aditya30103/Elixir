// data/journey.ts
import type { EpisodeStruct } from "@/types/journey";

export const EPISODES: EpisodeStruct[] = [
  {
    id: 1,
    title: "Episode 1: Establishing the Baseline",
    weeks: "Weeks 1-4",
    narrative: `The journey began by establishing a clear, data-defined baseline for a high-performing individual navigating a high-stress world. Initial biometrics painted a picture of a system under load, with a baseline blood pressure of 136/88 mmHg and visible dips in Heart Rate Variability (HRV) tied to acute work stressors. The Elyx team initiated a foundational protocol targeting systemic inflammation and stress resilience through nutrition, mobility, and targeted supplementation. From the outset, the member revealed a key trait: a deep-seated need for evidence. He consistently requested the "why" behind the plan, demanding clinical data and the direct physiological mechanisms linking interventions to outcomes.

This foundational period was immediately put to the test with a high-stakes business trip to London in Week 4. The trip served as a powerful real-world stress test, and the data captured its impact with stark clarity. Recovery metrics plummeted by 25–30%, average blood pressure rose, and a powerful correlation emerged: as HRV dropped by 27.6% through the week, subjective fatigue scores soared by 167%. While the member felt the trip was a physiological "write-off," it provided the most critical insight of the month: a quantifiable measure of the true cost of travel. This data transformed the conversation from subjective feelings to objective facts, paving the way for a new, targeted strategy to manage anticipatory stress and accelerate post-travel recovery.`,
    primaryGoalFull:
      "Primary Goal — Establish a comprehensive physiological baseline, build foundational habits in nutrition and mobility, and begin buffering the effects of a high-stress professional life. In practice this meant onboarding wearable and clinical data sources, capturing resting vitals and variability metrics, and prescribing an initial set of nutrition/mobility fundamentals that could be measured against objective outcomes.",
    frictionFull:
      "Friction Points — The member repeatedly requested deep scientific evidence for every recommendation (clinical studies, mechanisms). Social and travel obligations produced adherence gaps (notably deviations during client dinners). Operationally this created a tension between pragmatic recommendations and the member's need for mechanistic justification, which impacted acceptance of some behavior changes.",
    metrics: {
      biometricsAndSpecialMetrics:
        "Biometrics & Special Metrics — Initial baseline recorded BP 136/88 mmHg; Avg resting heart rate ≈58 bpm; Average HRV ≈42 ms. During the London trip, recovery metrics dropped ~25–30% and average BP rose to 138/88 mmHg.",
      dataDrivenInsights:
        "Data-Driven Insights — Analysis revealed a strong negative correlation: a 27.6% drop in average HRV corresponded with a 167% increase in subjective fatigue. We also observed nights preceding international travel commonly showed 15–20% dips in overnight HRV, suggesting an anticipatory stress response.",
      strategicPivots:
        "Strategic Pivots — Initiated a Post-Travel Circadian Realignment protocol (morning sunlight exposure, sleep temperature optimization). Proposed and scheduled a 5-minute box-breathing experiment placed before high-stakes calls to manage anticipatory stress.",
      memberInitiatedGoal:
        "Member-Initiated Goal — The member demanded that every intervention be paired with measurable outcomes and supporting clinical rationale, moving the program toward an 'evidence-first' framework.",
    },
    finalOutcomeFull:
      "Final Outcome — By the end of Week 4 a clear, data-validated baseline was established. The London trip, though subjectively a write-off, provided critical objective data that enabled a targeted approach to anticipatory stress and post-travel recovery. The team moved from broad advice to precisely measured, testable interventions.",
    persona: {
      beforeFull:
        "Before — Entered program with objective markers of chronic stress and a desire for measurable results, but lacked a coordinated, data-driven mitigation plan.",
      afterFull:
        "After — Possessed a validated baseline and concrete evidence of travel cost to physiology. This catalysed a focus on testable interventions and a collaborative, evidence-based strategy.",
    },
  },

  {
    id: 2,
    title: "Episode 2: The First Experiment & The Clinical Baseline",
    weeks: "Weeks 5-9",
    narrative:
      "Following the initial onboarding, this five-week period was defined by quiet consistency and the power of foundational habits. With no major interventions or strategic pivots, the member focused on one critical lever: sleep. By improving sleep consistency, they began to see the first subtle but significant shifts in their physiology. This phase wasn't about dramatic changes but about the diligent work of establishing a new, healthier baseline. The data from this period tells a clear story: small, consistent efforts in one area can create positive ripple effects across the entire system, lowering blood pressure and improving stress resilience without any active struggle being logged.",
    primaryGoalFull:
      "Primary Goal — Establish a stable clinical baseline and measure the downstream effect of foundational habit improvements, primarily sleep consistency. The team prioritized measuring adherence and tracking small, repeatable wins rather than launching new high-variance interventions.",
    frictionFull:
      "Friction Points — This period reported no major friction in logs; operationally it was a phase of steady adherence and measurement, which the team leveraged to validate the baseline and iterate small improvements.",
    metrics: {
      biometricsAndSpecialMetrics:
        "Biometrics & Special Metrics — Blood pressure improved from 138/88 mmHg down to an average of 134/85 mmHg by Week 8. HRV increased from roughly 38 ms to 42 ms. Sleep consistency adherence rose from 75% to 82%.",
      dataDrivenInsights:
        "Data-Driven Insights — A clear correlation emerged: a 7-point increase in sleep consistency strongly associated with the observed improvements in both BP and HRV, suggesting sleep consistency is a primary driver for this member.",
      strategicPivots:
        "Strategic Pivots — No major tactical pivots; the team doubled down on the sleep plan and measurement strategy to entrench improvements.",
      memberInitiatedGoal:
        "Member-Initiated Goal — None recorded during this phase; the member remained focused on executing the foundational plan.",
    },
    finalOutcomeFull:
      "Final Outcome — A new, healthier physiological baseline was validated. The period demonstrated that focused, low-variance changes produce measurable downstream benefits across cardiovascular and recovery metrics.",
    persona: {
      beforeFull:
        "Before — The member entered with inconsistent sleep and room for improvement in biometrics (138/88 BP; HRV ~38 ms).",
      afterFull:
        "After — Became a more consistent practitioner with improved recovery and clearer evidence linking habit to outcome.",
    },
  },

  {
    id: 3,
    title: "Episode 3: Decoding the Data, Refining the Strategy",
    weeks: "Weeks 10-14",
    narrative:
      "This period marked a critical turning point, shifting the journey from broad lifestyle changes to a precision-guided strategy. The quarterly lab results revealed a formidable challenge: a genetically-elevated Lipoprotein(a) [Lp(a)] that was unresponsive to initial efforts. This static risk factor triggered a strategic pivot. Instead of trying to move the unmovable, the new mission became to aggressively optimize every other modifiable risk factor. The data provided a clear playbook: better sleep was directly crushing inflammation (hs-CRP), and consistent cardio was boosting resilience (HRV). The member saw tangible proof of progress—slashing travel recovery time in half and significantly lowering Apolipoprotein B. This success brought the next major obstacle into sharp focus: the structural problem of late-night client dinners, which were single-handedly tanking recovery. The focus now is on designing a tactical protocol to conquer this final, high-stakes environment.",
    primaryGoalFull:
      "Primary Goal — Aggressively lower all modifiable cardiovascular risk factors (ApoB, hs-CRP, lifestyle drivers) to mitigate the upstream risk from a static genetic Lp(a). The program prioritized targeted nutrition and cardio volume increases to drive measurable biochemical change.",
    frictionFull:
      "Friction Points — The major friction was structural: late-night client dinners during travel undermined recovery. Adherence at these times dropped to ~30%, directly correlating with suppressed HRV and reduced next-day cognitive focus.",
    metrics: {
      biometricsAndSpecialMetrics:
        "Biometrics & Special Metrics — ApoB decreased from 115 mg/dL to 98 mg/dL. hs-CRP halved from 1.8 mg/L to 0.9 mg/L. Lp(a) stayed at 150 nmol/L (genetic). Quarterly HRV average increased by ~12% (48 → 54 ms). Travel recovery time reduced by 50% (96 → 48 hours).",
      dataDrivenInsights:
        "Data-Driven Insights — Sleep drove reductions in inflammation (50% drop in hs-CRP aligned with an 18% increase in Whoop Sleep Performance). Weeks with Zone 2 cardio >100 minutes showed average overnight HRV increases of ~7 ms. Nights after heavy dinners produced ~15 ms drops in HRV.",
      strategicPivots:
        "Strategic Pivots — Nutrition targets were refined (saturated fat <7% of calories; added plant sterol–fortified foods). Cardio volume increased (150 → 180 minutes/week). A dinner experiment protocol (prioritize protein/veg; cap alcohol) was proposed for testing.",
      memberInitiatedGoal:
        "Member-Initiated Goal — Develop a specific evidence-based playbook for handling late-night client dinners and isolate the travel protocols most effective at reducing recovery time.",
    },
    finalOutcomeFull:
      "Final Outcome — The targeted strategy validated that improving sleep and cardio volume and refining nutrition produced clinically meaningful improvements, while revealing a persistent structural adherence challenge (late dinners) to be tested and solved.",
    persona: {
      beforeFull:
        "Before — Concerned about the high genetic Lp(a) and unsure which behaviors drove risk; frustrated by travel and late dinners.",
      afterFull:
        "After — Empowered by evidence connecting specific actions to outcomes and focused on building precise tactical protocols to offset genetic risk.",
    },
  },

  {
    id: 4,
    title: "Episode 4: Mastering Travel & Expanding Horizons",
    weeks: "Weeks 15-20",
    narrative:
      "This period marked a significant turning point for Rohan, characterized by a powerful duality: achieving a new level of physiological mastery while simultaneously confronting a critical system failure. The episode began with impressive biometric gains, including a stabilized blood pressure and a dramatically improved heart rate profile (RHR down to 52 bpm, HRV up to 68 ms). This new resilience was put to the ultimate test during a high-stakes business trip to Singapore, where Rohan's body remained remarkably stable, performing near his at-home baseline despite the stress of international travel. This success, however, cast a harsh light on a growing problem: his workout schedule was fundamentally broken. The conflict between late-day work meetings and training reached a crisis point, with a 67% failure rate during the trip. Rohan himself connected this scheduling failure to a direct drop in his recovery scores, declaring, This model is broken. Rather than being a setback, this became a catalyst for evolution. The team pivoted, scheduling a complete overhaul of his training system and designing more flexible, constraint-driven protocols for his demanding work. Simultaneously, Rohan began to look beyond foundational health, initiating a new, performance-focused goal: optimizing his body for golf.",
    primaryGoalFull:
      "Primary Goal — Stress-test physiological resilience under travel and re-design training systems to accommodate an unpredictable work schedule. The aim was to retain the program's physiological gains while reducing scheduling friction.",
    frictionFull:
      "Friction Points — The scheduling model was incompatible with late-day meetings. Workouts scheduled after 5 PM had a ~60% failure rate; during Singapore the strength session miss-rate climbed to ~67%. This produced measurable performance and recovery costs.",
    metrics: {
      biometricsAndSpecialMetrics:
        "Biometrics & Special Metrics — Resting HR improved to ~52 bpm (from 57). HRV rose to ~68 ms (from ~59). During travel the HRV stayed near baseline (≈51 ms; −2%). Sleep performance held relatively high (~87%).",
      dataDrivenInsights:
        "Data-Driven Insights — A clear day-after-workout signal: days after completed workouts had average HRV ≈51 ms and sleep scores ≈82; days after missed workouts had HRV ≈45 ms and sleep ≈74, showing direct short-term physiological cost from missed sessions.",
      strategicPivots:
        "Strategic Pivots — Overhauled workout delivery to be more flexible and constraint-driven (shorter blocks, opportunistic micro-sessions). Introduced a 60-second physiological sigh protocol for immediate stress mitigation.",
      memberInitiatedGoal:
        "Member-Initiated Goal — Pursue sport-specific optimization (golf): rotational power, hip mobility and a golf-specific nutrition block were added.",
    },
    finalOutcomeFull:
      "Final Outcome — Travel resilience was validated, and the team recognized and began correcting a systemic training delivery failure. The program began to transition from rigid scheduling to resilient, context-aware training.",
    persona: {
      beforeFull:
        "Before — Systems were designed around a predictable schedule and hadn't been stress-tested against the member's real work life.",
      afterFull:
        "After — The member evolved into a proactive systems-thinker, identifying root causes and working on sustainable solutions for long-term adherence.",
    },
  },

  {
    id: 5,
    title: "Episode 5: System Failure, Clinical Success",
    weeks: "Weeks 21-26",
    narrative:
      "This period marked a paradoxical triumph. While a systemic failure in workout scheduling was causing frustration and measurable physiological setbacks, the members underlying protocol was so effective that it produced dramatic, clinically significant health improvements. The quarterly diagnostic panel revealed a stunning success: key markers for cardiovascular risk and inflammation plummeted, validating the program's core strategies. This success was underscored by the members remarkable physiological resilience during international travel to South Korea. The journey wasn't without its challenges, including a brief but acute illness that was expertly managed using real-time wearable data. Armed with powerful new health data and a member-driven analysis that pinpointed the scheduling flaw, the team recalibrated. They made the strategic decision to move beyond standard protocols, initiating genetic testing and advanced gut health interventions to architect the next, even more personalized, phase of the member's health optimization.",
    primaryGoalFull:
      "Primary Goal — Achieve clinically meaningful reductions in cardiovascular and inflammatory markers while maintaining operational resilience. The team pursued diagnostic and personalized interventions (genetics, gut health) after confirming clinical progress.",
    frictionFull:
      "Friction Points — Continued missed evening workouts and a short acute illness limited performance in the short-term. The member's own workout cancellation analysis highlighted a 60% failure rate for post-5 PM sessions, indicating a systemic scheduling problem.",
    metrics: {
      biometricsAndSpecialMetrics:
        "Biometrics & Special Metrics — ApoB reduced to ~78 mg/dL (−18%); hs-CRP dropped to ~0.8 mg/L (−47%); 10-year ASCVD risk fell from 7.1% to ~4.9%. During South Korea travel, HRV averaged ~72 ms and recovery ~89%.",
      dataDrivenInsights:
        "Data-Driven Insights — Sustained HRV increases correlated with sharp reductions in inflammation (hs-CRP). The team also noted cognitive and wellbeing gains (self-reported metrics ~8/10).",
      strategicPivots:
        "Strategic Pivots — The team initiated genetic testing (MTHFR, ApoE), added prebiotic fiber interventions for gut–inflammation axis, and formalized an adaptive sickness protocol triggered by wearable-derived signals (low recovery, elevated RHR).",
      memberInitiatedGoal:
        "Member-Initiated Goal — The member’s collected workout cancellation data directly drove a collaborative redesign of the scheduling system.",
    },
    finalOutcomeFull:
      "Final Outcome — Clinical markers improved dramatically despite scheduling failures. The program validated its core strategies and began moving toward hyper-personalization informed by genetics and microbiome work.",
    persona: {
      beforeFull:
        "Before — Compliant with the program but hampered by a hidden systemic issue (late scheduling) that produced physiological cost.",
      afterFull:
        "After — Clinically optimized in key cardiovascular areas, empowered by results, and ready for precision personalization.",
    },
  },

  {
    id: 6,
    title: "Episode 6: Achieving Resilience, Personalizing the Future",
    weeks: "Weeks 27-32",
    narrative:
      "This period marked a turning point, transforming months of disciplined effort into undeniable proof of success. The journey began with a critical test: another demanding travel schedule in Week 29. This time, however, the member navigated it with practiced ease, reporting that the established travel protocols had become second nature. The objective data from his Whoop strap confirmed this newfound resilience, showing consistently high recovery scores and a remarkable 40% reduction in heart rate volatility compared to earlier trips. This mastery set the stage for the main event: the 32-week biomarker review. The results were dramatic. The members 10-year cardiovascular risk score had been slashed by nearly half, and key inflammatory and lipid markers plummeted to healthy ranges. Staring at the data, the member's reaction was one of pure validation: Those are impressive reductions... Clear ROI. This moment of triumph wasn't an endpoint, but a launchpad. With foundational health so significantly improved, the focus shifted from broad strategies to hyper-personalization, culminating in the decision to integrate genetic testing to tailor the next phase of his health journey with unprecedented precision.",
    primaryGoalFull:
      "Primary Goal — Validate program effectiveness via biomarker review and plan a long-term, genetically-informed personalization strategy. This included integrating genetic panels and defining the next program phase around the member’s unique biology.",
    frictionFull:
      "Friction Points — This phase reported minimal friction; it was characterized by high adherence and strategic planning rather than operational failure.",
    metrics: {
      biometricsAndSpecialMetrics:
        "Biometrics & Special Metrics — 10-year ASCVD risk reduced markedly (example reduction from 12.5% to 6.8% in some slices), ApoB averaged ~82 mg/dL, hs-CRP ~0.9 mg/L. Travel resilience metrics: recovery ~88% and sleep performance ~92% during Week 29 travel with ~40% reduction in HRV volatility vs prior trips.",
      dataDrivenInsights:
        "Data-Driven Insights — Consistent execution of travel protocols built durable physiological resilience; objective data and subjective reports aligned in affirming clear program ROI.",
      strategicPivots:
        "Strategic Pivots — Decision to proceed with genetic testing (ApoE, MTHFR) and to craft a more personalized long-term roadmap.",
      memberInitiatedGoal:
        "Member-Initiated Goal — Sustain momentum and set new, higher-performance targets informed by genetics and long-term biomarker trends.",
    },
    finalOutcomeFull:
      "Final Outcome — The program was unequivocally validated. The member saw clinically meaningful reductions in risk and was positioned to begin a new phase of hyper-personalized optimization.",
    persona: {
      beforeFull:
        "Before — Focused on mastering the fundamentals and building resilience to travel and work stressors.",
      afterFull:
        "After — Confident, validated, and ready to pursue precision optimization grounded in genetic and biomarker evidence.",
    },
  },
];
