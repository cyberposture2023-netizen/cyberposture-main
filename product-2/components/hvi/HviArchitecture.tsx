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
    <section className="bg-[#DCE8F3]">
      <div className="container-content py-[72px]">
        <div className="font-mono text-xs tracking-label uppercase text-teal-700 mb-3.5">
          Platform architecture
        </div>

        <h2 className="font-display font-semibold text-[32px] tracking-tighter text-[#102A43] mb-3">
          How the HVI platform works.
        </h2>

        <p className="text-[16px] leading-[1.55] text-[#526579] mb-8 max-w-[720px]">
          A continuous loop — from assessment to score to action — running on a
          shared, privacy-first, security-first platform foundation.
        </p>

        <div className="border border-[#C4D3E3] rounded-[20px] p-7 bg-[#E8F0F8] shadow-sm">
          {/* Step Flow */}
          <div className="flex flex-col md:flex-row items-stretch w-fit max-w-full mx-auto gap-2 md:gap-0">
            {steps.map((step, i) => (
              <Fragment key={step.num}>
                <div
                  className="flex-1 bg-[#F2F7FC] border border-[#C4D3E3] rounded-[13px] p-5 min-w-[200px]"
                  style={{
                    borderTop: "3px solid #12A89B",
                  }}
                >
                  <div className="font-mono text-xs text-teal-600 mb-2">
                    {step.num}
                  </div>

                  <div className="font-display font-semibold text-[16px] text-[#102A43] mb-1.5">
                    {step.title}
                  </div>

                  <div className="text-[12.5px] leading-[1.5] text-[#526579]">
                    {step.desc}
                  </div>
                </div>

                {i < steps.length - 1 && (
                  <div
                    className="flex items-center justify-center text-[18px] text-[#71869D] py-2 md:py-0 md:px-2"
                    aria-hidden="true"
                  >
                    <span className="hidden md:block">→</span>
                    <span className="block md:hidden">↓</span>
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          {/* Connector */}
          <div
            className="text-center text-[18px] text-[#71869D] py-2.5"
            aria-hidden="true"
          >
            ↓
          </div>

          {/* Shared Foundation */}
          <div className="bg-[#07253F] rounded-[14px] p-[22px]">
            <div
              className="font-mono text-[11px] tracking-[.1em] uppercase text-center mb-4"
              style={{ color: "#BFD2E8" }}
            >
              Shared CyberPosture Platform Foundation
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {foundationCells.map((cell) => (
                <div
                  key={cell}
                  className="rounded-[9px] px-2 py-3 text-center text-xs font-medium"
                  style={{
                    background: "rgba(255,255,255,.08)",
                    color: "#F4F8FC",
                  }}
                >
                  {cell}
                </div>
              ))}
            </div>
          </div>

          {/* Security Layer */}
          <div
            className="mt-2.5 rounded-[12px] px-[18px] py-3.5 text-center"
            style={{
              background: "#0A3357",
            }}
          >
            <div className="font-mono text-[11px] tracking-[.08em] uppercase text-white">
              Security, Privacy & Governance — Built Into Every Layer
            </div>

            <div
              className="text-xs mt-1.5"
              style={{
                color: "#CFE4F8",
              }}
            >
              Role-based access · Encryption · Data minimization · Consent ·
              Retention · Audit logs · Privacy by design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

