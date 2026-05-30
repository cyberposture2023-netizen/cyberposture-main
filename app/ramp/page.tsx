import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const workflows = [
  {
    title: "Intelligent Intake Engine",
    description:
      "Dynamically assesses your technology stack, operational structure, and regulatory scope to determine compliance requirements.",
  },
  {
    title: "Context-Driven Control Mapping",
    description:
      "Maps infrastructure and operational realities to frameworks such as SOC 2, ISO 27001, HIPAA, and GDPR.",
  },
  {
    title: "Document & Policy Analysis",
    description:
      "Reviews existing policies and procedures to identify gaps, inconsistencies, and outdated controls.",
  },
  {
    title: "Automated Evidence Verification",
    description:
      "Validates system configurations against documented policies before formal audit review.",
  },
  {
    title: "Audit-Ready Deliverables",
    description:
      "Produces structured outputs, evidence packages, and readiness reports for downstream compliance platforms.",
  },
];

const benefits = [
  {
    title: "Dramatic Cost Reduction",
    description:
      "Reduce reliance on expensive pre-compliance consulting engagements.",
  },
  {
    title: "Zero Downstream Friction",
    description:
      "Generate outputs designed to flow directly into compliance automation platforms.",
  },
  {
    title: "Precision Over Templates",
    description:
      "Build policies aligned to real operational workflows rather than generic templates.",
  },
  {
    title: "Validated Assurance",
    description:
      "Gain confidence that controls, policies, and evidence are aligned before audits begin.",
  },
];

export default function RampPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              R.A.M.P.
            </p>

            <h1 className="mt-6 font-display text-5xl leading-[0.95] md:text-7xl">
              Readiness Assessment &
              <br />
              Mapping Protocol
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant">
              Move from uncertainty to audit readiness with speed and
              precision. R.A.M.P. helps organizations understand their
              compliance posture before entering formal attestation
              workflows.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact/b2b"
                className="btn-gold rounded-xl px-8 py-4"
              >
                Request Readiness Assessment
              </Link>

              <a
                href="#workflows"
                className="rounded-xl border border-outline-variant/30 px-8 py-4"
              >
                Explore Workflows
              </a>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-4xl md:text-5xl">
              Upstream Readiness Platform
            </h2>

            <div className="mt-14 rounded-3xl border border-outline-variant/20 p-10">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-outline-variant/20 p-5 text-center">
                  Policy Gap Analysis
                </div>

                <div className="rounded-xl border border-outline-variant/20 p-5 text-center">
                  Evidence Verification
                </div>

                <div className="rounded-xl border border-outline-variant/20 p-5 text-center">
                  Custom Control Mapping
                </div>
              </div>

              <div className="my-10 text-center text-3xl">↓</div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-tertiary/20 bg-tertiary/5 p-5 text-center">
                  Drata
                </div>

                <div className="rounded-xl border border-tertiary/20 bg-tertiary/5 p-5 text-center">
                  Vanta
                </div>

                <div className="rounded-xl border border-tertiary/20 bg-tertiary/5 p-5 text-center">
                  Secureframe
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflows */}
        <section
          id="workflows"
          className="px-6 py-20 md:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Core Workflows
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Five Connected Readiness Engines
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {workflows.map((workflow) => (
                <div
                  key={workflow.title}
                  className="rounded-2xl border border-outline-variant/20 p-8"
                >
                  <h3 className="text-2xl font-semibold">
                    {workflow.title}
                  </h3>

                  <p className="mt-4 leading-8 text-on-surface-variant">
                    {workflow.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-display text-4xl md:text-5xl">
              Traditional Audit Prep vs R.A.M.P.
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <h3 className="text-2xl font-semibold">
                  Traditional Approach
                </h3>

                <ul className="mt-6 space-y-4 text-on-surface-variant">
                  <li>Consultant-Led Discovery</li>
                  <li>Manual Spreadsheets</li>
                  <li>Generic Templates</li>
                  <li>Weeks of Preparation</li>
                  <li>High Upfront Costs</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-tertiary/20 bg-tertiary/5 p-8">
                <h3 className="text-2xl font-semibold">
                  R.A.M.P.
                </h3>

                <ul className="mt-6 space-y-4 text-on-surface-variant">
                  <li>AI-Powered Mapping</li>
                  <li>Evidence Validation</li>
                  <li>Dynamic Policy Generation</li>
                  <li>Structured Deliverables</li>
                  <li>Readiness-First Approach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Business Benefits
            </p>

            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Why Organizations Choose R.A.M.P.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-outline-variant/20 p-8"
                >
                  <h3 className="text-2xl font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-8 text-on-surface-variant">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Get Started
            </p>

            <h2 className="mt-4 font-display text-5xl">
              Become Audit Ready
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
              Prepare policies, controls, and evidence before entering
              formal compliance automation and attestation workflows.
            </p>

            <Link
              href="/contact/b2b"
              className="btn-gold mt-10 inline-flex rounded-xl px-8 py-4"
            >
              Request Assessment
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}