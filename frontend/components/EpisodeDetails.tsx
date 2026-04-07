"use client";

import fullStory from "@/data/fullStory.json";
import { Episode } from "@/types/journey";
import { Card, CardContent } from "@/components/ui/card";

export default function EpisodeDetails({ episode }: { episode: Episode }) {
  const weeks = (episode.granularEvents || []).map((g) => (g as Record<string, unknown>)["week"]).filter(Boolean) as number[];

  const related = (fullStory as Record<string, unknown>[]).filter((it) => {
    if (it["data_type"]) {
      const details = it["details"] as Record<string, unknown> | undefined;
      const wk = details?.["week_number"] || details?.["week_ending"];
      if (wk && weeks.includes(Number(wk))) return true;
    }
    if (it["message"] && typeof it["message"] === "string") {
      const titleTokens = (episode.title || "").toLowerCase().split(" ").slice(0, 4);
      return titleTokens.some((t) => (it["message"] as string).toLowerCase().includes(t));
    }
    return false;
  });

  const metrics = episode.metrics || {};

  return (
    <div className="space-y-4">
      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">{episode.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{episode.dateRange}</p>
          <div className="prose max-w-none">
            <p>{episode.summary}</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent>
            <h3 className="font-semibold mb-2">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {Object.entries(metrics).length === 0 && (
                <div className="col-span-2 text-sm text-gray-500">No structured metrics.</div>
              )}
              {Object.entries(metrics).map(([k, v]) => (
                <div key={k} className="flex justify-between border-b py-1">
                  <div className="text-gray-600 capitalize">{k.replace(/_/g, " ")}</div>
                  <div className="font-medium">{String(v)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="font-semibold mb-2">Persona State</h3>
            <p className="text-sm"><strong>Before:</strong> {episode.personaState?.before}</p>
            <p className="text-sm mt-2"><strong>After:</strong> {episode.personaState?.after}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent>
          <h3 className="font-semibold mb-2">Granular Events</h3>
          <div className="space-y-2">
            {(episode.granularEvents || []).map((ev) => {
              const e = ev as Record<string, unknown>;
              return (
                <div key={String(e["eventId"])} className="p-3 border rounded">
                  <div className="font-medium">{String(e["title"] ?? "")}</div>
                  <div className="text-xs text-gray-500">Week {String(e["week"] ?? "?")}</div>
                  <div className="text-sm text-gray-700 mt-1">{String(e["description"] ?? "")}</div>
                </div>
              );
            })}
            {(!episode.granularEvents || episode.granularEvents.length === 0) && (
              <div className="text-sm text-gray-500">No granular events listed for this episode.</div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h3 className="font-semibold mb-2">Related Logs &amp; Messages</h3>
          {related.length === 0 ? (
            <div className="text-sm text-gray-500">No related logs found for this episode.</div>
          ) : (
            related.map((r, i) => (
              <div key={i} className="border rounded p-3 mb-2">
                {r["timestamp"] != null && <div className="text-xs text-gray-400">{String(r["timestamp"])}</div>}
                {r["speaker"] != null && <div className="text-sm font-medium">{String(r["speaker"])}</div>}
                {r["message"] != null && <div className="text-sm mt-1">{String(r["message"])}</div>}
                {r["data_type"] != null && (
                  <pre className="text-xs mt-2 bg-gray-50 p-2 rounded">{JSON.stringify(r["details"], null, 2)}</pre>
                )}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
