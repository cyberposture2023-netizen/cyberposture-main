
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const riskAreas = [
  {
    title: "Password Hygiene",
    description:
      "Evaluate password reuse, MFA adoption, credential storage habits, and account recovery practices.",
  },
  {
    title: "Social Media Exposure",
    description:
      "Measure how much personal information is publicly accessible and exploitable by attackers.",
  },
  {
    title: "Phishing Recognition",
    description:
      "Assess your ability to identify deceptive messages, spoofed requests, and credential harvesting attempts.",
  },
  {
    title: "Fear & Urgency Resistance",
    description:
      "Understand how pressure, authority, fear, and urgency influence your security decisions.",
  },
];

const recommendations = [
  "Enable multi-factor authentication on primary accounts.",
  "Use a password manager and eliminate password reuse.",
  "Reduce public exposure across social media profiles.",
  "Verify urgent requests through independent channels.",
  "Review and remove unnecessary personal information online.",
];

const scoreBreakdown = [
  { label: "Password Hygiene", value: 42 },
  { label: "Social Exposure", value: 78 },
  { label: "Phishing Recognition", value: 81 },
  { label: "Emotional Triggers", value: 64 },
];

export default function B2CHVISection() {
  return (
    <section
      id="b2c"
      className="relative overflow-hidden border-y border-tertiary/30 bg-[#050706] px-6 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(231,193,133,0.18),transparent_28%),radial-gradient(circle_at_82%_15%,rgba(177,204,197,0.10),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Phase 2 · Human Vulnerability Index
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
            Measure Your Human Attack Surface
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            The Human Vulnerability Index measures susceptibility to phishing,
            identity theft, manipulation, and social engineering through a
            personalized assessment of everyday digital behaviors.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {riskAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold text-white">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-tertiary/25 bg-white/[0.04] p-8 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Assessment Preview
              </p>

              <h3 className="mt-3 text-3xl font-semibold text-white">
                Sample Assessment Questions
              </h3>
            </div>

            <div className="rounded-xl border border-tertiary/25 bg-tertiary/10 px-4 py-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-tertiary">
                ~4 Minutes
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {[
              "How often do you reuse passwords across multiple accounts?",
              "Are your social media profiles publicly visible?",
              "Would you click a delivery link from an unknown sender?",
              "Your bank account will be suspended in 30 minutes. What do you do first?",
            ].map((question) => (
              <div
                key={question}
                className="rounded-xl border border-white/10 bg-black/30 p-5"
              >
                <p className="text-white/85">{question}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-tertiary/30 bg-tertiary/10 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Example Result
            </p>

            <div className="mt-6 font-display text-8xl leading-none text-tertiary md:text-9xl">
              74
            </div>

            <h3 className="mt-4 text-3xl font-semibold text-white">
              Human Vulnerability Index
            </h3>

            <p className="mt-4 text-white/65">
              Elevated susceptibility to phishing attempts and urgency-based
              manipulation tactics.
            </p>

            <div className="mt-8 space-y-5">
              {scoreBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-white/70">
                      {item.label}
                    </span>

                    <span className="text-sm font-semibold text-white">
                      {item.value}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-tertiary"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-8 backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Recommended Actions
            </p>

            <h3 className="mt-4 text-3xl font-semibold text-white">
              Reduce Your Exposure
            </h3>

            <div className="mt-8 space-y-4">
              {recommendations.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-xl border border-white/10 bg-black/25 p-4"
                >
                  <span className="text-tertiary">✓</span>

                  <p className="text-sm leading-7 text-white/70">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary-container/10 p-5">
              <p className="text-sm leading-7 text-white/70">
                The full assessment produces a personalized Human Vulnerability
                Index and prioritizes the security improvements that will reduce
                your real-world risk the fastest.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="#assessment"
            className="btn-gold inline-flex rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-[0.08em]"
          >
            Calculate My HVI Score
          </a>

          <p className="mt-4 text-sm text-white/55">
            Takes less than 4 minutes. No sign-up required.
          </p>

          <div className="mt-8">
            <Link
              href="/contact/b2c"
              className="btn-ghost-gold inline-flex rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-[0.08em]"
            >
              Explore Personal Protection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
