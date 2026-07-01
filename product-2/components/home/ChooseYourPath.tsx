"use client";

import Link from "next/link";

const paths = [
  {
    q: "I want to understand my personal cyber vulnerability.",
    cta: "Take HVI Assessment",
    href: "/hvi#assessment",
    accent: "#00b8d9",
  },
  {
    q: "I want to measure workforce human risk.",
    cta: "Request HVI Demo",
    href: "/contact?i=Request+HVI+Demo",
    accent: "#039fc0",
  },
  {
    q: "I want to govern enterprise AI usage.",
    cta: "Join AI Early Access",
    href: "/contact?i=Join+AI+Risk+%26+Governance+Early+Access",
    accent: "#1a65b8",
  },
  {
    q: "I want to discuss CyberPosture for my organization.",
    cta: "Contact Us",
    href: "/contact?i=General+Inquiry",
    accent: "#1a65b8",
  },
];

export default function ChooseYourPath() {
  return (
    <section className="bg-card">
      <div className="container-content py-[84px]">
        <h2 className="font-display font-semibold text-[34px] tracking-tighter text-navy-700 mb-2 text-center">
          Start with the risk you need to measure.
        </h2>
        <p className="text-center text-[16px] text-slate-400 mb-[42px]">
          Four common starting points.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px]">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="group border border-surface-border rounded-[16px] p-[26px] flex flex-col transition-all duration-200 hover:-translate-y-1"
              style={
                {
                  "--accent": path.accent,
                } as React.CSSProperties
              }
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = path.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
              }}
            >
              <p className="text-[13px] leading-[1.5] font-semibold text-slate-700 mb-[22px] flex-1">
                {path.q}
              </p>
              <span
                className="font-sans text-[13.5px] font-semibold flex items-center gap-1.5"
                style={{ color: path.accent }}
              >
                {path.cta} →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
