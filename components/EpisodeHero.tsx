// components/EpisodeHero.tsx
import React from "react";

type KPI = { id: string; label: string; value?: number | null; unit?: string; colorClass?: string; delta?: number | null };

export function KPIBox({ kpi }: { kpi: KPI }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-4 w-56">
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${kpi.colorClass ?? "bg-indigo-600"}`}>
          <span className="text-white font-semibold text-sm">{kpi.id}</span>
        </div>
        <div>
          <div className="text-xs text-slate-400">{kpi.label}</div>
          <div className="text-2xl font-semibold text-slate-900 mt-1">
            {kpi.value == null || !Number.isFinite(kpi.value as number) ? "—" : `${Math.round(kpi.value as number)}${kpi.unit ? ` ${kpi.unit}` : ""}`}
          </div>
        </div>
      </div>

      <div className="mt-3">
        {kpi.delta == null || !Number.isFinite(kpi.delta as number) ? (
          <span className="text-xs text-slate-400">No trend</span>
        ) : (
          <span className={`text-xs font-medium ${kpi.delta >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
            {kpi.delta >= 0 ? "↑ " : "↓ "}
            {Math.abs(Math.round(kpi.delta))}
            %
          </span>
        )}
      </div>
    </div>
  );
}

export default function EpisodeHero({ name, role, focus, kpis }: { name: string; role: string; focus?: string; kpis: KPI[] }) {
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-xl font-semibold text-slate-800">RP</div>
          <div>
            <div className="text-2xl font-bold text-slate-900">{name}</div>
            <div className="text-sm text-slate-500">{role}{focus ? ` · ${focus}` : ""}</div>
          </div>
        </div>

        <div className="flex gap-4">
          {kpis.map((k) => (
            <KPIBox key={k.id} kpi={k} />
          ))}
        </div>
      </div>
    </div>
  );
}
