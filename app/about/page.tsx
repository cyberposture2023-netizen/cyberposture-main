import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="px-6 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Why We Exist
            </p>

            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-on-surface md:text-7xl">
              Cybersecurity Has Focused On Systems.
              <br />
              We Focus On People.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant">
              For decades, security investments have centered around
              firewalls, endpoints, and infrastructure. Yet attackers
              continue to succeed through a simpler path: human behavior.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Our Mission
            </p>

            <h2 className="mt-4 font-display text-4xl text-on-surface md:text-5xl">
              Making Human Risk Measurable
            </h2>

            <p className="mt-8 text-lg leading-9 text-on-surface-variant">
              Human Vulnerability Intelligence exists to help individuals
              and organizations understand, measure, and reduce the human
              risk factor in cybersecurity.
            </p>

            <p className="mt-6 text-lg leading-9 text-on-surface-variant">
              We believe security improves when vulnerability is visible,
              contextual, and actionable rather than hidden behind
              assumptions, annual training, and compliance checklists.
            </p>
          </div>
        </section>

        {/* Human Firewall */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Core Philosophy
              </p>

              <h2 className="mt-4 font-display text-4xl text-on-surface md:text-5xl">
                The Human Firewall
              </h2>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <h3 className="text-2xl font-semibold text-on-surface">
                  Traditional Security
                </h3>

                <ul className="mt-8 space-y-4 text-on-surface-variant">
                  <li>Firewalls</li>
                  <li>Endpoints</li>
                  <li>Networks</li>
                  <li>Infrastructure</li>
                  <li>Access Controls</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-tertiary/20 bg-tertiary/5 p-8">
                <h3 className="text-2xl font-semibold text-on-surface">
                  Human Vulnerability Intelligence
                </h3>

                <ul className="mt-8 space-y-4 text-on-surface-variant">
                  <li>Decision Making</li>
                  <li>Trust & Manipulation</li>
                  <li>Behavior Patterns</li>
                  <li>Risk Exposure</li>
                  <li>Human Resilience</li>
                </ul>
              </div>
            </div>

            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-on-surface-variant">
              Modern attackers target people before they target systems.
              Our philosophy is simple: security improves when human
              vulnerability becomes measurable.
            </p>
          </div>
        </section>

        {/* Beliefs */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-4xl text-on-surface md:text-5xl">
              What We Believe
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <h3 className="text-2xl font-semibold text-on-surface">
                  Measure, Don't Guess
                </h3>

                <p className="mt-4 leading-8 text-on-surface-variant">
                  Human risk should be measured continuously rather than
                  estimated through periodic assessments.
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <h3 className="text-2xl font-semibold text-on-surface">
                  Behavior Matters
                </h3>

                <p className="mt-4 leading-8 text-on-surface-variant">
                  Security outcomes are shaped by decisions, context,
                  stress, incentives, and trust.
                </p>
              </div>

              <div className="rounded-2xl border border-outline-variant/20 p-8">
                <h3 className="text-2xl font-semibold text-on-surface">
                  Privacy First
                </h3>

                <p className="mt-4 leading-8 text-on-surface-variant">
                  Human risk visibility should never require intrusive
                  employee surveillance or HR profiling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Leadership */}
        <section className="px-6 py-20 md:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Research & Leadership
            </p>

            <h2 className="mt-4 font-display text-4xl text-on-surface md:text-5xl">
              Built At The Intersection Of Security And Human Behavior
            </h2>

            <p className="mt-8 text-lg leading-8 text-on-surface-variant">
              Our work combines cybersecurity, behavioral science,
              human-centered design, and risk analysis to create a new
              approach to measuring vulnerability.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                "Security Research",
                "Human Factors",
                "Behavioral Psychology",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-outline-variant/20 p-6"
                >
                  <h3 className="font-semibold text-on-surface">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-24 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Join The Mission
            </p>

            <h2 className="mt-4 font-display text-4xl text-on-surface md:text-6xl">
              Help Build A More Human-Centric Security Future
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-on-surface-variant">
              Explore Human Vulnerability Intelligence and discover
              how measuring human risk can improve security outcomes.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/products"
                className="btn-gold rounded-xl px-8 py-4"
              >
                Explore The Product
              </a>

              <a
                href="/contact"
                className="rounded-xl border border-outline-variant/30 px-8 py-4"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}