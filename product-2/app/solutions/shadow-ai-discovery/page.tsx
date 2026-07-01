import type { Metadata } from "next";
import Link from "next/link";
import { shadowAIFinds } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "Shadow AI Discovery",
  description:
    "Find the AI usage you cannot govern today. CyberPosture identifies unapproved tools, unmanaged AI workflows, and risky permissions before they become incidents.",
};

export default function ShadowAIPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(160deg,#080f1e,#0d1a30)" }}>
        <div className="container-content py-[72px] pb-[60px]">
          <div className="font-mono text-[11.5px] tracking-[.12em] uppercase mb-[14px]" style={{ color: "#8bdfff" }}>
            Shadow AI Discovery
          </div>
          <h1 className="font-display font-semibold text-[44px] leading-[1.08] tracking-tighter text-white mb-[18px] max-w-[760px]">
            Find the AI usage you cannot govern today.
          </h1>
          <p className="text-[17px] leading-[1.6] mb-7 max-w-[700px]" style={{ color: "#a7b8d0" }}>
            CyberPosture helps organizations identify unapproved AI tools, unmanaged AI usage,
            risky permissions, and AI workflows operating outside approved governance.
          </p>
          <Link
            href="/contact?i=Shadow+AI+Assessment+Interest"
            className="inline-flex items-center px-6 py-[14px] rounded-[10px] text-[15px] font-semibold text-primary-foreground bg-primary hover:bg-surface-subtle transition-colors"
          >
            Join Early Access
          </Link>
        </div>
      </section>

      {/* Body */}
      <section className="bg-card">
        <div className="container-content py-[72px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Copy */}
            <div>
              <h2 className="font-display font-semibold text-[28px] tracking-tighter text-navy-700 mb-4">
                The first visible symptom of a larger problem.
              </h2>
              <p className="text-[15.5px] leading-[1.65] mb-[14px]" style={{ color: "#8fa2bd" }}>
                Employees and teams often use AI tools before security, risk, legal, or compliance
                teams have reviewed them. These tools may process sensitive data, create
                customer-facing outputs, or become part of business workflows without appropriate
                oversight.
              </p>
              <p className="text-[15.5px] leading-[1.65] font-semibold" style={{ color: "#e8edf5" }}>
                CyberPosture helps organizations move from unknown AI usage to governed AI usage.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/ai-risk-governance"
                  className="inline-flex items-center px-5 py-3 rounded-[10px] text-[14px] font-semibold text-white bg-navy-700 hover:bg-navy-800 transition-colors"
                >
                  See the full platform →
                </Link>
                <Link
                  href="/contact?i=Shadow+AI+Assessment+Interest"
                  className="inline-flex items-center px-5 py-3 rounded-[10px] text-[14px] font-semibold text-navy-700 border border-surface-border hover:bg-surface-subtle transition-colors"
                >
                  Request early access
                </Link>
              </div>
            </div>

            {/* Finds card */}
            <div className="bg-surface-subtle border border-surface-border rounded-[16px] p-[30px]">
              <div className="font-semibold text-[14px] text-navy-700 mb-[18px]">
                What Shadow AI Discovery helps find
              </div>
              <div className="flex flex-col gap-[13px]">
                {shadowAIFinds.map((f) => (
                  <div key={f} className="flex items-center gap-[11px]">
                    <span
                      className="w-2 h-2 rounded-[2px] flex-none"
                      style={{ background: "#1a65b8" }}
                      aria-hidden="true"
                    />
                    <span className="text-[14.5px]" style={{ color: "#c8d4e5" }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-surface-subtle border-t border-surface-border">
        <div className="container-content py-14 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <div className="font-display font-semibold text-[20px] text-navy-700 mb-1">
              Ready to see what's in your environment?
            </div>
            <div className="text-[14.5px]" style={{ color: "#8fa2bd" }}>
              Shadow AI Discovery is part of the AI Risk &amp; Governance platform — currently in early access.
            </div>
          </div>
          <Link
            href="/contact?i=Shadow+AI+Assessment+Interest"
            className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold text-white whitespace-nowrap flex-none"
            style={{ background: "#00b8d9" }}
          >
            Join Early Access
          </Link>
        </div>
      </section>
    </>
  );
}
