import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CyberPosture — take the HVI assessment, request a demo, join the AI Risk early-access program, or ask about careers.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(165deg,#080f1e,#1a65b8)" }}>
        <div className="container-content py-16 pb-14">
          <h1 className="font-display font-semibold text-[40px] leading-[1.1] tracking-tighter text-white mb-[14px] max-w-[680px]">
            Let's start with the risk you need to measure.
          </h1>
          <p className="text-[16px] leading-[1.6] max-w-[600px]" style={{ color: "#a7b8d0" }}>
            Tell us what you're trying to do, and we'll follow up with the next best step.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-surface-subtle border-b border-surface-border">
        <div className="mx-auto max-w-[920px] px-7 py-14">
          <Suspense fallback={<div className="h-[400px]" />}>
            <ContactForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
