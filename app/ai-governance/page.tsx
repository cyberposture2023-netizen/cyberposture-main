import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const dashboardModules = [
  "TPRM & Supply Chain",
  "ISO 42001",
  "Policy Hub",
  "Exceptions",
  "Remediation",
];

const tprmFeatures = [
  "Shadow AI Discovery",
  "Supply Chain Integrity",
  "Data Leakage Analysis",
];

const isoFeatures = [
  "38 Annex A Controls",
  "9 Governance Domains",
  "Automated Evidence Mapping",
];

const policyFeatures = [
  "NIST AI RMF",
  "EU AI Act Alignment",
  "Govern / Map / Measure / Manage",
];

const exceptionFeatures = [
  "Controlled Access Handshakes",
  "Sandboxed AI Usage",
  "Self-Expiring Sessions",
];

const remediationFeatures = [
  "Slack Nudges",
  "Teams Notifications",
  "PII Redaction",
  "Token Protection",
];

export default function AIGovernancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              AI Governance Suite
            </p>

            <h1 className="mt-6 font-display text-5xl md:text-7xl">
              Adopt AI Safely Without Increasing Risk
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant">
              Manage shadow AI, compliance obligations, policy boundaries,
              and automated remediation through a continuous assurance
              platform designed for enterprise adoption.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact/b2b"
                className="btn-gold rounded-xl px-8 py-4"
              >
                Request Enterprise Demo
              </Link>

              <a
                href="#dashboard"
                className="rounded-xl border border-outline-variant/30 px-8 py-4"
              >
                Explore Controls
              </a>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section id="dashboard" className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl md:text-5xl">
              AI Governance Dashboard
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
              {dashboardModules.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-outline-variant/20 p-6"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TPRM */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl">
              Third-Party Risk Management & Supply Chain Security
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {tprmFeatures.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-outline-variant/20 p-6"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-tertiary/20 bg-tertiary/5 p-8">
              <h3 className="text-2xl font-semibold">
                AI Supply Chain Exposure
              </h3>

              <p className="mt-4 text-on-surface-variant">
                Data Sensitivity × Vendor Lack of Controls
              </p>
            </div>
          </div>
        </section>

        {/* ISO */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl">
              ISO/IEC 42001 Compliance Automator
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {isoFeatures.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-outline-variant/20 p-6"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Policy */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl">
              Policy & Procedure Hub
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {policyFeatures.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-outline-variant/20 p-6"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exception + Remediation */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-4xl">
                Exception Management
              </h2>

              <div className="mt-8 space-y-4">
                {exceptionFeatures.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-outline-variant/20 p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-display text-4xl">
                Automated Remediation
              </h2>

              <div className="mt-8 space-y-4">
                {remediationFeatures.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-outline-variant/20 p-5"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-5xl">
              Secure AI Adoption At Scale
            </h2>

            <p className="mt-6 text-lg text-on-surface-variant">
              Govern AI usage, reduce risk, and accelerate compliance.
            </p>

            <Link
              href="/contact/b2b"
              className="btn-gold mt-10 inline-flex rounded-xl px-8 py-4"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}