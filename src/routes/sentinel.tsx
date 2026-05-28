import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/sentinel")({
  head: () => ({
    meta: [
      { title: "Sentinel AI — Coming Soon | CyberPosture" },
      {
        name: "description",
        content:
          "Autonomous cyber threat intelligence and organizational risk visibility. Join the early-access cohort.",
      },
      { property: "og:title", content: "Sentinel AI — Coming Soon" },
      { property: "og:description", content: "Anticipating vectors before they materialize." },
    ],
  }),
  component: Sentinel,
});

function Sentinel() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="flex-grow flex flex-col items-center justify-center relative overflow-hidden bg-grid-pattern pt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-7xl w-full px-8 py-16 z-10 relative flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-surface-container-high/50 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-tertiary pulse-gold" />
            <span className="text-[12px] font-bold tracking-[0.12em] uppercase text-tertiary">
              Project In Development
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-on-surface mb-3 max-w-4xl tracking-tighter">
            Sentinel <span className="text-tertiary italic">AI</span>
          </h1>
          <p className="text-on-surface-variant max-w-2xl mb-10">
            Autonomous cyber threat intelligence and organizational risk visibility platform.
            Anticipating vectors before they materialize.
          </p>

          <div className="w-full max-w-3xl aspect-[16/9] rounded-xl glass-panel relative overflow-hidden mb-10 flex items-center justify-center border border-white/10"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD0wy9O_s7f_7S4DRpt2vB5gIc_gEh8pykWKEEUUTHos3LpC8DAEI6UWB4pcVNMomUd70n-Rfe_sbEmOhIoygsGCUa_20bxbet2YUqm55UoYyHnANrEsZUe_kbU3NhUGmmQp6d-g2D4p-YVhkM3kl_op5IkP2l_w_W0U_-h2jNIOagUU4xhTxDeCyzm5Nd-Z0p2O8wCIdEZA8Orha2hq6uU74JfSY9GKVTqH2G5VGeqiKbf2pvDX3lFhJ7wNl4GLbPwlbtUWL1froCj')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-primary-container/80 backdrop-blur-[2px]" />
            <div className="relative z-10 flex flex-col items-center">
              <span
                className="material-symbols-outlined text-[64px] text-tertiary mb-4 opacity-80"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                hub
              </span>
              <h3 className="text-lg font-semibold text-on-surface">Neural Core Initializing</h3>
              <p className="text-sm text-on-surface-variant mt-2">
                Connecting to global telemetry streams…
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-tertiary/50 blur-[1px] scan-line" />
          </div>

          <div className="max-w-md w-full glass-panel p-6 rounded-xl text-left">
            <h4 className="text-lg font-semibold text-on-surface mb-2">Request Early Access</h4>
            <p className="text-sm text-on-surface-variant mb-6">
              Join the elite cohort of security leaders testing the next generation of threat intelligence.
            </p>
            {submitted ? (
              <div className="text-tertiary text-sm flex items-center gap-2">
                <span className="material-symbols-outlined">check_circle</span>
                You're on the list. We'll be in touch.
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Corporate Email Address"
                  className="ghost-input w-full text-sm rounded-lg px-4 py-3 placeholder:text-on-surface-variant/50"
                />
                <button
                  type="submit"
                  className="w-full btn-gold px-6 py-3 rounded-lg text-[12px] font-bold uppercase tracking-[0.08em] flex items-center justify-center gap-2"
                >
                  Notify Me
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}