
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ContactB2CPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-grow px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-tertiary">
            Personal Support
          </p>

          <h1 className="mt-4 font-display text-5xl text-on-surface">
            Contact Personal Support
          </h1>

          <p className="mt-6 text-lg leading-8 text-on-surface-variant">
            Questions about your Human Vulnerability Index assessment,
            account, billing, or personal protection services?
          </p>

          <form className="mt-12 grid gap-5">
            <input className="ghost-input p-4" placeholder="Full Name" />
            <input className="ghost-input p-4" placeholder="Email Address" />
            <input className="ghost-input p-4" placeholder="Account ID (Optional)" />

            <textarea
              rows={8}
              className="ghost-input resize-none p-4"
              placeholder="How can we help?"
            />

            <button className="btn-gold rounded-xl px-8 py-4">
              Send Message
            </button>
          </form>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
