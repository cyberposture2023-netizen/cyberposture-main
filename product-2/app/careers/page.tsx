import type { Metadata } from "next";
import Link from "next/link";
import { careerRoles } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join CyberPosture and build focused platforms for two of the most important risk domains in cybersecurity: human vulnerability and enterprise AI.",
};

const roleAccent: Record<string, { accent: string; bg: string }> = {
  "security-architect":       { accent: "#12A89B", bg: "#E6F6F4" },
  "security-analyst-intern":  { accent: "#2D6FB8", bg: "#EAF1FB" },
  "security-program-manager": { accent: "#5646C9", bg: "#ECEAFB" },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(165deg,#0A2342,#0E5A6E)" }}>
        <div className="container-content py-[74px] pb-[62px]">
          <div className="font-mono text-[11.5px] tracking-[.12em] uppercase text-teal-bright mb-[14px]">
            Careers
          </div>
          <h1 className="font-display font-semibold text-[42px] leading-[1.1] tracking-tighter text-white mb-[18px] max-w-[780px]">
            Build the future of human and AI risk intelligence.
          </h1>
          <p className="text-[17px] leading-[1.6] mb-7 max-w-[640px]" style={{ color: "#C5D6EC" }}>
            CyberPosture is building focused platforms for two of cybersecurity's most important risk domains: people and AI.
          </p>
          <Link
            href="/contact?i=Careers+Inquiry"
            className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold text-navy-900 bg-teal-500 hover:bg-teal-600 transition-colors"
          >
            Get in Touch About Roles
          </Link>
        </div>
      </section>

      {/* Roles */}
      <section className="bg-white">
        <div className="container-content py-16">
          <p className="text-[16px] leading-[1.7] mb-11 max-w-[780px]" style={{ color: "#3D5470" }}>
            We build products that help people and organizations measure human cyber vulnerability,
            understand enterprise AI exposure, and manage risk with evidence. CyberPosture is a good
            fit for people interested in cybersecurity, AI, data systems, product engineering, risk
            models, privacy-first design, governance workflows, and practical security outcomes.
          </p>
          <div className="flex items-baseline justify-between flex-wrap gap-2.5 mb-6">
            <h2 className="font-display font-semibold text-[26px] tracking-tighter text-navy-700">
              Open roles
            </h2>
            <span className="font-mono text-[12px]" style={{ color: "#8295AC" }}>
              {careerRoles.length} positions
            </span>
          </div>

          <div className="flex flex-col gap-[18px]">
            {careerRoles.map((r) => {
              const { accent, bg } = roleAccent[r.id] ?? { accent: "#12A89B", bg: "#E6F6F4" };
              return (
                <div
                  key={r.id}
                  className="bg-white border border-surface-border rounded-[16px] p-[30px]"
                  style={{ borderLeft: `4px solid ${accent}` }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-7">
                    {/* Left */}
                    <div>
                      <div
                        className="font-mono text-[11px] tracking-[.08em] uppercase mb-2"
                        style={{ color: accent }}
                      >
                        {r.category}
                      </div>
                      <h3 className="font-display font-semibold text-[24px] text-navy-700 mb-3">
                        {r.title}
                      </h3>
                      <p className="text-[14.5px] leading-[1.65] mb-[18px]" style={{ color: "#4F6680" }}>
                        {r.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {r.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[11.5px] font-medium rounded-full px-3 py-1 border border-surface-border bg-surface-subtle"
                            style={{ color: "#5C7088" }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact?i=Careers+Inquiry"
                        className="inline-flex items-center px-[22px] py-3 rounded-[10px] text-[14px] font-semibold text-white transition-colors hover:opacity-90"
                        style={{ background: accent }}
                      >
                        Apply for this role
                      </Link>
                    </div>

                    {/* Right — focus list */}
                    <div className="rounded-[14px] px-6 py-6" style={{ background: bg }}>
                      <div
                        className="font-mono text-[11px] tracking-[.06em] uppercase mb-[14px]"
                        style={{ color: accent }}
                      >
                        What you'll do
                      </div>
                      <div className="flex flex-col gap-[11px]">
                        {r.responsibilities.map((f) => (
                          <div key={f} className="flex gap-2.5 items-start">
                            <span
                              className="font-bold flex-none leading-[1.4]"
                              style={{ color: accent }}
                              aria-hidden="true"
                            >
                              ›
                            </span>
                            <span className="text-[13.5px] leading-[1.45]" style={{ color: "#33485F" }}>
                              {f}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* General inquiry */}
          <div className="mt-[34px] bg-surface-subtle border border-surface-border rounded-[14px] px-6 py-6 flex items-center justify-between flex-wrap gap-[14px]">
            <span className="text-[15px]" style={{ color: "#3D5470" }}>
              Don't see your role? We're always interested in talented people.
            </span>
            <Link
              href="/contact?i=Careers+Inquiry"
              className="inline-flex items-center px-5 py-3 rounded-[10px] text-[14px] font-semibold text-white bg-navy-700 hover:bg-navy-800 transition-colors flex-none"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
