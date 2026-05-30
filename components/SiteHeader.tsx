"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/products",
    label: "Product",
    menuTitle: "Platform",
    children: [
      {
        to: "/products#b2c",
        label: "Human Vulnerability Intelligence",
      },
      {
        to: "/products#enterprise",
        label: "Enterprise Human Risk OS",
      },
      {
        to: "/ai-governance",
        label: "AI Governance Suite",
      },
      {
        to: "/ramp",
        label: "R.A.M.P.",
      },
    ],
  },
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/careers",
    label: "Careers",
  },
  {
    to: "/contact",
    label: "Contact",
    menuTitle: "Contact",
    children: [
      {
        to: "/contact/b2c",
        label: "Personal Support",
      },
      {
        to: "/contact/b2b",
        label: "Enterprise Inquiry",
      },
    ],
  },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-surface/70 shadow-md backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Brand Group */}
        <div className="flex items-baseline gap-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-display text-2xl tracking-tight text-tertiary-fixed md:text-[28px]"
          >
            CyberPosture
          </Link>
          <span className="hidden text-[10px] font-bold  tracking-widest text-on-surface-variant/50 md:inline-block">
            .ai
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => {
            const isActive = pathname === item.to;
            return (
              <div key={item.to} className="group relative">
                <Link
                  href={item.to}
                  className={`inline-flex items-center gap-1 transition-colors hover:text-primary ${isActive ? "text-primary font-semibold" : "text-on-surface-variant"
                    }`}
                >
                  {item.label}
                  {"children" in item && (
                    <span className="material-symbols-outlined text-base">
                      expand_more
                    </span>
                  )}
                </Link>

                {"children" in item && (
                  <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-56 -translate-x-1/2 rounded-xl border border-outline-variant/25 bg-surface-container-lowest p-2 opacity-0 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all group-hover:visible group-hover:opacity-100">
                    <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-tertiary">
                      {item.menuTitle}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        href={child.to}
                        className="block rounded-lg px-3 py-2 text-sm text-on-surface-variant transition-colors hover:bg-tertiary/10 hover:text-tertiary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/products#simulation"
          className="btn-gold hidden rounded-lg px-5 py-2 text-[12px] font-bold uppercase tracking-[0.08em] md:inline-flex"
        >
          Experience Simulation
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center text-on-surface transition-colors hover:text-tertiary md:hidden"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-20 flex w-full flex-col bg-surface/95 px-8 py-8 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {NAV.map((item) => {
                const isActive = pathname === item.to;
                return (
                  <div key={item.to}>
                    <Link
                      href={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`text-2xl font-medium transition-colors ${isActive ? "text-primary" : "text-on-surface"
                        }`}
                    >
                      {item.label}
                    </Link>
                    {"children" in item && (
                      <div className="mt-3 flex flex-col gap-3 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.to}
                            href={child.to}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-semibold text-on-surface-variant"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="mt-10 flex flex-col gap-6 border-t border-outline-variant/30 pt-10">
              <Link
                href="/contact/b2b"
                onClick={() => setIsOpen(false)}
                className="btn-gold w-full rounded-lg px-5 py-4 text-center text-[14px] font-bold uppercase tracking-[0.08em]"
              >
                Request Demo
              </Link>

              <span className="text-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/50">
                Powered by OwnTheSite
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
