import Link from "next/link";

const frameworks = [
  "NIST AI RMF",
  "ISO 42001",
  "EU AI Act readiness",
  "SOC 2 AI-related evidence",
  "Internal AI policies",
  "Customer AI due diligence",
  "Audit preparation",
  "Risk & compliance reporting",
];

export default function FrameworkReadiness() {
  return (
    <section className="bg-navy-800 text-white">
      <div className="container-content py-[78px]">
        <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-12 items-center">
          {/* Copy */}
          <div>
            <h2 className="font-display font-semibold text-[30px] tracking-tighter text-white mb-3.5">
              Compliance, as an outcome of good practice.
            </h2>
            <p className="text-[15.5px] leading-[1.6] mb-3.5" style={{ color: "#B7CCE6" }}>
              When you understand and mitigate AI risk continuously, the evidence
              for reviews, audits, and customer requests builds itself.
              CyberPosture is designed to organize that evidence and align it with
              emerging AI governance and compliance expectations.
            </p>
            <p className="text-[13.5px] leading-[1.6]" style={{ color: "#7E96B6" }}>
              CyberPosture does not replace legal, audit, or compliance judgment. It
              helps teams maintain the structure, evidence, and review history needed
              to support governance and compliance-readiness processes.
            </p>
          </div>

          {/* Framework grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {frameworks.map((f) => (
              <div
                key={f}
                className="rounded-xl px-4 py-4 text-[13.5px] font-medium"
                style={{
                  background: "rgba(255,255,255,.05)",
                  border: "1px solid rgba(255,255,255,.1)",
                  color: "#D6E2F2",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
