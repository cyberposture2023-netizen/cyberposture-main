import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import UsageInventory from "@/components/ai/UsageInventory";
import AiHelpsAnswer from "@/components/ai/AiHelpsAnswer";
import AiArchitecture from "@/components/ai/AiArchitecture";
import ThreatSimulation from "@/components/ai/ThreatSimulation";
import MoreThanCompliance from "@/components/ai/MoreThanCompliance";
import FrameworkReadiness from "@/components/ai/FrameworkReadiness";

export const metadata: Metadata = {
  title: "AI Risk & Governance",
  description:
    "Continuous discovery, assessment, governance, and evidence for enterprise AI usage — from shadow tools to autonomous agents. Adopt AI with confidence.",
};

export default function AiPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(160deg,#080f1e,#0d1a30 70%,#080f1e)" }}
      >
        {/* Grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,184,217,.08) 1px, transparent 1px), " +
              "linear-gradient(90deg, rgba(0,184,217,.08) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
          aria-hidden="true"
        />
        <div className="container-content relative py-[72px] pb-16">
          {/* Early-access badge */}
          <div
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.08em] uppercase mb-5 rounded-full px-3.5 py-1.5"
            style={{
              background: "rgba(0,184,217,.16)",
              border: "1px solid rgba(0,184,217,.34)",
              color: "#8bdfff",
            }}
          >
            Early Access · Concept, Design &amp; Research
          </div>

          <h1 className="font-display font-semibold text-[46px] leading-[1.08] tracking-tighter text-white mb-4 max-w-[820px]">
            Adopt enterprise AI with confidence.
          </h1>
          <p className="text-[17px] leading-[1.6] mb-7 max-w-[730px]" style={{ color: "#a7b8d0" }}>
            AI now shows up everywhere — copilots, chatbots, embedded product features, APIs, and autonomous agents — often before anyone's watching for it.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link
              href="/contact?i=Join+AI+Risk+%26+Governance+Early+Access"
              className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold text-primary-foreground bg-primary hover:bg-brand-purple-50 transition-colors"
            >
              Join Early Access
            </Link>
            <Link
              href="/contact?i=Request+Test+Customer+Conversation"
              className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold text-white transition-colors"
              style={{
                background: "rgba(0,184,217,.2)",
                border: "1px solid rgba(0,184,217,.4)",
              }}
            >
              Request Test Customer Conversation
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
      AI Risk & Governance
    </div>

    <h2 className="font-display font-semibold text-[38px] leading-[1.1] tracking-tighter mb-5 max-w-[760px]">
      What AI Governance Does
    </h2>

    <p
      className="text-[17px] leading-[1.7] max-w-[760px] mb-10"
      style={{ color: "#c8d4e5" }}
    >
      The Cyber Posture AI Risk & Governance Platform helps organizations adopt and deploy AI with confidence by understanding and mitigating AI risk continuously — when, where, and as it occurs. As teams design and deploy a growing range of AI capabilities, the platform assesses risk at every stage . It tracks where AI is running across your organization, including the unsanctioned tools most teams never see.

    </p>

    {/* <div
      className="rounded-2xl overflow-hidden mb-10"
      style={{
        background: "rgba(255,255,255,.04)",
        border: "1px solid rgba(255,255,255,.12)",
      }}
    >
      <Image
  src="/ai-risk.png"
  alt="Diagram of AI risk across discovery, assessment, and governance stages"
  width={1200}
  height={640}
  className="w-full h-auto"
  priority
/>
    </div> */}

    <div className="grid gap-6 md:grid-cols-3">
      {[
        {
          title: "Assess AI Risk",
          description:
            "Evaluate AI systems continuously throughout development, deployment, and operation.",
        },
        {
          title: "Discover AI Usage",
          description:
            "Gain visibility into approved and unsanctioned AI tools running across the organization.",
        },
        {
          title: "Strengthen Governance",
          description:
            "Support responsible AI adoption through oversight, risk management, and compliance controls.",
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

      <UsageInventory />
      <AiHelpsAnswer />
      <AiArchitecture />
      <ThreatSimulation />
      <MoreThanCompliance />
      <FrameworkReadiness />

      {/* Early access CTA */}
      <section className="bg-card">
        <div className="container-content py-16">
          <div
            className="rounded-[20px] px-11 py-11 text-center"
            style={{ background: "linear-gradient(120deg,#0d1a30,#00b8d9)" }}
          >
            <h2 className="font-display font-semibold text-[28px] text-white mb-2.5">
              Join the AI Risk &amp; Governance early-access program.
            </h2>
            <p className="text-[15px] mx-auto mb-6 max-w-[600px]" style={{ color: "#c8d4e5" }}>
              For organizations with meaningful AI adoption, governance obligations,
              security exposure, or compliance requirements.
            </p>
            <Link
              href="/contact?i=Join+AI+Risk+%26+Governance+Early+Access"
              className="inline-flex items-center px-7 py-3.5 rounded-[10px] text-[15px] font-semibold hover:opacity-90 transition-opacity"
              style={{ color: "#0d1a30", background: "#e8edf5" }}
            >
              Join Early Access
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}