"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Laptop,
  ArrowRight,
  ShieldAlert,
  Lock,
  Database,
  Skull,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Spear Phishing",
    description: "A targeted phishing email is sent to a specific employee.",
    activeNode: "phishing",
  },
  {
    id: 2,
    title: "Credential Compromise",
    description: "The employee clicks the malicious link and credentials are harvested.",
    activeNode: "employee",
  },
  {
    id: 3,
    title: "Lateral Movement",
    description: "The attacker pivots internally and probes connected systems.",
    activeNode: "lateral",
  },
  {
    id: 4,
    title: "Domain Escalation",
    description: "Privilege escalation gives the attacker control of core infrastructure.",
    activeNode: "domain",
  },
  {
    id: 5,
    title: "Ransomware Deployment",
    description: "Critical systems are encrypted and operational impact begins.",
    activeNode: "ransomware",
  },
  {
    id: 6,
    title: "Data Exfiltration",
    description: "Sensitive company information is extracted from the environment.",
    activeNode: "data",
  },
];

// Re-calculated on a strict orthogonal grid to prevent vertical cramping
const nodes = [
  { id: "attacker", label: "Threat Actor", icon: Skull, x: 12, y: 15 },
  { id: "phishing", label: "Phishing", icon: Mail, x: 38, y: 15 },
  { id: "employee", label: "Employee PC", icon: Laptop, x: 38, y: 50 },
  { id: "lateral", label: "Lateral Move", icon: ArrowRight, x: 64, y: 50 },
  { id: "domain", label: "Domain Ctrl", icon: ShieldAlert, x: 90, y: 15 },
  { id: "ransomware", label: "Ransomware", icon: Lock, x: 90, y: 50 },
  { id: "data", label: "Data Exfil", icon: Database, x: 90, y: 85 },
];

export default function AttackSimulationSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    // If paused or user has taken manual control, stop the auto-carousel
    if (isPaused || userInteracted) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, userInteracted]);

  const current = useMemo(() => steps[activeStep], [activeStep]);

  const handleManualStep = (index: number) => {
    setActiveStep(index);
    setUserInteracted(true); // Permanent pause once they take control
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        <div className="mb-10 md:mb-14 text-center">
          <p className="mb-3 text-[10px] md:text-sm uppercase tracking-[0.25em] font-semibold text-tertiary">
            Human-Centric Threat Intelligence
          </p>

          <h2 className="font-display text-3xl text-center text-on-surface md:text-4xl">
            Interactive Attack Simulation
          </h2>

          <p className="mx-auto mt-4 md:mt-5 max-w-3xl text-sm md:text-base leading-relaxed text-on-surface-variant">
            Visualizing how a single human action escalates into enterprise-wide
            compromise through phishing, lateral movement, privilege escalation,
            ransomware deployment, and data exfiltration.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          
          {/* LEFT COLUMN - Split into Graph and Telemetry */}
          <div className="flex flex-col gap-6 overflow-hidden">
            
            {/* 1. NETWORK CANVAS (Scrollable on Mobile) */}
            <div className="-mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="relative h-[420px] min-w-[650px] w-full overflow-hidden rounded-lg shadow-sm glass-panel sm:h-[480px] lg:h-[540px]">
                
                {/* Subtle tech grid background */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    color: "var(--on-surface-variant, gray)"
                  }}
                />

                {/* Straight Orthogonal Connection Lines */}
                <svg 
                  className="absolute inset-0 h-full w-full" 
                  viewBox="0 0 100 100" 
                  preserveAspectRatio="none"
                >
                  <g className="text-tertiary">
                    <AnimatedPath active={activeStep >= 0} d="M 12 15 L 38 15" />
                    <AnimatedPath active={activeStep >= 1} d="M 38 15 L 38 50" />
                    <AnimatedPath active={activeStep >= 2} d="M 38 50 L 64 50" />
                    <AnimatedPath active={activeStep >= 3} d="M 64 50 L 64 15 L 90 15" />
                    <AnimatedPath active={activeStep >= 4} d="M 64 50 L 90 50" />
                    <AnimatedPath active={activeStep >= 5} d="M 90 50 L 90 85" />
                  </g>
                </svg>

                {/* Nodes */}
                {nodes.map((node) => {
                  const Icon = node.icon;
                  const isActive = current.activeNode === node.id;

                  return (
                    <div
                      key={node.id}
                      className="absolute z-10"
                      style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <motion.div
                        animate={{ scale: isActive ? 1.05 : 1 }}
                        className={`relative flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 flex-col items-center justify-center rounded-lg glass-panel transition-all duration-300 ${
                          isActive 
                            ? 'bg-surface ring-2 ring-tertiary shadow-[0_0_20px_rgba(0,0,0,0.15)]' 
                            : ''
                        }`}
                      >
                        <Icon className={`mb-1 h-5 w-5 sm:mb-1.5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 transition-colors ${isActive ? 'text-tertiary' : 'text-on-surface-variant'}`} />
                        <p className={`text-center text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-wider ${isActive ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                          {labelSplit(node.label).map((line, i) => (
                            <span key={i} className="block">{line}</span>
                          ))}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. ISOLATED TELEMETRY PANEL */}
            <div className="relative min-h-[140px] w-full overflow-hidden rounded-lg glass-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 flex flex-col justify-center p-6"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
                    <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-tertiary">
                      Telemetry Stream // Step {current.id}
                    </p>
                  </div>
                  <h3 className="mb-1 text-lg sm:text-xl font-semibold text-on-surface">
                    {current.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* RIGHT COLUMN - CONTROLS */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
          >
            {steps.map((step, index) => {
              const active = activeStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => handleManualStep(index)}
                  className={`group relative rounded-lg p-3 lg:p-4 text-left transition-all duration-300 glass-panel ${
                    active
                      ? "bg-surface/50 ring-2 ring-tertiary"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div>
                    <p className={`mb-1 text-[9px] lg:text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors ${active ? 'text-tertiary' : 'text-on-surface-variant'}`}>
                      Phase 0{step.id}
                    </p>
                    <h3 className={`text-sm lg:text-base font-semibold transition-colors ${active ? 'text-on-surface' : 'text-on-surface-variant'}`}>
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper to stack long text cleanly inside nodes
function labelSplit(label: string) {
  return label.split(" ");
}

// Enterprise-style straight dotted paths
function AnimatedPath({ d, active }: { d: string; active: boolean }) {
  return (
    <motion.path
      d={d}
      fill="transparent"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeDasharray="4 6"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: active ? 1 : 0,
        opacity: active ? 0.9 : 0.1,
      }}
      transition={{
        duration: 0.6,
        ease: "linear",
      }}
    />
  );
}