// components/NarrativePanel.tsx
"use client";
import React, { useState } from "react";

export default function NarrativePanel({ episodeId, narrative }: { episodeId: string; narrative: string }) {
  const [loading, setLoading] = useState(false);
  const [whyAnswer, setWhyAnswer] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function fetchWhy() {
    setLoading(true);
    setError(null);
    setWhyAnswer(null);
    try {
      const res = await fetch(`/api/why?episode=${encodeURIComponent(episodeId)}`);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const json = await res.json();
      setWhyAnswer(json.answer ?? "No explanation returned.");
    } catch (e: any) {
      setError("Failed to load explanation.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className="w-full lg:w-4/12 sticky top-20 self-start">
      <div className="bg-white rounded-xl border p-5 shadow-sm" style={{ maxHeight: "78vh", overflow: "auto" }}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-800">Narrative</h3>
            <div className="text-xs text-slate-400">Full episode story — scroll to read.</div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={fetchWhy}
              className="text-xs px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none"
              aria-label="Why explanation"
            >
              {loading ? "Thinking..." : "Why (explain)"}
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{narrative}</div>

        <div className="mt-4">
          {whyAnswer && (
            <div className="mt-3 p-3 bg-slate-50 rounded text-sm text-slate-800 border">
              <div className="font-semibold text-xs text-slate-600 mb-2">LLM Explanation</div>
              <div>{whyAnswer}</div>
            </div>
          )}
          {error && <div className="text-sm text-rose-600 mt-2">{error}</div>}
        </div>
      </div>
    </aside>
  );
}
