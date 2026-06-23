const foundationLayers = [
  "Signal & Evidence Ingestion",
  "Identity & Context Resolution",
  "Risk Intelligence Engine",
  "Knowledge & Retrieval Layer",
  "AI Reasoning Layer (LLMs & RAG)",
  "Agentic Workflow Layer",
  "Governance & Review Layer",
  "Reporting & Evidence Layer",
];

const securityItems = [
  "Role-based access",
  "Encryption",
  "Data minimization",
  "Consent management",
  "Retention controls",
  "Monitoring",
  "Audit logs",
  "Traceability",
];

const hviLayers = [
  "Live Assessment",
  "HVI Score",
  "Recommendations",
  "Continuous Improvement",
];

const aiLayers = ["Discover", "Assess", "Govern", "Evidence"];

export default function ArchitectureDiagram() {
  return (
    <section className="bg-navy-800 text-white">
      <div className="container-content py-[84px]">
        {/* Header */}
        <div className="text-center mb-[46px]">
          <div className="font-mono text-xs tracking-label uppercase text-teal-glow mb-3.5">
            Product architecture
          </div>
          <h2 className="font-display font-semibold text-[34px] tracking-tighter text-white mx-auto mb-3.5 max-w-[760px]">
            A shared foundation for human-risk and AI-risk intelligence.
          </h2>
          <p className="text-[16px] leading-[1.55] mx-auto max-w-[720px]" style={{ color: "#A9C0DD" }}>
            Both platforms run on one foundation: secure signal ingestion,
            identity and context resolution, structured risk models,
            retrieval-based knowledge, large language models, controlled agentic
            workflows, governance review, and evidence reporting.
          </p>
        </div>

        {/* Platform panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px] mb-[18px]">
          {/* HVI panel */}
          <div
            className="rounded-[16px] p-[22px]"
            style={{
              background: "rgba(18,168,155,.1)",
              border: "1px solid rgba(18,168,155,.34)",
            }}
          >
            <div className="font-display font-semibold text-[18px] text-teal-bright mb-3.5">
              CyberPosture HVI
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {hviLayers.map((l) => (
                <div
                  key={l}
                  className="rounded-[9px] px-2 py-[11px] text-center text-xs"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    color: "#D6E6F4",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* AI panel */}
          <div
            className="rounded-[16px] p-[22px]"
            style={{
              background: "rgba(106,90,224,.12)",
              border: "1px solid rgba(141,124,255,.4)",
            }}
          >
            <div
              className="font-display font-semibold text-[18px] mb-3.5"
              style={{ color: "#C4B8FF" }}
            >
              AI Risk &amp; Governance
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {aiLayers.map((l) => (
                <div
                  key={l}
                  className="rounded-[9px] px-2 py-[11px] text-center text-xs"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    color: "#D6E6F4",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shared foundation arrow label */}
        <div
          className="text-center text-[11px] mb-3.5"
          style={{ color: "#5E7799" }}
          aria-hidden="true"
        >
          ▲ shared platform foundation ▲
        </div>

        {/* Foundation block */}
        <div
          className="rounded-[16px] p-[22px]"
          style={{
            background: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.1)",
          }}
        >
          <div
            className="font-mono text-[11px] tracking-[.1em] uppercase text-center mb-4"
            style={{ color: "#9DB4D2" }}
          >
            Shared CyberPosture platform foundation
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3.5">
            {foundationLayers.map((l) => (
              <div
                key={l}
                className="rounded-[9px] px-2.5 py-3 text-center text-[12.5px] font-medium"
                style={{
                  background: "rgba(255,255,255,.05)",
                  color: "#E2ECF8",
                }}
              >
                {l}
              </div>
            ))}
          </div>

          {/* Security row */}
          <div
            className="rounded-[10px] p-3 flex flex-wrap gap-2 justify-center"
            style={{
              background: "rgba(45,111,184,.16)",
              border: "1px solid rgba(45,111,184,.34)",
            }}
          >
            {securityItems.map((s) => (
              <span key={s} className="text-[11.5px]" style={{ color: "#BBD2EF" }}>
                {s}
              </span>
            ))}
          </div>
          <div
            className="text-center font-mono text-[10.5px] tracking-[.08em] uppercase mt-2"
            style={{ color: "#6B83A6" }}
          >
            Security · Privacy · Governance — built into every layer
          </div>
        </div>
      </div>
    </section>
  );
}
