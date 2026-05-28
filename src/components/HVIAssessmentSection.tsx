
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  ShieldCheck,
  Wifi,
  KeyRound,
  ShieldAlert,
  Radar,
  BrainCircuit,
  Lock,
  ChevronRight,
} from "lucide-react";

type Stage =
  | "intro"
  | "questions"
  | "processing"
  | "results";

const questions = [
  {
    id: 1,
    question:
      "How do you typically verify unexpected email attachments or links?",
    options: [
      "I verify sender authenticity before interacting",
      "I usually inspect but sometimes open quickly",
      "I often trust internal-looking emails immediately",
    ],
  },
  {
    id: 2,
    question:
      "How frequently do you reuse passwords across services or platforms?",
    options: [
      "Never — all passwords are unique",
      "Occasionally across low-risk services",
      "Frequently across multiple accounts",
    ],
  },
  {
    id: 3,
    question:
      "How do you respond to urgent requests from unknown executives or vendors?",
    options: [
      "I independently verify requests",
      "I sometimes comply if the request feels urgent",
      "I usually act immediately to avoid delays",
    ],
  },
  {
    id: 4,
    question:
      "How often do you access work systems using public WiFi networks?",
    options: [
      "Rarely or only with secure VPN access",
      "Occasionally during travel",
      "Frequently without additional protection",
    ],
  },
  {
    id: 5,
    question:
      "How do you validate MFA prompts or unexpected login requests?",
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
    <section
      id="hvi-assessment"
      className="relative overflow-hidden py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-tertiary">
            Human Vulnerability Intelligence
          </p>

          <h2 className="font-display text-3xl text-on-surface md:text-5xl">
            Interactive HVI Assessment
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-on-surface-variant">
            Experience a simplified Human Vulnerability Intelligence evaluation
            powered by behavioral cyber risk analytics and adaptive threat
            intelligence.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#07110F]">
          {/* grid */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative z-10 min-h-[700px] p-8 md:p-14">
            {/* INTRO */}
            <AnimatePresence mode="wait">
              {stage === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="flex min-h-[620px] flex-col items-center justify-center"
                >
                  <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-500/10">
                    <BrainCircuit className="h-12 w-12 text-emerald-300" />
                  </div>

                  <h3 className="max-w-2xl text-center text-4xl font-semibold leading-tight text-white">
                    Evaluate Human-Centric Cyber Risk Exposure
                  </h3>

                  <p className="mt-6 max-w-2xl text-center text-base leading-8 text-zinc-400">
                    Simulate a behavioral cybersecurity evaluation covering
                    phishing awareness, password hygiene, social engineering
                    resistance, MFA discipline, and remote access behavior.
                  </p>

                  <div className="mt-12 grid w-full max-w-4xl gap-5 md:grid-cols-3">
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
                    className="mt-14 inline-flex items-center gap-3 rounded-xl bg-emerald-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all hover:scale-[1.02]"
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
                  className="mx-auto flex min-h-[620px] max-w-5xl flex-col justify-center"
                >
                  <div className="mb-10 flex items-center justify-between">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                        Behavioral Assessment
                      </p>

                      <h3 className="text-3xl font-semibold text-white">
                        Question {questionIndex + 1}
                      </h3>
                    </div>

                    <div className="text-sm text-zinc-500">
                      {questionIndex + 1} / {questions.length}
                    </div>
                  </div>

                  <div className="mb-10 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${
                          ((questionIndex + 1) / questions.length) * 100
                        }%`,
                      }}
                      className="h-full bg-emerald-400"
                    />
                  </div>

                  <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
                    {/* LEFT */}
                    <div>
                      <h4 className="mb-8 text-3xl leading-tight text-white">
                        {currentQuestion.question}
                      </h4>

                      <div className="flex flex-col gap-4">
                        {currentQuestion.options.map((option, index) => (
                          <motion.button
                            key={option}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => handleAnswer(index)}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-left transition-all hover:border-emerald-400/30 hover:bg-emerald-500/5"
                          >
                            <span className="text-base leading-7 text-zinc-300">
                              {option}
                            </span>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl">
                      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                        Live Behavioral Signals
                      </p>

                      <div className="space-y-4">
                        <TelemetryItem
                          label="Credential Hygiene"
                          value="Medium"
                        />

                        <TelemetryItem
                          label="Trust Exploitation Risk"
                          value="Elevated"
                        />

                        <TelemetryItem
                          label="Phishing Resistance"
                          value="Moderate"
                        />

                        <TelemetryItem
                          label="Endpoint Discipline"
                          value="Strong"
                        />

                        <TelemetryItem
                          label="Remote Access Exposure"
                          value="Low"
                        />
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
                  className="flex min-h-[620px] flex-col items-center justify-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative mb-10 flex h-40 w-40 items-center justify-center rounded-full border border-emerald-400/20"
                  >
                    <div className="absolute inset-4 rounded-full border border-dashed border-emerald-400/20" />

                    <div className="absolute inset-10 rounded-full border border-emerald-400/20" />

                    <Radar className="h-14 w-14 text-emerald-300" />
                  </motion.div>

                  <h3 className="mb-5 text-3xl font-semibold text-white">
                    AI Behavioral Processing
                  </h3>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={processingIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-8 text-base text-zinc-400"
                    >
                      {processingTexts[processingIndex]}
                    </motion.p>
                  </AnimatePresence>

                  <div className="h-2 w-full max-w-xl overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      animate={{ width: `${progress}%` }}
                      className="h-full bg-emerald-400"
                    />
                  </div>

                  <div className="mt-12 grid w-full max-w-4xl gap-4 md:grid-cols-3">
                    <ProcessingCard
                      title="Telemetry Analysis"
                      value="ACTIVE"
                    />

                    <ProcessingCard
                      title="Behavioral Correlation"
                      value="SCANNING"
                    />

                    <ProcessingCard
                      title="Threat Modeling"
                      value="PROCESSING"
                    />
                  </div>
                </motion.div>
              )}

              {/* RESULTS */}
              {stage === "results" && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="min-h-[620px]"
                >
                  <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                      Human Vulnerability Intelligence Result
                    </p>

                    <h3 className="text-5xl font-semibold text-white">
                      HVI Score: 742
                    </h3>

                    <p className="mt-4 text-zinc-400">
                      Moderate adaptive cyber resilience detected across
                      behavioral indicators.
                    </p>
                  </div>

                  <div className="grid gap-8 lg:grid-cols-[320px_1fr_360px]">
                    {/* SCORE */}
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                      <div className="mb-8 flex justify-center">
                        <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-8 border-emerald-400/20">
                          <div className="text-center">
                            <div className="text-6xl font-bold text-white">
                              742
                            </div>

                            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                              HVI Index
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <MetricBar
                          label="Phishing Awareness"
                          value={78}
                        />

                        <MetricBar
                          label="Password Hygiene"
                          value={72}
                        />

                        <MetricBar
                          label="MFA Discipline"
                          value={84}
                        />

                        <MetricBar
                          label="Social Engineering"
                          value={63}
                        />
                      </div>
                    </div>

                    {/* RADAR PLACEHOLDER */}
                    <div className="rounded-3xl border border-white/10 bg-black/20 p-8">
                      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                        Behavioral Risk Surface
                      </p>

                      <div className="flex h-[420px] items-center justify-center rounded-2xl border border-dashed border-white/10">
                        <div className="text-center">
                          <ShieldAlert className="mx-auto mb-5 h-14 w-14 text-emerald-300" />

                          <p className="text-lg text-white">
                            Radar Visualization
                          </p>

                          <p className="mt-2 text-sm text-zinc-500">
                            Behavioral risk distribution map
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* INSIGHTS */}
                    <div className="space-y-4">
                      {insights.map((insight) => (
                        <div
                          key={insight.title}
                          className="rounded-2xl border border-white/10 bg-black/20 p-5"
                        >
                          <p className="mb-2 text-sm font-semibold text-white">
                            {insight.title}
                          </p>

                          <p className="text-sm leading-6 text-zinc-500">
                            {insight.text}
                          </p>
                        </div>
                      ))}

                      <button
                        className="mt-6 w-full rounded-2xl bg-emerald-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black transition-all hover:scale-[1.01]"
                      >
                        Launch Full HVI Assessment
                      </button>

                      <button
                        onClick={resetAssessment}
                        className="w-full rounded-2xl border border-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300 transition-all hover:border-white/20"
                      >
                        Restart Demo
                      </button>
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

/* COMPONENTS */

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <Icon className="mb-5 h-8 w-8 text-emerald-300" />

      <h4 className="mb-2 text-lg font-semibold text-white">
        {title}
      </h4>

      <p className="text-sm leading-6 text-zinc-500">
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <p className="mb-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </p>

      <p className="text-sm font-semibold text-white">
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
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </p>

      <p className="text-sm font-semibold text-emerald-300">
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
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-zinc-400">
          {label}
        </span>

        <span className="text-sm font-semibold text-white">
          {value}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-emerald-400"
        />
      </div>
    </div>
  );
}
