import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 460px at 82% -8%, rgba(0,184,217,.20), transparent 60%), " +
          "radial-gradient(880px 480px at 6% 120%, rgba(26,101,184,.22), transparent 60%), " +
          "#03080f",
      }}
    >
      {/* Scan line sweep */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full animate-cp-scan"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(0,184,217,.045) 40%, rgba(0,184,217,.08) 50%, rgba(0,184,217,.045) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="container-content relative py-24 md:py-28 z-10">
        <div className="flex items-stretch gap-7">
          {/* Left accent bar */}
          <div
            className="w-1 rounded flex-none"
            style={{ background: "linear-gradient(180deg,#00b8d9,#1a65b8)" }}
            aria-hidden="true"
          />

          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[.14em] uppercase text-[#5fe9ff] mb-6">
              <span
                className="w-[7px] h-[7px] rounded-full bg-teal-500 animate-cp-pulse"
                style={{ boxShadow: "0 0 0 4px rgba(0,184,217,.18)" }}
                aria-hidden="true"
              />
              Risk intelligence for people &amp; AI
            </div>

            {/* H1 */}
            <h1 className="font-display font-bold text-4xl md:text-[60px] leading-[1.05] tracking-tightest text-white mb-6 max-w-[920px]">
              Measure the human side of cyber risk.
              <br />
              <span style={{ color: "#5fe9ff" }}>
                Adopt and deploy AI with confidence.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg leading-[1.55] mb-10 max-w-[640px]" style={{ color: "#8fa2bd" }}>
              Two focused platforms for two under-measured domains — human
              behavior and enterprise AI adoption.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 mb-12">
              <Link
                href="/hvi"
                className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold bg-primary text-primary-foreground hover:bg-teal-50 transition-colors"
              >
                Explore Platforms
              </Link>
              <Link
                href="/hvi#assessment"
                className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold text-white transition-colors"
                style={{
                  background: "linear-gradient(90deg,#00b8d9,#039fc0)",
                  boxShadow: "0 12px 30px -10px rgba(0,184,217,.7)",
                }}
              >
                Take HVI Assessment
              </Link>
              <Link
                href="/contact?i=Join+AI+Risk+%26+Governance+Early+Access"
                className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold transition-colors"
                style={{
                  color: "#8bdfff",
                  background: "rgba(26,101,184,.2)",
                  border: "1px solid rgba(0,184,217,.45)",
                }}
              >
                Join AI Early Access
              </Link>
            </div>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3.5">
              {[
                { value: "300–850", label: "HVI score range", color: "#5fe9ff" },
                { value: "10",      label: "Human risk dimensions", color: "#e8edf5" },
                {
                  value: "Discover · Assess · Govern · Evidence",
                  label: "AI governance pillars",
                  color: "#8bdfff",
                },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="rounded-xl px-5 py-3.5"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.12)",
                  }}
                >
                  <div
                    className="font-display font-bold text-[22px] leading-tight"
                    style={{ color: chip.color }}
                  >
                    {chip.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#7a90b0" }}>
                    {chip.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
