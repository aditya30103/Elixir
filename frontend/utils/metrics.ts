// utils/metrics.ts
export function safeAvg(values?: number[] | null): number | null {
  if (!values?.length) return null;
  const valid = values.filter((v) => Number.isFinite(v));
  if (!valid.length) return null;
  const sum = valid.reduce((s, n) => s + n, 0);
  return sum / valid.length;
}

export function percentDelta(oldVal?: number | null, newVal?: number | null): number | null {
  if (!Number.isFinite(oldVal as number) || !Number.isFinite(newVal as number)) return null;
  if (oldVal === 0) return null;
  return ((newVal! - oldVal!) / Math.abs(oldVal!)) * 100;
}

export function formatMetric(v?: number | null, unit = ""): string {
  if (!Number.isFinite(v as number)) return "—";
  // keep integer for clarity
  return `${Math.round(v as number)}${unit ? ` ${unit}` : ""}`;
}
