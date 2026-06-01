"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  ShieldCheck,
  Radar,
  BrainCircuit,
  Lock,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";

type Stage = "intro" | "questions" | "processing" | "results";

const questions = [
  {
    id: 1,
    question: "How do you typically verify unexpected email attachments or links?",
    options: [
      "I verify sender authenticity before interacting",
      "I usually inspect but sometimes open quickly",
      "I often trust internal-looking emails immediately",
    ],
  },
  {
    id: 2,
    question: "How frequently do you reuse passwords across services or platforms?",
    options: [
      "Never — all passwords are unique",
      "Occasionally across low-risk services",
      "Frequently across multiple accounts",
    ],
  },
  {
    id: 3,
    question: "How do you respond to urgent requests from unknown executives or vendors?",
    options: [
      "I independently verify requests",
      "I sometimes comply if the request feels urgent",
      "I usually act immediately to avoid delays",
    ],
  },
  {
    id: 4,
    question: "How often do you access work systems using public WiFi networks?",
    options: [
      "Rarely or only with secure VPN access",
      "Occasionally during travel",
      "Frequently without additional protection",
    ],
  },
  {
    id: 5,
    question: "How do you validate MFA prompts or unexpected login requests?",
    options: [
      "I reject anything unexpected",
      "I sometimes approve quickly",
      "I usually approve without verification",
    ],
  },
];

const processingTexts = [
  "Analyzing behavioral cyber posture...",
  "Correlating phishing susceptibility indicators...",
  "Evaluating trust exploitation patterns...",
  "Calculating Human Vulnerability Indicators...",
  "Generating adaptive risk insights...",
  "Cross-referencing organizational exposure...",
];

const insights = [
  {
    title: "Adaptive MFA Discipline",
    text: "Behavioral analysis indicates strong multi-factor authentication awareness.",
  },
  {
    title: "Moderate Phishing Susceptibility",
    text: "Targeted social engineering exposure remains moderately elevated.",
  },
  {
    title: "Low Endpoint Hygiene Risk",
    text: "Endpoint interaction patterns show disciplined security behavior.",
  },
  {
    title: "Potential OSINT Exposure",
    text: "Public behavioral indicators suggest possible reconnaissance visibility.",
  },
];

export default function HVIAssessmentSection() {
  const [stage, setStage] = useState<Stage>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [processingIndex, setProcessingIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const currentQuestion = useMemo(
    () => questions[questionIndex],
    [questionIndex]
  );

  useEffect(() => {
    if (stage !== "processing") return;

    let textInterval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    textInterval = setInterval(() => {
      setProcessingIndex((prev) =>
        prev === processingTexts.length - 1 ? 0 : prev + 1
      );
    }, 1400);

    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setStage("results");
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 90);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [stage]);

  function startAssessment() {
    setStage("questions");
  }

  function handleAnswer(index: number) {
    const updated = [...answers, index];
    setAnswers(updated);

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setStage("processing");
    }
  }

  function resetAssessment() {
    setStage("intro");
    setQuestionIndex(0);
    setAnswers([]);
    setProgress(0);
    setProcessingIndex(0);
  }

  return (
    <section id="hvi-assessment" className="relative overflow-hidden py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="mb-10 md:mb-16 text-center">
          <p className="mb-2 md:mb-3 text-[10px] md:text-sm font-semibold uppercase tracking-[0.25em] text-tertiary">
            Human Vulnerability Index
          </p>
          <h2 className="font-display text-3xl text-on-surface md:text-5xl">
            Interactive HVI Assessment
          </h2>
          <p className="mx-auto mt-4 md:mt-5 max-w-3xl text-sm md:text-base leading-7 text-on-surface-variant px-4">
            Experience a simplified Human Vulnerability Index evaluation
            powered by behavioral cyber risk analytics and adaptive threat intelligence.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-outline-variant/20 bg-surface-container-lowest shadow-2xl">
          {/* Global Theme Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

          <div className="relative z-10 flex min-h-[100svh] md:min-h-[700px] flex-col p-6 sm:p-8 md:p-14">
            <AnimatePresence mode="wait">
              
              {/* INTRO */}
              {stage === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="flex flex-1 flex-col items-center justify-center py-8"
                >
                  <div className="mb-6 md:mb-8 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full border border-tertiary/20 bg-tertiary/10">
                    <BrainCircuit className="h-10 w-10 md:h-12 md:w-12 text-tertiary pulse-gold" />
                  </div>

                  <h3 className="max-w-2xl text-center font-display text-3xl md:text-4xl leading-tight text-on-surface">
                    Evaluate Human-Centric Cyber Risk Exposure
                  </h3>

                  <p className="mt-4 md:mt-6 max-w-2xl text-center text-sm md:text-base leading-relaxed text-on-surface-variant">
                    Simulate a behavioral cybersecurity evaluation 
                  </p>

                  <div className="mt-10 md:mt-12 grid w-full max-w-4xl gap-4 md:gap-5 md:grid-cols-3">
                    <FeatureCard
                      icon={ShieldCheck}
                      title="Behavioral Intelligence"
                      text="Analyze user-driven cybersecurity exposure patterns."
                    />
                    <FeatureCard
                      icon={Radar}
                      title="Threat Correlation"
                      text="Identify adaptive human attack surfaces and risk signals."
                    />
                    <FeatureCard
                      icon={Lock}
                      title="Human Risk Modeling"
                      text="Generate Human Vulnerability Indicators from behavioral analytics."
                    />
                  </div>

                  <button
                    onClick={startAssessment}
                    className="btn-gold mt-10 md:mt-14 inline-flex w-full md:w-auto justify-center items-center gap-3 rounded-xl px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] transition-transform hover:scale-105 active:scale-95"
                  >
                    Start Assessment
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </motion.div>
              )}

              {/* QUESTIONS */}
              {stage === "questions" && (
                <motion.div
                  key="questions"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  className="mx-auto flex flex-1 w-full max-w-5xl flex-col justify-center py-6 md:py-0"
                >
                  <div className="mb-6 md:mb-10 flex items-end justify-between">
                    <div>
                      <p className="mb-1 md:mb-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-tertiary">
                        Behavioral Assessment
                      </p>
                      <h3 className="text-2xl md:text-3xl font-semibold text-on-surface">
                        Question {questionIndex + 1}
                      </h3>
                    </div>
                    <div className="text-xs md:text-sm font-mono text-on-surface-variant mb-1">
                      {questionIndex + 1} / {questions.length}
                    </div>
                  </div>

                  <div className="mb-8 md:mb-10 h-1.5 overflow-hidden rounded-full bg-surface-container-highest">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((questionIndex + 1) / questions.length) * 100}%`,
                      }}
                      className="h-full bg-gradient-to-r from-primary to-tertiary"
                    />
                  </div>

                  <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1fr_320px]">
                    {/* LEFT - Options */}
                    <div>
                      <h4 className="mb-6 md:mb-8 text-xl md:text-3xl leading-snug md:leading-tight text-on-surface">
                        {currentQuestion.question}
                      </h4>

                      <div className="flex flex-col gap-3 md:gap-4">
                        {currentQuestion.options.map((option, index) => (
                          <motion.button
                            key={option}
                            whileHover={{ scale: 1.02, x: 4 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => handleAnswer(index)}
                            className="glass-panel group rounded-2xl p-4 md:p-6 text-left transition-all hover:border-tertiary/40 hover:bg-tertiary/10"
                          >
                            <span className="text-sm md:text-base leading-relaxed text-on-surface-variant group-hover:text-on-surface">
                              {option}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT - Live Telemetry */}
                    <div className="glass-panel h-fit rounded-3xl p-5 md:p-6">
                      <p className="mb-4 md:mb-5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                        Live Behavioral Signals
                      </p>
                      <div className="space-y-3 md:space-y-4">
                        <TelemetryItem label="Credential Hygiene" value="Analyzing..." />
                        <TelemetryItem label="Trust Exploitation Risk" value="Elevated" />
                        <TelemetryItem label="Phishing Resistance" value="Moderate" />
                        <TelemetryItem label="Endpoint Discipline" value="Strong" />
                        <TelemetryItem label="Remote Access Exposure" value="Low" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* PROCESSING */}
              {stage === "processing" && (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-1 flex-col items-center justify-center py-10"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="relative mb-8 md:mb-10 flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-full border border-tertiary/20"
                  >
                    <div className="absolute inset-3 md:inset-4 rounded-full border border-dashed border-tertiary/30" />
                    <div className="absolute inset-8 md:inset-10 rounded-full border border-tertiary/10" />
                    <Radar className="h-10 w-10 md:h-14 md:w-14 text-tertiary" />
                  </motion.div>

                  <h3 className="mb-4 md:mb-5 text-2xl md:text-3xl font-semibold text-on-surface text-center">
                    AI Behavioral Processing
                  </h3>

                  <div className="h-6 mb-6 md:mb-8 text-center">
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={processingIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-sm md:text-base text-on-surface-variant px-4"
                      >
                        {processingTexts[processingIndex]}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <div className="h-1.5 w-full max-w-xl overflow-hidden rounded-full bg-surface-container-highest">
                    <motion.div
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-primary to-tertiary"
                    />
                  </div>

                  <div className="mt-10 md:mt-12 grid w-full max-w-4xl gap-3 md:gap-4 md:grid-cols-3">
                    <ProcessingCard title="Telemetry Analysis" value="ACTIVE" />
                    <ProcessingCard title="Behavioral Correlation" value="SCANNING" />
                    <ProcessingCard title="Threat Modeling" value="PROCESSING" />
                  </div>
                </motion.div>
              )}

              {/* RESULTS */}
              {stage === "results" && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-1 flex-col py-6 md:py-0"
                >
                  <div className="mb-8 md:mb-12 text-center">
                    <p className="mb-2 md:mb-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] text-tertiary">
                      Intelligence Result
                    </p>
                    <h3 className="font-display text-4xl md:text-5xl text-on-surface drop-shadow-[0_0_15px_rgba(231,193,133,0.2)]">
                      HVI Score: <span className="text-tertiary">742</span>
                    </h3>
                    <p className="mt-3 md:mt-4 text-sm md:text-base text-on-surface-variant max-w-lg mx-auto">
                      Moderate adaptive cyber resilience detected across behavioral indicators.
                    </p>
                  </div>

                  <div className="grid gap-6 md:gap-8 lg:grid-cols-[1fr_1fr_1fr] xl:grid-cols-[320px_1fr_360px]">
                    
                    {/* SCORE WIDGET */}
                    <div className="glass-panel rounded-3xl p-6 md:p-8">
                      <div className="mb-8 flex justify-center">
                        <div className="relative flex h-40 w-40 md:h-52 md:w-52 items-center justify-center rounded-full border-8 border-tertiary/20 shadow-[0_0_30px_rgba(231,193,133,0.1)]">
                          <div className="text-center">
                            <div className="text-4xl md:text-6xl font-bold text-on-surface">
                              742
                            </div>
                            <div className="mt-1 md:mt-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                              HVI Index
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 md:space-y-5">
                        <MetricBar label="Phishing Awareness" value={78} />
                        <MetricBar label="Password Hygiene" value={72} />
                        <MetricBar label="MFA Discipline" value={84} />
                        <MetricBar label="Social Engineering" value={63} />
                      </div>
                    </div>

                    {/* RADAR PLACEHOLDER */}
                    <div className="glass-panel rounded-3xl p-6 md:p-8 flex flex-col">
                      <p className="mb-6 md:mb-8 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                        Behavioral Risk Surface
                      </p>
                      <div className="flex flex-1 min-h-[250px] md:min-h-[300px] items-center justify-center rounded-2xl border border-dashed border-outline-variant/30 bg-surface-container-lowest/50">
                        <div className="text-center px-4">
                          <ShieldAlert className="mx-auto mb-4 md:mb-5 h-10 w-10 md:h-14 md:w-14 text-primary opacity-50" />
                          <p className="text-base md:text-lg text-on-surface">
                            Radar Visualization
                          </p>
                          <p className="mt-2 text-xs md:text-sm text-on-surface-variant">
                            Behavioral risk distribution map
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* INSIGHTS */}
                    <div className="space-y-3 md:space-y-4 flex flex-col justify-between">
                      <div className="space-y-3 md:space-y-4">
                        {insights.map((insight) => (
                          <div
                            key={insight.title}
                            className="glass-panel rounded-2xl p-4 md:p-5"
                          >
                            <p className="mb-1.5 md:mb-2 text-sm font-semibold text-on-surface">
                              {insight.title}
                            </p>
                            <p className="text-xs md:text-sm leading-relaxed text-on-surface-variant">
                              {insight.text}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 space-y-3">
                        <button className="btn-gold w-full rounded-xl px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em]">
                          Launch Full HVI Assessment
                        </button>

                        <button
                          onClick={resetAssessment}
                          className="btn-ghost-gold w-full rounded-xl px-6 py-4 text-[12px] font-bold uppercase tracking-[0.18em]"
                        >
                          Restart Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SUB-COMPONENTS */

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="glass-panel rounded-2xl p-5 md:p-6 transition-transform hover:-translate-y-1 duration-300">
      <Icon className="mb-4 md:mb-5 h-7 w-7 md:h-8 md:w-8 text-tertiary" />
      <h4 className="mb-2 text-base md:text-lg font-semibold text-on-surface">
        {title}
      </h4>
      <p className="text-xs md:text-sm leading-relaxed text-on-surface-variant">
        {text}
      </p>
    </div>
  );
}

function TelemetryItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl md:rounded-2xl border border-outline-variant/20 bg-surface-container/30 p-3 md:p-4">
      <p className="mb-1 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
        {label}
      </p>
      <p className="text-xs md:text-sm font-semibold text-on-surface">
        {value}
      </p>
    </div>
  );
}

function ProcessingCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="glass-panel rounded-xl md:rounded-2xl p-4 md:p-5">
      <p className="mb-1.5 md:mb-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
        {title}
      </p>
      <p className="text-xs md:text-sm font-semibold text-tertiary">
        {value}
      </p>
    </div>
  );
}

function MetricBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-1.5 md:mb-2 flex items-center justify-between">
        <span className="text-xs md:text-sm text-on-surface-variant">
          {label}
        </span>
        <span className="text-xs md:text-sm font-semibold text-on-surface">
          {value}
        </span>
      </div>
      <div className="h-1.5 md:h-2 overflow-hidden rounded-full bg-surface-container-highest">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-tertiary"
        />
      </div>
    </div>
  );
}