"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { platformsMenu, solutionsMenu, topNavLinks } from "@/lib/content/nav";

function MenuLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex min-h-[52px] items-center justify-between rounded-[14px] border border-white/10 bg-white/[0.055] px-4 py-3.5 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.06)] transition-colors hover:border-teal-500/40 hover:bg-teal-500/10"
    >
      <span>{label}</span>
      <span className="text-teal-bright opacity-70 transition-transform group-hover:translate-x-0.5">
        -&gt;
      </span>
    </Link>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);
  const portalRoot = open && typeof document !== "undefined" ? document.body : null;

  const overlay = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-[9999] flex h-dvh min-h-svh w-dvw flex-col overflow-y-auto bg-[#03080f]/95 text-white backdrop-blur-xl lg:hidden"
      style={{
        background:
          "radial-gradient(780px 380px at 18% 0%, rgba(0,184,217,.18), transparent 68%), radial-gradient(740px 380px at 92% 8%, rgba(26,101,184,.22), transparent 64%), linear-gradient(180deg, rgba(3,8,15,.99), rgba(6,16,29,.99))",
      }}
    >
      <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-white/10 px-5">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-label text-teal-bright">
            CyberPosture
          </div>
          <div className="text-[18px] font-semibold leading-tight text-white">
            Menu
          </div>
        </div>
        <button
          type="button"
          aria-label="Close menu"
          onClick={close}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.055] text-slate-500 transition-colors hover:text-white"
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-1 flex-col gap-7 px-5 py-6">
        <div className="grid gap-4">
          <Link
            href="/hvi?start=1#assessment"
            onClick={close}
            className="rounded-[16px] border border-teal-500/45 bg-teal-500 px-5 py-4 text-center text-[16px] font-bold text-navy-900 shadow-[0_18px_40px_-22px_rgba(0,216,255,.95)]"
          >
            Take HVI Assessment
          </Link>
          <Link
            href="/contact?i=Request+Demo"
            onClick={close}
            className="rounded-[16px] border border-white/15 bg-white px-5 py-4 text-center text-[16px] font-bold text-navy-900 shadow-[0_18px_40px_-24px_rgba(255,255,255,.8)]"
          >
            Request Demo
          </Link>
        </div>

        <section>
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-label text-slate-400">
            Platforms
          </h2>
          <div className="grid gap-3">
            {platformsMenu.map((item) => (
              <MenuLink key={item.href} {...item} onClick={close} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-label text-slate-400">
            Solutions
          </h2>
          <div className="grid gap-3">
            {solutionsMenu.map((item) => (
              <MenuLink key={item.href} {...item} onClick={close} />
            ))}
          </div>
        </section>

        <section className="pb-4">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-label text-slate-400">
            Company
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {topNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-[14px] border border-white/10 bg-white/[0.045] px-4 py-3 text-center text-[14px] font-semibold text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </nav>
    </div>
  );

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="z-50 flex flex-col gap-[5px] rounded p-2 lg:hidden"
      >
        <span className="block h-0.5 w-5 bg-teal-bright" />
        <span className="block h-0.5 w-5 bg-teal-bright" />
        <span className="block h-0.5 w-5 bg-teal-bright" />
      </button>

      {portalRoot ? createPortal(overlay, portalRoot) : null}
    </>
  );
}
