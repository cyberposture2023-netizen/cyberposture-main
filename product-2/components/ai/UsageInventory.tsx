import { inventoryRows, type InventoryRow } from "@/lib/content/pages";

function exposureColor(e: number) {
  if (e >= 70) return "#e05260";
  if (e >= 45) return "#f5a623";
  return "#00b8d9";
}

const statusStyle: Record<InventoryRow["status"], { color: string; bg: string }> = {
  Approved:     { color: "#039fc0", bg: "rgba(0, 184, 217, 0.14)" },
  Shadow:       { color: "#e05260", bg: "rgba(224, 82, 96, 0.14)" },
  "Under review": { color: "#ffd182", bg: "rgba(245, 166, 35, 0.14)" },
};

export default function UsageInventory() {
  return (
    <section className="bg-surface-subtle border-b border-surface-border">
      <div className="container-content py-16">
        <div className="font-mono text-xs tracking-label uppercase mb-3" style={{ color: "#00b8d9" }}>
          Conceptual UI
        </div>
        <h2 className="font-display font-semibold text-[30px] tracking-tighter text-navy-700 mb-7">
          From unknown AI usage to governed AI usage.
        </h2>

        <div
          className="bg-card border border-surface-border rounded-[18px] overflow-hidden"
          style={{ boxShadow: "0 24px 60px -38px rgba(13,38,76,.4)" }}
          aria-label="AI Usage Inventory mockup"
        >
          {/* Header bar */}
          <div className="bg-navy-700 px-6 py-[18px] flex items-center justify-between flex-wrap gap-3">
            <span className="font-semibold text-[15px] text-white">AI Usage Inventory</span>
            <div className="flex gap-[18px]">
              {[
                { val: "23", label: "Tools",  color: "#e8edf5" },
                { val: "9",  label: "Shadow", color: "#ff8a96" },
                { val: "4",  label: "Review", color: "#ffd182" },
              ].map(({ val, label, color }) => (
                <div key={label} className="text-right">
                  <div className="font-display font-bold text-xl" style={{ color }}>{val}</div>
                  <div className="text-[10.5px]" style={{ color: "#7a90b0" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Table header */}
          <div
            className="grid gap-3 px-6 py-3 border-b border-surface-border font-mono text-[10.5px] tracking-[.06em] uppercase text-slate-200"
            style={{ gridTemplateColumns: "1.6fr 1fr .7fr .7fr 1.1fr" }}
          >
            <div>Tool</div><div>Status</div><div>Users</div><div>Data</div><div>Exposure</div>
          </div>

          {/* Rows */}
          {inventoryRows.map((row) => {
            const ec = exposureColor(row.exposure);
            const st = statusStyle[row.status];
            return (
              <div
                key={row.tool}
                className="grid gap-3 px-6 py-[15px] border-b border-surface-border items-center last:border-b-0"
                style={{ gridTemplateColumns: "1.6fr 1fr .7fr .7fr 1.1fr" }}
              >
                {/* Tool */}
                <div>
                  <div className="font-semibold text-sm text-slate-700">{row.tool}</div>
                  <div className="text-xs text-slate-250">{row.category}</div>
                </div>
                {/* Status badge */}
                <div>
                  <span
                    className="text-[11.5px] font-semibold rounded-[6px] px-2.5 py-1"
                    style={{ color: st.color, background: st.bg }}
                  >
                    {row.status}
                  </span>
                </div>
                {/* Users */}
                <div className="font-mono text-[13px] text-slate-450">{row.users}</div>
                {/* Data sensitivity */}
                <div className="text-[12.5px] text-slate-450">{row.dataSensitivity}</div>
                {/* Exposure bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-[7px] bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${row.exposure}%`, background: ec }}
                      role="meter"
                      aria-valuenow={row.exposure}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${row.tool} exposure: ${row.exposure}%`}
                    />
                  </div>
                  <span className="font-mono text-xs w-[26px] flex-none" style={{ color: ec }}>
                    {row.exposure}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
