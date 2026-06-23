const cards = [
  {
    icon: "◑",
    iconBg: "#E6F6F4",
    iconColor: "#0E8C81",
    title: "Human risk is measurable",
    body: "HVI turns behavior-driven cyber exposure into a score people can understand and organizations can act on.",
  },
  {
    icon: "◆",
    iconBg: "#ECEAFB",
    iconColor: "#5646C9",
    title: "AI usage needs governance",
    body: "See where AI is being used, where exposure exists, and what evidence supports responsible oversight.",
  },
  {
    icon: "▦",
    iconBg: "#EAF1FB",
    iconColor: "#2D6FB8",
    title: "Evidence matters",
    body: "Security, risk, and compliance teams need clear records of what was assessed, approved, remediated, or left open.",
  },
];

export default function WhyCards() {
  return (
    <section className="bg-white">
      <div className="container-content py-[84px]">
        <h2 className="font-display font-semibold text-[34px] tracking-tighter text-navy-700 mb-3.5 max-w-[680px]">
          Not every cyber risk starts with a system vulnerability.
        </h2>
        <p className="text-[17px] leading-[1.55] text-slate-450 mb-10 max-w-[720px]">
          Many of today's risks begin with a decision, a workflow, an identity
          permission, an unmanaged tool, or an AI action no one has reviewed.
          CyberPosture helps make these risks visible, measurable, and
          manageable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-surface-border rounded-[16px] p-7"
            >
              <div
                className="w-10 h-10 rounded-[10px] flex items-center justify-center text-[18px] mb-4"
                style={{ background: card.iconBg, color: card.iconColor }}
                aria-hidden="true"
              >
                {card.icon}
              </div>
              <h3 className="font-display font-semibold text-[19px] text-slate-700 mb-2">
                {card.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-slate-600">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
