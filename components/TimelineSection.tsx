
"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    phase: "Months 1–2",
    title: "Baseline Mapping",
    description:
      "The platform begins passively mapping organizational risk through directory privileges, telemetry signals, and behavioral indicators without disrupting employee workflows.",
    outcomes: [
      "Privilege exposure identified",
      "Department risk baselines established",
      "Hidden organizational blind spots revealed",
    ],
  },
  {
    phase: "Months 3–4",
    title: "Contextual Nudging",
    description:
      "Human Vulnerability Intelligence identifies elevated risk conditions and deploys targeted interventions to the right teams at the right moment.",
    outcomes: [
      "Department-specific micro nudges",
      "Reduced behavioral security slips",
      "Improved security decision making",
    ],
  },
  {
    phase: "Months 5–6+",
    title: "Predictive Defense",
    description:
      "Security telemetry, human risk indicators, and automated response workflows operate together to proactively reduce organizational exposure.",
    outcomes: [
      "Automated threat prioritization",
      "Conditional access protections",
      "Continuous risk reduction",
    ],
  },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative overflow-hidden border-y border-tertiary/30 bg-[#050706] px-6 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(231,193,133,0.14),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(177,204,197,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Continuous Risk Reduction
          </p>

          <h2 className="mt-5 max-w-5xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
            From Visibility To Resilience
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Human risk is not solved through a single assessment.
            It is continuously measured, refined, and reduced through
            contextual intervention and operational visibility.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-tertiary/40 to-transparent" />

          <div className="grid grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <div key={item.phase} className="relative">
                <div className="absolute left-0 top-8 z-10 h-5 w-5 rounded-full border-2 border-tertiary bg-[#050706]" />

                <div className="pt-16">
                  <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-8 backdrop-blur-xl">
                    <span className="rounded-full border border-tertiary/30 bg-tertiary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-tertiary">
                      {item.phase}
                    </span>

                    <h3 className="mt-5 text-3xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/65">
                      {item.description}
                    </p>

                    <div className="mt-6 space-y-3">
                      {item.outcomes.map((outcome) => (
                        <div
                          key={outcome}
                          className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-3"
                        >
                          <span className="text-tertiary">✓</span>

                          <span className="text-sm text-white/70">
                            {outcome}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="mt-16 space-y-8 lg:hidden">
          {timeline.map((item) => (
            <div
              key={item.phase}
              className="rounded-3xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-xl"
            >
              <span className="rounded-full border border-tertiary/30 bg-tertiary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-tertiary">
                {item.phase}
              </span>

              <h3 className="mt-5 text-3xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {item.description}
              </p>

              <div className="mt-6 space-y-3">
                {item.outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex gap-3 rounded-xl border border-white/10 bg-black/20 p-3"
                  >
                    <span className="text-tertiary">✓</span>

                    <span className="text-sm text-white/70">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 rounded-3xl border border-tertiary/30 bg-tertiary/10 p-8 text-center md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Outcome
          </p>

          <h3 className="mt-4 font-display text-4xl text-white md:text-5xl">
            Build A More Resilient Human Perimeter
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Move from reactive awareness programs to continuous visibility,
            contextual intervention, and measurable risk reduction across
            your organization.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#assessment"
              className="btn-gold inline-flex rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-[0.08em]"
            >
              Calculate HVI Score
            </a>

            <a
              href="#enterprise"
              className="btn-ghost-gold inline-flex rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-[0.08em]"
            >
              Explore Enterprise HVI
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
