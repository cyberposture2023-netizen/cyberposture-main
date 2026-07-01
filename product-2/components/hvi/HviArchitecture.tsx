import { Fragment } from "react";
const steps = [
  {
    num: "01",
    title: "Live Assessment",
    desc: "Behavior, knowledge, scenario, and context inputs.",
  },
  {
    num: "02",
    title: "HVI Score",
    desc: "A 300–850 score with a clear risk tier.",
  },
  {
    num: "03",
    title: "Recommendations",
    desc: "Personalized, prioritized actions.",
  },
  {
    num: "04",
    title: "Continuous Improvement",
    desc: "Track progress and reduce risk over time.",
  },
];

const foundationCells = [
  "Signal & Evidence Ingestion",
  "Identity & Context",
  "Risk Intelligence Engine",
  "AI Reasoning Layer",
  "Governance & Review",
  "Reporting & Evidence",
];

export default function HviArchitecture() {
  return (
    <section className="bg-card">
      <div className="container-content py-[72px]">
        <div className="font-mono text-xs tracking-label uppercase text-teal-650 mb-3.5">
          Platform architecture
        </div>
        <h2 className="font-display font-semibold text-[32px] tracking-tighter text-navy-700 mb-3">
          How the HVI platform works.
        </h2>
        <p className="text-[16px] leading-[1.55] text-slate-400 mb-8 max-w-[720px]">
         A continuous loop—from assessment to score to action—running on a shared, privacy-first and security-first platform foundation.
        </p>

        <div className="border border-surface-border rounded-[20px] p-7 bg-card">
          {/* Step flow */}

          <div className="flex flex-col md:flex-row items-stretch w-fit max-w-full mx-auto gap-2 md:gap-0">
            {steps.map((step, i) => (
              <Fragment key={step.num}>
                {/* Step Card */}
                <div
                  className="flex-1 bg-card border border-surface-border rounded-[13px] p-5 min-w-[200px]"
                  style={{ borderTop: "3px solid #00b8d9" }}
                >
                  <div className="font-mono text-xs text-teal-500 mb-2">
                    {step.num}
                  </div>
                  <div className="font-display font-semibold text-[16px] text-slate-700 mb-1.5">
                    {step.title}
                  </div>
                  <div className="text-[12.5px] leading-[1.5] text-slate-400">
                    {step.desc}
                  </div>
                </div>

                {/* Arrow Divider */}
                {i < steps.length - 1 && (
                  <div
                    className="flex items-center justify-center text-[18px] text-slate-200 py-2 md:py-0 md:px-2"
                    aria-hidden="true"
                  >
                    {/* Right arrow for desktop, Down arrow for mobile */}
                    <span className="hidden md:block">→</span>
                    <span className="block md:hidden">↓</span>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Connector */}
          <div
            className="text-center text-[18px] text-slate-200 py-2.5"
            aria-hidden="true"
          >
            ↓
          </div>

          {/* Shared foundation */}
          <div className="bg-navy-800 rounded-[14px] p-[22px]">
            <div
              className="font-mono text-[11px] tracking-[.1em] uppercase text-center mb-4"
              style={{ color: "#a7b8d0" }}
            >
              Shared CyberPosture platform foundation
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-3">
              {foundationCells.map((cell) => (
                <div
                  key={cell}
                  className="rounded-[9px] px-2 py-3 text-center text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    color: "#e8edf5",
                  }}
                >
                  {cell}
                </div>
              ))}
            </div>
          </div>

          {/* Security base */}
          <div
            className="mt-2.5 rounded-[12px] px-[18px] py-3.5 text-center"
            style={{ background: "#1a65b8" }}
          >
            <div className="font-mono text-[11px] tracking-[.08em] uppercase text-white">
              Security, Privacy &amp; Governance — built into every layer
            </div>
            <div className="text-xs mt-1.5" style={{ color: "#a7b8d0" }}>
              Role-based access · Encryption · Data minimization · Consent ·
              Retention · Audit logs · Privacy by design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
