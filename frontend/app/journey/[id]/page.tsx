"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EPISODES } from "@/data/journey"; // adjust path if your data file is elsewhere
import ReactMarkdown from 'react-markdown';

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
  // regex to match: ^\s*title\s*[—:-]\s* (case-insensitive)
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
  // This is the corrected line with the typo fixed
  const personaAfter = removeTitlePrefix("After", episode.persona?.afterFull);

  // State for the "Ask Elixir" component
  const [chat, setChat] = useState<{ role: "user" | "elixir"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // This function now contains the correct logic to call your backend
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newChat = [...chat, { role: "user", text: input }];
    setChat(newChat);
    const question = input; // We save the input to a new variable before clearing it
    setInput("");
    setLoading(true);

    try {
      // This is the real API call to your frontend's API route
      const response = await fetch('/api/why', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question }),
      });

      if (!response.ok) {
        throw new Error("API call failed");
      }

      const data = await response.json();
      // Add the answer from the backend to the chat
      setChat([...newChat, { role: "elixir", text: data.answer }]);
    } catch (err) {
      // If there's an error, display an error message in the chat
      setChat([...newChat, { role: "elixir", text: "⚠️ Error: Unable to fetch answer." }]);
      console.error('Error asking question:', err);
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
                    <ReactMarkdown>{c.text}</ReactMarkdown>
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

            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}