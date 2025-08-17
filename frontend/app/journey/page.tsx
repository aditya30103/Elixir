// app/journey/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { EPISODES } from "@/data/journey"; // keep your data file path

// layout knobs
const ROW_HEIGHT = 180; // controls vertical spacing between items
const CARD_W = 520;
const CARD_H = 160;
const DOT_SIZE = 48;

export default function JourneyTimeline() {
  const episodes = Array.isArray(EPISODES) ? EPISODES : [];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-screen-2xl mx-auto px-8 py-12">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Journey Timeline</h1>
          <p className="mt-2 text-sm text-slate-600">
            Six episodes across eight months — click any episode to open the full detail view.
          </p>
        </header>

        {/* Grid: left / center / right */}
        <div
          className="relative"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 96px 1fr",
            gridAutoRows: `${ROW_HEIGHT}px`,
            gap: "22px 28px",
          }}
        >
          {/* center full-height faint line */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: 0,
              bottom: 0,
              width: 4,
              background: "linear-gradient(180deg, rgba(99,102,241,0.08), rgba(99,102,241,0.02))",
              borderRadius: 3,
              zIndex: 1,
            }}
          />

          {episodes.map((ep, i) => {
            const index = i + 1;
            const leftSide = i % 2 === 0; // even idx -> left

            const cardContainerStyle: React.CSSProperties = {
              gridRow: index,
              gridColumn: leftSide ? "1" : "3",
              display: "flex",
              justifyContent: leftSide ? "end" : "start",
              alignItems: "center",
            };

            const dotCellStyle: React.CSSProperties = {
              gridRow: index,
              gridColumn: "2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            };

            return (
              <React.Fragment key={ep.id}>
                {/* Desktop card - fixed sized, internal grid to avoid footer overlap */}
                <div style={cardContainerStyle} className="hidden lg:flex">
                  <article
                    className="bg-white border border-slate-100 rounded-2xl shadow-sm"
                    style={{
                      width: CARD_W,
                      height: CARD_H,
                      padding: 18,
                      zIndex: 3,
                      display: "grid",
                      gridTemplateRows: "auto 1fr auto", // header / content / footer
                      gap: 8,
                      boxSizing: "border-box",
                    }}
                  >
                    {/* header */}
                    <div>
                      <div className="text-xs text-slate-400">{ep.weeks}</div>
                      <h3 className="mt-1 text-lg font-semibold text-slate-900">{ep.title}</h3>
                    </div>

                    {/* content - clamp & overflow-hidden so it doesn't overlap footer */}
                    <div
                      style={{
                        fontSize: 13,
                        color: "#475569",
                        lineHeight: 1.45,
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {ep.narrative}
                    </div>

                    {/* footer - stays at bottom; not absolute */}
                    <div className="flex items-center">
                      <div className="text-xs text-slate-400">Tap to open episode</div>
                      <Link
                        href={`/journey/${ep.id}`}
                        className="ml-auto text-indigo-600 text-sm font-medium hover:underline"
                      >
                        View details →
                      </Link>
                    </div>
                  </article>
                </div>

                {/* center dot */}
                <div style={dotCellStyle}>
                  <div
                    role="img"
                    aria-label={`Episode ${ep.id}`}
                    style={{
                      width: DOT_SIZE,
                      height: DOT_SIZE,
                      borderRadius: DOT_SIZE,
                      background: "linear-gradient(180deg,#6c5ce7,#5b33d6)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 28px rgba(91,51,214,0.16)",
                      fontWeight: 700,
                      zIndex: 6,
                    }}
                  >
                    {ep.id}
                  </div>
                </div>

                {/* mobile stacked card (full width) */}
                <div style={{ gridRow: index, gridColumn: "1 / 4" }} className="lg:hidden">
                  <Link
                    href={`/journey/${ep.id}`}
                    className="block bg-white rounded-xl border border-slate-100 p-4 shadow-sm mb-2"
                  >
                    <div className="text-xs text-slate-400">{ep.weeks}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">{ep.title}</div>
                    <p
                      className="mt-2 text-sm text-slate-600"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {ep.narrative}
                    </p>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </main>
  );
}

