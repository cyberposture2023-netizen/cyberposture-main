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
      className="group bg-card border border-surface-border rounded-[18px] p-9 transition-all duration-[250ms] hover:-translate-y-1.5"
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
            accent="#00b8d9"
            accentSoft="rgba(0, 184, 217, 0.14)"
            accentBorder="rgba(0, 184, 217, 0.22)"
            eyebrow="CyberPosture HVI"
            eyebrowColor="#00b8d9"
            title="Human Vulnerability Index"
            tagline="Measure the human side of cyber risk."
            taglineColor="#00b8d9"
            description="CyberPosture HVI is a privacy-first human-risk intelligence platform that measures the human side of cyber risk and expresses it as a single, intuitive score."
            primaryHref="/hvi"
            primaryLabel="Explore HVI"
            primaryBg="#00b8d9"
            secondaryHref="/hvi#assessment"
            secondaryLabel="Take HVI Assessment"
            secondaryColor="#00b8d9"
            secondaryBg="rgba(0, 184, 217, 0.14)"
            secondaryBorder="rgba(0, 184, 217, 0.22)"
            hoverShadow="0 30px 60px -34px rgba(0,184,217,.5)"
          />
          <PlatformCard
            accent="#1a65b8"
            accentSoft="rgba(0, 184, 217, 0.12)"
            accentBorder="rgba(0, 184, 217, 0.22)"
            eyebrow="AI Risk & Governance · Early Access"
            eyebrowColor="#00b8d9"
            title="AI Risk & Governance Platform"
            tagline="Adopt AI with confidence."
            taglineColor="#00b8d9"
            description="The Cyber Posture AI Risk & Governance Platform helps organizations adopt and deploy AI with confidence by understanding and mitigating AI risk continuously — when, where, and as it occurs."
            
            primaryHref="/ai-risk-governance"
            primaryLabel="Explore AI Risk & Governance"
            primaryBg="#1a65b8"
            secondaryHref="/contact?i=Join+AI+Risk+%26+Governance+Early+Access"
            secondaryLabel="Join Early Access"
            secondaryColor="#00b8d9"
            secondaryBg="rgba(0, 184, 217, 0.12)"
            secondaryBorder="rgba(0, 184, 217, 0.22)"
            hoverShadow="0 30px 60px -34px rgba(26,101,184,.5)"
          />
        </div>
      </div>
    </section>
  );
}
