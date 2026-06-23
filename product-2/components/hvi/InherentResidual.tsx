export default function InherentResidual() {
  return (
    <section className="bg-white">
      <div className="container-content py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div>
            <h2 className="font-display font-semibold text-[32px] tracking-tighter text-navy-700 mb-4">
              Understand both exposure and improvement.
            </h2>
            <p className="text-[16px] leading-[1.6] text-slate-450 mb-4">
              HVI distinguishes between{" "}
              <strong className="text-slate-700">inherent human risk</strong> —
              exposure before controls, training, and behavior improvements —
              and{" "}
              <strong className="text-slate-700">residual human risk</strong>,
              the exposure that remains after protective controls, awareness,
              and improved habits are taken into account.
            </p>
            <p className="text-[15px] leading-[1.6] text-slate-400">
              For organizations, this distinction shows whether interventions
              are actually reducing human cyber risk over time.
            </p>
          </div>

          {/* Visual */}
          <div className="bg-surface-subtle border border-surface-border rounded-[18px] p-8">
            {/* Inherent */}
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-risk-critical">
                  Inherent human risk
                </span>
                <span className="font-mono text-sm text-risk-critical">High</span>
              </div>
              <div className="h-3.5 bg-[#EEF2F8] rounded-full overflow-hidden">
                <div
                  className="h-full w-[78%] rounded-full"
                  style={{
                    background: "linear-gradient(90deg,#E0992A,#D6453F)",
                  }}
                  role="meter"
                  aria-valuenow={78}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Inherent human risk: high"
                />
              </div>
            </div>

            {/* Arrow label */}
            <div
              className="text-center text-slate-200 text-[20px] -my-1.5"
              aria-hidden="true"
            >
              ↓ controls · training · behavior
            </div>

            {/* Residual */}
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-semibold text-teal-600">
                  Residual human risk
                </span>
                <span className="font-mono text-sm text-teal-600">Reduced</span>
              </div>
              <div className="h-3.5 bg-[#EEF2F8] rounded-full overflow-hidden">
                <div
                  className="h-full w-[34%] rounded-full"
                  style={{
                    background: "linear-gradient(90deg,#12A89B,#0E8C81)",
                  }}
                  role="meter"
                  aria-valuenow={34}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Residual human risk: reduced"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
