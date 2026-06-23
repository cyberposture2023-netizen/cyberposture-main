import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[760px] px-7 py-16">
        <h1 className="font-display font-semibold text-[36px] tracking-tighter text-navy-700 mb-4">
          Privacy Policy
        </h1>
        <p className="text-[13.5px] text-slate-250 mb-8">Effective date: coming soon</p>
        <div className="prose prose-slate max-w-none text-[15.5px] leading-[1.75]">
          <p className="text-slate-450">
            CyberPosture (Cyber Posture AI Inc.) is committed to protecting your privacy. A full
            privacy policy will be published prior to the launch of user accounts and data
            processing features. If you have questions in the meantime, please{" "}
            <a href="/contact" className="text-teal-600 underline underline-offset-2">contact us</a>.
          </p>
          <h2 className="font-display font-semibold text-[22px] tracking-tighter text-navy-700 mt-10 mb-3">
            Data collected on this website
          </h2>
          <p className="text-slate-450">
            The public website collects no user accounts and stores no assessment responses.
            Contact form submissions are transmitted to CyberPosture and used solely to respond
            to your inquiry.
          </p>
        </div>
      </div>
    </section>
  );
}
