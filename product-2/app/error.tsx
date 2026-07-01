"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-card min-h-[60vh] flex items-center">
      <div className="container-content py-20 text-center">
        <div className="font-mono text-[11px] tracking-[.12em] uppercase text-risk-high mb-5">
          Error
        </div>
        <h1 className="font-display font-semibold text-[36px] tracking-tighter text-navy-700 mb-4">
          Something went wrong.
        </h1>
        <p className="text-[16px] text-slate-400 mb-8 max-w-[460px] mx-auto">
          An unexpected error occurred. You can try again, or return to the home page.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 rounded-[10px] text-[14.5px] font-semibold text-white bg-navy-700 hover:bg-navy-800 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-[10px] text-[14.5px] font-semibold text-navy-700 border border-surface-border hover:bg-surface-subtle transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
