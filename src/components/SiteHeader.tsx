import { Link } from "@tanstack/react-router";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/sentinel", label: "Platform" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-surface/70 backdrop-blur-xl shadow-md">
      <div className="flex justify-between items-center px-8 h-20 max-w-7xl mx-auto">
        <Link to="/" className="font-display text-2xl md:text-[28px] tracking-tight text-tertiary-fixed">
          CyberPosture
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant hover:text-tertiary transition-colors"
              activeProps={{ className: "text-[12px] font-bold uppercase tracking-[0.08em] text-tertiary border-b-2 border-tertiary pb-1" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex btn-gold px-5 py-2 rounded-lg text-[12px] font-bold uppercase tracking-[0.08em]"
        >
          Request Demo
        </Link>
      </div>
    </header>
  );
}