import Link from "next/link";
import { workforceDashboard } from "@/lib/content/pages";
import { tierFor } from "@/lib/content/assessment";

function deptColor(score: number): string {
  return tierFor(score).color;
}

export default function WorkforceDashboard() {
  const { avgHVI, qoqChange, highRiskPct, departments } = workforceDashboard;

  return (
    <section className="bg-navy-800 text-white">
      <div className="container-content py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[.85fr_1.15fr] gap-12 items-center">
          {/* Copy */}
          <div>
            <div className="font-mono text-xs tracking-label uppercase text-teal-bright mb-3.5">
              HVI for organizations
            </div>
            <h2 className="font-display font-semibold text-[30px] tracking-tighter text-white mb-3.5">
              More than training completion.
            </h2>
            <p className="text-[15.5px] leading-[1.6] mb-5" style={{ color: "#a7b8d0" }}>
              Measure workforce human-risk patterns, understand where exposure
              is concentrated, prioritize interventions, and track improvement
              over time — with reporting for security, risk, HR, and leadership.
            </p>
            <Link
              href="/contact?i=Request+HVI+Demo"
              className="inline-flex items-center px-[22px] py-[13px] rounded-[10px] text-sm font-semibold text-navy-900 bg-teal-500 hover:bg-teal-600 transition-colors"
            >
              Request HVI Demo
            </Link>
          </div>

          {/* Dashboard mockup */}
          <div
            className="rounded-[18px] p-[26px]"
            style={{
              background: "#102040",
              border: "1px solid rgba(255,255,255,.1)",
            }}
            aria-label="Workforce HVI Dashboard mockup"
          >
            <div className="flex justify-between items-center mb-[18px]">
              <span className="font-semibold text-[15px] text-white">
                Workforce HVI Dashboard
              </span>
              <span className="font-mono text-[11px]" style={{ color: "#5fe9ff" }}>
                Q2 · 1,240 people
              </span>
            </div>

            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { value: avgHVI.toString(), label: "Avg HVI", color: "#5fe9ff" },
                { value: `+${qoqChange}`, label: "QoQ change", color: "#e8edf5" },
                { value: `${highRiskPct}%`, label: "High risk", color: "#f5a623" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl p-3.5"
                  style={{ background: "rgba(255,255,255,.05)" }}
                >
                  <div
                    className="font-display font-bold text-[26px] leading-tight"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11.5px] mt-0.5" style={{ color: "#7a90b0" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Department bars */}
            <div className="flex flex-col gap-[11px]">
              {departments.map((dept) => {
                const barW = Math.round(((dept.score - 300) / 550) * 100);
                const barColor = deptColor(dept.score);
                const trendColor = dept.qoq >= 0 ? "#039fc0" : "#e05260";
                const trendStr = (dept.qoq >= 0 ? "+" : "") + dept.qoq;
                return (
                  <div key={dept.dept} className="flex items-center gap-3">
                    <div
                      className="w-[88px] text-[12.5px] flex-none"
                      style={{ color: "#c8d4e5" }}
                    >
                      {dept.dept}
                    </div>
                    <div
                      className="flex-1 h-2 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,.08)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${barW}%`, background: barColor }}
                        role="meter"
                        aria-valuenow={dept.score}
                        aria-valuemin={300}
                        aria-valuemax={850}
                        aria-label={`${dept.dept} HVI: ${dept.score}`}
                      />
                    </div>
                    <div
                      className="w-[34px] text-right font-mono text-[12.5px] text-white flex-none"
                    >
                      {dept.score}
                    </div>
                    <div
                      className="w-8 text-right font-mono text-[11.5px] flex-none"
                      style={{ color: trendColor }}
                    >
                      {trendStr}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
