"use client";

import React, { useMemo, useState } from "react";
import elyxData from "@/data/elyx_data_cleaned.json";

type Member = {
  id: string;
  name: string;
  avg_response_time_minutes?: number | null;
  logging_hours?: number | null;
  task_completion_rate_percent?: number | null;
  resolution_count?: number | null;
  _debug?: {
    samples_response_mins?: number[];
    day_spans_hours?: Record<string, { min: number; max: number }>;
    tasks_assigned?: number;
    tasks_completed?: number;
  };
};

function fmtMinutes(mins?: number | null) {
  if (mins == null || Number.isNaN(mins)) return "—";
  const m = Math.round(mins);
  if (m < 60) return `${m}m`;
  const hh = Math.floor(m / 60);
  const mm = m % 60;
  return `${hh}h ${mm}m`;
}

function initials(name: string) {
  return name.split(" ").map((s) => s[0]).slice(0, 2).join("").toUpperCase();
}

function Sparkline({ data }: { data: number[] }) {
  if (!data || data.length === 0) {
    return <div className="text-xs text-gray-400">no samples</div>;
  }
  const cleaned = data.map((v) => (v == null || Number.isNaN(v) ? 0 : v));
  const max = Math.max(...cleaned);
  const min = Math.min(...cleaned);
  const range = max - min || 1;
  const w = 120;
  const h = 36;
  const step = w / Math.max(1, cleaned.length - 1);
  const points = cleaned
    .map((v, i) => {
      const x = i * step;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="inline-block">
      <polyline
        fill="none"
        stroke="#6366f1"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
      />
      <polyline
        fill="rgba(99,102,241,0.06)"
        stroke="none"
        points={`${points} ${w},${h} 0,${h}`}
      />
    </svg>
  );
}

type ElyxData = { elyx_team?: { members?: Member[]; team_metrics?: { avg_response_time_minutes?: number; logging_hours?: number; task_completion_rate_percent?: number; }; generated_at?: string; }; };

export default function ElyxDashboard() {
  const team = (elyxData as unknown as ElyxData)?.elyx_team;
  const members: Member[] = team?.members ?? [];

  const teamMetrics = {
    avg_response_time_minutes: team?.team_metrics?.avg_response_time_minutes ?? null,
    logging_hours: team?.team_metrics?.logging_hours ?? null,
    task_completion_rate_percent: team?.team_metrics?.task_completion_rate_percent ?? null,
    generated_at: team?.generated_at ?? null,
  };

  const [showDebugFor, setShowDebugFor] = useState<string | null>(null);

  const activeMembers = useMemo(
    () => members.filter((m) => !m.id.includes("(") && !m.id.includes("/") && m.name && m.name.length > 0),
    [members]
  );

  void activeMembers; // used by parent components if needed

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">Elyx Team Dashboard</h2>
          <div className="text-sm text-slate-500 mt-1">
            Team snapshot · generated {teamMetrics.generated_at ? new Date(teamMetrics.generated_at).toLocaleString() : "—"}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Avg response time</div>
          <div className="text-lg font-bold text-slate-900 mt-2">{fmtMinutes(teamMetrics.avg_response_time_minutes)}</div>
          <div className="text-xs text-slate-400 mt-1">Team median/mean from conversation timestamps</div>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Avg logging hours</div>
          <div className="text-lg font-bold text-slate-900 mt-2">
            {teamMetrics.logging_hours != null ? `${teamMetrics.logging_hours}h` : "—"}
          </div>
          <div className="text-xs text-slate-400 mt-1">Sum of detected activity spans / approximate</div>
        </div>
        <div className="bg-white border rounded-lg p-4 shadow-sm">
          <div className="text-xs font-semibold text-slate-500">Task completion rate</div>
          <div className="text-lg font-bold text-slate-900 mt-2">
            {teamMetrics.task_completion_rate_percent != null ? `${teamMetrics.task_completion_rate_percent}%` : "—"}
          </div>
          <div className="text-xs text-slate-400 mt-1">Aggregated from identified assignment/completion hits</div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-3">Team members</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m) => {
            const samples = m._debug?.samples_response_mins ?? [];
            const daysCount = Object.keys(m._debug?.day_spans_hours ?? {}).length;
            const assigned = m._debug?.tasks_assigned ?? 0;
            const completed = m._debug?.tasks_completed ?? 0;
            return (
              <div key={m.id} className="bg-white border rounded-lg p-4 shadow-sm flex flex-col">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700 font-semibold">
                    {initials(m.name || m.id)}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">{m.name}</div>
                    <div className="text-xs text-slate-400">{m.id}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">resolutions</div>
                    <div className="text-sm font-semibold text-slate-800">{m.resolution_count ?? 0}</div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Avg response</div>
                    <div className="text-sm font-medium text-slate-800">{fmtMinutes(m.avg_response_time_minutes)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Logged</div>
                    <div className="text-sm font-medium text-slate-800">
                      {m.logging_hours != null ? `${m.logging_hours}h` : "—"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Task completion</div>
                    <div className="text-sm font-medium text-slate-800">
                      {m.task_completion_rate_percent != null ? `${m.task_completion_rate_percent}%` : "—"}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkline data={samples} />
                    <div className="text-xs text-slate-400">samples: {samples.length}</div>
                  </div>
                  <div className="text-xs text-slate-400">
                    days: <span className="font-medium text-slate-700">{daysCount}</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className="text-xs text-slate-400">tasks</div>
                  <div className="text-sm font-medium text-slate-800">
                    {assigned} assigned · {completed} completed
                  </div>
                  <button
                    onClick={() => setShowDebugFor(showDebugFor === m.id ? null : m.id)}
                    className="ml-auto text-xs text-indigo-600 hover:underline"
                    type="button"
                  >
                    {showDebugFor === m.id ? "Hide debug" : "Show debug"}
                  </button>
                </div>

                {showDebugFor === m.id && (
                  <pre className="mt-3 bg-slate-50 border rounded p-2 text-xs text-slate-700 overflow-auto">
                    {JSON.stringify(m._debug ?? {}, null, 2)}
                  </pre>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-xs text-slate-400">
        Last refresh: {team?.generated_at ? new Date(team.generated_at).toLocaleString() : "—"}
      </div>
    </div>
  );
}
