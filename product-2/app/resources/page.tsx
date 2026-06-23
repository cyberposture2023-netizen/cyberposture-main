import type { Metadata } from "next";
import Link from "next/link";
import { resourceCards } from "@/lib/content/pages";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Guides, research, assessments, and tools for understanding and reducing human and AI cyber risk.",
};

const statusConfig = {
  available:    { label: "Available",    color: "#0E7C72", bg: "#E6F6F4" },
  "in-progress":{ label: "In progress",  color: "#8295AC", bg: "#EEF2F8" },
  "coming-soon":{ label: "Coming soon",  color: "#8295AC", bg: "#EEF2F8" },
};

const categoryIcon: Record<string, { icon: string; iconColor: string; iconBg: string }> = {
  "Guides":          { icon: "☰", iconColor: "#0E8C81", iconBg: "#E6F6F4" },
  "Research":        { icon: "▦", iconColor: "#2D6FB8", iconBg: "#EAF1FB" },
  "Checklists":      { icon: "✓", iconColor: "#5646C9", iconBg: "#ECEAFB" },
  "Blog":            { icon: "✎", iconColor: "#2D6FB8", iconBg: "#EAF1FB" },
  "Assessments":     { icon: "◑", iconColor: "#0E8C81", iconBg: "#E6F6F4" },
  "HVI Methodology": { icon: "ⓘ", iconColor: "#0E8C81", iconBg: "#E6F6F4" },
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(165deg,#0A2342,#123A6B)" }}>
        <div className="container-content py-[74px] pb-[60px]">
          <div className="font-mono text-[11.5px] tracking-[.12em] uppercase mb-[14px]" style={{ color: "#7FB0E0" }}>
            Resources
          </div>
          <h1 className="font-display font-semibold text-[42px] leading-[1.1] tracking-tighter text-white mb-4 max-w-[760px]">
            Guides, research, and tools for human and AI cyber risk.
          </h1>
          <p className="text-[16.5px] leading-[1.6] max-w-[680px]" style={{ color: "#B7CCE6" }}>
            Practical material to help individuals, security teams, and organizations measure and reduce human and AI cyber risk. New resources are being published as the platforms roll out.
          </p>
        </div>
      </section>

      {/* Resource cards */}
      <section className="bg-surface-subtle border-b border-surface-border">
        <div className="container-content py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {resourceCards.map((card) => {
              const st = statusConfig[card.status];
              const ci = categoryIcon[card.category] ?? categoryIcon["Guides"];
              const isAvailable = card.status === "available" && card.href;

              const inner = (
                <>
                  <div className="flex justify-between items-start mb-3">
                    <div
                      className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-[17px]"
                      style={{ background: ci.iconBg, color: ci.iconColor }}
                      aria-hidden="true"
                    >
                      {ci.icon}
                    </div>
                    <span
                      className="text-[10.5px] font-semibold rounded-[6px] px-2 py-[3px]"
                      style={{ color: st.color, background: st.bg }}
                    >
                      {st.label}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[18px] mb-1.5" style={{ color: "#15324F" }}>
                    {card.title}
                  </h3>
                  <p className="text-[13.5px] leading-[1.55]" style={{ color: "#5C7088" }}>
                    {card.description}
                    {isAvailable && " →"}
                  </p>
                </>
              );

              if (isAvailable) {
                return (
                  <Link
                    key={card.title}
                    href={card.href!}
                    className="bg-white border border-[#CDEDE8] rounded-[16px] p-[26px] block hover:shadow-card-hover transition-shadow"
                  >
                    {inner}
                  </Link>
                );
              }
              return (
                <div key={card.title} className="bg-white border border-surface-border rounded-[16px] p-[26px]">
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
