// // // // // import fs from "fs";

// // // // // // Load raw structured data
// // // // // const raw = JSON.parse(fs.readFileSync("./data/fullStory.json", "utf-8"));

// // // // // // Initialize Elyx structure
// // // // // const elyxData = {
// // // // //   elyx: {
// // // // //     workers: [],
// // // // //     teamMetrics: {
// // // // //       avg_response_time: null,
// // // // //       logging_hours: null,
// // // // //       task_completion_rate: null,
// // // // //       resolution_rate: null,
// // // // //     },
// // // // //   },
// // // // // };

// // // // // // Dummy team members we know
// // // // // // const workers = ["Ruby", "Advik", "Carla", "Sarah"];
// // // // // // Dummy team members we know
// // // // // const workers = ["Ruby", "Advik", "Carla", "Sarah", "Neel", "Dr. Warren"];


// // // // // // Collect data containers
// // // // // let totalResponseTime = 0;
// // // // // let responseCount = 0;
// // // // // let totalHours = 0;
// // // // // let totalTasks = 0;
// // // // // let completedTasks = 0;
// // // // // let resolvedCases = 0;
// // // // // let totalCases = 0;

// // // // // const workerStats = {};
// // // // // workers.forEach((w) => {
// // // // //   workerStats[w] = {
// // // // //     name: w,
// // // // //     response_times: [],
// // // // //     hours_logged: 0,
// // // // //     tasks_total: 0,
// // // // //     tasks_completed: 0,
// // // // //     cases_total: 0,
// // // // //     cases_resolved: 0,
// // // // //   };
// // // // // });

// // // // // // Parse JSON
// // // // // raw.forEach((entry) => {
// // // // //   const { data_type, source, details } = entry;

// // // // //   // Example: conversation → response time
// // // // //   if (data_type === "conversation" && details?.response_time_min) {
// // // // //     const responder = details?.responder || "Ruby"; // fallback
// // // // //     if (workerStats[responder]) {
// // // // //       workerStats[responder].response_times.push(details.response_time_min);
// // // // //       totalResponseTime += details.response_time_min;
// // // // //       responseCount++;
// // // // //     }
// // // // //   }

// // // // //   // Example: appointment → logging hours
// // // // //   if (data_type === "appointment") {
// // // // //     const attendees = details?.attendees || [];
// // // // //     attendees.forEach((a) => {
// // // // //       if (workerStats[a]) {
// // // // //         workerStats[a].hours_logged += 1; // assume 1hr per appointment
// // // // //         totalHours += 1;
// // // // //       }
// // // // //     });
// // // // //   }

// // // // //   // Example: task_update → task completion
// // // // //   if (data_type === "task_update") {
// // // // //     const assignee = details?.assignee || "Ruby";
// // // // //     if (workerStats[assignee]) {
// // // // //       workerStats[assignee].tasks_total++;
// // // // //       totalTasks++;
// // // // //       if (details?.status === "completed") {
// // // // //         workerStats[assignee].tasks_completed++;
// // // // //         completedTasks++;
// // // // //       }
// // // // //     }
// // // // //   }

// // // // //   // Example: resolution
// // // // //   if (data_type === "case_resolution") {
// // // // //     const resolver = details?.resolver || "Ruby";
// // // // //     if (workerStats[resolver]) {
// // // // //       workerStats[resolver].cases_total++;
// // // // //       totalCases++;
// // // // //       if (details?.status === "resolved") {
// // // // //         workerStats[resolver].cases_resolved++;
// // // // //         resolvedCases++;
// // // // //       }
// // // // //     }
// // // // //   }
// // // // // });

// // // // // // Finalize per-worker stats
// // // // // elyxData.elyx.workers = workers.map((w) => {
// // // // //   const stats = workerStats[w];
// // // // //   const avgResp =
// // // // //     stats.response_times.length > 0
// // // // //       ? stats.response_times.reduce((a, b) => a + b, 0) /
// // // // //         stats.response_times.length
// // // // //       : null;

// // // // //   return {
// // // // //     name: stats.name,
// // // // //     avg_response_time: avgResp,
// // // // //     hours_logged: stats.hours_logged,
// // // // //     task_completion_rate:
// // // // //       stats.tasks_total > 0
// // // // //         ? Math.round((stats.tasks_completed / stats.tasks_total) * 100)
// // // // //         : null,
// // // // //     resolution_rate:
// // // // //       stats.cases_total > 0
// // // // //         ? Math.round((stats.cases_resolved / stats.cases_total) * 100)
// // // // //         : null,
// // // // //   };
// // // // // });

// // // // // // Finalize team metrics
// // // // // elyxData.elyx.teamMetrics.avg_response_time =
// // // // //   responseCount > 0 ? +(totalResponseTime / responseCount).toFixed(2) : null;

// // // // // elyxData.elyx.teamMetrics.logging_hours = totalHours;

// // // // // elyxData.elyx.teamMetrics.task_completion_rate =
// // // // //   totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : null;

// // // // // elyxData.elyx.teamMetrics.resolution_rate =
// // // // //   totalCases > 0 ? Math.round((resolvedCases / totalCases) * 100) : null;

// // // // // // Save JSON
// // // // // fs.writeFileSync("./data/elyx_data.json", JSON.stringify(elyxData, null, 2));

// // // // // console.log("✅ Elyx data normalized into data/elyx_data.json");


// // // // // scripts/transform_elyx.js
// // // // import fs from "fs";

// // // // // Load the full story data
// // // // const fullStory = JSON.parse(fs.readFileSync("./data/fullStory.json", "utf-8"));

// // // // /**
// // // //  * Helper: Parse timestamp into Date object
// // // //  */
// // // // function parseTime(ts) {
// // // //   try {
// // // //     return new Date(ts);
// // // //   } catch {
// // // //     return null;
// // // //   }
// // // // }

// // // // /**
// // // //  * Compute Elyx team metrics from conversation logs
// // // //  */
// // // // function processElyxData(storyItems) {
// // // //   const team = {};
// // // //   const members = ["Ruby", "Advik", "Carla", "Sarah", "Neel", "Dr. Warren"];

// // // //   // Init counters
// // // //   members.forEach((m) => {
// // // //     team[m] = {
// // // //       responseTimes: [],
// // // //       activeTimes: [],
// // // //       firstMessage: null,
// // // //       lastMessage: null,
// // // //       tasks: 0,
// // // //       completed: 0,
// // // //       resolved: 0,
// // // //     };
// // // //   });

// // // //   let lastRohanMessage = null;

// // // //   storyItems.forEach((item) => {
// // // //     if (!("speaker" in item)) return; // skip data logs
// // // //     const speaker = item.speaker;
// // // //     const ts = parseTime(item.timestamp);

// // // //     // Track Rohan messages
// // // //     if (speaker.includes("Rohan")) {
// // // //       lastRohanMessage = ts;
// // // //     }

// // // //     // Track Elyx members
// // // //     const member = members.find((m) => speaker.includes(m));
// // // //     if (member) {
// // // //       const mData = team[member];

// // // //       // Response time calc
// // // //       if (lastRohanMessage && ts) {
// // // //         const diff = (ts - lastRohanMessage) / 60000; // minutes
// // // //         if (diff >= 0 && diff < 1440) {
// // // //           mData.responseTimes.push(diff);
// // // //         }
// // // //       }

// // // //       // Logging hours (active window)
// // // //       if (!mData.firstMessage || ts < mData.firstMessage) {
// // // //         mData.firstMessage = ts;
// // // //       }
// // // //       if (!mData.lastMessage || ts > mData.lastMessage) {
// // // //         mData.lastMessage = ts;
// // // //       }

// // // //       // Task completion/resolution (keyword-based dummy logic)
// // // //       const msg = item.message.toLowerCase();
// // // //       if (msg.includes("schedule") || msg.includes("follow-up") || msg.includes("appointment")) {
// // // //         mData.tasks += 1;
// // // //       }
// // // //       if (msg.includes("completed") || msg.includes("scheduled")) {
// // // //         mData.completed += 1;
// // // //       }
// // // //       if (msg.includes("resolved") || msg.includes("fixed")) {
// // // //         mData.resolved += 1;
// // // //       }
// // // //     }
// // // //   });

// // // //   // Compute summaries
// // // //   const memberSummaries = members.map((m) => {
// // // //     const d = team[m];
// // // //     const avgResponse =
// // // //       d.responseTimes.length > 0
// // // //         ? d.responseTimes.reduce((a, b) => a + b, 0) / d.responseTimes.length
// // // //         : null;

// // // //     const loggingHours =
// // // //       d.firstMessage && d.lastMessage
// // // //         ? (d.lastMessage - d.firstMessage) / (1000 * 60 * 60 * 7) // crude approx: spread across 7 weeks
// // // //         : null;

// // // //     const taskRate = d.tasks > 0 ? (d.completed / d.tasks) * 100 : null;
// // // //     const resRate = d.tasks > 0 ? (d.resolved / d.tasks) * 100 : null;

// // // //     return {
// // // //       id: m.toLowerCase().replace(/\s+/g, "_"),
// // // //       name: m,
// // // //       avg_response_time: avgResponse ? avgResponse.toFixed(1) : null,
// // // //       logging_hours: loggingHours ? loggingHours.toFixed(1) : null,
// // // //       task_completion_rate: taskRate ? taskRate.toFixed(0) : null,
// // // //       resolution_rate: resRate ? resRate.toFixed(0) : null,
// // // //     };
// // // //   });

// // // //   // Team averages
// // // //   const valid = (arr) => arr.filter((v) => v !== null).map(Number);
// // // //   const avg = (arr) => (arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : null);

// // // //   const teamMetrics = {
// // // //     avg_response_time: avg(valid(memberSummaries.map((m) => m.avg_response_time))),
// // // //     avg_logging_hours: avg(valid(memberSummaries.map((m) => m.logging_hours))),
// // // //     avg_task_completion_rate: avg(valid(memberSummaries.map((m) => m.task_completion_rate))),
// // // //     avg_resolution_rate: avg(valid(memberSummaries.map((m) => m.resolution_rate))),
// // // //   };

// // // //   return { elyx_team: { members: memberSummaries, team_metrics: teamMetrics } };
// // // // }

// // // // // Run transformation
// // // // const result = processElyxData(fullStory);
// // // // fs.writeFileSync("./data/elyx_data.json", JSON.stringify(result, null, 2));

// // // // console.log("✅ Elyx data written to data/elyx_data.json");




// // // // scripts/process_elyx_data.js
// // // import fs from "fs";

// // // // Load full story JSON
// // // const fullStory = JSON.parse(fs.readFileSync("./data/fullStory.json", "utf-8"));

// // // // Known Elyx team members
// // // const TEAM = ["Ruby", "Advik", "Carla", "Sarah", "Neel", "Dr. Warren"];

// // // // Initialize stats
// // // let stats = {};
// // // TEAM.forEach((m) => {
// // //   stats[m] = {
// // //     messages: [],
// // //     responseTimes: [],
// // //     loggingDays: {},
// // //     tasksAssigned: 0,
// // //     tasksCompleted: 0,
// // //     issuesRaised: 0,
// // //     issuesResolved: 0,
// // //   };
// // // });

// // // // --- STEP 1: Iterate through messages ---
// // // fullStory.forEach((item, idx) => {
// // //   if (!("message" in item)) return; // skip data logs

// // //   const { speaker, message, timestamp } = item;
// // //   if (!TEAM.some((m) => speaker.includes(m)) && !speaker.includes("Rohan"))
// // //     return;

// // //   // Record messages for Elyx members
// // //   TEAM.forEach((m) => {
// // //     if (speaker.includes(m)) {
// // //       stats[m].messages.push({ timestamp, message });
// // //       const day = timestamp.split(" ")[0];
// // //       if (!stats[m].loggingDays[day]) {
// // //         stats[m].loggingDays[day] = { first: timestamp, last: timestamp };
// // //       } else {
// // //         stats[m].loggingDays[day].last = timestamp;
// // //       }
// // //     }
// // //   });

// // //   // --- STEP 2: Response time from Elyx to Rohan ---
// // //   if (speaker.includes("Rohan") && idx + 1 < fullStory.length) {
// // //     const next = fullStory[idx + 1];
// // //     if (TEAM.some((m) => next.speaker.includes(m))) {
// // //       const diff =
// // //         new Date(next.timestamp).getTime() - new Date(timestamp).getTime();
// // //       const minutes = diff / 60000;
// // //       const member = TEAM.find((m) => next.speaker.includes(m));
// // //       if (member && minutes >= 0 && minutes < 12 * 60) {
// // //         stats[member].responseTimes.push(minutes);
// // //       }
// // //     }
// // //   }

// // //   // --- STEP 3: Task Completion keywords ---
// // //   if (speaker.includes("Rohan")) {
// // //     TEAM.forEach((m) => {
// // //       if (message.toLowerCase().includes(m.toLowerCase())) {
// // //         stats[m].tasksAssigned += 1;
// // //       }
// // //     });
// // //   }
// // //   if (TEAM.some((m) => speaker.includes(m))) {
// // //     if (
// // //       message.toLowerCase().includes("done") ||
// // //       message.toLowerCase().includes("completed") ||
// // //       message.toLowerCase().includes("booked")
// // //     ) {
// // //       const member = TEAM.find((m) => speaker.includes(m));
// // //       stats[member].tasksCompleted += 1;
// // //     }
// // //   }

// // //   // --- STEP 4: Resolution rate ---
// // //   if (speaker.includes("Rohan")) {
// // //     TEAM.forEach((m) => {
// // //       if (message.toLowerCase().includes("issue") || message.toLowerCase().includes("problem")) {
// // //         stats[m].issuesRaised += 1;
// // //       }
// // //     });
// // //   }
// // //   if (TEAM.some((m) => speaker.includes(m))) {
// // //     if (
// // //       message.toLowerCase().includes("resolved") ||
// // //       message.toLowerCase().includes("fixed")
// // //     ) {
// // //       const member = TEAM.find((m) => speaker.includes(m));
// // //       stats[member].issuesResolved += 1;
// // //     }
// // //   }
// // // });

// // // // --- STEP 5: Aggregate results ---
// // // const teamMembers = TEAM.map((m) => {
// // //   const s = stats[m];

// // //   // Avg response time
// // //   const avgResponse =
// // //     s.responseTimes.length > 0
// // //       ? (s.responseTimes.reduce((a, b) => a + b, 0) / s.responseTimes.length).toFixed(1)
// // //       : null;

// // //   // Avg logging hours
// // //   const hours = [];
// // //   Object.values(s.loggingDays).forEach((day) => {
// // //     const first = new Date(day.first).getTime();
// // //     const last = new Date(day.last).getTime();
// // //     const diffHrs = (last - first) / (1000 * 60 * 60);
// // //     if (diffHrs > 0 && diffHrs < 16) hours.push(diffHrs);
// // //   });
// // //   const avgLogging =
// // //     hours.length > 0 ? (hours.reduce((a, b) => a + b, 0) / hours.length).toFixed(1) : null;

// // //   // Task completion %
// // //   const taskRate =
// // //     s.tasksAssigned > 0
// // //       ? ((s.tasksCompleted / s.tasksAssigned) * 100).toFixed(0)
// // //       : null;

// // //   // Resolution %
// // //   const resolution =
// // //     s.issuesRaised > 0
// // //       ? ((s.issuesResolved / s.issuesRaised) * 100).toFixed(0)
// // //       : null;

// // //   return {
// // //     id: m.toLowerCase().replace(" ", "_"),
// // //     name: m,
// // //     avg_response_time: avgResponse,
// // //     logging_hours: avgLogging,
// // //     task_completion_rate: taskRate,
// // //     resolution_rate: resolution,
// // //   };
// // // });

// // // // --- STEP 6: Team-level metrics ---
// // // const teamMetrics = {
// // //   avg_response_time: average(
// // //     teamMembers.map((m) => (m.avg_response_time ? +m.avg_response_time : null))
// // //   ),
// // //   avg_logging_hours: average(
// // //     teamMembers.map((m) => (m.logging_hours ? +m.logging_hours : null))
// // //   ),
// // //   avg_task_completion_rate: average(
// // //     teamMembers.map((m) => (m.task_completion_rate ? +m.task_completion_rate : null))
// // //   ),
// // //   avg_resolution_rate: average(
// // //     teamMembers.map((m) => (m.resolution_rate ? +m.resolution_rate : null))
// // //   ),
// // // };

// // // // Helper for averaging safely
// // // function average(arr) {
// // //   const nums = arr.filter((x) => x !== null && !isNaN(x));
// // //   if (nums.length === 0) return null;
// // //   return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1);
// // // }

// // // // --- STEP 7: Save results ---
// // // const result = { elyx_team: { members: teamMembers, team_metrics: teamMetrics } };
// // // fs.writeFileSync("./data/elyx_data.json", JSON.stringify(result, null, 2));

// // // console.log("✅ Elyx data written to data/elyx_data.json");



// // import fs from "fs";

// // // Load fullStory.json
// // const fullStory = JSON.parse(
// //   fs.readFileSync("./data/fullStory.json", "utf-8")
// // );

// // // Elyx team
// // const TEAM = ["Ruby", "Advik", "Carla", "Sarah", "Neel", "Dr. Warren"];

// // // Initialize stats for each member
// // const stats = {};
// // TEAM.forEach((m) => {
// //   stats[m] = {
// //     responseTimes: [],
// //     tasksAssigned: 0,
// //     tasksCompleted: 0,
// //     activeHours: new Set(),
// //     resolutions: 0,
// //   };
// // });

// // // Helper: safe date parsing
// // function safeDate(ts) {
// //   try {
// //     return new Date(ts);
// //   } catch {
// //     return null;
// //   }
// // }

// // // Parse fullStory
// // fullStory.forEach((msg, idx) => {
// //   const { speaker, timestamp, message } = msg || {};
// //   if (!speaker || !timestamp) return;

// //   const speakerName = TEAM.find((m) => speaker.includes(m));

// //   // --- STEP 1: Logging hours ---
// //   const dateObj = safeDate(timestamp);
// //   if (speakerName && dateObj instanceof Date && !isNaN(dateObj)) {
// //     stats[speakerName].activeHours.add(
// //       dateObj.toISOString().slice(0, 13) // hour precision
// //     );
// //   }

// //   // --- STEP 2: Response time ---
// //   if (speaker.includes("Rohan Patel") && idx + 1 < fullStory.length) {
// //     const next = fullStory[idx + 1];
// //     if (next && next.speaker && TEAM.some((m) => next.speaker.includes(m))) {
// //       const diff =
// //         safeDate(next.timestamp)?.getTime() - safeDate(timestamp)?.getTime();
// //       if (diff && diff > 0) {
// //         const minutes = diff / 60000;
// //         const member = TEAM.find((m) => next.speaker.includes(m));
// //         if (member && minutes < 12 * 60) {
// //           stats[member].responseTimes.push(minutes);
// //         }
// //       }
// //     }
// //   }

// //   // --- STEP 3: Tasks (very naive heuristic: contains "task", "report", "follow up") ---
// //   if (
// //     speaker.includes("Rohan Patel") &&
// //     message &&
// //     /(task|report|follow up)/i.test(message)
// //   ) {
// //     // Assign to whoever responds next
// //     const next = fullStory[idx + 1];
// //     if (next && next.speaker) {
// //       const member = TEAM.find((m) => next.speaker.includes(m));
// //       if (member) {
// //         stats[member].tasksAssigned++;
// //         if (/done|completed|finished/i.test(next.message || "")) {
// //           stats[member].tasksCompleted++;
// //         }
// //       }
// //     }
// //   }

// //   // --- STEP 4: Resolution rate (keywords like "resolved", "issue fixed") ---
// //   if (
// //     speakerName &&
// //     message &&
// //     /(resolved|fixed|issue closed|taken care)/i.test(message)
// //   ) {
// //     stats[speakerName].resolutions++;
// //   }
// // });

// // // Compile metrics
// // const members = TEAM.map((m) => {
// //   const s = stats[m];
// //   const avgResponse =
// //     s.responseTimes.length > 0
// //       ? s.responseTimes.reduce((a, b) => a + b, 0) / s.responseTimes.length
// //       : null;

// //   return {
// //     id: m.toLowerCase().replace(/\s+/g, "_"),
// //     name: m,
// //     avg_response_time: avgResponse ? avgResponse.toFixed(1) : null,
// //     logging_hours: s.activeHours.size || null,
// //     task_completion_rate:
// //       s.tasksAssigned > 0
// //         ? Math.round((s.tasksCompleted / s.tasksAssigned) * 100)
// //         : null,
// //     resolution_rate: s.resolutions || null,
// //   };
// // });

// // // Team averages
// // const team_metrics = {
// //   avg_response_time: (() => {
// //     const vals = members.map((m) => parseFloat(m.avg_response_time)).filter(Boolean);
// //     return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : null;
// //   })(),
// //   avg_logging_hours: (() => {
// //     const vals = members.map((m) => m.logging_hours).filter(Boolean);
// //     return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
// //   })(),
// //   avg_task_completion_rate: (() => {
// //     const vals = members.map((m) => m.task_completion_rate).filter(Boolean);
// //     return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
// //   })(),
// //   avg_resolution_rate: (() => {
// //     const vals = members.map((m) => m.resolution_rate).filter(Boolean);
// //     return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
// //   })(),
// // };

// // // Final JSON
// // const result = {
// //   elyx_team: {
// //     members,
// //     team_metrics,
// //   },
// // };

// // // Save
// // fs.writeFileSync("./data/elyx_data.json", JSON.stringify(result, null, 2));
// // console.log("✅ elyx_data.json generated");



// import fs from "fs";

// // Load fullStory.json
// const fullStory = JSON.parse(fs.readFileSync("./data/fullStory.json", "utf-8"));

// // Elyx team
// const TEAM = ["ruby", "advik", "carla", "sarah", "neel", "dr. warren"];

// // Initialize stats
// const stats = {};
// TEAM.forEach((m) => {
//   stats[m] = {
//     responseTimes: [],
//     tasksAssigned: 0,
//     tasksCompleted: 0,
//     activeHours: new Set(),
//     resolutions: 0,
//   };
// });

// function safeDate(ts) {
//   const d = new Date(ts);
//   return isNaN(d) ? null : d;
// }

// // Iterate over messages
// fullStory.forEach((msg, idx) => {
//   if (!msg) return;
//   const speaker = (msg.speaker || "").toLowerCase();
//   const message = (msg.message || "").toLowerCase();
//   const timestamp = msg.timestamp;

//   const member = TEAM.find((m) => speaker.includes(m));

//   // Logging hours
//   const d = safeDate(timestamp);
//   if (member && d) {
//     stats[member].activeHours.add(d.toISOString().slice(0, 13));
//   }

//   // Response time
//   if (speaker.includes("rohan") && idx + 1 < fullStory.length) {
//     const next = fullStory[idx + 1];
//     if (next && next.speaker) {
//       const nextSpeaker = (next.speaker || "").toLowerCase();
//       const nextMember = TEAM.find((m) => nextSpeaker.includes(m));
//       if (nextMember) {
//         const t1 = safeDate(timestamp);
//         const t2 = safeDate(next.timestamp);
//         if (t1 && t2) {
//           const diff = (t2.getTime() - t1.getTime()) / 60000;
//           if (diff > 0 && diff < 12 * 60) {
//             stats[nextMember].responseTimes.push(diff);
//           }
//         }
//       }
//     }
//   }

//   // Task detection (keywords)
//   if (
//     speaker.includes("rohan") &&
//     /(task|report|follow up|schedule|appointment|plan|checkup)/i.test(message)
//   ) {
//     const next = fullStory[idx + 1];
//     if (next && next.speaker) {
//       const nextSpeaker = (next.speaker || "").toLowerCase();
//       const nextMember = TEAM.find((m) => nextSpeaker.includes(m));
//       if (nextMember) {
//         stats[nextMember].tasksAssigned++;
//         if (
//           /(done|completed|finished|sent|scheduled|uploaded|shared)/i.test(
//             (next.message || "").toLowerCase()
//           )
//         ) {
//           stats[nextMember].tasksCompleted++;
//         }
//       }
//     }
//   }

//   // Resolution detection
//   if (
//     member &&
//     /(resolved|fixed|issue closed|taken care|sorted|completed)/i.test(message)
//   ) {
//     stats[member].resolutions++;
//   }
// });

// // Compile metrics
// const members = TEAM.map((m) => {
//   const s = stats[m];
//   const avgResponse =
//     s.responseTimes.length > 0
//       ? s.responseTimes.reduce((a, b) => a + b, 0) / s.responseTimes.length
//       : null;

//   return {
//     id: m.replace(/\s+/g, "_"),
//     name: m.charAt(0).toUpperCase() + m.slice(1),
//     avg_response_time: avgResponse ? avgResponse.toFixed(1) : null,
//     logging_hours: s.activeHours.size || null,
//     task_completion_rate:
//       s.tasksAssigned > 0
//         ? Math.round((s.tasksCompleted / s.tasksAssigned) * 100)
//         : null,
//     resolution_rate: s.resolutions || null,
//   };
// });

// // Team averages
// const team_metrics = {
//   avg_response_time: (() => {
//     const vals = members.map((m) => parseFloat(m.avg_response_time)).filter(Boolean);
//     return vals.length ? (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(1) : null;
//   })(),
//   avg_logging_hours: (() => {
//     const vals = members.map((m) => m.logging_hours).filter(Boolean);
//     return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
//   })(),
//   avg_task_completion_rate: (() => {
//     const vals = members.map((m) => m.task_completion_rate).filter(Boolean);
//     return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
//   })(),
//   avg_resolution_rate: (() => {
//     const vals = members.map((m) => m.resolution_rate).filter(Boolean);
//     return vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : null;
//   })(),
// };

// const result = { elyx_team: { members, team_metrics } };

// fs.writeFileSync("./data/elyx_data.json", JSON.stringify(result, null, 2));
// console.log("✅ elyx_data.json generated");



// scripts/transform_elyx.js
// Node 18+ (ESM) or change to require if using CJS.
// This script is defensive: it skips entries missing speaker/timestamp,
// parses multiple timestamp formats, and writes elyx_data.json.

import fs from "fs";
import path from "path";

const INPUT = path.resolve("./data/fullStory.json"); // adjust if your file lives elsewhere
const OUT = path.resolve("./data/elyx_data.json");

function safeReadJson(p) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    console.error("Failed to read/parse JSON:", p, e.message);
    process.exit(1);
  }
}

function parseBracketTimestamp(s) {
  // Example format: "[8/26/25, 7:57 PM]"
  if (typeof s !== "string") return null;
  const rx = /\[(\d{1,2})\/(\d{1,2})\/(\d{2}),\s*(\d{1,2}):(\d{2})\s*(AM|PM)\]/i;
  const m = s.match(rx);
  if (!m) return null;
  let [, mm, dd, yy, hh, min, ampm] = m;
  mm = Number(mm);
  dd = Number(dd);
  hh = Number(hh);
  min = Number(min);
  const year = 2000 + Number(yy);
  if (/pm/i.test(ampm) && hh !== 12) hh += 12;
  if (/am/i.test(ampm) && hh === 12) hh = 0;
  // Create Date in local timezone
  return new Date(year, mm - 1, dd, hh, min, 0);
}

function parseTimestampGeneric(t) {
  if (!t) return null;
  // If object with timestamp field, extract
  if (typeof t === "object" && t.timestamp) t = t.timestamp;
  // try ISO first
  let d = new Date(t);
  if (!isNaN(d.getTime())) return d;
  // try bracket pattern
  d = parseBracketTimestamp(t);
  if (d) return d;
  // sometimes there's an ISO timestamp inside details: try to coerce
  return null;
}

function flattenText(x) {
  try {
    if (!x) return "";
    return JSON.stringify(x).toLowerCase();
  } catch {
    return String(x).toLowerCase();
  }
}

const TEAM = [
  "ruby",
  "advik",
  "carla",
  "sarah",
  "sarah tan",
  "neel",
  "dr. warren",
  "dr. evans",
  "rachel",
]; // add more names if needed

function isTeamSpeaker(name) {
  if (!name) return false;
  const n = name.toLowerCase();
  return TEAM.some((t) => n.includes(t));
}

// read data
const raw = safeReadJson(INPUT);

// raw should be an array of entries
if (!Array.isArray(raw)) {
  console.error("Expected fullStory.json to be an array of entries.");
  process.exit(1);
}

// build unified message list (with timestamp, speaker, message/data_type)
const messages = [];

raw.forEach((entry, idx) => {
  // if it has a speaker / message (chat)
  if (entry && typeof entry === "object") {
    if (entry.speaker || entry.timestamp) {
      const ts = parseTimestampGeneric(entry.timestamp) || parseTimestampGeneric(entry?.details?.timestamp) || null;
      messages.push({
        sourceIndex: idx,
        type: entry.data_type || (entry.message ? "chat" : "unknown"),
        timestamp: ts,
        speaker: entry.speaker || null,
        message: entry.message || null,
        original: entry,
      });
      return;
    }
    // if data_type entry (structured)
    if (entry.data_type) {
      // try to find a timestamp in details (common pattern)
      const ts = parseTimestampGeneric(entry?.details?.timestamp) || parseTimestampGeneric(entry?.details?.date) || null;
      messages.push({
        sourceIndex: idx,
        type: entry.data_type,
        timestamp: ts,
        speaker: entry.source || null, // often 'source' holds the actor
        message: null,
        original: entry,
      });
      return;
    }
  }
  // fallback: push raw as unknown
  messages.push({
    sourceIndex: idx,
    type: "unknown",
    timestamp: null,
    speaker: null,
    message: null,
    original: entry,
  });
});

// sort messages by timestamp when possible while preserving relative order for nulls
messages.sort((a, b) => {
  if (a.timestamp && b.timestamp) return a.timestamp - b.timestamp;
  if (a.timestamp && !b.timestamp) return -1;
  if (!a.timestamp && b.timestamp) return 1;
  return a.sourceIndex - b.sourceIndex;
});

// helper: find previous non-team message
function findPrevNonTeam(i) {
  for (let j = i - 1; j >= 0; j--) {
    if (!messages[j]) continue;
    const sp = messages[j].speaker;
    if (!sp) continue;
    if (!isTeamSpeaker(sp)) return messages[j];
  }
  return null;
}

// collect per-member stats
const members = {}; // keyed by canonical name (lowercase first token)
function canonicalName(rawName) {
  if (!rawName) return null;
  return rawName.toLowerCase().replace(/\s+/g, " ").trim();
}
function ensureMember(name) {
  const k = canonicalName(name || "unknown");
  if (!members[k]) {
    members[k] = {
      id: k.replace(/\s+/g, "_"),
      name: name,
      response_diffs_minutes: [],
      daySpansHours: {}, // date -> span
      tasks_assigned: 0,
      tasks_completed: 0,
      resolution_count: 0,
    };
  }
  return members[k];
}

// keyword lists
const RESOLUTION_KEYWORDS = ["resolved", "done", "completed", "closed", "task complete", "closing out"];
const COMPLETION_DATATYPES = ["appointment_confirmation", "appointment_confirmed", "appointment_confirmation", "appointment_confirmation", "appointment_confirmation", "appointment_confirmation", "appointment_confirmation"]; // intentional redundancy but we test substring

// iterate messages and compute metrics
for (let i = 0; i < messages.length; i++) {
  const item = messages[i];
  const sp = item.speaker;
  if (!sp) continue;
  const spCan = canonicalName(sp);
  const isTeam = isTeamSpeaker(sp);

  // register member if they are in team
  if (isTeam) {
    const M = ensureMember(sp);
    // response time: find previous non-team message
    const prev = findPrevNonTeam(i);
    if (prev && prev.timestamp && item.timestamp) {
      const diffMs = item.timestamp - prev.timestamp;
      // ignore negative or absurdly large diffs (>48h)
      if (diffMs > 0 && diffMs < 48 * 3600 * 1000) {
        M.response_diffs_minutes.push(diffMs / (60 * 1000));
      }
    }
    // logging hours approx: group by date -> compute earliest and latest
    if (item.timestamp) {
      const dateKey = item.timestamp.toISOString().slice(0, 10);
      if (!M.daySpansHours[dateKey]) {
        M.daySpansHours[dateKey] = { min: item.timestamp.getTime(), max: item.timestamp.getTime() };
      } else {
        if (item.timestamp.getTime() < M.daySpansHours[dateKey].min) M.daySpansHours[dateKey].min = item.timestamp.getTime();
        if (item.timestamp.getTime() > M.daySpansHours[dateKey].max) M.daySpansHours[dateKey].max = item.timestamp.getTime();
      }
    }

    // resolution detection in message text
    const txt = (item.message || "").toLowerCase();
    if (RESOLUTION_KEYWORDS.some((kw) => txt.includes(kw))) {
      M.resolution_count += 1;
    }
  }

  // For structured data entries, try to map tasks to members by source or details
  const orig = item.original;
  if (orig && typeof orig === "object" && orig.data_type) {
    // if source references a team member, mark assigned/completed accordingly
    const src = String(orig.source || "").toLowerCase();
    TEAM.forEach((t) => {
      if (src.includes(t)) {
        const member = ensureMember(orig.source);
        member.tasks_assigned++;
        // Completed if status confirmed / data_type contains confirmation or details.status
        const status = String(orig.details?.status || "").toLowerCase();
        const dtype = String(orig.data_type || "").toLowerCase();
        if (status.includes("confirm") || status.includes("complete") || dtype.includes("confirm") || dtype.includes("confirmation")) {
          member.tasks_completed++;
        } else {
          // also treat some report types as completed signals
          if (dtype.includes("adherence") || dtype.includes("biometric_summary") || dtype.includes("appointment_confirmation") || dtype.includes("appointment_scheduling")) {
            // heuristics: treat report as completed
            member.tasks_completed++;
          }
        }
      } else {
        // also check details blob for mention of team member
        const detailsStr = flattenText(orig.details);
        if (detailsStr.includes(t)) {
          const member = ensureMember(t);
          member.tasks_assigned++;
          const status = String(orig.details?.status || "").toLowerCase();
          const dtype = String(orig.data_type || "").toLowerCase();
          if (status.includes("confirm") || status.includes("complete") || dtype.includes("confirm") || dtype.includes("confirmation")) {
            member.tasks_completed++;
          }
        }
      }
    });
  }
}

// build output structure
const membersArr = Object.values(members).map((m) => {
  const avgResponse =
    m.response_diffs_minutes.length > 0
      ? Math.round((m.response_diffs_minutes.reduce((a, b) => a + b, 0) / m.response_diffs_minutes.length) * 10) / 10
      : null;

  // logging hours: sum daily spans (max-min) in hours
  const daySpans = Object.values(m.daySpansHours || {});
  const totalLoggingHours =
    daySpans.length > 0
      ? Math.round(
          (daySpans.reduce((acc, s) => acc + Math.max(0, (s.max - s.min) / (1000 * 60 * 60)), 0) * 10) / 10
        )
      : null;

  const tasksAssigned = m.tasks_assigned || 0;
  let taskCompletionRate = null;
  if (tasksAssigned > 0) {
    taskCompletionRate = Math.round((100 * (m.tasks_completed || 0)) / tasksAssigned);
  }

  const resolutionRate = null; // resolution heuristic left as null unless you want percent of resolved messages vs messages

  return {
    id: m.id,
    name: m.name,
    avg_response_time_minutes: avgResponse,
    logging_hours: totalLoggingHours,
    task_completion_rate_percent: taskCompletionRate,
    resolution_count: m.resolution_count || 0,
    _debug: {
      samples_response_mins: m.response_diffs_minutes.slice(0, 10),
      day_spans_hours: m.daySpansHours,
      tasks_assigned: m.tasks_assigned,
      tasks_completed: m.tasks_completed,
    },
  };
});

// team aggregates (simple averages where meaningful)
const numeric = (v) => (v === null || v === undefined ? null : Number(v));
const team_metrics = {};
const numericFields = ["avg_response_time_minutes", "logging_hours", "task_completion_rate_percent"];
numericFields.forEach((f) => {
  const vals = membersArr.map((m) => m[f]).filter((x) => x !== null && x !== undefined);
  team_metrics[f] = vals.length ? Math.round((vals.reduce((a, b) => a + b, 0) / vals.length) * 10) / 10 : null;
});

// write out
const output = {
  elyx_team: {
    members: membersArr,
    team_metrics,
    generated_at: new Date().toISOString(),
  },
};

fs.writeFileSync(OUT, JSON.stringify(output, null, 2), "utf8");
console.log("Wrote", OUT);
