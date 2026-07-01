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
          <p className="text-[18px] leading-[1.55] mb-7 max-w-[640px]" style={{ color: "#c8d4e5" }}>
           The Human Vulnerability Index (HVI) translates human cybersecurity behaviors into a clear, measurable score. Instead of focusing only on systems and technology, HVI helps identify the human factors that contribute to cyber risk.
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

      <section
  className="text-white"
  style={{ background: "linear-gradient(165deg,#080f1e,#1a65b8)" }}
>
  <div className="container-content py-16">
    <div className="font-mono text-[11.5px] tracking-label uppercase text-teal-bright mb-3.5">
      Human Vulnerability Index
    </div>

    <h2 className="font-display font-semibold text-[38px] leading-[1.1] tracking-tighter mb-5 max-w-[760px]">
      What HVI Does 
    </h2>

    <p
      className="text-[17px] leading-[1.7] max-w-[760px] mb-10"
      style={{ color: "#c8d4e5" }}
    >
      CyberPosture HVI is a privacy-first human-risk intelligence platform that
      measures the human side of cyber risk and expresses it as a single,
      intuitive score. HVI gives individuals, security teams, and organizations
      a clear, measurable view of cyber vulnerability—showing where exposure
      exists, how it is changing over time, and what actions can reduce risk.
    </p>

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Measure Human Risk",
          description:
            "Translate human cyber vulnerability into a clear, easy-to-understand score.",
        },
        {
          title: "Reveal Exposure",
          description:
            "Identify behaviors, habits, and risk factors that contribute most to cyber exposure.",
        },
        {
          title: "Drive Improvement",
          description:
            "Track progress over time and measure the impact of awareness and security initiatives.",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="rounded-2xl p-6"
          style={{
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.12)",
          }}
        >
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-sm leading-6 text-slate-300">
            {item.description}
          </p>
        </div>
      ))}
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
