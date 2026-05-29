import { AudienceContactPage } from "@/components/AudienceContactPage";

export default function B2CContactPage() {
  return (
    <AudienceContactPage
      config={{
        audience: "Personal",
        eyebrow: "Personal contact",
        title: "Start your personal HVI path.",
        copy: "Use this contact path for personal or family HVI questions, account support, personal exposure concerns, and guidance on the individual risk score experience.",
        formTitle: "Personal HVI inquiry",
        successTitle: "Personal request received",
        successCopy: "Thanks. We will review your inquiry and respond with the right personal HVI guidance or support next step.",
        emailLabel: "Email",
        emailPlaceholder: "alex@example.com",
        orgLabel: "Household or Group",
        orgPlaceholder: "Optional",
        intentLabel: "Personal Need",
        intentOptions: [
          "Start Personal HVI",
          "Family Protection Question",
          "Account or Assessment Support",
          "Personal Exposure Concern",
        ],
        messagePlaceholder: "Share what you want help with: personal score, family protection, suspicious messages, or account support.",
        submitLabel: "Submit Personal Request",
        sideTitle: "Built for individuals and families.",
        sideCopy: "We will route the request toward personal HVI support, family protection guidance, assessment help, or practical next steps for reducing everyday exposure.",
        highlights: [
          ["Best for", "Individuals, parents, families, and anyone who wants clearer personal cyber risk guidance."],
          ["Typical scope", "Personal HVI score, phishing reflexes, password habits, public exposure, and next-step support."],
          ["Next step", "A response with the right personal path or support action."],
        ],
        alternateHref: "/contact/b2b",
        alternateLabel: "Go to Business Contact",
      }}
    />
  );
}
