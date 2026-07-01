"use client";

import { useEffect, useRef } from "react";
import { tierFor } from "@/lib/content/assessment";

interface ScoreGaugeProps {
  score: number;        // final score (300–850)
  displayScore: number; // animated value (300→score)
}

// Five equal 110-point arc segments, pre-computed SVG paths
// Semicircle radius 80, center (100,95), range 300→850 = 180°
const ARC_SEGMENTS = [
  { color: "#e05260", d: "M 20 95 A 80 80 0 0 1 35.28 47.98" },
  { color: "#f5a623", d: "M 35.28 47.98 A 80 80 0 0 1 75.28 18.92" },
  { color: "#1a65b8", d: "M 75.28 18.92 A 80 80 0 0 1 124.72 18.92" },
  { color: "#34c77b", d: "M 124.72 18.92 A 80 80 0 0 1 164.72 47.98" },
  { color: "#00b8d9", d: "M 164.72 47.98 A 80 80 0 0 1 180 95" },
];

export default function ScoreGauge({ score, displayScore }: ScoreGaugeProps) {
  const tier = tierFor(score);
  // needle: -90° at 300, +90° at 850
  const needleDeg = ((displayScore - 300) / 550) * 180 - 90;

  return (
    <div className="text-center">
      {/* Gauge SVG */}
      <div className="relative mx-auto" style={{ width: 260, height: 150 }}>
        <svg viewBox="0 0 200 105" style={{ width: "100%", height: "100%" }} aria-hidden="true">
          {ARC_SEGMENTS.map((seg) => (
            <path
              key={seg.color}
              d={seg.d}
              stroke={seg.color}
              strokeWidth="13"
              fill="none"
              strokeLinecap="round"
            />
          ))}
          {/* Needle */}
          <line
            x1="100" y1="95" x2="100" y2="26"
            stroke="#e8edf5" strokeWidth="4.5" strokeLinecap="round"
            style={{
              transform: `rotate(${needleDeg}deg)`,
              transformOrigin: "100px 95px",
              transition: "transform .1s linear",
            }}
          />
          <circle cx="100" cy="95" r="7" fill="#e8edf5" />
        </svg>
        {/* Score number */}
        <div className="absolute inset-x-0 text-center" style={{ bottom: -4 }}>
          <span
            className="font-display font-bold text-[52px] text-white leading-none"
            aria-live="polite"
            aria-label={`HVI score: ${displayScore}`}
          >
            {displayScore}
          </span>
        </div>
      </div>

      {/* Min/max labels */}
      <div
        className="flex justify-between font-mono text-[11px] mx-auto mt-1"
        style={{ maxWidth: 260, color: "#7a90b0" }}
        aria-hidden="true"
      >
        <span>300</span>
        <span>850</span>
      </div>

      {/* Tier badge */}
      <div
        className="inline-block mt-3.5 text-[13.5px] font-semibold text-primary-foreground bg-primary rounded-full px-5 py-2 whitespace-nowrap"
        aria-label={`Risk tier: ${tier.label} — ${tier.sublabel}`}
      >
        {tier.label} · {tier.sublabel}
      </div>
    </div>
  );
}
