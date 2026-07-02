import Image from "next/image";
import Link from "next/link";
import { footerColumns } from "@/lib/content/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white mt-auto">
      <div className="container-content py-16">

        {/* Top row: brand + columns */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr]">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="CyberPosture home">
              <Image
                src="/cp-logo-hires-png.png"
                alt="CyberPosture"
                width={40}
                height={40}
                className="h-19 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-250 leading-relaxed max-w-[200px]">
              Human & AI Cyber Risk Intelligence
            </p>
            <p className="text-xs text-slate-300 font-mono uppercase tracking-label">
              cyberposture.ai
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-mono font-medium uppercase tracking-label text-slate-200 mb-4">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-300 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-300">
            © {year} CyberPosture. All rights reserved.
          </p>
          <div className="flex gap-5">
            {footerColumns[3].links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
