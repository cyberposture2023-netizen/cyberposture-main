export const heroStats = [
  { value: "300–850", label: "HVI Score Range" },
  { value: "10", label: "Assessment Dimensions" },
  { value: "4", label: "AI Governance Pillars" },
];

export const statStrip = [
  {
    figure: 74,
    suffix: "%",
    headline: "of breaches involve the human element",
    source: "Verizon, 2023 Data Breach Investigations Report",
    url: "https://www.verizon.com/business/resources/reports/dbir/",
  },
  {
    figure: 95,
    suffix: "%",
    headline: "of cybersecurity issues trace to human error",
    source: "World Economic Forum, Global Risks Report 2022, Ch. 3",
    url: "https://www.weforum.org/publications/global-risks-report-2022/in-full/chapter-3-digital-dependencies-and-cyber-vulnerabilities/",
  },
  {
    figure: null,
    suffix: "",
    headline: "Human-driven incidents among the costliest",
    source: "Mimecast, State of Human Risk",
    url: "https://www.mimecast.com/state-of-human-risk/",
  },
];

export const platformCards = [
  {
    accent: "teal" as const,
    eyebrow: "HVI Platform",
    title: "Human Vulnerability Index",
    description:
      "A 300–850 score that quantifies behavior-driven human cyber risk — giving organizations a continuous, evidence-based picture of their most exploited attack surface: people.",
    cta: { label: "Explore HVI", href: "/hvi" },
    ctaSecondary: { label: "Take Assessment", href: "/hvi#assessment" },
  },
  {
    accent: "purple" as const,
    eyebrow: "AI Risk & Governance Platform",
    title: "AI Risk & Governance",
    description:
      "Continuous discovery, assessment, governance, and evidence for enterprise AI usage — from shadow tools to autonomous agents — so you can adopt AI with confidence.",
    cta: { label: "Explore Platform", href: "/ai-risk-governance" },
    ctaSecondary: { label: "Join Early Access", href: "/contact?i=Join+AI+Risk+%26+Governance+Early+Access" },
  },
];

export const whyCards = [
  {
    icon: "shield",
    title: "Measure what matters",
    body: "Cyber risk is a human problem. CyberPosture quantifies it — giving you the signal to prioritize, act, and prove improvement over time.",
  },
  {
    icon: "ai",
    title: "Govern AI proactively",
    body: "AI is already inside your organization. Know what tools people use, what data they're sharing, and where your exposure is — before an incident forces the question.",
  },
  {
    icon: "evidence",
    title: "Evidence, not assumptions",
    body: "Both platforms generate the evidence boards need to understand risk, regulators expect for compliance, and security teams need to close gaps.",
  },
];

export const architectureSteps = [
  { step: "01", label: "Discover", description: "Surface human and AI risk across the organization" },
  { step: "02", label: "Assess",   description: "Score and benchmark exposure with calibrated models" },
  { step: "03", label: "Govern",   description: "Apply controls, policies, and accountability at scale" },
  { step: "04", label: "Evidence", description: "Generate continuous proof for boards and regulators" },
];

export const chooseYourPathCards = [
  {
    title: "Take the HVI Assessment",
    description: "Get your personal Human Vulnerability Index score — free, 10 questions, no sign-up.",
    href: "/hvi#assessment",
    accent: "teal" as const,
  },
  {
    title: "Bring HVI to My Organization",
    description: "Deploy workforce-level HVI scoring across your teams, departments, and org.",
    href: "/contact?i=HVI+for+My+Organization",
    accent: "teal" as const,
  },
  {
    title: "Discover Shadow AI",
    description: "Find out which AI tools are active in your organization — approved and unapproved.",
    href: "/solutions/shadow-ai-discovery",
    accent: "purple" as const,
  },
  {
    title: "Join AI Early Access",
    description: "Get early access to the AI Risk & Governance platform and shape how it's built.",
    href: "/contact?i=Join+AI+Risk+%26+Governance+Early+Access",
    accent: "purple" as const,
  },
];
