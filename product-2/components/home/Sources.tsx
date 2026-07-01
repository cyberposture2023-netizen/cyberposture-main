export default function Sources() {
  return (
    <section className="bg-surface-subtle border-t border-surface-border">
      <div className="container-content py-[34px]">
        <div className="font-mono text-[10.5px] tracking-label uppercase text-slate-200 mb-3">
          Sources
        </div>
        <div className="flex flex-col gap-[7px]">
          <p className="text-[12.5px] leading-[1.5] text-slate-300">
            <sup className="font-semibold text-teal-500">1</sup>&nbsp; 74% of
            breaches include the human element — Verizon,{" "}
            <em>2023 Data Breach Investigations Report</em>.{" "}
            <a
              href="https://www.verizon.com/business/resources/reports/dbir/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#00b8d9" }}
            >
              verizon.com/dbir
            </a>
          </p>
          <p className="text-[12.5px] leading-[1.5] text-slate-300">
            <sup className="font-semibold" style={{ color: "#00b8d9" }}>2</sup>
            &nbsp; 95% of cybersecurity issues can be traced to human error —
            World Economic Forum, <em>Global Risks Report 2022</em>, Chapter 3:
            Digital Dependencies and Cyber Vulnerabilities.{" "}
            <a
              href="https://www.weforum.org/publications/global-risks-report-2022/in-full/chapter-3-digital-dependencies-and-cyber-vulnerabilities/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#00b8d9" }}
            >
              weforum.org
            </a>
          </p>
          <p className="text-[12.5px] leading-[1.5] text-slate-300">
            <sup className="font-semibold" style={{ color: "#7a90b0" }}>3</sup>
            &nbsp; Human-driven incidents are among the costliest categories —
            Mimecast, <em>State of Human Risk</em> research.{" "}
            <a
              href="https://www.mimecast.com/state-of-human-risk/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              style={{ color: "#1a65b8" }}
            >
              mimecast.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
