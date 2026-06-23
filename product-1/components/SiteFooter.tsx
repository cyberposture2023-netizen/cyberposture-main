export function SiteFooter() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 py-12 max-w-7xl mx-auto">
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="font-display text-3xl text-on-surface">CyberPosture</div>
          <p className="text-sm text-on-surface-variant opacity-80 max-w-xs">
            © 2026 CyberPosture. All rights reserved. Secured by Elite Intelligence.
          </p>
        </div>
        <div className="md:col-span-3 flex flex-wrap gap-x-8 gap-y-3 md:justify-end items-start">
          {[
            "Sitemap",
            "Legal",
            "Privacy Policy",
            "Security",
            "Status",
          ].map((l) => (
            <a
              key={l}
              href="#"
              className="text-[12px] font-bold uppercase tracking-[0.08em] text-on-surface-variant hover:text-primary transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}