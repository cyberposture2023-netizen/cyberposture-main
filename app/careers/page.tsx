"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};


const roles = [
  {
    title: "Security Architect",
    type: "Platform Architecture & Security Engineering",
    focus:
      "Lead the structural mapping of our Human Risk Operating System integrations. Design privacy-preserving telemetry pipelines, configure SCIM/SSO directory integrations, and build secure connections with EDR, DLP, and email security platforms.",

    responsibilities: [
      "Design privacy-preserving telemetry pipelines",
      "Implement SCIM / SSO integrations",
      "Integrate Okta, Azure AD, and Google Workspace",
      "Connect EDR, DLP, and Email Security Gateways",
      "Support ISO 42001 compliance automation",
      "Refine NIST AI RMF governance workflows",
    ],

    tags: [
      "Zero Trust",
      "SCIM / SSO",
      "Telemetry",
      "Okta",
      "Azure AD",
      "ISO 42001",
    ],
  },

  {
    title: "Security Analyst Intern",
    type: "Threat Intelligence & GRC Operations",
    focus:
      "Work alongside senior mentors to analyze behavioral anomalies, investigate policy-bypass patterns, build AI-driven micro-simulation scenarios, and support governance, risk, and compliance initiatives.",

    responsibilities: [
      "Investigate behavioral risk indicators",
      "Analyze policy-bypass patterns",
      "Build AI simulation scenarios",
      "Support GRC mapping workflows",
      "Research HAZOP, SHELL, and GEMS models",
      "Translate human-error trends into platform insights",
    ],

    tags: [
      "Threat Intel",
      "Human Factors",
      "GRC",
      "HAZOP",
      "SHELL",
      "GEMS",
    ],
  },

  {
    title: "Security Program Manager",
    type: "Enterprise Delivery & Customer Success",
    focus:
      "Manage enterprise pilot deployments and continuous risk reduction initiatives. Act as the bridge between CISOs, SOC teams, and engineering groups to ensure successful adoption of Human Vulnerability Intelligence.",

    responsibilities: [
      "Manage enterprise pilot programs",
      "Coordinate CISO and SOC stakeholders",
      "Scale deployment methodologies",
      "Optimize R.A.M.P. onboarding",
      "Support continuous risk reduction programs",
      "Drive multi-department implementations",
    ],

    tags: [
      "Enterprise",
      "Pilots",
      "R.A.M.P.",
      "Customer Success",
      "Risk Programs",
      "Operations",
    ],
  },
] as const;


export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow px-6 pb-24 pt-32 md:px-8">
        <motion.section
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl"
        >
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Careers
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-on-surface md:text-7xl">
              Build the human-centric security layer.
            </h1>
            <p className="mt-6 text-base leading-8 text-on-surface-variant md:text-lg">
              HVI is hiring builders, analysts, and operators who can
              turn human risk signals into privacy-safe, enterprise-ready
              security products.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {roles.map((role, index) => (
              <motion.article
                key={role.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-outline-variant/25 bg-surface-container-low p-6 shadow-[0_18px_70px_rgba(0,0,0,0.2)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                  {role.type}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-on-surface">
                  {role.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                  {role.focus}
                </p>
                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-tertiary">
                    Key Focus Areas
                  </p>

                  <ul className="mt-4 space-y-2">
                    {role.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-on-surface-variant"
                      >
                        <span className="text-tertiary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {role.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-outline-variant/30 px-3 py-1 text-xs text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>


          <motion.section
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-20"
          >
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Why Work Here
              </p>

              <h2 className="mt-4 font-display text-4xl text-on-surface md:text-5xl">
                Help Build The Future Of Human-Centric Security
              </h2>

              <p className="mt-6 text-lg leading-8 text-on-surface-variant">
                We believe the next generation of cybersecurity will be built at the
                intersection of security engineering, behavioral science, AI governance,
                and human risk intelligence.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {[
                "Security Research",
                "Behavioral Science",
                "Human Risk Intelligence",
                "AI Governance",
                "Compliance Innovation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-outline-variant/20 bg-surface-container-low p-5 text-center"
                >
                  <span className="font-medium text-on-surface">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>


          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12 rounded-[2rem] border border-outline-variant/30 bg-[radial-gradient(circle_at_85%_0%,rgba(231,193,133,0.16),transparent_34%),linear-gradient(135deg,rgba(29,32,31,0.96),rgba(2,26,22,0.88))] p-8 md:p-10"
          >
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-3xl text-on-surface md:text-4xl">
                  Join Our Mission
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-on-surface-variant md:text-base">
                  We're building the next generation of human-centric cybersecurity.
                  If you're passionate about security, behavioral intelligence,
                  AI governance, or risk management, we'd love to hear from you.
                </p>
              </div>
              <Link
                href="/contact"
                className="btn-gold inline-flex w-full justify-center rounded-full px-7 py-4 text-sm font-bold uppercase tracking-[0.08em] transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
              >
                Contact Team
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <SiteFooter />
    </div>
  );
}
