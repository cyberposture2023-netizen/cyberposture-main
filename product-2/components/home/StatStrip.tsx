"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/lib/hooks/useCountUp";

interface StatCardProps {
  target: number | null;
  color: string;
  citationNum: number;
  headline: string;
  body: string;
  dark?: boolean;
  triggered: boolean;
}

function StatCard({ target, color, citationNum, headline, body, dark, triggered }: StatCardProps) {
  const { value, start } = useCountUp(target ?? 0, { durationMs: 1500 });

  useEffect(() => {
    if (triggered && target !== null) start();
  }, [triggered]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="rounded-[18px] p-[30px]"
      style={
        dark
          ? { background: "linear-gradient(165deg,#0d1a30,#102040)" }
          : { background: "#080f1e", border: "1px solid rgba(0, 184, 217, 0.12)" }
      }
    >
      <div
        className="font-display font-bold text-[58px] leading-none"
        style={{ color }}
      >
        {target !== null ? (
          <>
            {triggered ? value : 0}%
            <sup className="text-lg font-medium" style={{ color: dark ? "#7a90b0" : "#7a90b0", top: "-1.4em", fontSize: "18px" }}>
              {citationNum}
            </sup>
          </>
        ) : (
          <>
            $M
            <sup className="text-lg font-medium" style={{ color: dark ? "#7a90b0" : "#7a90b0", top: "-1.4em", fontSize: "18px" }}>
              {citationNum}
            </sup>
          </>
        )}
      </div>
      <div
        className="font-semibold text-[17px] mt-4 mb-2"
        style={{ color: dark ? "#e8edf5" : "#e8edf5" }}
      >
        {headline}
      </div>
      <div
        className="text-sm leading-[1.55]"
        style={{ color: dark ? "#a7b8d0" : "#7a90b0" }}
      >
        {body}
      </div>
    </div>
  );
}

export default function StatStrip() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTriggered(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      target: 74,
      color: "#00b8d9",
      citationNum: 1,
      headline: "Involve the human element",
      body: "Of breaches involve human actions such as phishing, credential compromise, social engineering, or error.",
      dark: false,
    },
    {
      target: 95,
      color: "#00b8d9",
      citationNum: 2,
      headline: "Trace back to human decisions",
      body: "Of cybersecurity issues can be traced to human error, fatigue, or process breakdowns.",
      dark: false,
    },
    {
      target: null,
      color: "#5fe9ff",
      citationNum: 3,
      headline: "Among the costliest incidents",
      body: "Credential compromise, insider mistakes, and social-engineering events are routinely among the most expensive incident categories — making human risk a financial issue, not just a security one.",
      dark: true,
    },
  ] as const;

  return (
    <section ref={sectionRef} className="bg-card">
      <div className="container-content py-[88px]">
        {/* Section header */}
        <div className="font-mono text-xs tracking-label uppercase text-teal-650 mb-3.5">
          Why human risk matters
        </div>
        <h2 className="font-display font-semibold text-[38px] leading-[1.12] tracking-tighter text-navy-700 mb-4 max-w-[760px]">
          The human layer remains the most exploited attack surface.
        </h2>
        <p className="text-[17px] leading-[1.55] text-slate-450 mb-11 max-w-[680px]">
          Organizations invest heavily in technical controls, yet attackers
          continue to exploit human behavior, decision-making, and trust — the
          part of the program that is least measured.
        </p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {cards.map((card) => (
            <StatCard key={card.citationNum} {...card} triggered={triggered} />
          ))}
        </div>

        {/* Citations */}
        <div className="mt-8 flex flex-col gap-1.5">
          <p className="text-[12.5px] leading-[1.5] text-slate-300">
            <sup className="font-semibold text-teal-500">1</sup>&nbsp; 74% of
            breaches include the human element — Verizon,{" "}
            <em>2023 Data Breach Investigations Report</em>.{" "}
            <a
              href="https://www.verizon.com/business/resources/reports/dbir/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#00b8d9" }}
            >
              verizon.com/dbir
            </a>
          </p>
          <p className="text-[12.5px] leading-[1.5] text-slate-300">
            <sup className="font-semibold" style={{ color: "#00b8d9" }}>2</sup>
            &nbsp; 95% of cybersecurity issues can be traced to human error —
            World Economic Forum, <em>Global Risks Report 2022</em>, Chapter 3:
            Digital Dependencies and Cyber Vulnerabilities.{" "}
            <a
              href="https://www.weforum.org/publications/global-risks-report-2022/in-full/chapter-3-digital-dependencies-and-cyber-vulnerabilities/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#00b8d9" }}
            >
              weforum.org
            </a>
          </p>
          <p className="text-[12.5px] leading-[1.5] text-slate-300">
            <sup className="font-semibold" style={{ color: "#7a90b0" }}>3</sup>
            &nbsp; Human-driven incidents are among the costliest categories —
            Mimecast, <em>State of Human Risk</em> research.{" "}
            <a
              href="https://www.mimecast.com/state-of-human-risk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#1a65b8" }}
            >
              mimecast.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
