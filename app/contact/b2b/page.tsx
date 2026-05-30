
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ContactB2BPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Enterprise Inquiry
          </p>

          <h1 className="mt-4 font-display text-5xl text-on-surface">
            Talk To Our Enterprise Team
          </h1>

          <p className="mt-6 text-lg leading-8 text-on-surface-variant">
            Learn how Human Vulnerability Intelligence can help your
            organization measure, monitor, and reduce human risk.
          </p>

          <form className="mt-12 grid gap-5">
            <input className="ghost-input p-4" placeholder="Full Name" />

            <input
              className="ghost-input p-4"
              placeholder="Corporate Email"
            />

            <input
              className="ghost-input p-4"
              placeholder="Company Name"
            />

            <select className="ghost-input p-4">
              <option>Employee Count</option>
              <option>1–50</option>
              <option>51–200</option>
              <option>201–500</option>
              <option>501–1000</option>
              <option>1000+</option>
            </select>

            <select className="ghost-input p-4">
              <option>Primary Security Concern</option>
              <option>Human Risk Visibility</option>
              <option>Phishing</option>
              <option>Insider Risk</option>
              <option>Compliance</option>
              <option>Other</option>
            </select>

            <textarea
              rows={8}
              className="ghost-input resize-none p-4"
              placeholder="Tell us about your organization and challenge"
            />

            <button className="btn-gold rounded-xl px-8 py-4">
              Request Consultation
            </button>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
