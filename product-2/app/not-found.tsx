import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white min-h-[60vh] flex items-center">
      <div className="container-content py-20 text-center">
        <div className="font-mono text-[11px] tracking-[.12em] uppercase text-teal-600 mb-5">
          404
        </div>
        <h1 className="font-display font-semibold text-[40px] tracking-tighter text-navy-700 mb-4">
          Page not found.
        </h1>
        <p className="text-[16px] text-slate-400 mb-8 max-w-[480px] mx-auto">
          The page you're looking for doesn't exist or has moved. Try starting from the home page.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-[10px] text-[14.5px] font-semibold text-white bg-navy-700 hover:bg-navy-800 transition-colors"
          >
            Go home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-[10px] text-[14.5px] font-semibold text-navy-700 border border-surface-border hover:bg-surface-subtle transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
