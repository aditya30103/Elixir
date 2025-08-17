// // // // // // // "use client";

// // // // // // // import fullStory from "@/data/fullStory.json";
// // // // // // // import { Card, CardContent } from "@/components/ui/card";

// // // // // // // interface ChatMessage {
// // // // // // //   week: number;
// // // // // // //   sender: string;
// // // // // // //   message: string;
// // // // // // // }

// // // // // // // export default function FullStoryPage() {
// // // // // // //   const messages: ChatMessage[] = fullStory as ChatMessage[];

// // // // // // //   return (
// // // // // // //     <div className="max-w-3xl mx-auto p-4">
// // // // // // //       <h1 className="text-2xl font-bold mb-6">Full Story</h1>
// // // // // // //       <div className="space-y-4">
// // // // // // //         {messages.map((msg, idx) => (
// // // // // // //           <div
// // // // // // //             key={idx}
// // // // // // //             className={`flex ${
// // // // // // //               msg.sender === "Rohan" ? "justify-end" : "justify-start"
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             <Card
// // // // // // //               className={`max-w-xs ${
// // // // // // //                 msg.sender === "Rohan"
// // // // // // //                   ? "bg-green-100 rounded-br-none"
// // // // // // //                   : "bg-gray-100 rounded-bl-none"
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               <CardContent className="p-3">
// // // // // // //                 <p className="text-sm">
// // // // // // //                   <span className="font-semibold">{msg.sender}: </span>
// // // // // // //                   {msg.message}
// // // // // // //                 </p>
// // // // // // //                 <p className="text-xs text-gray-500 mt-1">Week {msg.week}</p>
// // // // // // //               </CardContent>
// // // // // // //             </Card>
// // // // // // //           </div>
// // // // // // //         ))}
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }



// // // // // // "use client";

// // // // // // import storyData from "@/data/fullStory.json";
// // // // // // import { Card, CardContent } from "@/components/ui/card";

// // // // // // interface ChatMessage {
// // // // // //   timestamp: string;
// // // // // //   speaker: string;
// // // // // //   message: string;
// // // // // // }

// // // // // // interface DataEntry {
// // // // // //   data_type: string;
// // // // // //   source: string;
// // // // // //   details: Record<string, any>;
// // // // // // }

// // // // // // type StoryItem = ChatMessage | DataEntry;

// // // // // // export default function FullStoryPage() {
// // // // // //   const items: StoryItem[] = storyData as StoryItem[];

// // // // // //   return (
// // // // // //     <div className="max-w-3xl mx-auto p-4">
// // // // // //       <h1 className="text-2xl font-bold mb-6">Full Story</h1>
// // // // // //       <div className="space-y-4">
// // // // // //         {items.map((item, idx) => {
// // // // // //           if ("message" in item) {
// // // // // //             // Normal chat message
// // // // // //             const isRohan = item.speaker.includes("Rohan");
// // // // // //             return (
// // // // // //               <div
// // // // // //                 key={idx}
// // // // // //                 className={`flex ${isRohan ? "justify-end" : "justify-start"}`}
// // // // // //               >
// // // // // //                 <div
// // // // // //                   className={`max-w-xs p-3 rounded-2xl ${
// // // // // //                     isRohan
// // // // // //                       ? "bg-green-100 rounded-br-none"
// // // // // //                       : "bg-gray-100 rounded-bl-none"
// // // // // //                   }`}
// // // // // //                 >
// // // // // //                   <p className="text-sm">
// // // // // //                     <span className="font-semibold">{item.speaker}: </span>
// // // // // //                     {item.message}
// // // // // //                   </p>
// // // // // //                   <p className="text-xs text-gray-500 mt-1">
// // // // // //                     {item.timestamp}
// // // // // //                   </p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             );
// // // // // //           } else {
// // // // // //             // Structured data entry
// // // // // //             return (
// // // // // //               <Card key={idx} className="max-w-md mx-auto bg-white shadow">
// // // // // //                 <CardContent className="p-3">
// // // // // //                   <h3 className="text-sm font-semibold capitalize">
// // // // // //                     {item.data_type.replace(/_/g, " ")}
// // // // // //                   </h3>
// // // // // //                   <p className="text-xs text-gray-500">
// // // // // //                     Source: {item.source}
// // // // // //                   </p>
// // // // // //                   <pre className="text-xs mt-2 bg-gray-50 p-2 rounded">
// // // // // //                     {JSON.stringify(item.details, null, 2)}
// // // // // //                   </pre>
// // // // // //                 </CardContent>
// // // // // //               </Card>
// // // // // //             );
// // // // // //           }
// // // // // //         })}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }



// // // // // "use client";

// // // // // import storyData from "@/data/fullStory.json";
// // // // // import { Card, CardContent } from "@/components/ui/card";

// // // // // interface ChatMessage {
// // // // //   timestamp: string;
// // // // //   speaker: string;
// // // // //   message: string;
// // // // // }

// // // // // interface DataEntry {
// // // // //   data_type: string;
// // // // //   source: string;
// // // // //   details: Record<string, any>;
// // // // // }

// // // // // type StoryItem = ChatMessage | DataEntry;

// // // // // // Helper to render details nicely
// // // // // function renderDetails(details: Record<string, any>) {
// // // // //   return (
// // // // //     <div className="mt-2 text-sm">
// // // // //       {Object.entries(details).map(([key, value]) => (
// // // // //         <div
// // // // //           key={key}
// // // // //           className="flex justify-between border-b last:border-none py-1"
// // // // //         >
// // // // //           <span className="font-medium capitalize">{key.replace(/_/g, " ")}</span>
// // // // //           <span className="text-gray-700">
// // // // //             {typeof value === "object" ? JSON.stringify(value) : value.toString()}
// // // // //           </span>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default function FullStoryPage() {
// // // // //   const items: StoryItem[] = storyData as StoryItem[];

// // // // //   return (
// // // // //     <div className="max-w-3xl mx-auto p-4">
// // // // //       <h1 className="text-2xl font-bold mb-6">📖 Full Story</h1>
// // // // //       <div className="space-y-4">
// // // // //         {items.map((item, idx) => {
// // // // //           if ("message" in item) {
// // // // //             // Chat message bubble
// // // // //             const isRohan = item.speaker.includes("Rohan");
// // // // //             return (
// // // // //               <div
// // // // //                 key={idx}
// // // // //                 className={`flex ${isRohan ? "justify-end" : "justify-start"}`}
// // // // //               >
// // // // //                 <div
// // // // //                   className={`max-w-xs p-3 rounded-2xl shadow ${
// // // // //                     isRohan
// // // // //                       ? "bg-green-100 rounded-br-none"
// // // // //                       : "bg-blue-100 rounded-bl-none"
// // // // //                   }`}
// // // // //                 >
// // // // //                   <p className="text-sm">
// // // // //                     <span className="font-semibold">{item.speaker}: </span>
// // // // //                     {item.message}
// // // // //                   </p>
// // // // //                   <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             );
// // // // //           } else {
// // // // //             // Data entry card
// // // // //             return (
// // // // //               <Card
// // // // //                 key={idx}
// // // // //                 className="max-w-md mx-auto bg-white border shadow-lg"
// // // // //               >
// // // // //                 <CardContent className="p-4">
// // // // //                   <div className="flex justify-between items-center">
// // // // //                     <h3 className="text-base font-semibold capitalize">
// // // // //                       {item.data_type.replace(/_/g, " ")}
// // // // //                     </h3>
// // // // //                     <span className="text-xs text-gray-500">
// // // // //                       Source: {item.source}
// // // // //                     </span>
// // // // //                   </div>
// // // // //                   {renderDetails(item.details)}
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             );
// // // // //           }
// // // // //         })}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import storyData from "@/data/fullStory.json";
// // // // import { Card, CardContent } from "@/components/ui/card";

// // // // interface ChatMessage {
// // // //   timestamp: string;
// // // //   speaker: string;
// // // //   message: string;
// // // // }

// // // // interface DataEntry {
// // // //   data_type: string;
// // // //   source: string;
// // // //   details: Record<string, any>;
// // // // }

// // // // type StoryItem = ChatMessage | DataEntry;

// // // // function renderDetails(details: Record<string, any>) {
// // // //   return (
// // // //     <div className="mt-2 text-sm">
// // // //       {Object.entries(details).map(([key, value]) => (
// // // //         <div
// // // //           key={key}
// // // //           className="flex justify-between border-b last:border-none py-1"
// // // //         >
// // // //           <span className="font-medium capitalize">{key.replace(/_/g, " ")}</span>
// // // //           <span className="text-gray-700">
// // // //             {typeof value === "object" ? JSON.stringify(value) : value.toString()}
// // // //           </span>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default function FullStoryPage() {
// // // //   const items: StoryItem[] = storyData as StoryItem[];

// // // //   return (
// // // //     <div className="max-w-6xl mx-auto p-6">
// // // //       <h1 className="text-2xl font-bold mb-6">📖 Full Story</h1>
// // // //       <div className="flex flex-col space-y-3">
// // // //         {items.map((item, idx) => {
// // // //           if ("message" in item) {
// // // //             const isRohan = item.speaker.includes("Rohan");
// // // //             return (
// // // //               <div
// // // //                 key={idx}
// // // //                 className={`flex ${isRohan ? "justify-end" : "justify-start"}`}
// // // //               >
// // // //                 <div
// // // //                   className={`p-4 rounded-2xl shadow-md max-w-lg md:max-w-xl ${
// // // //                     isRohan
// // // //                       ? "bg-green-100 rounded-br-none"
// // // //                       : "bg-blue-100 rounded-bl-none"
// // // //                   }`}
// // // //                 >
// // // //                   <p className="text-sm leading-relaxed">
// // // //                     <span className="font-semibold">{item.speaker}: </span>
// // // //                     {item.message}
// // // //                   </p>
// // // //                   <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           } else {
// // // //             return (
// // // //               <Card
// // // //                 key={idx}
// // // //                 className="w-full md:max-w-2xl mx-auto bg-white border shadow-lg"
// // // //               >
// // // //                 <CardContent className="p-4">
// // // //                   <div className="flex justify-between items-center">
// // // //                     <h3 className="text-base font-semibold capitalize">
// // // //                       {item.data_type.replace(/_/g, " ")}
// // // //                     </h3>
// // // //                     <span className="text-xs text-gray-500">
// // // //                       Source: {item.source}
// // // //                     </span>
// // // //                   </div>
// // // //                   {renderDetails(item.details)}
// // // //                 </CardContent>
// // // //               </Card>
// // // //             );
// // // //           }
// // // //         })}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // "use client";

// // // import storyData from "@/data/fullStory.json";
// // // import { Card, CardContent } from "@/components/ui/card";

// // // interface ChatMessage {
// // //   timestamp: string;
// // //   speaker: string;
// // //   message: string;
// // // }

// // // interface DataEntry {
// // //   data_type: string;
// // //   source: string;
// // //   details: Record<string, any>;
// // // }

// // // type StoryItem = ChatMessage | DataEntry;

// // // // Helper to render details nicely
// // // function renderDetails(details: Record<string, any>) {
// // //   return (
// // //     <div className="mt-2 text-sm">
// // //       {Object.entries(details).map(([key, value]) => (
// // //         <div
// // //           key={key}
// // //           className="flex justify-between border-b last:border-none py-1"
// // //         >
// // //           <span className="font-medium capitalize">
// // //             {key.replace(/_/g, " ")}
// // //           </span>
// // //           <span className="text-gray-700">
// // //             {typeof value === "object" ? JSON.stringify(value) : value.toString()}
// // //           </span>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default function FullStoryPage() {
// // //   const items: StoryItem[] = storyData as StoryItem[];

// // //   return (
// // //     <div className="max-w-4xl mx-auto p-4">
// // //       <h1 className="text-2xl font-bold mb-6">📖 Full Story</h1>
// // //       <div className="space-y-4">
// // //         {items.map((item, idx) => {
// // //           if ("message" in item) {
// // //             // Chat message bubble
// // //             const isUser =
// // //               item.speaker.includes("Rohan") || item.speaker.includes("Sarah");

// // //             return (
// // //               <div
// // //                 key={idx}
// // //                 className={`flex ${isUser ? "justify-end" : "justify-start"}`}
// // //               >
// // //                 <div
// // //                   className={`p-3 rounded-2xl shadow-md max-w-md sm:max-w-lg md:max-w-xl ${
// // //                     isUser
// // //                       ? "bg-green-100 rounded-br-none"
// // //                       : "bg-blue-100 rounded-bl-none"
// // //                   }`}
// // //                 >
// // //                   <p className="text-sm leading-relaxed">
// // //                     <span className="font-semibold">{item.speaker}: </span>
// // //                     {item.message}
// // //                   </p>
// // //                   <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
// // //                 </div>
// // //               </div>
// // //             );
// // //           } else {
// // //             // Data entry card
// // //             return (
// // //               <Card
// // //                 key={idx}
// // //                 className="max-w-lg md:max-w-xl mx-auto bg-white border shadow-lg"
// // //               >
// // //                 <CardContent className="p-4">
// // //                   <div className="flex justify-between items-center">
// // //                     <h3 className="text-base font-semibold capitalize">
// // //                       {item.data_type.replace(/_/g, " ")}
// // //                     </h3>
// // //                     <span className="text-xs text-gray-500">
// // //                       Source: {item.source}
// // //                     </span>
// // //                   </div>
// // //                   {renderDetails(item.details)}
// // //                 </CardContent>
// // //               </Card>
// // //             );
// // //           }
// // //         })}
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // "use client";

// // import storyData from "@/data/fullStory.json";
// // import { Card, CardContent } from "@/components/ui/card";

// // interface ChatMessage {
// //   timestamp: string;
// //   speaker: string;
// //   message: string;
// // }

// // interface DataEntry {
// //   data_type: string;
// //   source: string;
// //   details: Record<string, any>;
// // }

// // type StoryItem = ChatMessage | DataEntry;

// // // Helper to render details nicely
// // function renderDetails(details: Record<string, any>) {
// //   return (
// //     <div className="mt-2 text-sm">
// //       {Object.entries(details).map(([key, value]) => (
// //         <div
// //           key={key}
// //           className="flex justify-between border-b last:border-none py-1"
// //         >
// //           <span className="font-medium capitalize">
// //             {key.replace(/_/g, " ")}
// //           </span>
// //           <span className="text-gray-700">
// //             {typeof value === "object" ? JSON.stringify(value) : value.toString()}
// //           </span>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default function FullStoryPage() {
// //   const items: StoryItem[] = storyData as StoryItem[];

// //   return (
// //     <div className="max-w-6xl mx-auto p-6">
// //       <h1 className="text-2xl font-bold mb-6">📖 Full Story</h1>
// //       <div className="space-y-6">
// //         {items.map((item, idx) => {
// //           if ("message" in item) {
// //             // Chat message bubble
// //             const isUser =
// //               item.speaker.includes("Rohan") || item.speaker.includes("Sarah");

// //             return (
// //               <div
// //                 key={idx}
// //                 className={`flex ${isUser ? "justify-end" : "justify-start"}`}
// //               >
// //                 <div
// //                   className={`w-full sm:w-3/4 lg:w-2/3 p-4 rounded-2xl shadow-md ${
// //                     isUser
// //                       ? "bg-green-100 rounded-br-none text-right"
// //                       : "bg-blue-100 rounded-bl-none text-left"
// //                   }`}
// //                 >
// //                   <p className="text-sm leading-relaxed">
// //                     <span className="font-semibold">{item.speaker}: </span>
// //                     {item.message}
// //                   </p>
// //                   <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
// //                 </div>
// //               </div>
// //             );
// //           } else {
// //             // Data entry card
// //             return (
// //               <Card
// //                 key={idx}
// //                 className="w-full sm:w-3/4 lg:w-2/3 mx-auto bg-white border shadow-lg"
// //               >
// //                 <CardContent className="p-4">
// //                   <div className="flex justify-between items-center">
// //                     <h3 className="text-base font-semibold capitalize">
// //                       {item.data_type.replace(/_/g, " ")}
// //                     </h3>
// //                     <span className="text-xs text-gray-500">
// //                       Source: {item.source}
// //                     </span>
// //                   </div>
// //                   {renderDetails(item.details)}
// //                 </CardContent>
// //               </Card>
// //             );
// //           }
// //         })}
// //       </div>
// //     </div>
// //   );
// // }


// "use client";

// import storyData from "@/data/fullStory.json";
// import { Card, CardContent } from "@/components/ui/card";

// interface ChatMessage {
//   timestamp: string;
//   speaker: string;
//   message: string;
// }

// interface DataEntry {
//   data_type: string;
//   source: string;
//   details: Record<string, any>;
// }

// type StoryItem = ChatMessage | DataEntry;

// // Helper to render details nicely
// function renderDetails(details: Record<string, any>) {
//   return (
//     <div className="mt-2 text-sm">
//       {Object.entries(details).map(([key, value]) => (
//         <div
//           key={key}
//           className="flex justify-between border-b last:border-none py-1"
//         >
//           <span className="font-medium capitalize">
//             {key.replace(/_/g, " ")}
//           </span>
//           <span className="text-gray-700">
//             {typeof value === "object" ? JSON.stringify(value) : value.toString()}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default function FullStoryPage() {
//   const items: StoryItem[] = storyData as StoryItem[];

//   return (
//     <div className="max-w-6xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">📖 Full Story</h1>
//       <div className="space-y-6">
//         {items.map((item, idx) => {
//           if ("message" in item) {
//             // Chat message bubble
//             const isUser =
//               item.speaker.includes("Rohan") || item.speaker.includes("Sarah");

//             return (
//               <div key={idx} className="flex justify-start">
//                 <div
//                   className={`w-full sm:w-3/4 lg:w-2/3 p-4 rounded-2xl shadow-md ${
//                     isUser
//                       ? "bg-green-100"
//                       : "bg-blue-100"
//                   }`}
//                 >
//                   <p className="text-sm leading-relaxed">
//                     <span className="font-semibold">{item.speaker}: </span>
//                     {item.message}
//                   </p>
//                   <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
//                 </div>
//               </div>
//             );
//           } else {
//             // Data entry card
//             return (
//               <Card
//                 key={idx}
//                 className="w-full sm:w-3/4 lg:w-2/3 mx-auto bg-white border shadow-lg"
//               >
//                 <CardContent className="p-4">
//                   <div className="flex justify-between items-center">
//                     <h3 className="text-base font-semibold capitalize">
//                       {item.data_type.replace(/_/g, " ")}
//                     </h3>
//                     <span className="text-xs text-gray-500">
//                       Source: {item.source}
//                     </span>
//                   </div>
//                   {renderDetails(item.details)}
//                 </CardContent>
//               </Card>
//             );
//           }
//         })}
//       </div>
//     </div>
//   );
// }


"use client";

import storyData from "@/data/fullStory.json";
import { Card, CardContent } from "@/components/ui/card";

interface ChatMessage {
  timestamp: string;
  speaker: string;
  message: string;
}

interface DataEntry {
  data_type: string;
  source: string;
  details: Record<string, any>;
}

type StoryItem = ChatMessage | DataEntry;

// Helper to render details nicely
function renderDetails(details: Record<string, any>) {
  return (
    <div className="mt-2 text-sm">
      {Object.entries(details).map(([key, value]) => (
        <div
          key={key}
          className="flex justify-between border-b last:border-none py-1"
        >
          <span className="font-medium capitalize">
            {key.replace(/_/g, " ")}
          </span>
          <span className="text-gray-700">
            {typeof value === "object" ? JSON.stringify(value) : value.toString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function FullStoryPage() {
  const items: StoryItem[] = storyData as StoryItem[];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📖 Full Story</h1>
      <div className="space-y-6">
        {items.map((item, idx) => {
          if ("message" in item) {
            // Chat message bubble
            const isUser =
              item.speaker.includes("Rohan") || item.speaker.includes("Sarah");

            return (
              <div
                key={idx}
                className={`flex ${isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-lg p-4 rounded-2xl shadow-md text-left ${
                    isUser
                      ? "bg-green-100 rounded-br-none"
                      : "bg-blue-100 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">{item.speaker}: </span>
                    {item.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{item.timestamp}</p>
                </div>
              </div>
            );
          } else {
            // Data entry card
            return (
              <Card
                key={idx}
                className="max-w-lg mx-auto bg-white border shadow-lg"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-semibold capitalize">
                      {item.data_type.replace(/_/g, " ")}
                    </h3>
                    <span className="text-xs text-gray-500">
                      Source: {item.source}
                    </span>
                  </div>
                  {renderDetails(item.details)}
                </CardContent>
              </Card>
            );
          }
        })}
      </div>
    </div>
  );
}


