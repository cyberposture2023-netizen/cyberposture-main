"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const telemetryPillars = [
  {
    title: "Inherent Impact",
    description:
      "Passively maps directory groups and privilege levels through SSO and SCIM integrations to understand potential organizational blast radius.",
  },
  {
    title: "Behavioral Susceptibility",
    description:
      "AI-driven micro-simulations and behavioral signals reveal where departments are most vulnerable to manipulation and social engineering.",
  },
  {
    title: "Context & Mindset",
    description:
      "Measures risk indicators such as cognitive fatigue, abnormal work patterns, and decision-making under pressure.",
  },
  {
    title: "Continuous Assurance",
    description:
      "Consumes live webhook events from existing security controls to continuously update enterprise risk posture.",
  },
];

// Enterprise use cases removed per change request

const integrations = [
  "Microsoft Entra",
  "Okta",
  "CrowdStrike",
  "SentinelOne",
  "Proofpoint",
  "Mimecast",
  "Zscaler",
  "Netskope",
];

export default function EnterpriseSection() {
  return (
    <section
      id="enterprise"
      className="relative overflow-hidden border-y border-tertiary/30 bg-[#050706] px-6 py-20 md:px-8 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(231,193,133,0.12),transparent_25%),radial-gradient(circle_at_15%_75%,rgba(177,204,197,0.08),transparent_25%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-5 max-w-5xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
            Move Beyond Awareness Training & phishing campaigns
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Traditional security awareness programs rely on surveys, compliance
            checklists, and simulated phishing campaigns. Human Vulnerability
            Index continuously maps human risk across the organization without
            disrupting employee workflows.
          </p>
        </motion.div>

        {/* Dashboard Preview */}
        <div className="mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            CISO Dashboard Preview
          </p>

          <h3 className="mt-3 text-4xl font-semibold text-white">
            Live Department Risk Mapping
          </h3>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-6">
              <div className="space-y-4">
                {[
                  ["Finance", "82"],
                  ["Engineering", "61"],
                  ["Sales", "43"],
                ].map(([dept, score]) => (
                  <div
                    key={dept}
                    className="rounded-xl border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">{dept}</span>

                      <span className="font-display text-3xl text-tertiary">
                        {score}
                      </span>
                    </div>

                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-white/50">
                      Department Risk Score
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/[0.05] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                Active Findings
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "AI Vishing Exposure",
                  "Shadow Tool Usage",
                  "Privilege Drift",
                  "Off-Hours Behavioral Spike",
                ].map((alert) => (
                  <div
                    key={alert}
                    className="rounded-xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="text-white">{alert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise use cases removed as requested */}

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-4xl text-white md:text-5xl">
            See Your Human Risk Landscape
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Explore how Human Vulnerability Index (HVI) can reveal
            organizational blind spots and reduce enterprise risk through
            continuous assessment and contextual intervention.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-gold inline-flex rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-[0.08em]"
            >
              Book Enterprise Discovery
            </Link>

            <Link
              href="/contact"
              className="btn-ghost-gold inline-flex rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-[0.08em]"
            >
              Request Pilot Program
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
