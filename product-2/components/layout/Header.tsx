import Image from "next/image";
import Link from "next/link";
import NavDropdown from "./NavDropdown";
import MobileNav from "./MobileNav";
import { platformsMenu, solutionsMenu, topNavLinks } from "@/lib/content/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-[72px] flex items-center border-b border-surface-border2"
      style={{
        background: "rgba(3,8,15,0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}>
      <div className="container-content w-full flex items-center justify-between gap-6">

        {/* Logo */}
     <Link href="/" aria-label="CyberPosture home" className="shrink-0">
  <Image
    src="/cp-logo-hires.png"
    alt="CyberPosture"
    width={180}
    height={40}
    className="h-[60px] w-auto drop-shadow-[0_0_1px_rgba(94,169,255,0.75)]"
    priority
  />
</Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          <NavDropdown label="Platforms" items={platformsMenu} />
          <NavDropdown label="Solutions" items={solutionsMenu} />
          {topNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-teal-bright transition-colors py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link
            href="/hvi?start=1#assessment"
            className="inline-flex items-center px-4 py-2 rounded-[10px] text-sm font-semibold bg-teal-50 text-teal-600 border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-colors"
          >
            Take HVI Assessment
          </Link>
          <Link
            href="/contact?i=Request+Demo"
            className="inline-flex items-center px-4 py-2 rounded-[10px] text-sm font-semibold bg-navy-800 text-white hover:bg-navy-700 shadow-btn-navy transition-colors"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <MobileNav />
      </div>
    </header>
  );
}
