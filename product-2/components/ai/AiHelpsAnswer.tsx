import { aiHelpsAnswer } from "@/lib/content/pages";

export default function AiHelpsAnswer() {
  return (
    <section className="bg-white">
      <div className="container-content py-[74px]">
        <h2 className="font-display font-semibold text-[30px] tracking-tighter text-navy-700 mb-7">
          What CyberPosture helps answer.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {aiHelpsAnswer.map((q) => (
            <div
              key={q}
              className="flex gap-3.5 items-start bg-surface-subtle border border-surface-border rounded-xl px-[18px] py-[18px]"
            >
              <span className="font-display font-bold text-brand-purple flex-none" aria-hidden="true">
                ?
              </span>
              <span className="text-[14.5px] leading-[1.5] text-slate-600">{q}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
