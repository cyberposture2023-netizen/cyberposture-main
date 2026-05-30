
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

const useCases = [
  {
    title: "Targeted Intervention",
    description:
      "Identify high-risk departments and deliver contextual security nudges instead of forcing repetitive training across the entire workforce.",
  },
  {
    title: "Shadow IT Discovery",
    description:
      "Reveal where employees bypass controls because security tooling creates operational friction and workflow bottlenecks.",
  },
  {
    title: "Automated Escalation",
    description:
      "Combine security alerts with human risk context to prioritize incidents and automate containment actions.",
  },
];

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
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Phase 3 · Enterprise Human Risk Operating System
          </p>

          <h2 className="mt-5 max-w-5xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
            Move Beyond Awareness Training
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            Traditional security awareness programs rely on surveys,
            compliance checklists, and simulated phishing campaigns.
            Human Vulnerability Intelligence continuously maps human risk
            across the organization without disrupting employee workflows.
          </p>
        </motion.div>

        {/* Telemetry Engine */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Passive Telemetry Engine
              </p>

              <h3 className="mt-2 text-4xl font-semibold text-white">
                Four Dimensions of Human Risk
              </h3>
            </div>

            <div className="hidden rounded-xl border border-tertiary/30 bg-tertiary/10 px-5 py-4 md:block">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-tertiary">
                Real-Time HVI
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {telemetryPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/12 bg-white/[0.05] p-6 backdrop-blur-xl"
              >
                <h4 className="text-2xl font-semibold text-white">
                  {pillar.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Section */}
        <div className="mt-20 rounded-3xl border border-tertiary/30 bg-tertiary/10 p-8 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Privacy Architecture
          </p>

          <h3 className="mt-4 text-4xl font-semibold text-white">
            Zero HR Data Boundary
          </h3>

          <p className="mt-5 max-w-3xl text-white/70">
            Human Vulnerability Intelligence operates behind a strict
            privacy firewall. The platform focuses on technical and
            behavioral indicators, not employee evaluation.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "No HRIS integrations",
              "No salary information",
              "No performance reviews",
              "No personal employee records",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-black/20 p-5"
              >
                <p className="font-medium text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>

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

        {/* Use Cases */}
        <div className="mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Enterprise Use Cases
          </p>

          <h3 className="mt-3 text-4xl font-semibold text-white">
            Operational Security Outcomes
          </h3>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/12 bg-white/[0.05] p-6"
              >
                <h4 className="text-2xl font-semibold text-white">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mt-20 rounded-3xl border border-white/12 bg-white/[0.05] p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Security Stack Integrations
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="rounded-xl border border-white/10 bg-black/20 p-4 text-center"
              >
                <span className="text-white/80">{integration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h3 className="font-display text-4xl text-white md:text-5xl">
            See Your Human Risk Landscape
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Explore how Human Vulnerability Intelligence can reveal
            organizational blind spots and reduce enterprise risk through
            continuous assessment and contextual intervention.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact/b2b"
              className="btn-gold inline-flex rounded-xl px-8 py-4 text-sm font-bold uppercase tracking-[0.08em]"
            >
              Book Enterprise Discovery
            </Link>

            <Link
              href="/contact/b2b"
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
