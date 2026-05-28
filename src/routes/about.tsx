import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CyberPosture" },
      {
        name: "description",
        content:
          "Architecting the standard for elite cybersecurity. Meet the leadership and mission behind CyberPosture.",
      },
      { property: "og:title", content: "About CyberPosture" },
      { property: "og:description", content: "Elite consultancy meets automated precision." },
    ],
  }),
  component: About,
});

const LEADERSHIP = [
  {
    name: "Marcus Vance",
    role: "Chief Executive Officer",
    bio: "Former Director of Cyber Intelligence at global defense contractor. Pioneer in predictive threat modeling.",
    icon: "admin_panel_settings",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbvOo2iKHwsFUBr8bUbX5ccrHbm_LKv7-nIsoibUW8NgrTD8DuB6_8jt0cFu4zGLWXOmt51nq7Mf6kcsvB9sOP56hz6RKP25EwU-XPynHA7kNVcDS_ithbFOHdcpBTXT3OSTSlBCJoppzy3FiMEZm8GgG0R9LyUW8qCQCy_5IG5GBsHDhb3IRyV_kw-M_3_kNX0OngUnPnoBzybvmXbCA_lmZcXFkFBI4t5M_3pRiKOPT9j-sldbYB8rSFpu0dFp9JPzwl2Ski1Gsq",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "Ph.D. in Applied Cryptography. Architected the foundational consensus algorithms used in our core platform.",
    icon: "terminal",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtQOCZ5l_SLIsiZd1ls66nKfpiBIpll6ski7iIxx11BJHXO1dv0pf1NPhprZ9p1S6vTIovHsc96n_Cs3B0nK2FkYdKhEEDtcCrhUexUW0HJEqvBJN-2fZNVzeREbeshilgLPJQrwLQIiXVh17gFlXYdAIPlS2syclbqEZaxKN5cHor96K2FknEqrssi6zuxkhf6Kuv1Mf-PctfYzQg-LJ7LM5mDJll7EZTux3CQKahM6vuOsgvnBt_YWUU_JS2CvbcSLzE2mby8G7q",
  },
  {
    name: "Julian Sterling",
    role: "VP of Finance & Operations",
    bio: "Specialist in capital efficiency and strategic M&A for high-growth enterprise infrastructure entities.",
    icon: "account_balance",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAonoN54I_g-8CgzKJBseu7T6hxXqpKDt0Uc-qHcD8Nv4gQbbTbjq5cl6JL103U5QqMzkCe5yZK8dkwld8B2TVWP_uS15FLHNZKhGgD-nOVDbTVi0_qIsgwgz62gVgB4vmRNPDeyjPJjOrUrhS4zXdGT3rVjvqu21_zPQoDy92N94L9JULf_zA9Gm3Nynd3gg177vh6TZU6f6mBmJP9gejDKTOOuTAjD_-wXbMrDaYZ90xoPp734sUUhh4e3xVOkWCZL_bKh0_JmHL9",
  },
];

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-background overflow-x-hidden">
      <SiteHeader />
      <main className="flex-grow flex flex-col gap-12 pb-16 pt-20">
        {/* Hero */}
        <section className="relative pt-12 pb-24 px-8 flex items-center justify-center overflow-hidden min-h-[500px]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Abstract architectural cybersecurity space"
              className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjJFmg7pFl2Q6z3qX6ewGpr0iKWYbL9sFFWVVjNm515rDZcVq468dX7yLQdBrvvcKjaoInjGDRnpVnTOqSSLrD7UT0SUnrgrK4ZKk-F8K1R-KTfCBjcfHWV_MZot8OaPxXDsVNE-zAxkgO5BLYVXLAuwrUaE4mh29o6wg89zrq-Te3E2AHGC_e5ZIqxmJKSDxbgX5HdA6RE4pUQ2RVuUlbTN8srwnbihJhpyTdcVXoCGfKuneQEbORjzp5011clbibQDLEK5YYpFhz"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-6">
            <h1 className="font-display text-4xl md:text-6xl text-on-surface tracking-tight leading-tight">
              Architecting the Standard for Elite Cybersecurity.
            </h1>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              We operate at the nexus of intelligence and infrastructure, providing unyielding
              security posture management for the world's most critical enterprises.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="glass-panel rounded-xl p-8 md:col-span-7 flex flex-col gap-3 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                <span className="material-symbols-outlined text-[120px] text-tertiary">shield_locked</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-tertiary">Company Mission</h2>
              <div className="w-12 h-[2px] bg-tertiary mb-4" />
              <p className="text-on-surface/90 leading-relaxed z-10">
                To eradicate cognitive overload in security operations by delivering pristine,
                high-fidelity intelligence. We engineer stability into the core of digital
                ecosystems, transforming raw threat data into decisive, authoritative action.
              </p>
            </div>
            <div className="glass-panel rounded-xl p-8 md:col-span-5 flex flex-col gap-3 relative overflow-hidden group">
              <div className="absolute bottom-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-700 translate-y-8 translate-x-8">
                <span className="material-symbols-outlined text-[120px] text-primary">visibility</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-primary">Intelligence Vision</h2>
              <div className="w-12 h-[2px] bg-primary mb-4" />
              <p className="text-on-surface/90 leading-relaxed z-10">
                A future where security telemetry is as intuitive as natural law. We foresee
                an era where elite consultancy meets automated precision, establishing a
                baseline of absolute trust.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="px-8 max-w-7xl mx-auto w-full pt-12">
          <div className="flex flex-col gap-3 border-l-2 border-outline-variant/30 pl-6">
            <h2 className="font-display text-3xl md:text-4xl text-on-surface">The Architects</h2>
            <p className="text-on-surface-variant">
              Our leadership combines decades of military-grade intelligence strategy with
              advanced cryptographic engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {LEADERSHIP.map((p) => (
              <div key={p.name} className="glass-panel rounded-xl overflow-hidden group">
                <div className="h-80 w-full relative overflow-hidden bg-surface-container-highest">
                  <img
                    src={p.img}
                    alt={`${p.name} portrait`}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent opacity-90" />
                </div>
                <div className="p-6 flex flex-col gap-2 relative">
                  <div className="absolute -top-6 right-6 bg-surface-container-lowest p-2 rounded-full border border-white/10 shadow-lg">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-tertiary">{p.name}</h3>
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">{p.role}</p>
                  <p className="text-sm text-on-surface/70 mt-2">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust indicators */}
        <section className="px-8 max-w-7xl mx-auto w-full pt-12">
          <div className="border-t border-outline-variant/20 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              ["99.9%", "Uptime SLA", "primary"],
              ["150+", "Enterprise Clients", "tertiary"],
              ["Zero", "Critical Breaches", "primary"],
              ["$2B+", "Assets Secured", "tertiary"],
            ].map(([v, l, c]) => (
              <div key={l} className="flex flex-col gap-2">
                <span className={`font-display text-4xl ${c === "tertiary" ? "text-tertiary" : "text-primary"} text-glow-gold`}>
                  {v}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant">
                  {l}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}