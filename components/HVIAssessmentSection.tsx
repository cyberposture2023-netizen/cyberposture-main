"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import AttackSimulationSection from "@/components/AttackSimulationSection";
import HVIAssessmentSection from "@/components/HVIAssessmentSection";

type Stage = "question" | "processing" | "result";

// Custom hook for number counting animation
function useCountUp(target: number, duration = 2000, run = true) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!run) return;

    let start: number | null = null;
    let raf = 0;

    const step = (t: number) => {
      if (start === null) start = t;

      const p = Math.min((t - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - p, 3);

      setVal(Math.floor(eased * target));

      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, run]);

  return val;
}

export default function ProductsPage() {
  const hvi = useCountUp(842, 2000);

  // Interactive Demo State
  const [stage, setStage] = useState<Stage>("question");
  const [procText, setProcText] = useState("Analyzing behavioral cyber posture…");
  const procRef = useRef<number | null>(null);
  const score = useCountUp(742, 1500, stage === "result");

  const startDemo = () => {
    setStage("processing");

    const texts = [
      "Analyzing behavioral cyber posture…",
      "Calculating Human Vulnerability Indicators…",
      "Finalizing risk model…",
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
    setProcText("Analyzing behavioral cyber posture…");
  };

  // Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col gap-24 px-8 pt-28 pb-24">
        
        {/* Hero Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center gap-10 text-center"
        >
          <motion.div variants={fadeUp} className="max-w-3xl flex flex-col gap-3">
            <h1 className="font-display text-5xl text-on-surface md:text-6xl">
              Aegis <span className="text-gradient-gold">HVI</span>
            </h1>
            <p className="font-display text-2xl text-on-surface-variant md:text-3xl">
              Human Vulnerability Intelligence for modern cyber defense.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel float-anim relative flex min-h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-xl p-8">
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary-container/50 to-surface-container-highest/30" />
            <div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="text-[12px] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                Global HVI Score
              </div>

              <div className="font-display text-[80px] leading-none text-tertiary drop-shadow-[0_0_15px_rgba(231,193,133,0.3)]">
                {hvi}
              </div>

              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined pulse-radar" style={{ fontVariationSettings: "'FILL' 1" }}>
                  shield
                </span>
                <span className="text-lg font-semibold">Optimized Stance</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
            <a href="#assessment" className="btn-gold rounded-lg px-8 py-3 text-[12px] font-bold uppercase tracking-[0.08em] transition-transform hover:scale-105">
              Start Assessment
            </a>
            <a href="#workflow" className="btn-ghost-gold rounded-lg px-8 py-3 text-[12px] font-bold uppercase tracking-[0.08em] transition-transform hover:scale-105">
              View Documentation
            </a>
          </motion.div>
        </motion.section>

        {/* Live Terminal Demo (Using your custom state) */}
        <motion.section 
          id="assessment" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mx-auto w-full max-w-4xl"
        >
          <div className="glass-panel overflow-hidden rounded-xl border border-outline-variant/30">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 border-b border-outline-variant/30 bg-surface-container-lowest/50 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-error/80" />
              <div className="h-3 w-3 rounded-full bg-tertiary/80" />
              <div className="h-3 w-3 rounded-full bg-primary/80" />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant/50">
                AEGIS_HVI_TERMINAL_V1.0
              </span>
            </div>

            {/* Terminal Body */}
            <div className="min-h-[250px] p-8 font-mono text-sm">
              <AnimatePresence mode="wait">
                {stage === "question" && (
                  <motion.div key="q" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full flex-col items-center justify-center gap-6 text-center">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant">terminal</span>
                    <p className="text-on-surface-variant">Ready to initiate live behavioral risk diagnostic.</p>
                    <button onClick={startDemo} className="btn-ghost-gold rounded px-6 py-2">
                      Run Diagnostic 
                    </button>
                  </motion.div>
                )}

                {stage === "processing" && (
                  <motion.div key="p" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-6 pt-10">
                    <div className="flex items-center gap-3 text-tertiary">
                      <span className="material-symbols-outlined animate-spin">autorenew</span>
                      <span>{procText}</span>
                    </div>
                    {/* Animated Progress Bar */}
                    <div className="h-1 w-full overflow-hidden rounded-full bg-surface-container-highest">
                      <motion.div 
                        initial={{ width: "0%" }} 
                        animate={{ width: "100%" }} 
                        transition={{ duration: 3, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-primary to-tertiary"
                      />
                    </div>
                  </motion.div>
                )}

                {stage === "result" && (
                  <motion.div key="r" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center gap-6 pt-6 text-center">
                    <div className="text-on-surface-variant">Diagnostic Complete. Target Score:</div>
                    <div className="text-6xl text-primary drop-shadow-[0_0_10px_rgba(177,204,197,0.3)]">
                      {score}
                    </div>
                    <button onClick={resetDemo} className="text-xs uppercase tracking-widest text-outline hover:text-tertiary">
                      [ Recalibrate ]
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* Workflow */}
        <motion.section 
          id="workflow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-10"
        >
          <motion.h2 variants={fadeUp} className="text-center font-display text-3xl text-on-surface md:text-4xl">
            Intelligence Workflow
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: "sensors", title: "Telemetry", desc: "Passive data ingestion without disrupting workflows." },
              { icon: "memory", title: "Processing", desc: "AI-driven behavioral pattern analysis." },
              { icon: "query_stats", title: "Insights", desc: "Actionable metrics and automated remediation." },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp} whileHover={{ y: -5 }} className="glass-panel rounded-lg p-6 text-center">
                <div className="mb-2 text-tertiary">
                  <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-on-surface">{s.title}</h3>
                <p className="mt-2 text-sm text-on-surface-variant">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <AttackSimulationSection />
        <HVIAssessmentSection />

        {/* CTA */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="glass-panel flex flex-col items-center gap-6 rounded-xl p-12 text-center"
        >
          <h2 className="font-display text-3xl text-on-surface md:text-4xl">
            Strengthen Human Cyber Resilience
          </h2>

          <div className="flex flex-wrap justify-center gap-8 text-on-surface-variant">
            {["Reduce exposure", "Improve resilience", "Detect anomalies"].map((l) => (
              <div key={l} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                {l}
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn-gold rounded px-10 py-4 text-[12px] font-bold uppercase tracking-[0.1em] hover:scale-105 transition-transform">
            Request Demo
          </Link>
        </motion.section>
      </main>

      <SiteFooter />
    </div>
  );
}