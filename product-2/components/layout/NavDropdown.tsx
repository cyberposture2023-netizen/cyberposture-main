"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import type { NavItem } from "@/lib/content/nav";

interface NavDropdownProps {
  label: string;
  items: NavItem[];
}

export default function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-navy-800 transition-colors py-2 focus-visible:outline-2 focus-visible:outline-teal-500 focus-visible:outline-offset-2 rounded"
      >
        {label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Transparent bridge prevents gap between trigger and menu */}
      {open && (
        <div className="absolute top-full left-0 w-full h-[10px]" aria-hidden="true" />
      )}

      {/* Menu */}
      {open && (
        <div
          role="menu"
          className="absolute top-[calc(100%+10px)] left-0 min-w-[260px] bg-white rounded-[14px] border border-surface-border2 shadow-dropdown py-2 animate-cp-up z-50"
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-sm text-slate-600 hover:text-navy-800 hover:bg-surface-subtle transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
