"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ScoreGauge from "./ScoreGauge";
import {
  assessmentQuestions,
  recommendationMap,
  computeScore,
  tierFor,
} from "@/lib/content/assessment";

type Phase = "intro" | "quiz" | "results";

function useGaugeAnimation(target: number, enabled: boolean) {
  const [display, setDisplay] = useState(300);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!enabled || target === 0) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(target);
      return;
    }

    const dur = 1700;
    const t0 = performance.now();
    function tick(now: number) {
      let p = Math.min(1, (now - t0) / dur);
      p = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(300 + (target - 300) * p));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplay(target);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, enabled]);

  return display;
}

export default function AssessmentQuiz({ autoStart = false }: { autoStart?: boolean }) {
  const params = useSearchParams();
  const shouldAutoStart = autoStart || params.get("start") === "1";
  const [phase, setPhase] = useState<Phase>(shouldAutoStart ? "quiz" : "intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const displayScore = useGaugeAnimation(score, phase === "results");

  function start() {
    setPhase("quiz");
    setIndex(0);
    setAnswers([]);
  }

  function answer(points: number) {
    const next = [...answers, points];
    if (next.length >= assessmentQuestions.length) {
      const s = computeScore(next);
      setAnswers(next);
      setScore(s);
      setPhase("results");
    } else {
      setAnswers(next);
      setIndex(next.length);
    }
  }

  const q = assessmentQuestions[index];
  const pct = Math.round((index / assessmentQuestions.length) * 100);

  // Results derivation
  const scoredDims = answers.map((pts, i) => ({
    dim: assessmentQuestions[i].dim,
    pts,
  }));
  const sorted = [...scoredDims].sort((a, b) => a.pts - b.pts);
  const topRisks = sorted.slice(0, 3);
  const strongest = sorted.slice(-3).reverse();
  const recommendations = topRisks.map((r) => recommendationMap[r.dim]);

  return (
    <div
      id="assessment"
      className="bg-surface-subtle border-b border-surface-border"
    >
      <div className="container-content py-14">
        <div
          className="mx-auto max-w-[920px] bg-card border border-surface-border rounded-[20px] overflow-hidden"
          style={{ boxShadow: "0 30px 70px -40px rgba(13,38,76,.4)" }}
        >
          {/* ── Intro ── */}
          {phase === "intro" && (
            <div className="px-11 py-12 text-center">
              <div className="font-mono text-[11px] tracking-label uppercase text-teal-650 mb-3.5">
                Live assessment
              </div>
              <h2 className="font-display font-semibold text-[30px] text-navy-700 mb-3">
                What's your Human Vulnerability Index?
              </h2>
              <p className="text-[16px] leading-[1.6] text-slate-400 mx-auto mb-2.5 max-w-[520px]">
                Answer ten quick questions — one for each HVI risk dimension —
                to see a sample 300–850 score, your top risk areas, and where
                you're strongest.
              </p>
              <div className="font-mono text-xs text-slate-200 mb-6">
                10 questions · about 2 minutes · no sign-up
              </div>
              <button
                onClick={start}
                className="inline-flex items-center px-8 py-3.5 rounded-[10px] text-[15px] font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-colors"
                style={{ boxShadow: "0 12px 28px -10px rgba(0,184,217,.7)" }}
              >
                Start assessment
              </button>
              <p className="text-xs text-slate-200 mt-4">
                Illustrative demo. Your responses are not stored.
              </p>
            </div>
          )}

          {/* ── Quiz ── */}
          {phase === "quiz" && (
            <div className="px-11 py-9 pb-11">
              {/* Progress header */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs tracking-[.06em] text-teal-650">
                  QUESTION {index + 1} / {assessmentQuestions.length}
                </span>
                <span className="text-[12.5px] font-semibold text-teal-500">
                  {q.dim}
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 bg-[#1a2e4a] rounded-full overflow-hidden mb-7">
                <div
                  className="h-full rounded-full transition-[width] duration-300 ease-out"
                  style={{
                    width: `${pct}%`,
                    background: "linear-gradient(90deg,#00b8d9,#039fc0)",
                  }}
                />
              </div>
              {/* Question */}
              <h2 className="font-display font-semibold text-[25px] leading-[1.25] text-navy-700 mb-6">
                {q.question}
              </h2>
              {/* Options */}
              <div className="flex flex-col gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => answer(opt.points)}
                    className="text-left font-sans text-[15.5px] text-slate-600 bg-surface-subtle border-[1.5px] border-surface-border2 rounded-xl px-5 py-[18px] cursor-pointer transition-all duration-150 hover:border-teal-500 hover:bg-teal-50 hover:translate-x-0.5 focus-visible:outline-2 focus-visible:outline-teal-500"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Results ── */}
          {phase === "results" && (
            <div>
              {/* Gauge header */}
              <div
                className="px-11 py-10 text-center"
                style={{
                  background: "linear-gradient(165deg,#080f1e,#102040)",
                }}
              >
                <div className="font-mono text-[11px] tracking-label uppercase text-teal-bright mb-2">
                  Your sample HVI score
                </div>
                <ScoreGauge score={score} displayScore={displayScore} />
              </div>

              {/* Result body */}
              <div className="px-11 py-9 pb-11">
                {/* Risk / strength grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[22px] mb-7">
                  <div className="rounded-[14px] p-[22px]" style={{ background: "rgba(224, 82, 96, 0.14)", border: "1px solid rgba(224, 82, 96, 0.24)" }}>
                    <div className="font-semibold text-sm text-[#e05260] mb-3.5">
                      Top risk areas to address
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {topRisks.map((r) => (
                        <div key={r.dim} className="flex items-center gap-2.5">
                          <span className="w-[7px] h-[7px] rounded-full bg-risk-critical flex-none" aria-hidden="true" />
                          <span className="text-sm text-[#c8d4e5]">{r.dim}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[14px] p-[22px]" style={{ background: "rgba(0, 184, 217, 0.14)", border: "1px solid rgba(0, 184, 217, 0.22)" }}>
                    <div className="font-semibold text-sm text-teal-600 mb-3.5">
                      Your strongest areas
                    </div>
                    <div className="flex flex-col gap-2.5">
                      {strongest.map((r) => (
                        <div key={r.dim} className="flex items-center gap-2.5">
                          <span className="w-[7px] h-[7px] rounded-full bg-teal-500 flex-none" aria-hidden="true" />
                          <span className="text-sm text-[#c8d4e5]">{r.dim}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-surface-subtle border border-surface-border rounded-[14px] p-6 mb-7">
                  <div className="font-semibold text-sm text-slate-700 mb-3.5">
                    Recommended actions — start here
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {recommendations.map((rec) => (
                      <div key={rec} className="flex gap-2.5 items-start">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-teal-600 flex-none mt-0.5"
                          style={{ background: "rgba(0, 184, 217, 0.14)" }}
                          aria-hidden="true"
                        >
                          ✓
                        </span>
                        <span className="text-sm leading-[1.5] text-[#c8d4e5]">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={start}
                    className="inline-flex items-center px-[22px] py-[13px] rounded-[10px] text-sm font-semibold text-teal-650 hover:bg-teal-500 hover:text-white transition-colors"
                    style={{ background: "rgba(0, 184, 217, 0.14)", border: "1px solid rgba(0, 184, 217, 0.22)" }}
                  >
                    Retake assessment
                  </button>
                  <Link
                    href="/contact?i=HVI+for+My+Organization"
                    className="inline-flex items-center px-[22px] py-[13px] rounded-[10px] text-sm font-semibold text-white bg-navy-700 hover:bg-navy-800 transition-colors"
                  >
                    Bring HVI to my organization
                  </Link>
                </div>
                <p className="text-center text-xs text-slate-200 mt-4">
                  This is an illustrative demonstration of the HVI experience.
                  The production model combines additional behavioral, exposure,
                  and control-adoption signals.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
