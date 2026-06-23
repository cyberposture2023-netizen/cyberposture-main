import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1100px 460px at 82% -8%, rgba(18,168,155,.20), transparent 60%), " +
          "radial-gradient(880px 480px at 6% 120%, rgba(106,90,224,.22), transparent 60%), " +
          "#061427",
      }}
    >
      {/* Scan line sweep */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full animate-cp-scan"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(18,168,155,.045) 40%, rgba(18,168,155,.08) 50%, rgba(18,168,155,.045) 60%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="container-content relative py-24 md:py-28 z-10">
        <div className="flex items-stretch gap-7">
          {/* Left accent bar */}
          <div
            className="w-1 rounded flex-none"
            style={{ background: "linear-gradient(180deg,#12A89B,#6A5AE0)" }}
            aria-hidden="true"
          />

          <div className="flex-1 min-w-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 font-mono text-[11.5px] tracking-[.14em] uppercase text-[#6FB7C9] mb-6">
              <span
                className="w-[7px] h-[7px] rounded-full bg-teal-500 animate-cp-pulse"
                style={{ boxShadow: "0 0 0 4px rgba(18,168,155,.18)" }}
                aria-hidden="true"
              />
              Risk intelligence for people &amp; AI
            </div>

            {/* H1 */}
            <h1 className="font-display font-bold text-4xl md:text-[60px] leading-[1.05] tracking-tightest text-white mb-6 max-w-[920px]">
              Measure the human side of cyber risk.
              <br />
              <span style={{ color: "#7FE3D7" }}>
                Adopt and deploy AI with confidence.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg leading-[1.55] mb-10 max-w-[640px]" style={{ color: "#A9C0DD" }}>
              Two focused platforms for two under-measured domains — human
              behavior and enterprise AI adoption.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 mb-12">
              <Link
                href="/hvi"
                className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold bg-white text-[#061427] hover:bg-teal-50 transition-colors"
              >
                Explore Platforms
              </Link>
              <Link
                href="/hvi#assessment"
                className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold text-white transition-colors"
                style={{
                  background: "linear-gradient(90deg,#12A89B,#0E8C81)",
                  boxShadow: "0 12px 30px -10px rgba(18,168,155,.7)",
                }}
              >
                Take HVI Assessment
              </Link>
              <Link
                href="/contact?i=Join+AI+Risk+%26+Governance+Early+Access"
                className="inline-flex items-center px-6 py-3.5 rounded-[10px] text-[15px] font-semibold transition-colors"
                style={{
                  color: "#D9CEFF",
                  background: "rgba(106,90,224,.2)",
                  border: "1px solid rgba(141,124,255,.45)",
                }}
              >
                Join AI Early Access
              </Link>
            </div>

            {/* Stat chips */}
            <div className="flex flex-wrap gap-3.5">
              {[
                { value: "300–850", label: "HVI score range", color: "#7FE3D7" },
                { value: "10",      label: "Human risk dimensions", color: "#fff" },
                {
                  value: "Discover · Assess · Govern · Evidence",
                  label: "AI governance pillars",
                  color: "#C4B8FF",
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
                  <div className="text-xs mt-0.5" style={{ color: "#8AA1BF" }}>
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
