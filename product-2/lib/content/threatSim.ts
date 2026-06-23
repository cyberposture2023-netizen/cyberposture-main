export type SimAction = "trust" | "inspect" | "delete";

export interface SimScenario {
  channel: "Email" | "SMS";
  name: string;
  from: string;
  subject: string;
  body: string;
  redFlags: string[];
  why: string;
  best: SimAction;
}

export const simScenarios: SimScenario[] = [
  {
    channel: "Email",
    name: "HR Payroll Services",
    from: "payroll@pyrll-secure-hr.com",
    subject: "Urgent: Payroll Update Required",
    body: "Your direct-deposit details could not be verified. Confirm your bank information within 24 hours or your next deposit will be held.",
    redFlags: [
      "Look-alike sender domain (pyrll-secure-hr.com)",
      "Urgency and a 24-hour deadline",
      "Threat of financial loss to force action",
    ],
    why: "Real payroll changes are never one-click email links with countdowns. The sender domain is a look-alike, and the urgency is engineered to make you skip verification.",
    best: "inspect",
  },
  {
    channel: "SMS",
    name: "Unknown number",
    from: "+1 (854) 220-9913",
    subject: "Package on hold",
    body: "USPS: your parcel is held pending a $1.99 redelivery fee. Confirm payment here: usps-redeliver.link/track",
    redFlags: [
      "Unfamiliar shortened link",
      "Unsolicited small fee request",
      "Generic, unsolicited delivery notice",
    ],
    why: "Carriers don't collect fees by text with shortened links. The tiny amount lowers your guard while the link harvests card details. Delete and, if expecting a package, check the carrier site directly.",
    best: "delete",
  },
  {
    channel: "Email",
    name: "Daniel Reyes (CEO)",
    from: "ceo@gmai1-corp.com",
    subject: "Quick favor — are you at your desk?",
    body: "I'm heading into back-to-back meetings and can't call. I need you to buy five $200 gift cards for a client gift and send me the codes ASAP. I'll approve reimbursement after.",
    redFlags: [
      "Authority impersonation (look-alike gmai1-corp.com)",
      "Unusual, out-of-process request",
      "Pressure to act before verifying",
    ],
    why: 'Gift-card requests from "executives" who can\'t be reached are a classic business email compromise. Verify through a known channel — a quick message on your normal work chat — before doing anything.',
    best: "inspect",
  },
];

export function simResultMessage(spotted: number): string {
  if (spotted === 3) return "Sharp eye — you avoided every trap.";
  if (spotted === 2) return "Good instincts, with room to sharpen.";
  return "Worth a closer look — these tactics work because they're convincing.";
}

export function simVerdictFor(
  action: SimAction,
  best: SimAction
): { text: string; safe: boolean } {
  if (action === "trust") {
    return { text: "That one would have caught you.", safe: false };
  }
  if (action === best) {
    return { text: "Well spotted.", safe: true };
  }
  return { text: "Safe choice.", safe: true };
}
