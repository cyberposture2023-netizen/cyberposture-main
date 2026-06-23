"use client";

import { useState } from "react";
import Link from "next/link";
import {
  simScenarios,
  simResultMessage,
  simVerdictFor,
  type SimAction,
} from "@/lib/content/threatSim";

type Phase = "intro" | "active" | "done";

const emailActions: { key: SimAction; label: string }[] = [
  { key: "trust",   label: "Trust & open" },
  { key: "inspect", label: "Inspect / verify sender" },
  { key: "delete",  label: "Delete / report" },
];
const smsActions: { key: SimAction; label: string }[] = [
  { key: "trust",   label: "Tap the link" },
  { key: "inspect", label: "Inspect / verify sender" },
  { key: "delete",  label: "Delete & ignore" },
];

export default function ThreatSimulation() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<SimAction[]>([]);
  const [revealed, setRevealed] = useState(false);

  function start() {
    setPhase("active");
    setIndex(0);
    setChoices([]);
    setRevealed(false);
  }

  function choose(action: SimAction) {
    if (revealed) return;
    setChoices((prev) => [...prev, action]);
    setRevealed(true);
  }

  function next() {
    const nextIdx = index + 1;
    if (nextIdx >= simScenarios.length) {
      setPhase("done");
    } else {
      setIndex(nextIdx);
      setRevealed(false);
    }
  }

  const scenario = simScenarios[index];
  const currentChoice = choices[index];
  const verdict = revealed && currentChoice ? simVerdictFor(currentChoice, scenario.best) : null;
  const spotted = choices.filter((c) => c !== "trust").length;
  const actions = scenario?.channel === "SMS" ? smsActions : emailActions;

  const verdictBg  = verdict?.safe ? "#EAF8F5" : "#FCF1EF";
  const verdictBd  = verdict?.safe ? "#CDEDE8" : "#F5D9D4";
  const verdictClr = verdict?.safe ? "#0E8C81" : "#C0392B";

  return (
    <section className="bg-navy-800 text-white">
      <div className="container-content py-16">
        <div className="text-center mb-7">
          <div className="font-mono text-[11.5px] tracking-label uppercase text-teal-bright mb-3">
            Live threat simulation
          </div>
          <h2 className="font-display font-semibold text-[32px] tracking-tighter text-white mx-auto mb-2.5 max-w-[600px]">
            Would you spot the threat?
          </h2>
          <p className="text-[16px] leading-[1.55] mx-auto max-w-[520px]" style={{ color: "#A9C0DD" }}>
            Most attacks don't start with malware. They start with a decision.
            Work through three real-world messages.
          </p>
        </div>

        <div
          className="mx-auto max-w-[920px] rounded-[20px] overflow-hidden"
          style={{ background: "#0E2C4F", border: "1px solid rgba(255,255,255,.1)" }}
        >
          {/* ── Intro ── */}
          {phase === "intro" && (
            <div className="px-10 py-12 text-center">
              <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-label uppercase text-teal-bright mb-4">
                <span className="w-[7px] h-[7px] rounded-full bg-teal-500" aria-hidden="true" />
                3 scenarios · ~1 minute
              </div>
              <h3 className="font-display font-semibold text-[22px] text-white mb-2">
                Three messages. One question each.
              </h3>
              <p className="text-[14.5px] leading-[1.6] mx-auto mb-6 max-w-[440px]" style={{ color: "#A9C0DD" }}>
                For each one, decide how you'd respond. We'll show you the red flags after every choice.
              </p>
              <button
                onClick={start}
                className="inline-flex items-center px-7 py-3.5 rounded-[10px] text-[15px] font-semibold text-navy-900 bg-teal-500 hover:bg-teal-600 transition-colors"
              >
                Start simulation
              </button>
            </div>
          )}

          {/* ── Active scenario ── */}
          {phase === "active" && (
            <div className="px-9 py-7 pb-9">
              {/* Progress + channel */}
              <div className="flex items-center justify-between mb-[18px]">
                <span className="font-mono text-xs" style={{ color: "#7FB0E0" }}>
                  SCENARIO {index + 1} / {simScenarios.length}
                </span>
                <span
                  className="text-[11.5px] font-semibold rounded-[6px] px-2.5 py-1"
                  style={{
                    color: "#7FE3D7",
                    background: "rgba(18,168,155,.14)",
                    border: "1px solid rgba(18,168,155,.3)",
                  }}
                >
                  {scenario.channel}
                </span>
              </div>

              {/* Message card */}
              <div className="bg-white rounded-[14px] p-[22px] text-slate-700">
                <div className="flex items-center gap-3 border-b border-[#EEF2F8] pb-3.5 mb-3.5">
                  <div
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-display font-semibold text-[17px] text-white flex-none"
                    style={{ background: "#0E2A4A" }}
                    aria-hidden="true"
                  >
                    {scenario.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-[14.5px] text-slate-700">{scenario.name}</div>
                    <div className="font-mono text-xs text-slate-250 overflow-hidden text-ellipsis whitespace-nowrap">
                      {scenario.from}
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-[16px] text-navy-700 mb-2">{scenario.subject}</div>
                <div className="text-[14.5px] leading-[1.6] text-slate-500">{scenario.body}</div>
              </div>

              {/* Reveal panel */}
              {revealed && verdict && (
                <div
                  className="mt-[18px] rounded-xl p-5"
                  style={{ background: verdictBg, border: `1px solid ${verdictBd}` }}
                >
                  <div className="font-bold text-[15px] mb-2.5" style={{ color: verdictClr }}>
                    {verdict.text}
                  </div>
                  <div className="text-xs font-semibold tracking-[.04em] uppercase text-slate-250 mb-2">
                    Red flags
                  </div>
                  <div className="flex flex-col gap-[7px] mb-3">
                    {scenario.redFlags.map((f) => (
                      <div key={f} className="flex gap-2.5 items-start">
                        <span className="font-bold text-risk-critical flex-none" aria-hidden="true">!</span>
                        <span className="text-[13.5px] leading-[1.45] text-slate-500">{f}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[13.5px] leading-[1.6] text-slate-450">{scenario.why}</p>
                  <div className="mt-4 text-right">
                    <button
                      onClick={next}
                      className="inline-flex items-center px-[22px] py-[11px] rounded-[9px] text-sm font-semibold text-navy-900 bg-teal-500 hover:bg-teal-600 transition-colors"
                    >
                      {index < simScenarios.length - 1 ? "Next scenario →" : "See results →"}
                    </button>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              {!revealed && (
                <div className="mt-[18px] grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {actions.map((action) => (
                    <button
                      key={action.key}
                      onClick={() => choose(action.key)}
                      className="font-sans text-sm font-semibold text-white py-[15px] px-3 rounded-[11px] transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-500"
                      style={{
                        background: "rgba(255,255,255,.07)",
                        border: "1.5px solid rgba(255,255,255,.18)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#12A89B";
                        e.currentTarget.style.background = "rgba(18,168,155,.16)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,.18)";
                        e.currentTarget.style.background = "rgba(255,255,255,.07)";
                      }}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Done ── */}
          {phase === "done" && (
            <div className="px-10 py-12 text-center">
              <div className="font-mono text-[11.5px] tracking-label uppercase text-teal-bright mb-3.5">
                Simulation complete
              </div>
              <div className="font-display font-bold text-[54px] text-white leading-none">
                {spotted}
                <span className="text-[28px]" style={{ color: "#7E96B6" }}> / 3</span>
              </div>
              <p className="text-[15px] mx-auto mt-2 mb-6 max-w-[460px]" style={{ color: "#A9C0DD" }}>
                {simResultMessage(spotted)}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={start}
                  className="inline-flex items-center px-[22px] py-3 rounded-[10px] text-sm font-semibold text-white transition-colors"
                  style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.25)" }}
                >
                  Try again
                </button>
                <Link
                  href="/hvi#assessment"
                  className="inline-flex items-center px-[22px] py-3 rounded-[10px] text-sm font-semibold text-navy-900 bg-teal-500 hover:bg-teal-600 transition-colors"
                >
                  Take the full HVI Assessment
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
