import type { Metadata } from "next";
import { founders } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "About",
  description:
    "CyberPosture was built to help answer the questions security programs struggle to measure — human vulnerability and enterprise AI risk.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(165deg,#0A2342,#123A6B)" }}>
        <div className="container-content py-[74px] pb-[62px]">
          <h1 className="font-display font-semibold text-[42px] leading-[1.12] tracking-tighter text-white mb-5 max-w-[840px]">
            CyberPosture was built for the risks security programs struggle to measure.
          </h1>
          <p className="text-[16.5px] leading-[1.65] max-w-[760px]" style={{ color: "#B7CCE6" }}>
            Cybersecurity has long focused on systems, networks, infrastructure, and software vulnerabilities. Those remain important — but the risk landscape has expanded.
          </p>
        </div>
      </section>

      {/* Narrative */}
      <section className="bg-white">
        <div className="mx-auto max-w-[880px] px-7 py-16">
          <p className="text-[16px] leading-[1.7] mb-[18px]" style={{ color: "#3D5470" }}>
            People make daily decisions that affect cyber exposure. Organizations are adopting AI
            tools, agents, and workflows faster than governance programs can keep up. Customers,
            auditors, executives, and regulators are asking harder questions about behavior, AI
            usage, accountability, and evidence. CyberPosture was created to help answer those questions.
          </p>
          <p className="text-[16px] leading-[1.7]" style={{ color: "#3D5470" }}>
            CyberPosture is the public brand of Cyber Posture AI Inc. We build focused
            risk-intelligence platforms for human vulnerability and enterprise AI governance —
            grounded in cybersecurity leadership, information-systems expertise, enterprise risk,
            audit readiness, behavioral insight, model development, secure platform architecture,
            and practical experience building security programs in regulated environments.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-surface-subtle border-t border-surface-border">
        <div className="container-content py-16">
          <h2 className="font-display font-semibold text-[28px] tracking-tighter text-navy-700 mb-[30px]">
            Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {founders.map((f) => (
              <div
                key={f.name}
                className="bg-white border border-surface-border rounded-[18px] p-8"
              >
                <div
                  className="w-14 h-14 rounded-[14px] flex items-center justify-center font-display font-bold text-[20px] text-white mb-[18px]"
                  style={{ background: "linear-gradient(135deg,#0E2A4A,#12A89B)" }}
                  aria-hidden="true"
                >
                  {f.initials}
                </div>
                <div className="font-display font-semibold text-[21px] text-navy-700">{f.name}</div>
                <div className="text-[13.5px] font-semibold mt-[3px] mb-4" style={{ color: "#0E7C72" }}>
                  {f.role}
                </div>
                <p className="text-[14px] leading-[1.65]" style={{ color: "#5C7088" }}>
                  {f.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
