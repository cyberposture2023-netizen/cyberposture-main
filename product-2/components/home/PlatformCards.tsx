"use client";

import Link from "next/link";

interface PlatformCardProps {
  accent: string;
  accentSoft: string;
  accentBorder: string;
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  tagline: string;
  taglineColor: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  primaryBg: string;
  secondaryHref: string;
  secondaryLabel: string;
  secondaryColor: string;
  secondaryBg: string;
  secondaryBorder: string;
  hoverShadow: string;
}

function PlatformCard({
  accent, accentSoft, accentBorder,
  eyebrow, eyebrowColor,
  title, tagline, taglineColor, description,
  primaryHref, primaryLabel, primaryBg,
  secondaryHref, secondaryLabel, secondaryColor, secondaryBg, secondaryBorder,
  hoverShadow,
}: PlatformCardProps) {
  return (
    <div
      className="group bg-white border border-surface-border rounded-[18px] p-9 transition-all duration-[250ms] hover:-translate-y-1.5"
      style={{
        borderTop: `4px solid ${accent}`,
        ["--hover-shadow" as string]: hoverShadow,
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = hoverShadow)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "")
      }
    >
      <div
        className="font-mono text-[11px] tracking-[.1em] uppercase mb-2"
        style={{ color: eyebrowColor }}
      >
        {eyebrow}
      </div>
      <h3
        className="font-display font-semibold text-[26px] text-navy-700 mb-1.5"
      >
        {title}
      </h3>
      <p className="text-[15px] font-semibold mb-3.5" style={{ color: taglineColor }}>
        {tagline}
      </p>
      <p className="text-[15px] leading-[1.6] text-slate-450 mb-5">
        {description}
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="inline-flex items-center px-[18px] py-[11px] rounded-[9px] text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: primaryBg }}
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center px-[18px] py-[11px] rounded-[9px] text-sm font-semibold transition-colors hover:opacity-90"
          style={{
            color: secondaryColor,
            background: secondaryBg,
            border: `1px solid ${secondaryBorder}`,
          }}
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}

export default function PlatformCards() {
  return (
    <section className="bg-surface-subtle border-y border-surface-border">
      <div className="container-content py-[84px]">
        <h2 className="font-display font-semibold text-[34px] tracking-tighter text-navy-700 mb-2 text-center">
          Two focused platforms. One intelligent foundation.
        </h2>
        <p className="text-center text-[16px] text-slate-400 mx-auto mb-11 max-w-[560px]">
          Pick the risk you need to measure — or run both on a shared platform
          foundation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlatformCard
            accent="#12A89B"
            accentSoft="#E6F6F4"
            accentBorder="#CDEDE8"
            eyebrow="CyberPosture HVI"
            eyebrowColor="#0E7C72"
            title="Human Vulnerability Index"
            tagline="Measure the human side of cyber risk."
            taglineColor="#0E7C72"
            description="A simple, measurable 300–850 score for behavior-driven cyber risk — helping individuals understand personal vulnerability and organizations measure workforce human-risk patterns over time."
            primaryHref="/hvi"
            primaryLabel="Explore HVI"
            primaryBg="#12A89B"
            secondaryHref="/hvi#assessment"
            secondaryLabel="Take HVI Assessment"
            secondaryColor="#0E7C72"
            secondaryBg="#E6F6F4"
            secondaryBorder="#CDEDE8"
            hoverShadow="0 30px 60px -34px rgba(18,168,155,.5)"
          />
          <PlatformCard
            accent="#6A5AE0"
            accentSoft="#ECEAFB"
            accentBorder="#DAD5F6"
            eyebrow="AI Risk & Governance · Early Access"
            eyebrowColor="#5646C9"
            title="AI Risk & Governance Platform"
            tagline="Adopt AI with confidence."
            taglineColor="#5646C9"
            description="AI is moving fast across approved tools, unsanctioned apps, connected workflows, and autonomous agents. CyberPosture helps you assess, understand, and mitigate that exposure — so teams can keep innovating with AI, backed by evidence for reviews, audits, and compliance readiness."
            primaryHref="/ai-risk-governance"
            primaryLabel="Explore AI Risk & Governance"
            primaryBg="#6A5AE0"
            secondaryHref="/contact?i=Join+AI+Risk+%26+Governance+Early+Access"
            secondaryLabel="Join Early Access"
            secondaryColor="#5646C9"
            secondaryBg="#ECEAFB"
            secondaryBorder="#DAD5F6"
            hoverShadow="0 30px 60px -34px rgba(106,90,224,.5)"
          />
        </div>
      </div>
    </section>
  );
}
