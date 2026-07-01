"use client";

import Link from "next/link";
import { useState } from "react";
import { platformsMenu, solutionsMenu, topNavLinks } from "@/lib/content/nav";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden flex flex-col gap-[5px] p-2 rounded focus-visible:outline-2 focus-visible:outline-teal-500"
      >
        <span className={`block w-5 h-0.5 bg-teal-bright transition-all duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
        <span className={`block w-5 h-0.5 bg-teal-bright transition-all duration-200 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-teal-bright transition-all duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-navy-900/40 z-40 lg:hidden"
          aria-hidden="true"
          onClick={close}
        />
      )}

      {/* Slide-in drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-card z-50 shadow-panel-dark flex flex-col transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[72px] border-b border-surface-border2">
          <span className="text-sm font-semibold text-foreground">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={close}
            className="p-2 rounded text-slate-400 hover:text-teal-bright focus-visible:outline-2 focus-visible:outline-teal-500"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-6 flex flex-col gap-1">
          {/* Platforms accordion */}
          <button
            type="button"
            aria-expanded={platformsOpen}
            onClick={() => setPlatformsOpen((v) => !v)}
            className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-foreground hover:text-teal-bright transition-colors"
          >
            Platforms
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
              className={`transition-transform duration-200 ${platformsOpen ? "rotate-180" : ""}`}>
              <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {platformsOpen && (
            <div className="pl-3 flex flex-col gap-0.5 mb-1">
              {platformsMenu.map((item) => (
                <Link key={item.href} href={item.href} onClick={close}
                  className="block py-2 text-sm text-slate-500 hover:text-teal-bright transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Solutions accordion */}
          <button
            type="button"
            aria-expanded={solutionsOpen}
            onClick={() => setSolutionsOpen((v) => !v)}
            className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-foreground hover:text-teal-bright transition-colors"
          >
            Solutions
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"
              className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}>
              <path d="M2 5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {solutionsOpen && (
            <div className="pl-3 flex flex-col gap-0.5 mb-1">
              {solutionsMenu.map((item) => (
                <Link key={item.href} href={item.href} onClick={close}
                  className="block py-2 text-sm text-slate-500 hover:text-teal-bright transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Top nav links */}
          {topNavLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={close}
              className="block py-2.5 text-sm font-semibold text-foreground hover:text-teal-bright transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTAs */}
        <div className="px-6 py-5 border-t border-surface-border2 flex flex-col gap-3">
          <Link href="/hvi?start=1#assessment" onClick={close}
            className="block text-center py-2.5 px-4 rounded-[10px] text-sm font-semibold bg-teal-50 text-teal-600 border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-colors">
            Take HVI Assessment
          </Link>
          <Link href="/contact?i=Request+Demo" onClick={close}
            className="block text-center py-2.5 px-4 rounded-[10px] text-sm font-semibold bg-navy-800 text-white hover:bg-navy-700 transition-colors">
            Request Demo
          </Link>
        </div>
      </div>
    </>
  );
}
