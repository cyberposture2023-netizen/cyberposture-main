const aiTechTypes = [
  { t: "Copilots & assistants",      d: "Coding and productivity copilots" },
  { t: "Generative AI & chatbots",   d: "Text, image, and conversational tools" },
  { t: "Embedded AI features",       d: "AI built into everyday SaaS" },
  { t: "AI APIs & integrations",     d: "Models wired into workflows" },
  { t: "Autonomous agents",          d: "AI that takes actions on its own" },
  { t: "Custom & fine-tuned models", d: "Internal and tailored models" },
  { t: "Data & analytics AI",        d: "Decision and analytics systems" },
  { t: "Shadow & unsanctioned AI",   d: "Tools adopted without review" },
];

const points = [
  {
    bold: "When",
    rest: " — continuous, as AI usage and exposure shift, not once a quarter.",
  },
  {
    bold: "Where",
    rest: " — across approved tools, shadow usage, workflows, APIs, and agents.",
  },
  {
    bold: "As it occurs",
    rest: " — understand and act on exposure as it emerges, with evidence captured along the way.",
  },
];

export default function MoreThanCompliance() {
  return (
    <section className="bg-white">
      <div className="container-content py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[.95fr_1.05fr] gap-14 items-center">
          {/* Copy */}
          <div>
            <div className="font-mono text-xs tracking-label uppercase mb-3.5" style={{ color: "#5646C9" }}>
              More than compliance
            </div>
            <h2 className="font-display font-semibold text-[32px] tracking-tighter text-navy-700 mb-4">
              Risk intelligence in the moment — not just a checkbox.
            </h2>
            <p className="text-[16px] leading-[1.6] text-slate-450 mb-4">
              Compliance is a snapshot in time. Real AI risk is continuous — it
              changes every time a new tool is adopted, a workflow connects to a
              model, an agent gains a permission, or sensitive data meets a prompt.
            </p>
            <p className="text-[16px] leading-[1.6] text-slate-450 mb-5">
              CyberPosture helps you understand and mitigate that risk{" "}
              <strong className="text-slate-700">when, where, and as it occurs</strong>{" "}
              — across the full range of AI your organization uses. Meeting frameworks
              and audits becomes a natural result of running AI responsibly day to day.
            </p>
            <div className="flex flex-col gap-3">
              {points.map((pt) => (
                <div key={pt.bold} className="flex gap-3 items-start">
                  <span
                    className="w-[26px] h-[26px] rounded-[7px] font-bold text-[13px] flex items-center justify-center flex-none"
                    style={{ background: "#ECEAFB", color: "#5646C9" }}
                    aria-hidden="true"
                  >
                    ›
                  </span>
                  <div className="text-[15px] leading-[1.55]">
                    <strong className="text-slate-700">{pt.bold}</strong>
                    <span className="text-slate-400">{pt.rest}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI type grid */}
          <div>
            <div className="font-mono text-[11px] tracking-[.1em] uppercase text-slate-250 mb-3.5">
              Across a wide variety of AI
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiTechTypes.map((item) => (
                <div
                  key={item.t}
                  className="bg-surface-subtle border border-surface-border rounded-xl px-[18px] py-4"
                >
                  <div className="font-semibold text-[14.5px] text-slate-700 mb-0.5">{item.t}</div>
                  <div className="text-[12.5px] leading-[1.45]" style={{ color: "#7E8DA3" }}>{item.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
