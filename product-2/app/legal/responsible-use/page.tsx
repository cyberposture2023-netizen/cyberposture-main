import type { Metadata } from "next";

export const metadata: Metadata = { title: "Responsible Use" };

export default function ResponsibleUsePage() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-[760px] px-7 py-16">
        <h1 className="font-display font-semibold text-[36px] tracking-tighter text-navy-700 mb-4">
          Responsible Use
        </h1>
        <p className="text-[13.5px] text-slate-250 mb-8">Effective date: coming soon</p>
        <div className="text-[15.5px] leading-[1.75] text-slate-450">
          <p className="mb-5">
            CyberPosture's platforms are designed for legitimate organizational risk management,
            security program development, and compliance activities. Use of CyberPosture products
            and services is subject to responsible use guidelines.
          </p>
          <p>
            A full responsible use policy will be published alongside platform availability.
            Questions?{" "}
            <a href="/contact" className="text-teal-600 underline underline-offset-2">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
