import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <section className="bg-card">
      <div className="mx-auto max-w-[760px] px-7 py-16">
        <h1 className="font-display font-semibold text-[36px] tracking-tighter text-navy-700 mb-4">
          Terms of Use
        </h1>
        <p className="text-[13.5px] text-slate-250 mb-8">Effective date: coming soon</p>
        <div className="text-[15.5px] leading-[1.75] text-slate-450">
          <p>
            Full terms of use will be published prior to the launch of user accounts and
            platform features. Use of this website is subject to CyberPosture's standard policies.
            If you have questions,{" "}
            <a href="/contact" className="text-teal-600 underline underline-offset-2">contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
