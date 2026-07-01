import Link from "next/link";

const sciencePoints = [
  "300–850 score",
  "Multi-signal risk model",
  "Inherent & residual risk",
  "Behavioral signals",
  "Control-adoption signals",
  "Time-based tracking",
  "Recommendation engine",
  "Privacy-first design",
];

const privacyPoints = [
  "Consent-aware",
  "Data minimization",
  "Pseudonymized data",
  "Role-based access",
  "Human review",
  "Responsible use",
  "Evidence & auditability",
];

export default function SciencePrivacy() {
  return (
    <section className="bg-card">
      <div className="container-content py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Science card */}
          <div className="border border-surface-border rounded-[18px] p-8">
            <h3 className="font-display font-semibold text-[22px] text-navy-700 mb-3">
              A score built on structured signals.
            </h3>
            <p className="text-[14.5px] leading-[1.6] text-slate-400 mb-4">
              HVI combines assessment responses with behavioral, exposure, and
              control-adoption signals — designed to update as new signals
              become available, and to explain the reasons behind the score in
              plain language.
            </p>
            <div className="flex flex-wrap gap-2">
              {sciencePoints.map((p) => (
                <span
                  key={p}
                  className="text-xs rounded-full px-[11px] py-[5px]"
                  style={{
                    color: "#00b8d9",
                    background: "rgba(0, 184, 217, 0.14)",
                    border: "1px solid rgba(0, 184, 217, 0.22)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Privacy card */}
          <div className="border border-surface-border rounded-[18px] p-8 bg-surface-subtle">
            <h3 className="font-display font-semibold text-[22px] text-navy-700 mb-3">
              Built for trust from the beginning.
            </h3>
            <p className="text-[14.5px] leading-[1.6] text-slate-400 mb-4">
              HVI is designed around privacy, consent, data minimization, and
              clear boundaries on how human-risk information is used. It should
              help people improve resilience — not unfairly penalize individuals
              or drive fully automated decisions without human review.
            </p>
            <div className="flex flex-wrap gap-2">
              {privacyPoints.map((p) => (
                <span
                  key={p}
                  className="text-xs rounded-full px-[11px] py-[5px]"
                  style={{
                    color: "#c8d4e5",
                    background: "#e8edf5",
                    border: "1px solid rgba(0, 184, 217, 0.18)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Methodology CTA banner */}
        <div
          className="rounded-[18px] p-[34px] flex items-center justify-between flex-wrap gap-5"
          style={{ background: "linear-gradient(120deg,#0d1a30,#102040)" }}
        >
          <div>
            <h3 className="font-display font-semibold text-[22px] text-white mb-1.5">
              Want to understand how HVI works?
            </h3>
            <p className="text-[14.5px] max-w-[560px]" style={{ color: "#a7b8d0" }}>
              A structured methodology explains the risk dimensions, scoring
              model, privacy principles, and responsible-use guidelines behind
              the Human Vulnerability Index.
            </p>
          </div>
          <Link
            href="/contact?i=General+Inquiry"
            className="inline-flex items-center flex-none px-[22px] py-[13px] rounded-[10px] text-sm font-semibold text-primary-foreground bg-primary hover:bg-teal-50 transition-colors"
          >
            Read the HVI Methodology
          </Link>
        </div>
      </div>
    </section>
  );
}
