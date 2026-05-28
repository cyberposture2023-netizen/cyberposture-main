import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import AttackSimulationSection from "@/components/AttackSimulationSection";
import HVIAssessmentSection from "@/components/HVIAssessmentSection";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Aegis HVI — Human Vulnerability Intelligence | CyberPosture" },
      {
        name: "description",
        content:
          "Aegis HVI: behavioral telemetry, attack simulation, and risk scoring for elite enterprise defense teams.",
      },
      { property: "og:title", content: "Aegis HVI — Human Vulnerability Intelligence" },
      { property: "og:description", content: "Behavioral intelligence platform for modern cyber defense." },
    ],
  }),
  component: Products,
});

function useCountUp(target: number, duration = 2000, run = true) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    let raf = 0;
    const step = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
      else setVal(target);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, run]);
  return val;
}

type Stage = "question" | "processing" | "result";

function Products() {
  const hvi = useCountUp(842, 2000);
  const [active, setActive] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage>("question");
  const [progress, setProgress] = useState(0);
  const [procText, setProcText] = useState("Analyzing behavioral cyber posture…");
  const procRef = useRef<number | null>(null);
  const score = useCountUp(742, 1500, stage === "result");

  const startDemo = () => {
    setStage("processing");
    setProgress(0);
    requestAnimationFrame(() => setProgress(100));
    const texts = [
      "Analyzing behavioral cyber posture…",
      "Calculating Human Vulnerability Indicators…",
      "Finalizing model…",
    ];
    let i = 0;
    procRef.current = window.setInterval(() => {
      i = (i + 1) % texts.length;
      setProcText(texts[i]);
    }, 1000);
    window.setTimeout(() => {
      if (procRef.current) window.clearInterval(procRef.current);
      setStage("result");
    }, 3000);
  };
  const resetDemo = () => {
    if (procRef.current) window.clearInterval(procRef.current);
    setStage("question");
    setProgress(0);
    setProcText("Analyzing behavioral cyber posture…");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-28 pb-24 px-8 max-w-7xl mx-auto w-full flex flex-col gap-24 flex-grow">
        {/* Hero */}
        <section className="flex flex-col items-center text-center gap-10">
          <div className="max-w-3xl flex flex-col gap-3">
            <h1 className="font-display text-5xl md:text-6xl text-on-surface">Aegis HVI</h1>
            <p className="font-display text-2xl md:text-3xl text-on-surface-variant">
              Human Vulnerability Intelligence for modern cyber defense.
            </p>
          </div>
          <div className="w-full glass-panel rounded-xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] float-anim">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/50 to-surface-container-highest/30 z-0" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="text-on-surface-variant text-[12px] font-bold tracking-[0.12em] uppercase">
                Global HVI Score
              </div>
              <div className="font-display text-[80px] leading-none text-tertiary drop-shadow-[0_0_15px_rgba(231,193,133,0.3)]">
                {hvi}
              </div>
              <div className="flex items-center gap-2 text-primary">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shield
                </span>
                <span className="text-lg font-semibold">Optimized Stance</span>
              </div>
            </div>
            <div className="absolute left-10 bottom-10 hidden md:flex items-end gap-2 opacity-50">
              {[64, 96, 48, 128, 80].map((h, i) => (
                <div
                  key={i}
                  className="w-2 rounded-t pulse-radar"
                  style={{
                    height: h,
                    background: i % 2 ? "var(--tertiary)" : "var(--primary)",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <svg className="absolute right-10 top-10 opacity-30 hidden md:block" width="120" height="120" viewBox="0 0 120 120">
              <circle className="pulse-radar" cx="60" cy="60" r="50" fill="none" stroke="#e7c185" strokeDasharray="5 5" strokeWidth="2" />
              <circle className="pulse-radar" cx="60" cy="60" r="30" fill="none" stroke="#b1ccc5" strokeWidth="1" style={{ animationDelay: "0.5s" }} />
              <path d="M60 10 L60 110 M10 60 L110 60" stroke="#424846" strokeWidth="1" />
            </svg>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#assessment" className="btn-gold px-8 py-3 rounded-lg text-[12px] font-bold uppercase tracking-[0.08em]">
              Start Assessment
            </a>
            <a href="#workflow" className="btn-ghost-gold px-8 py-3 rounded-lg text-[12px] font-bold uppercase tracking-[0.08em]">
              View Documentation
            </a>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflow" className="flex flex-col gap-10">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface text-center">Intelligence Workflow</h2>
          <div className="grid md:grid-cols-3 gap-6 relative">
            {[
              { icon: "sensors", title: "Telemetry", desc: "Data ingestion." },
              { icon: "memory", title: "Processing", desc: "Behavioral analysis." },
              { icon: "query_stats", title: "Insights", desc: "Actionable metrics." },
            ].map((s) => (
              <div key={s.title} className="glass-panel p-6 rounded-lg text-center">
                <div className="text-tertiary mb-2">
                  <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">{s.title}</h3>
                <p className="text-sm text-on-surface-variant mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Attack Simulation */}
        <AttackSimulationSection />
       

        {/* Assessment Demo */}
         <HVIAssessmentSection />
        

        {/* CTA */}
        <section className="glass-panel rounded-xl p-12 text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl md:text-4xl text-on-surface">
            Strengthen Human Cyber Resilience
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-on-surface-variant">
            {["Reduce exposure", "Improve resilience", "Detect anomalies"].map((l) => (
              <div key={l} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span> {l}
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-gold px-10 py-4 rounded text-[12px] font-bold uppercase tracking-[0.1em]">
            Request Demo
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}