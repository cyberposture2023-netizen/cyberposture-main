
"use client";

import { motion } from "framer-motion";

const evidenceStats = [
  {
    value: "74%",
    title: "Human Element",
    description:
      "A significant share of modern breaches involve human actions such as social engineering, credential compromise, misuse, or error.",
    source: "Verizon DBIR",
  },
  {
    value: "95%",
    title: "Human Error",
    description:
      "Security incidents frequently originate from mistakes, fatigue, poor decisions, or process breakdowns rather than technical failures.",
    source: "World Economic Forum",
  },
  {
    value: "$M",
    title: "Business Impact",
    description:
      "Credential compromise, insider mistakes, and social engineering events routinely become some of the costliest incident categories.",
    source: "Mimecast Human Risk Research",
  },
];

const evidencePoints = [
  {
    title: "Human Risk Is Measurable",
    description:
      "Technical controls alone cannot explain organizational exposure. Human decisions, stress, behavior patterns, and access privileges create measurable attack opportunities.",
  },
  {
    title: "Static Training Fails",
    description:
      "Annual awareness programs create compliance records, but often fail to provide real-time visibility into evolving employee risk conditions.",
  },
  {
    title: "Context Changes Outcomes",
    description:
      "The same employee may behave differently under fatigue, urgency, authority pressure, or operational stress.",
  },
];

const telemetrySignals = [
  "Directory privilege mapping",
  "Behavioral activity shifts",
  "Off-hours activity indicators",
  "Shadow tool adoption",
  "Email security events",
  "DLP security triggers",
  "EDR detections",
  "Policy bypass indicators",
];

export default function EvidenceSection() {
  return (
    <section
      id="evidence"
      className="relative overflow-hidden border-y border-tertiary/30 bg-[#050706] px-6 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(231,193,133,0.12),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(177,204,197,0.08),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Research & Evidence
          </p>

          <h2 className="mt-5 max-w-5xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
            Built Around Proven Human Risk Patterns
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Human Vulnerability Intelligence is designed around observed
            industry-wide attack patterns, behavioral security research,
            and real-world breach trends.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {evidenceStats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl border border-tertiary/20 bg-tertiary/10 p-8"
            >
              <div className="font-display text-7xl leading-none text-tertiary">
                {stat.value}
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-white">
                {stat.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {stat.description}
              </p>

              <div className="mt-5">
                <span className="rounded-full border border-tertiary/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-tertiary">
                  {stat.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Why This Matters */}
        <div className="mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Why Human Vulnerability Matters
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {evidencePoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Telemetry Signals */}
        <div className="mt-20 rounded-3xl border border-white/12 bg-white/[0.05] p-8 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Technical Proxies
              </p>

              <h3 className="mt-3 text-4xl font-semibold text-white">
                Signals Behind Human Risk
              </h3>
            </div>

            <div className="rounded-xl border border-tertiary/30 bg-tertiary/10 px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-tertiary">
                Passive Observation
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {telemetrySignals.map((signal) => (
              <div
                key={signal}
                className="rounded-xl border border-white/10 bg-black/20 p-4"
              >
                <p className="text-sm text-white/80">
                  {signal}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Positioning */}
        <div className="mt-20 rounded-3xl border border-primary/20 bg-primary-container/10 p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Methodology
          </p>

          <h3 className="mt-4 text-4xl font-semibold text-white">
            From Awareness To Measurement
          </h3>

          <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
            Traditional security programs focus on awareness. Human
            Vulnerability Intelligence focuses on measurement. By combining
            behavioral indicators, technical telemetry, privilege context,
            and risk signals, organizations gain continuous visibility into
            their human attack surface instead of relying solely on periodic
            training exercises.
          </p>
        </div>
      </div>
    </section>
  );
}
