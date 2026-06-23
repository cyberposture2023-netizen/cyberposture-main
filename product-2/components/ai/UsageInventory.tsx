import { inventoryRows, type InventoryRow } from "@/lib/content/pages";

function exposureColor(e: number) {
  if (e >= 70) return "#D6453F";
  if (e >= 45) return "#E0992A";
  return "#12A89B";
}

const statusStyle: Record<InventoryRow["status"], { color: string; bg: string }> = {
  Approved:     { color: "#0E8C81", bg: "#E6F6F4" },
  Shadow:       { color: "#C0392B", bg: "#FCEBEA" },
  "Under review": { color: "#B07A1E", bg: "#FBF3E2" },
};

export default function UsageInventory() {
  return (
    <section className="bg-surface-subtle border-b border-surface-border">
      <div className="container-content py-16">
        <div className="font-mono text-xs tracking-label uppercase mb-3" style={{ color: "#5646C9" }}>
          Conceptual UI
        </div>
        <h2 className="font-display font-semibold text-[30px] tracking-tighter text-navy-700 mb-7">
          From unknown AI usage to governed AI usage.
        </h2>

        <div
          className="bg-white border border-surface-border rounded-[18px] overflow-hidden"
          style={{ boxShadow: "0 24px 60px -38px rgba(13,38,76,.4)" }}
          aria-label="AI Usage Inventory mockup"
        >
          {/* Header bar */}
          <div className="bg-navy-700 px-6 py-[18px] flex items-center justify-between flex-wrap gap-3">
            <span className="font-semibold text-[15px] text-white">AI Usage Inventory</span>
            <div className="flex gap-[18px]">
              {[
                { val: "23", label: "Tools",  color: "#fff" },
                { val: "9",  label: "Shadow", color: "#FF8A80" },
                { val: "4",  label: "Review", color: "#FFC46B" },
              ].map(({ val, label, color }) => (
                <div key={label} className="text-right">
                  <div className="font-display font-bold text-xl" style={{ color }}>{val}</div>
                  <div className="text-[10.5px]" style={{ color: "#92AAC6" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Table header */}
          <div
            className="grid gap-3 px-6 py-3 border-b border-[#EEF2F8] font-mono text-[10.5px] tracking-[.06em] uppercase text-slate-200"
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
                className="grid gap-3 px-6 py-[15px] border-b border-[#F2F5FA] items-center last:border-b-0"
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
                  <div className="flex-1 h-[7px] bg-[#EEF2F8] rounded-full overflow-hidden">
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
