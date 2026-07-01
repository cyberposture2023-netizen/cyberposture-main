"use client";

import Link from "next/link";
import { type ReactNode } from "react";

type Variant =
  | "primary"    // navy solid
  | "teal"       // teal solid
  | "tealSoft"   // teal tint (light bg)
  | "purple"     // purple solid
  | "ghost"      // transparent + border
  | "onDark";    // white border on dark bg

interface ButtonProps {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm leading-none transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:opacity-50 disabled:cursor-not-allowed select-none";

const rounded = "rounded-[10px]";
const pad = "px-5 py-3";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-btn-navy focus-visible:outline-navy-800",
  teal:
    "bg-teal-500 text-white hover:bg-teal-600 shadow-cta-teal focus-visible:outline-teal-500",
  tealSoft:
    "bg-teal-50 text-teal-600 hover:bg-teal-500 hover:text-white border border-teal-500/30 focus-visible:outline-teal-500",
  purple:
    "bg-brand-purple text-white hover:bg-brand-purple-700 focus-visible:outline-brand-purple",
  ghost:
    "border border-surface-border2 text-slate-500 hover:border-teal-500 hover:text-teal-600 bg-transparent",
  onDark:
    "border border-white/30 text-white hover:bg-card/10 bg-transparent focus-visible:outline-white",
};

export default function Button({
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled,
  className = "",
  children,
  external,
}: ButtonProps) {
  const cls = `${base} ${rounded} ${pad} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
