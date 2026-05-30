"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const ease = [0.25, 0.1, 0.25, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};


const portalCards = [
  {
    audience: "Individual",
    title: "Protect Yourself & Your Family",
    icon: "shield_person",
    copy:
      "Measure susceptibility to phishing, identity theft, social engineering, and manipulation. Discover your Human Vulnerability Index and receive personalized recommendations to strengthen your digital resilience.",
    cta: "Explore Personal HVI",
    href: "/products#b2c",
  },
  {
    audience: "Enterprise",
    title: "Secure Your Organization",
    icon: "business_center",
    copy:
      "Continuously measure human risk, behavioral exposure, and organizational attack surface. Gain visibility into the human factors that influence security outcomes across your workforce.",
    cta: "Explore Enterprise HVI",
    href: "/products#enterprise",
  },
];


const threatInboxItems = [
  {
    channel: "Email",
    icon: "mail",
    title: "Payroll direct deposit update",
    sender: "hr-benefits@payroll-secure.example",
    preview: "Confirm your bank details before Friday payroll closes.",
    signal: "Lookalike domain, urgency, financial change request",
    risk: "Credential capture",
  },
  {
    channel: "SMS",
    icon: "sms",
    title: "Package delivery exception",
    sender: "+1 (415) 555-0186",
    preview: "Your address needs confirmation. Tap to reschedule delivery.",
    signal: "Shortened link, personal timing cue, mobile-first lure",
    risk: "Payment-card phishing",
  },
  {
    channel: "Voice",
    icon: "record_voice_over",
    title: "Executive callback request",
    sender: "Unknown caller, saved executive name",
    preview: "I am boarding now. Send the approval code so finance can close.",
    signal: "Caller ID spoofing, MFA pressure, authority pretext",
    risk: "Account takeover",
  },
  {
    channel: "Docs",
    icon: "description",
    title: "Shared vendor invoice",
    sender: "finance-ops@workspace-share.example",
    preview: "A shared file asks for permission to view contacts and files.",
    signal: "Broad OAuth scope, external sender, familiar workflow",
    risk: "Cloud data exposure",
  },
] as const;

const osintScanLines = [
  "$ cyberposture osint.lookup --scope approved-domain --mode passive",
  "[policy] intrusive probes disabled; no login, exploit, or port scan actions",
  "[web] querying indexed pages and public metadata caches",
  "[dns] reviewing public DNS, MX, SPF, DMARC, and certificate transparency",
  "[identity] checking sanctioned breach references with redacted identifiers",
  "[cloud] locating publicly shared docs, buckets, and collaboration hints",
  "[social] collecting brand, role, and impersonation signals from open sources",
  "[coverage] domains, identities, credentials, cloud shares, supplier mentions",
  "[result] 28 public signals normalized into 5 remediation themes",
  "[status] passive OSINT run complete; no target systems touched",
] as const;

const osintCoverage = [
  ["Domains", "DNS, certificates, web metadata"],
  ["Identity", "executive names, aliases, public role clues"],
  ["Credentials", "redacted breach references and reuse patterns"],
  ["Cloud", "public shares, exposed docs, bucket naming hints"],
  ["Suppliers", "third-party mentions and impersonation surface"],
] as const;

const iasFindings = [
  {
    severity: "High",
    title: "Leaked credential trail",
    finding: "Redacted password reuse evidence tied to two public breach references.",
    fix: "Force credential rotation, block reused passwords, and add MFA recovery review.",
  },
  {
    severity: "Medium",
    title: "Cloud sharing exposure",
    finding: "Public document naming reveals project, vendor, and internal workflow context.",
    fix: "Tighten link-sharing defaults and archive stale externally visible documents.",
  },
  {
    severity: "Medium",
    title: "Misconfigured mail posture",
    finding: "DMARC enforcement appears weak enough for believable spoofing attempts.",
    fix: "Move DMARC toward reject, align SPF/DKIM, and monitor spoof attempts.",
  },
] as const;

const iasTerminalLines = [
  "$ cyberposture ias.view --persona attacker --input passive-osint",
  "[lens] mapping exposed assets into likely reconnaissance paths",
  "[asset] login portal discovered from indexed support documentation",
  "[misconfig] mail policy may permit spoofed executive display names",
  "[credential] sanitized breach reference increases phishing credibility",
  "[osint] public roles reveal approvers, vendors, and travel patterns",
  "[priority] fix credentials, mail trust, and public sharing defaults first",
] as const;

function HeroOsintPreview() {
  const [activeThreat, setActiveThreat] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveThreat((current) => (current + 1) % threatInboxItems.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  const selectedThreat = threatInboxItems[activeThreat];

  return (
    <motion.div
      id="osint-preview"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      className="relative mx-auto w-full max-w-7xl overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        className="absolute -inset-5 rounded-[1.5rem] bg-white/10 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-xl border border-white/15 bg-[#050505] shadow-[0_28px_90px_rgba(0,0,0,0.52)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#0b0c10] px-4 py-3">
          <span className="material-symbols-outlined text-lg text-white/72">
            desktop_mac
          </span>
          <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            threat desktop
          </span>
          <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-white/55" />
            <span className="truncate font-mono text-[10px] text-white/55">
              desktop://notification-storm
            </span>
          </div>
          <span className="ml-auto hidden rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65 sm:inline-flex">
            active preview
          </span>
        </div>

        <div className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.14),transparent_24%),linear-gradient(135deg,#050505,#0f1014_48%,#050505)]">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:34px_34px]" />

          <div className="relative grid gap-6 p-6 lg:grid-cols-[minmax(0,1fr)_360px]">
            <motion.div
              key={selectedThreat.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="min-h-[285px] overflow-hidden rounded-xl border border-white/12 bg-[#0a0b0f]/90 shadow-[0_24px_70px_rgba(0,0,0,0.52)] backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2">
                <span className="h-3 w-3 rounded-full bg-white/25" />
                <span className="h-3 w-3 rounded-full bg-white/18" />
                <span className="h-3 w-3 rounded-full bg-white/12" />
                <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">
                  Captured {selectedThreat.channel}
                </span>
              </div>
              <div className="grid gap-5 p-5 md:grid-cols-[1fr_240px]">
                <div>
                  <div className="flex items-start gap-3 border-b border-white/10 pb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white">
                      {selectedThreat.channel.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold text-white">
                        {selectedThreat.title}
                      </h3>
                      <p className="mt-1 truncate text-xs text-white/55">
                        {selectedThreat.sender}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65">
                      live
                    </span>
                  </div>
                  <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.045] p-5">
                    <p className="text-base leading-8 text-white/85">
                      {selectedThreat.preview}
                    </p>
                    <p className="mt-4 font-mono text-[11px] text-white/45">
                      secure-action.example/{selectedThreat.channel.toLowerCase()}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/35 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                    HVI triage
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    {selectedThreat.risk}
                  </p>
                  <p className="mt-3 text-xs leading-6 text-white/55">
                    {selectedThreat.signal}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Open link", "Approve", "Reply"].map((action) => (
                      <span
                        key={action}
                        className="rounded-md border border-white/12 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/65"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div>
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Notification stack
                </p>
                <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-white/45">
                  {activeThreat + 1}/{threatInboxItems.length}
                </span>
              </div>

              <div className="relative h-[245px]">
                {threatInboxItems.map((item, index) => {
                  const offset =
                    (index - activeThreat + threatInboxItems.length) %
                    threatInboxItems.length;
                  const isActive = offset === 0;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveThreat(index)}
                      className={`absolute inset-x-0 rounded-2xl border text-left shadow-[0_18px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 ${isActive
                        ? "border-white/25 bg-white/[0.16] p-4"
                        : "border-white/10 bg-white/[0.075] p-3 hover:bg-white/[0.11]"
                        }`}
                      style={{
                        top: `${offset * 18}px`,
                        zIndex: threatInboxItems.length - offset,
                        transform: `scale(${1 - offset * 0.035}) translateX(${offset * 8}px)`,
                        opacity: 1 - offset * 0.16,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/55">
                          <span className="material-symbols-outlined text-base text-white/80">
                            {item.icon}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/55">
                              {item.channel}
                            </p>
                            <span className="text-[10px] text-white/40">now</span>
                          </div>
                          <h3 className="mt-1 truncate text-sm font-semibold text-white">
                            {item.title}
                          </h3>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, y: 4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-2 line-clamp-3 text-xs leading-5 text-white/62"
                            >
                              {item.preview}
                            </motion.p>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}


              </div>

              <div className="mt-4 flex justify-center gap-1.5">
                {threatInboxItems.map((item, index) => (
                  <button
                    key={`${item.title}-dot`}
                    type="button"
                    onClick={() => setActiveThreat(index)}
                    className={`h-1.5 rounded-full transition-all ${activeThreat === index ? "w-6 bg-white/70" : "w-1.5 bg-white/25"
                      }`}
                    aria-label={`Show ${item.channel} notification`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-b from-transparent via-background/70 to-background sm:h-36" />
    </motion.div>
  );

}
function OsintScansModule() {
  const [visibleLines, setVisibleLines] = useState(5);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisibleLines((current) =>
        current >= osintScanLines.length ? 5 : current + 1
      );
    }, 950);

    return () => window.clearInterval(interval);
  }, []);

  const progress = Math.round((visibleLines / osintScanLines.length) * 100);

  return (
    <section id="osint-scans" className="px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-4xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            OSINT scans
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-6xl">
            See the public attack surface without touching private systems.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-on-surface-variant">
            Passive OSINT coverage across public web, DNS, identity, breach,
            cloud, and supplier signals.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="overflow-hidden rounded-xl border border-outline-variant/25 bg-[#080d0b] shadow-[0_22px_70px_rgba(0,0,0,0.3)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-error" />
                <span className="h-3 w-3 rounded-full bg-tertiary" />
                <span className="h-3 w-3 rounded-full bg-primary" />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
                  api.osint.passive.run
                </span>
              </div>
              <span className="rounded-full border border-primary/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
                sanitized demo
              </span>
            </div>

            <div className="p-4 md:p-5">
              <pre className="min-h-[360px] overflow-hidden rounded-lg border border-primary/15 bg-black/55 p-4 font-mono text-[11px] leading-6 text-primary sm:text-xs">
                {osintScanLines.slice(0, visibleLines).join("\n")}
                <span className="animate-pulse">_</span>
              </pre>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["0", "active probes"],
                  ["5", "coverage areas"],
                  ["28", "public signals"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-outline-variant/20 bg-white/[0.04] p-3"
                  >
                    <p className="font-display text-3xl leading-none text-tertiary">
                      {value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.12em] text-on-surface-variant">
                  <span>Passive lookup progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-container-highest">
                  <motion.div
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-outline-variant/25 bg-surface-container-low p-5 md:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                Coverage
              </p>
              <div className="mt-4 space-y-3">
                {osintCoverage.map(([label, copy]) => (
                  <div
                    key={label}
                    className="rounded-lg border border-outline-variant/20 bg-background/45 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-0.5 text-base text-tertiary">
                        travel_explore
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-on-surface">
                          {label}
                        </h4>
                        <p className="mt-1 text-xs leading-6 text-on-surface-variant">
                          {copy}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IasPerspectiveSection() {
  return (
    <section id="ias" className="relative overflow-hidden border-y border-tertiary/30 bg-[#050706] px-6 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(231,193,133,0.22),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(177,204,197,0.16),transparent_24%)]" />
      <div className="pointer-events-none absolute left-[-4vw] top-[-60px] font-display text-[10rem] leading-none text-white/[0.035] md:text-[16rem]">
        IAS
      </div>
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={itemVariants}>
            <p className="inline-flex rounded-full border border-tertiary/35 bg-tertiary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
              IAS
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.98] text-white md:text-7xl">
              IAS - How a Hacker Views You
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              The Internet Attack Surface view translates passive OSINT into an
              attacker-perspective map: exposed assets, weak configurations,
              leaked credential context, and public clues that make social
              engineering easier.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-tertiary/35 bg-black shadow-[0_28px_90px_rgba(0,0,0,0.5),0_0_60px_rgba(231,193,133,0.12)]">
              <div className="flex items-center justify-between border-b border-tertiary/20 bg-tertiary/10 px-4 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-tertiary">
                  attacker-lens terminal
                </span>
                <span className="rounded-full border border-tertiary/40 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-tertiary">
                  passive input
                </span>
              </div>
              <pre className="min-h-[250px] whitespace-pre-wrap p-5 font-mono text-[12px] leading-7 text-primary">
                {iasTerminalLines.join("\n")}
              </pre>
            </div>

            <div className="mt-5 rounded-2xl border border-tertiary/30 bg-tertiary/10 p-5">
              <p className="text-sm leading-7 text-white/72">
                IAS does not teach exploitation. It gives defenders the same
                outside-in visibility attackers rely on, then converts each
                finding into concrete cleanup work.
              </p>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-5">
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-white/15 bg-white/[0.055] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl md:p-7"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">
                    Findings dashboard
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold text-white">
                    What attackers can chain together
                  </h3>
                </div>
                <div className="rounded-xl border border-tertiary/35 bg-tertiary/15 px-5 py-4 text-right">
                  <p className="font-display text-5xl leading-none text-tertiary">
                    3
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-white/55">
                    priority paths
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {iasFindings.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-xl border border-white/12 bg-black/35 p-5 transition-colors hover:border-tertiary/35"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${item.severity === "High"
                          ? "border-error/35 text-error"
                          : "border-tertiary/35 text-tertiary"
                          }`}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {item.finding}
                    </p>
                    <div className="mt-4 rounded-lg border border-primary/25 bg-primary-container/20 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                        Remediation callout
                      </p>
                      <p className="mt-2 text-xs leading-6 text-white/62">
                        {item.fix}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow overflow-hidden pb-16 pt-20 md:pt-24">
        <section className="relative overflow-hidden px-6 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(231,193,133,0.2),transparent_32%),radial-gradient(circle_at_12%_20%,rgba(177,204,197,0.18),transparent_28%),linear-gradient(180deg,rgba(8,10,9,0.98),rgba(17,20,19,0.78)_58%,rgba(17,20,19,0))]" />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex max-w-5xl flex-col items-center text-center"
            >

              <motion.h1
                variants={itemVariants}
                className="max-w-5xl font-display text-5xl leading-[1.02] text-white sm:text-6xl md:text-7xl"
              >
                Human Vulnerability Intelligence
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="mt-8 max-w-4xl text-center"
              >
                <p className="text-2xl font-medium text-tertiary md:text-3xl">
                  Reduce the Human Risk Factor in Cybersecurity
                </p>

                <p className="mt-8 text-lg leading-8 text-white/80 md:text-xl">
                  Cyberattacks don't begin with malware.
                  <br />
                  They begin with people.
                </p>

                <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
                  Measure personal vulnerability.
                  <br />
                  Map organizational risk.
                  <br />
                  Reduce exposure before attackers exploit it.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
              >
                <Link
                  href="/products#simulation"
                  className="btn-gold inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-center text-[12px] font-bold uppercase tracking-[0.08em] shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 active:scale-95"
                >
                  Experience the Simulation
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  href="#choose-path"
                  className="rounded-lg border border-white/20 px-7 py-4 text-center text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface transition-colors hover:bg-white/5"
                >
                  Choose Your Path
                </Link>
              </motion.div>

            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 w-full scroll-mt-24 md:mt-12"
            >

            </motion.div>
          </div>
        </section>


        <section
          id="choose-path"
          className="border-y border-outline-variant/20 bg-surface-container-low/55 px-6 py-14 md:px-8 md:py-16"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto max-w-7xl"
          >


            <motion.div variants={itemVariants} className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                Choose Your Path
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-5xl">
                Protect Yourself Or Secure Your Organization
              </h2>

              <p className="mt-5 text-base leading-8 text-on-surface-variant">
                Human Vulnerability Intelligence serves both individuals and enterprises.
                Select the path that best matches your security needs.
              </p>
            </motion.div>



            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {portalCards.map((card) => (
                <motion.article
                  key={card.audience}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-outline-variant/25 bg-background/45 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.22)] md:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        {card.audience}
                      </p>
                      <h3 className="mt-4 font-display text-3xl leading-tight text-on-surface md:text-4xl">
                        {card.title}
                      </h3>
                    </div>
                    <span className="material-symbols-outlined rounded-lg border border-outline-variant/30 bg-surface-container-low p-3 text-3xl text-tertiary">
                      {card.icon}
                    </span>
                  </div>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-on-surface-variant md:text-base">
                    {card.copy}
                  </p>
                  <Link
                    href={card.href}
                    className="mt-7 inline-flex rounded-lg border border-tertiary/35 px-5 py-3 text-sm font-bold text-tertiary transition-colors hover:bg-tertiary/10"
                  >
                    {card.cta}
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* WhyHumanRiskSection */}
        <section className="border-y border-outline-variant/20 bg-background/60 px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={itemVariants}
                className="mx-auto max-w-3xl text-center"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  Why Human Risk Matters
                </p>

                <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-5xl">
                  The Human Layer Remains The Most Exploited Attack Surface
                </h2>

                <p className="mt-5 text-base leading-8 text-on-surface-variant">
                  Organizations invest heavily in technical controls, yet attackers
                  continue to exploit human behavior, decision-making, and trust.
                </p>
              </motion.div>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                <motion.article
                  variants={itemVariants}
                  className="rounded-2xl border border-tertiary/25 bg-tertiary/10 p-8"
                >
                  <div className="font-display text-6xl leading-none text-tertiary md:text-7xl">
                    74%
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-on-surface">
                    Human Element
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                    Of breaches involve human actions such as phishing,
                    credential compromise, social engineering, or misuse.
                  </p>
                </motion.article>

                <motion.article
                  variants={itemVariants}
                  className="rounded-2xl border border-outline-variant/25 bg-surface-container-low/55 p-8"
                >
                  <div className="font-display text-6xl leading-none text-primary md:text-7xl">
                    95%
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-on-surface">
                    Human Decisions
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                    Of cybersecurity failures can be traced back to human
                    decisions, errors, fatigue, or process breakdowns.
                  </p>
                </motion.article>

                <motion.article
                  variants={itemVariants}
                  className="rounded-2xl border border-outline-variant/25 bg-surface-container-low/55 p-8"
                >
                  <div className="font-display text-4xl leading-none text-tertiary md:text-5xl">
                    Human Risk
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-on-surface">
                    Least Measured
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-on-surface-variant">
                    Despite being central to modern attacks, human risk remains
                    one of the least measured components of cybersecurity programs.
                  </p>
                </motion.article>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Human Risk Matters */}

        <section className="border-y border-outline-variant/20 bg-surface-container-low/40 px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <motion.div
                variants={itemVariants}
                className="mx-auto max-w-3xl text-center"
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                  Platform Overview
                </p>

                <h2 className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-5xl">
                  One Platform. Two Perspectives.
                </h2>

                <p className="mt-5 text-base leading-8 text-on-surface-variant">
                  Whether you're protecting your personal digital life or managing
                  risk across an enterprise, Human Vulnerability Intelligence provides
                  visibility into the human factors attackers exploit.
                </p>
              </motion.div>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                {/* Personal HVI */}
                <motion.article
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-tertiary/25 bg-tertiary/10 p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-tertiary">
                      shield_person
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
                        Personal
                      </p>

                      <h3 className="mt-1 text-3xl font-semibold text-on-surface">
                        Human Vulnerability Index
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-on-surface-variant">
                    Measure susceptibility to phishing, identity theft,
                    manipulation, and social engineering through a
                    personalized assessment.
                  </p>

                  <div className="mt-8 grid gap-3">
                    {[
                      "Password Hygiene",
                      "Social Exposure",
                      "Phishing Recognition",
                      "Fear & Urgency Resistance",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/10 bg-background/30 px-4 py-3"
                      >
                        <span className="text-sm text-on-surface">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/products#b2c"
                    className="mt-8 inline-flex rounded-lg border border-tertiary/35 px-5 py-3 text-sm font-bold text-tertiary transition-colors hover:bg-tertiary/10"
                  >
                    View Personal Assessment
                  </Link>
                </motion.article>

                {/* Enterprise */}
                <motion.article
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="rounded-2xl border border-primary/25 bg-primary-container/10 p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      business_center
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        Enterprise
                      </p>

                      <h3 className="mt-1 text-3xl font-semibold text-on-surface">
                        Human Risk Operating System
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-on-surface-variant">
                    Continuously measure and reduce organizational human risk
                    using behavioral intelligence and passive telemetry.
                  </p>

                  <div className="mt-8 grid gap-3">
                    {[
                      "Inherent Impact",
                      "Behavioral Susceptibility",
                      "Context & Mindset",
                      "Continuous Assurance",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/10 bg-background/30 px-4 py-3"
                      >
                        <span className="text-sm text-on-surface">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/products#enterprise"
                    className="mt-8 inline-flex rounded-lg border border-primary/35 px-5 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
                  >
                    View Enterprise Platform
                  </Link>
                </motion.article>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HomeCTASection */}
        <section className="relative overflow-hidden px-6 py-20 md:px-8 md:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(231,193,133,0.18),transparent_30%)]" />

          <div className="relative mx-auto max-w-5xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-3xl border border-tertiary/25 bg-surface-container-low/60 p-10 text-center backdrop-blur-xl md:p-14"
            >
              <motion.p
                variants={itemVariants}
                className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary"
              >
                Start Your Journey
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="mt-4 font-display text-4xl leading-tight text-on-surface md:text-6xl"
              >
                Ready to See Your Human Risk Profile?
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mx-auto mt-6 max-w-3xl text-base leading-8 text-on-surface-variant md:text-lg"
              >
                Explore how attackers exploit human behavior, measure personal
                vulnerability, and discover how Human Vulnerability Intelligence
                helps individuals and organizations reduce exposure before risk
                becomes reality.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="mt-10 flex flex-col items-center"
              >
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
                    href="/products#simulation"
                    className="btn-gold inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-[12px] font-bold uppercase tracking-[0.08em]"
                  >
                    Experience the Simulation
                    <span className="material-symbols-outlined text-lg">
                      arrow_forward
                    </span>
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface transition-colors hover:bg-white/5"
                  >
                    Contact Us
                  </Link>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
                  <Link
                    href="/products#b2c"
                    className="text-tertiary transition-opacity hover:opacity-80"
                  >
                    Human Vulnerability Intelligence →
                  </Link>

                  <Link
                    href="/products#enterprise"
                    className="text-tertiary transition-opacity hover:opacity-80"
                  >
                    Enterprise Human Risk OS →
                  </Link>

                  <Link
                    href="/ai-governance"
                    className="text-tertiary transition-opacity hover:opacity-80"
                  >
                    AI Governance Suite →
                  </Link>

                  <Link
                    href="/ramp"
                    className="text-tertiary transition-opacity hover:opacity-80"
                  >
                    R.A.M.P. →
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>






      </main>

      <SiteFooter />
    </div>
  );
}
