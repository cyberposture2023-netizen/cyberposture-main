// components/ThreatSimulationSection.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ScenarioOption = {
  label: string;
  score: number;
  result: {
    status: "safe" | "danger" | "neutral";
    title: string;
    items: string[];
  };
};

type Scenario = {
  title: string;
  type: string;
  body: string;
  options: ScenarioOption[];
};

const scenarios: Scenario[] = [
  {
    title: "Urgent Payroll Update",
    type: "Email",
    body: "Your salary details require verification within 24 hours.",
    options: [
      {
        label: "Trust & Open",
        score: 0,
        result: {
          status: "danger",
          title: "Credential Harvested",
          items: [
            "Company email exposed",
            "Employee ID captured",
            "MFA reset opportunity created",
          ],
        },
      },
      {
        label: "Inspect Sender",
        score: 35,
        result: {
          status: "safe",
          title: "Threat Detected",
          items: [
            "Spoofed domain identified",
            "Credentials protected",
            "Attack interrupted",
          ],
        },
      },
      {
        label: "Delete",
        score: 20,
        result: {
          status: "neutral",
          title: "Threat Avoided",
          items: [
            "No credentials shared",
            "Threat not reported",
            "Potential risk remains",
          ],
        },
      },
    ],
  },

  {
    title: "CEO Voice Message",
    type: "Deepfake",
    body: "Approve an urgent transfer before the board meeting.",
    options: [
      {
        label: "Approve",
        score: 0,
        result: {
          status: "danger",
          title: "Transfer Approved",
          items: [
            "Funds redirected",
            "Potential fraud event",
            "Investigation required",
          ],
        },
      },
      {
        label: "Verify Identity",
        score: 35,
        result: {
          status: "safe",
          title: "Deepfake Detected",
          items: [
            "Voice inconsistencies identified",
            "Request verified",
            "Attack prevented",
          ],
        },
      },
      {
        label: "Escalate",
        score: 30,
        result: {
          status: "safe",
          title: "Security Team Notified",
          items: [
            "Investigation initiated",
            "Threat contained",
            "Incident logged",
          ],
        },
      },
    ],
  },

  {
    title: "Recruiter Outreach",
    type: "Social Engineering",
    body: "Verify company credentials to continue the hiring process.",
    options: [
      {
        label: "Provide Information",
        score: 0,
        result: {
          status: "danger",
          title: "Information Harvested",
          items: [
            "Corporate details collected",
            "Target profile enriched",
            "Future attacks become easier",
          ],
        },
      },
      {
        label: "Verify Source",
        score: 35,
        result: {
          status: "safe",
          title: "Suspicious Account Found",
          items: [
            "Fake recruiter identified",
            "Attack blocked",
            "Credentials protected",
          ],
        },
      },
      {
        label: "Report Profile",
        score: 30,
        result: {
          status: "safe",
          title: "Threat Reported",
          items: [
            "Platform notified",
            "Users protected",
            "Threat visibility increased",
          ],
        },
      },
    ],
  },
];

export default function ThreatSimulationSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState<
    ScenarioOption["result"] | null
  >(null);

  const currentScenario = scenarios[currentStep];

  function handleChoice(option: ScenarioOption) {
    setScore((prev) => prev + option.score);
    setResult(option.result);
  }

  function nextScenario() {
    setResult(null);

    if (currentStep < scenarios.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    setCurrentStep(scenarios.length);
  }

  const isFinished = currentStep >= scenarios.length;

  return (
    <section className="relative overflow-hidden border-y border-tertiary/30 bg-[#050706] px-6 py-20 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(231,193,133,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(177,204,197,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
          Live Threat Simulation
        </p>

        <h2 className="mt-6 font-display text-5xl leading-[0.95] text-white md:text-7xl">
          Would You Spot The Threat?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Most cyberattacks do not begin with malware.
          They begin with a decision.
        </p>

        <AnimatePresence mode="wait">
          {!isFinished ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="mt-12 rounded-3xl border border-white/15 bg-white/[0.05] p-8 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <p className="text-[11px] uppercase tracking-[0.16em] text-tertiary">
                  Scenario {currentStep + 1} / {scenarios.length}
                </p>

                <span className="rounded-full border border-tertiary/25 bg-tertiary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-tertiary">
                  {currentScenario.type}
                </span>
              </div>

              <h3 className="mt-5 text-3xl font-semibold text-white">
                {currentScenario.title}
              </h3>

              <p className="mt-4 text-white/70">
                {currentScenario.body}
              </p>

              {!result && (
                <div className="mt-8 grid gap-3">
                  {currentScenario.options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleChoice(option)}
                      className="rounded-xl border border-tertiary/25 bg-tertiary/10 p-4 text-left text-white transition-all hover:border-tertiary hover:bg-tertiary/15"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}

              {result && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 rounded-2xl border border-tertiary/25 bg-black/40 p-6"
                >
                  <h4 className="text-2xl font-semibold text-white">
                    {result.title}
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {result.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-white/70"
                      >
                        ✓ {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={nextScenario}
                    className="btn-gold mt-8 rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-[0.08em]"
                  >
                    Continue
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="score"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 rounded-3xl border border-tertiary/30 bg-white/[0.05] p-10 text-center backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.16em] text-tertiary">
                Threat Readiness Report
              </p>

              <div className="mt-6 font-display text-8xl leading-none text-tertiary md:text-9xl">
                {score}
              </div>

              <h3 className="mt-4 text-4xl font-semibold text-white">
                Threat Readiness Score
              </h3>

              <p className="mx-auto mt-5 max-w-2xl text-white/70">
                These were simplified examples.
                See how you or your team perform against
                real-world threats.
              </p>

              <a
                href="#assessment"
                className="btn-gold mt-8 inline-flex rounded-xl px-8 py-4 text-xs font-bold uppercase tracking-[0.08em]"
              >
                Take Full Assessment
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}