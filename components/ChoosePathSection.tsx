"use client";

import Link from "next/link";

export default function ChoosePathSection() {
  return (
    <section className="px-6 py-20 md:px-8">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Choose Your Path
          </p>

          <h2 className="mt-4 font-display text-5xl text-on-surface md:text-6xl">
            Continue Your Assessment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-on-surface-variant">
            Whether you're protecting yourself or securing an
            organization, Human Vulnerability Intelligence
            provides visibility into the risks attackers exploit.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">

          <div className="rounded-3xl border border-tertiary/25 bg-tertiary/10 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Individual
            </p>

            <h3 className="mt-4 text-4xl font-semibold text-on-surface">
              Personal HVI
            </h3>

            <p className="mt-5 text-on-surface-variant">
              Measure your vulnerability to phishing,
              identity theft, social engineering,
              and manipulation.
            </p>

            <ul className="mt-8 space-y-3">
              <li>✓ Password Hygiene</li>
              <li>✓ Social Exposure</li>
              <li>✓ Phishing Recognition</li>
              <li>✓ Emotional Triggers</li>
            </ul>

            <a
              href="#b2c"
              className="btn-gold mt-8 inline-flex rounded-xl px-8 py-4"
            >
              Explore Personal HVI
            </a>
          </div>

          <div className="rounded-3xl border border-primary/25 bg-primary-container/10 p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Enterprise
            </p>

            <h3 className="mt-4 text-4xl font-semibold text-on-surface">
              Human Risk OS
            </h3>

            <p className="mt-5 text-on-surface-variant">
              Continuously map organizational human risk
              using passive telemetry and behavioral signals.
            </p>

            <ul className="mt-8 space-y-3">
              <li>✓ Department Risk Mapping</li>
              <li>✓ Passive Telemetry</li>
              <li>✓ Continuous Assurance</li>
              <li>✓ CISO Dashboard</li>
            </ul>

            <a
              href="#enterprise"
              className="btn-gold mt-8 inline-flex rounded-xl px-8 py-4"
            >
              Explore Enterprise HVI
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}