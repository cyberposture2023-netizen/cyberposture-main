import { AudienceContactPage } from "@/components/AudienceContactPage";

export default function B2BContactPage() {
  return (
    <AudienceContactPage
      config={{
        audience: "Business",
        eyebrow: "Business contact",
        title: "Book an enterprise HVI demo.",
        copy: "Talk with CyberPosture about organization-wide HVI scoring, passive OSINT visibility, Internet Attack Surface review, pilot scope, and rollout planning.",
        formTitle: "Enterprise demo request",
        successTitle: "Enterprise request received",
        successCopy: "Thanks. Our enterprise team will review the context and follow up with demo timing and pilot-fit questions.",
        emailLabel: "Work Email",
        emailPlaceholder: "alex@company.com",
        orgLabel: "Organization",
        orgPlaceholder: "Company or institution name",
        phoneLabel: "Business Phone",
        phonePlaceholder: "+1 (555) 010-2040",
        intentLabel: "Enterprise Need",
        intentOptions: [
          "Book Enterprise Demo",
          "Discuss OSINT / IAS Module",
          "Plan HVI Pilot",
          "Pricing and Procurement",
        ],
        messagePlaceholder: "Share team size, use case, timeline, or the risk areas you want to evaluate.",
        submitLabel: "Request Enterprise Demo",
        sideTitle: "Built for security and risk teams.",
        sideCopy: "We will route the request toward the right enterprise conversation: HVI pilot design, passive exposure review, stakeholder alignment, or procurement planning.",
        highlights: [
          ["Best for", "CISOs, risk leaders, HR security partners, compliance teams, and managed security providers."],
          ["Typical scope", "Department-level HVI, OSINT coverage, IAS findings, remediation themes, and executive reporting."],
          ["Next step", "A short discovery call followed by a demo or scoped pilot plan."],
        ],
        phoneContacts: [
          ["Business Sales", "+1 (800) 555-0199", "tel:+18005550199"],
          ["Enterprise Support", "+1 (800) 555-0144", "tel:+18005550144"],
        ],
        alternateHref: "/contact/b2c",
        alternateLabel: "Go to Personal Contact",
      }}
    />
  );
}
