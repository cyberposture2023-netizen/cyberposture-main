import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import AssessmentQuiz from "@/components/hvi/AssessmentQuiz";
import HviArchitecture from "@/components/hvi/HviArchitecture";
import InherentResidual from "@/components/hvi/InherentResidual";
import WorkforceDashboard from "@/components/hvi/WorkforceDashboard";
import SciencePrivacy from "@/components/hvi/SciencePrivacy";

export const metadata: Metadata = {
  title: "Human Vulnerability Index (HVI)",
  description:
    "A 300–850 score for behavior-driven human cyber risk. Take the live HVI assessment and see your score, top risk areas, and personalized recommendations.",
};

export default function HviPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="text-white"
        style={{ background: "linear-gradient(165deg,#080f1e,#1a65b8)" }}
      >
        <div className="container-content py-[72px] pb-16">
          <div className="font-mono text-[11.5px] tracking-label uppercase text-teal-bright mb-3.5">
            CyberPosture HVI · Human Vulnerability Index
          </div>
          <h1 className="font-display font-semibold text-[46px] leading-[1.08] tracking-tighter text-white mb-4 max-w-[760px]">
            Measure the human side of cyber risk.
          </h1>
          <p className="text-[18px] leading-[1.55] mb-3.5 max-w-[640px]" style={{ color: "#c8d4e5" }}>
            HVI gives people and organizations a simple, measurable score for
            behavior-driven cyber risk.
          </p>
          <p className="text-[15px] leading-[1.6] mb-7 max-w-[660px]" style={{ color: "#8fa2bd" }}>
            A privacy-first human-risk intelligence platform using a 300–850
            score to help you understand human cyber vulnerability, identify the
            behaviors and controls that matter most, and track improvement over
            time.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="#assessment"
              className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold text-navy-900 bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              Take HVI Assessment
            </Link>
            <Link
              href="/contact?i=Request+HVI+Demo"
              className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold text-white transition-colors"
              style={{
                background: "rgba(255,255,255,.1)",
                border: "1px solid rgba(255,255,255,.25)",
              }}
            >
              Request HVI Demo
            </Link>
          </div>
        </div>
      </section>

      <Suspense>
        <AssessmentQuiz />
      </Suspense>
      <HviArchitecture />
      <InherentResidual />
      <WorkforceDashboard />
      <SciencePrivacy />
    </>
  );
}
