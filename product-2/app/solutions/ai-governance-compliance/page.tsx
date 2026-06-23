import type { Metadata } from "next";
import Link from "next/link";
import { governanceCapabilities, complianceReadinessAreas } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "AI Governance & Compliance",
  description:
    "AI governance requires evidence, not just policy. CyberPosture helps manage AI governance workflows and maintain evidence for audits, reviews, and compliance readiness.",
};

export default function AiGovernancePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg,#0A2342,#2A2270)" }}>
        <div className="container-content py-[72px] pb-[60px]">
          <div className="font-mono text-[11.5px] tracking-[.12em] uppercase mb-[14px]" style={{ color: "#C4B8FF" }}>
            AI Governance &amp; Compliance
          </div>
          <h1 className="font-display font-semibold text-[44px] leading-[1.08] tracking-tighter text-white mb-[18px] max-w-[760px]">
            AI governance requires evidence, not just policy.
          </h1>
          <p className="text-[17px] leading-[1.6] mb-7 max-w-[700px]" style={{ color: "#C7CCF0" }}>
            CyberPosture helps organizations manage AI governance workflows and maintain evidence
            for reviews, audits, customer requests, and compliance readiness.
          </p>
          <Link
            href="/contact?i=AI+Governance+%26+Compliance+Interest"
            className="inline-flex items-center px-6 py-[14px] rounded-[10px] text-[15px] font-semibold text-[#1A1340] bg-white hover:bg-surface-subtle transition-colors"
          >
            Join Early Access
          </Link>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white">
        <div className="container-content py-[72px]">
          <p className="text-[16px] leading-[1.65] mb-10 max-w-[780px]" style={{ color: "#4F6680" }}>
            Policies are only the beginning. Organizations also need to know which AI use cases
            exist, who owns them, what data is involved, what controls apply, whether human review
            is required, and what evidence supports oversight. CyberPosture connects AI usage,
            governance decisions, review history, and compliance-readiness evidence.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Governance capabilities */}
            <div className="border border-surface-border rounded-[16px] p-[30px]">
              <h3 className="font-display font-semibold text-[20px] text-navy-700 mb-[18px]">
                Governance capabilities
              </h3>
              <div className="flex flex-col gap-3">
                {governanceCapabilities.map((c) => (
                  <div key={c} className="flex items-center gap-[11px]">
                    <span className="font-bold flex-none" style={{ color: "#12A89B" }} aria-hidden="true">
                      ✓
                    </span>
                    <span className="text-[14.5px]" style={{ color: "#33485F" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance readiness */}
            <div className="border border-surface-border rounded-[16px] p-[30px] bg-surface-subtle">
              <h3 className="font-display font-semibold text-[20px] text-navy-700 mb-[18px]">
                Compliance readiness areas
              </h3>
              <div className="flex flex-col gap-3">
                {complianceReadinessAreas.map((c) => (
                  <div key={c} className="flex items-center gap-[11px]">
                    <span
                      className="w-2 h-2 rounded-[2px] flex-none"
                      style={{ background: "#6A5AE0" }}
                      aria-hidden="true"
                    />
                    <span className="text-[14.5px]" style={{ color: "#33485F" }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/ai-risk-governance"
              className="inline-flex items-center px-5 py-3 rounded-[10px] text-[14px] font-semibold text-white bg-navy-700 hover:bg-navy-800 transition-colors"
            >
              See the full platform →
            </Link>
            <Link
              href="/contact?i=AI+Governance+%26+Compliance+Interest"
              className="inline-flex items-center px-5 py-3 rounded-[10px] text-[14px] font-semibold text-navy-700 border border-surface-border hover:bg-surface-subtle transition-colors"
            >
              Request early access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
