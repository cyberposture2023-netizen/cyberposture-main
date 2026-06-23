import { Fragment } from "react";
const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Find AI usage across tools, workflows, and agents.",
  },
  {
    num: "02",
    title: "Assess",
    desc: "Evaluate exposure across data, permissions, and context.",
  },
  {
    num: "03",
    title: "Govern",
    desc: "Manage reviews, approvals, and human oversight.",
  },
  {
    num: "04",
    title: "Evidence",
    desc: "Maintain records for audits and compliance.",
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

export default function AiArchitecture() {
  return (
    <section className="bg-surface-subtle border-y border-surface-border">
      <div className="container-content py-20">
        <div
          className="font-mono text-xs tracking-label uppercase mb-3"
          style={{ color: "#5646C9" }}
        >
          Platform architecture
        </div>
        <h2 className="font-display font-semibold text-[30px] tracking-tighter text-navy-700 mb-3">
          Discover. Assess. Govern. Evidence.
        </h2>
        <p className="text-[16px] leading-[1.55] text-slate-400 mb-8 max-w-[720px]">
          Four capabilities working as one workflow — on a shared,
          security-first platform foundation.
        </p>

        <div className="border border-surface-border rounded-[20px] p-7 bg-white">
          {/* Step flow */}
          <div className="flex flex-col md:flex-row items-stretch w-fit max-w-full mx-auto gap-2 md:gap-0">
      {steps.map((step, i) => (
        <Fragment key={step.num}>
          {/* Step Card */}
          <div
            className="flex-1 bg-white border border-surface-border rounded-[13px] p-5 min-w-[200px]"
            style={{ borderTop: "3px solid #6A5AE0" }}
          >
            <div
              className="font-mono text-xs mb-2"
              style={{ color: "#5646C9" }}
            >
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
              className="flex items-center justify-center text-[18px] py-2 md:py-0 md:px-2"
              style={{ color: "#B6AEEA" }}
              aria-hidden="true"
            >
              {/* Desktop gets a right arrow, Mobile gets a down arrow */}
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

          {/* Foundation */}
          <div
            className="rounded-[14px] p-[22px]"
            style={{ background: "#1A1340" }}
          >
            <div
              className="font-mono text-[11px] tracking-[.1em] uppercase text-center mb-4"
              style={{ color: "#B6AEEA" }}
            >
              Shared CyberPosture platform foundation
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {foundationCells.map((cell) => (
                <div
                  key={cell}
                  className="rounded-[9px] px-2 py-3 text-center text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,.06)",
                    color: "#E6E2F8",
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
            style={{ background: "#3A2E8C" }}
          >
            <div className="font-mono text-[11px] tracking-[.08em] uppercase text-white">
              Security, Privacy &amp; Governance — built into every layer
            </div>
            <div className="text-xs mt-1.5" style={{ color: "#D6D0F2" }}>
              Role-based access · Encryption · Data minimization · Consent ·
              Retention · Audit logs · Privacy by design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
