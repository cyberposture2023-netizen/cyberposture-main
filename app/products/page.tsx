"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import HVIAssessmentSection from "@/components/HVIAssessmentSection";

const ease = [0.25, 0.1, 0.25, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const b2cItems = [
  "Password habits",
  "Public exposure",
  "Phishing reflexes",
  "Pressure response",
] as const;

const b2bItems = [
  "Department-level HVI aggregation",
  "Passive telemetry and enterprise signal mapping",
  "Pilot planning for CISOs, HR, and risk teams",
] as const;

type Audience = "b2c" | "b2b";

export default function ProductsPage() {
  const [audience, setAudience] = useState<Audience>("b2c");

  useEffect(() => {
    const setFromHash = () => {
      if (window.location.hash === "#b2b") setAudience("b2b");
      if (window.location.hash === "#b2c" || window.location.hash === "#assessment") {
        setAudience("b2c");
      }
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  function selectAudience(nextAudience: Audience) {
    setAudience(nextAudience);
    window.history.replaceState(null, "", `/products#${nextAudience}`);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow px-6 pb-24 pt-32 md:px-8">
        <motion.section
          id="hvi-score"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-7xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            One product, two paths
          </p>
          <div className="mt-4">
            <h1 className="font-display text-5xl leading-tight text-on-surface md:text-7xl">
              HVI Score
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-on-surface-variant md:text-lg">
              Human Vulnerability Intelligence is one product organized for two
              audiences: individuals who need a personal risk score, and
              organizations that need aggregated human-risk visibility.
            </p>
          </div>
        </motion.section>

        <section className="mx-auto mt-16 max-w-7xl">
          <div className="mb-6 flex rounded-xl border border-outline-variant/25 bg-surface-container-low p-2">
            {[
              ["b2c", "Personal / Family"],
              ["b2b", "Business"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => selectAudience(value as Audience)}
                className={`flex-1 rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] transition-colors ${
                  audience === value
                    ? "bg-tertiary text-on-tertiary"
                    : "text-on-surface-variant hover:bg-background/55"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {audience === "b2c" ? (
          <motion.article
            id="b2c"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="scroll-mt-28 rounded-xl border border-outline-variant/25 bg-surface-container-low p-6 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              Personal path
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-5xl">
              Your personal risk, made visible.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-on-surface-variant md:text-lg">
              A fast personal HVI score for the moments where everyday internet
              behavior becomes exposure.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["0-100", "HVI Score"],
                ["4", "risk lenses"],
                ["clear", "next steps"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-tertiary/25 bg-tertiary/10 p-5"
                >
                  <p className="font-display text-5xl leading-none text-tertiary">
                    {value}
                  </p>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 font-display text-3xl text-on-surface md:text-4xl">
              What shapes the score
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {b2cItems.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-outline-variant/25 bg-background/45 p-5"
                >
                  <p className="text-xl font-semibold text-on-surface">{item}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-on-surface-variant md:text-base">
              Get the score, understand the weak spots, and move straight into
              personal protection.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#assessment"
                className="btn-gold inline-flex rounded-lg px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em]"
              >
                Take Assessment
              </a>
              <Link
                href="/contact/b2c"
                className="btn-ghost-gold inline-flex rounded-lg px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em]"
              >
                Start Free Test
              </Link>
            </div>
          </motion.article>
          ) : (

          <motion.article
            id="b2b"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="scroll-mt-28 rounded-xl border border-outline-variant/25 bg-surface-container-low p-6 md:p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              Business path
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-5xl">
              Secure your organization.
            </h2>
            <p className="mt-5 text-sm leading-7 text-on-surface-variant md:text-base">
              The enterprise HVI Score aggregates passive technical and
              behavioral indicators into a live picture of departmental human
              risk.
            </p>
            <div className="mt-7 grid gap-3">
              {b2bItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-outline-variant/25 bg-background/45 p-4"
                >
                  <span className="material-symbols-outlined text-tertiary">
                    check_circle
                  </span>
                  <span className="text-sm text-on-surface-variant">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/b2b"
                className="btn-gold inline-flex rounded-lg px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em]"
              >
                Deploy Telemetry
              </Link>
              <Link
                href="/contact/b2b"
                className="btn-ghost-gold inline-flex rounded-lg px-6 py-3 text-[12px] font-bold uppercase tracking-[0.08em]"
              >
                Book Enterprise Demo
              </Link>
            </div>
          </motion.article>
          )}
        </section>

        <section
          id="workflow"
          className="mx-auto mt-20 max-w-7xl scroll-mt-28 rounded-xl border border-outline-variant/25 bg-surface-container-low p-6 md:p-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            HVI Score workflow
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Capture signals", "Collect personal responses or enterprise passive telemetry."],
              ["02", "Calculate HVI", "Convert risk indicators into a clear HVI Score."],
              ["03", "Route action", "Send users to personal remediation or enterprise pilot planning."],
            ].map(([step, title, copy]) => (
              <div
                key={step}
                className="rounded-lg border border-outline-variant/25 bg-background/45 p-5"
              >
                <p className="font-display text-3xl text-tertiary">{step}</p>
                <h3 className="mt-4 text-xl font-semibold text-on-surface">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-on-surface-variant">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div id="assessment" className="scroll-mt-28">
          <HVIAssessmentSection />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
