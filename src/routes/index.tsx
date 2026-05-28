import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CyberPosture — Human-Centric Cyber Risk Intelligence" },
      {
        name: "description",
        content:
          "Behavioral analytics and adaptive vulnerability intelligence for modern enterprise defense.",
      },
      { property: "og:title", content: "CyberPosture — Human-Centric Cyber Risk Intelligence" },
      { property: "og:description", content: "Move beyond theoretical threats to operational human realities." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-24 pb-12 flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden min-h-[700px] flex items-center justify-center px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-container/40 via-background to-background pointer-events-none" />
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
            <div className="space-y-6">
              <h1 className="font-display text-5xl md:text-6xl text-on-surface leading-[1.05] tracking-tight">
                Human-Centric <br />
                <span className="text-gradient-gold">Cyber Risk Intelligence</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant max-w-xl">
                Behavioral analytics and adaptive vulnerability intelligence for modern
                enterprise defense. Move beyond theoretical threats to operational human realities.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/products" className="btn-gold px-8 py-3 rounded-lg font-semibold">
                  Deploy Intelligence
                </Link>
                <Link
                  to="/sentinel"
                  className="px-8 py-3 rounded-lg font-semibold border border-white/20 text-on-surface hover:bg-white/5 transition-all"
                >
                  Explore Platform
                </Link>
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden glass-panel group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Wm76cW4iunAuMWJROYUI27jO26nhJEVg76R-3h6c6Guugwb0ldnjTRWQ6pMU2SmCYcfH4EBnv3e9owrzAhu3simBqHCBzCtBsHx3OiONQkBwSYia0sH9cD1hfxF4YGfshalQssDPrr-VqlKe6l-AMAy9UoF0xl9Qbj5EwFAVc_2Bt4EIUI9HHWZ7QMItcGvxspiZFB3zWhMNBI3jWDl9P8voQkZT_yP8CZeLNlqnDvPNb3aW0IQ8T4ZIaMOlYxRn-xViRlZJ8eOa"
                alt="Cybersecurity command-center dashboard preview"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-y border-outline-variant/10 bg-surface-container-low py-8 my-12">
          <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center gap-10 md:gap-20 opacity-80">
            {[
              ["psychology", "AI-Driven Behavioral Intelligence"],
              ["monitoring", "Real-Time Telemetry Analysis"],
              ["visibility", "Enterprise Risk Visibility"],
            ].map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary">{icon}</span>
                <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-on-surface-variant">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Products showcase */}
        <section className="px-8 py-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl mb-4">Enterprise Defense Fleet</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Purpose-built intelligence platforms for comprehensive human risk management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Flagship */}
            <div className="glass-panel p-6 md:p-8 rounded-xl flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-tertiary mb-2 block">
                    Flagship
                  </span>
                  <h3 className="font-display text-2xl text-on-surface">Aegis HVI</h3>
                </div>
                <span className="material-symbols-outlined text-3xl text-primary">shield_person</span>
              </div>
              <p className="text-sm text-on-surface-variant mb-8 flex-grow">
                Our core Human Vulnerability Intelligence platform. Aggregates behavioral
                signals to map organizational risk topography in real-time.
              </p>
              <div className="h-48 rounded-lg overflow-hidden relative mb-6">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuakRzkFk2YZUFpZW9QB-7JXw7BWu-AreqQPfagKl9IgsIHigQ1rCWG8GE00Q4dmhMX3TV9kfXrySZwrWnFLCMkCOaQWVbieqqFL1sDByQ5cAReLazuWP6IBZcgsNtZ17zxhojwrwIrCcDljo5YDg3mfd4w3dEzRbZ3QKa1ioq6sJg2cdlGLK6V40HSfTG9jdExtJyJCUnc3NFg1isoofOlkPOjrCrvWb3dkrFVuBK_JcbTNqfCFrWa0hemSwkNu8BX8Ti4DWKgqJv"
                  alt="Aegis HVI analytics interface"
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              <Link
                to="/products"
                className="text-center text-tertiary border border-tertiary/30 py-3 rounded-lg hover:bg-tertiary/10 transition-colors w-full font-semibold"
              >
                Explore Aegis
              </Link>
            </div>

            {/* Coming soon */}
            <div className="glass-panel p-6 md:p-8 rounded-xl flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-primary-fixed mb-2 block">
                    Coming Soon
                  </span>
                  <h3 className="font-display text-2xl text-on-surface opacity-80">Sentinel AI</h3>
                </div>
                <span className="material-symbols-outlined text-3xl text-on-surface-variant opacity-80">
                  robot_2
                </span>
              </div>
              <p className="text-sm text-on-surface-variant mb-8 flex-grow opacity-80">
                Autonomous remediation engine. Pre-emptively isolates risky behavioral patterns
                before external compromise occurs.
              </p>
              <div className="h-48 rounded-lg overflow-hidden relative mb-6 bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-primary-fixed/20 border-t-primary-fixed animate-spin" />
              </div>
              <Link
                to="/sentinel"
                className="text-center text-on-surface-variant border border-outline-variant/40 py-3 rounded-lg hover:bg-surface-variant transition-colors w-full font-semibold"
              >
                Join Waitlist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
