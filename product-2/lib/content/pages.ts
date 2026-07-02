// ── Careers ───────────────────────────────────────────────────────────────────

export interface CareerRole {
  id: string;
  category: string;
  title: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

export const careerRoles: CareerRole[] = [
  {
    id: "security-architect",
    category: "Engineering",
    title: "Security Architect",
    description:
      "Design and own the security architecture for both CyberPosture platforms — HVI and AI Risk & Governance. Work closely with product and engineering to bake security in from day one.",
    responsibilities: [
      "Define security architecture and threat models for cloud-native platforms",
      "Lead security reviews of new features, integrations, and infrastructure changes",
      "Build and maintain security documentation for compliance and customer trust",
      "Partner with product on privacy-by-design approaches to user data",
      "Evaluate and recommend security tooling and controls",
    ],
    skills: ["Security Architecture", "Threat Modeling", "Cloud Security", "SAST/DAST", "Compliance Frameworks"],
  },
  {
    id: "security-analyst-intern",
    category: "Internship",
    title: "Security Analyst Intern",
    description:
      "A hands-on internship for students or recent graduates who want to work at the intersection of human behavior, cybersecurity, and AI. You'll contribute to real research and product work.",
    responsibilities: [
      "Research human vulnerability patterns and support HVI model development",
      "Assist in reviewing and classifying AI tool risk for the AI Risk platform",
      "Support security testing and documentation",
      "Contribute to threat intelligence and industry research",
    ],
    skills: ["Security Fundamentals", "Research", "Python or similar", "Curiosity"],
  },
  {
    id: "security-program-manager",
    category: "Operations",
    title: "Security Program Manager",
    description:
      "Own the security program end-to-end — from policy and compliance to customer-facing security assurance. This is a broad, high-ownership role at an early-stage company.",
    responsibilities: [
      "Build and manage the security program, policies, and controls",
      "Own compliance efforts (SOC 2, ISO 27001, or equivalent) from gap assessment to certification",
      "Manage customer security questionnaires and trust documentation",
      "Coordinate security incident response planning and tabletop exercises",
      "Report security posture to leadership and the board",
    ],
    skills: ["Security Program Management", "Compliance", "GRC", "Risk Management", "Communication"],
  },
];

// ── About / Founders ──────────────────────────────────────────────────────────

export interface Founder {
  initials: string;
  name: string;
  role: string;
  bio: string;
}

export const founders: Founder[] = [
  {
    initials: "SV",
    name: "V. S. Sudhakar",
    role: "Co-Founder & CEO",
    bio: "A cybersecurity, governance, risk, compliance, and audit-readiness leader with more than 20 years of experience across healthcare, medical devices, banking, financial services, audit, and regulated enterprise environments. He has led security programs, risk assessments, SOC 2 readiness, incident response, and enterprise governance — and developed AI-driven GRC and security operations tooling. At CyberPosture he leads overall strategy, security methodology, risk models, scoring algorithms, and governance frameworks.",
  },
  {
    initials: "BP",
    name: "Bipin Prabhakar",
    role: "Co-Founder & Strategic Advisor",
    bio: "Brings deep expertise in information systems, enterprise risk, security, technology adoption, platform strategy, and human-centered cyber-risk thinking. His work connects cybersecurity, organizational behavior, enterprise systems, risk measurement, and scalable architecture. At CyberPosture he focuses on platform strategy, product direction, architecture, ecosystem development, and the HVI methodology and long-term technology roadmap.",
  },
];

// ── Resources ─────────────────────────────────────────────────────────────────

export interface ResourceCard {
  title: string;
  category: string;
  status: "available" | "coming-soon" | "in-progress";
  description: string;
  href?: string;
}

export const resourceCards: ResourceCard[] = [
  {
    title: "Security Awareness Guides",
    category: "Guides",
    status: "coming-soon",
    description: "Practical guides for individuals and teams on reducing human cyber risk.",
  },
  {
    title: "Human Risk Research",
    category: "Research",
    status: "coming-soon",
    description: "Data-driven research on behavioral patterns in cybersecurity incidents.",
  },
  {
    title: "AI Risk Checklists",
    category: "Checklists",
    status: "coming-soon",
    description: "Step-by-step checklists for assessing and governing AI tool usage.",
  },
  {
    title: "Blog",
    category: "Blog",
    status: "coming-soon",
    description: "Perspectives on human vulnerability, AI governance, and cyber risk intelligence.",
  },
  {
    title: "HVI Assessment",
    category: "Assessments",
    status: "available",
    description: "Take the live Human Vulnerability Index assessment — free, 10 questions, instant score.",
    href: "/hvi#assessment",
  },
  {
    title: "HVI Methodology",
    category: "HVI Methodology",
    status: "in-progress",
    description: "A detailed look at the science and methodology behind the Human Vulnerability Index.",
  },
];

// ── Contact inquiry types ──────────────────────────────────────────────────────

export const inquiryTypes = [
  "Take HVI Assessment",
  "Request HVI Demo",
  "HVI for My Organization",
  "Join AI Risk & Governance Early Access",
  "Request Test Customer Conversation",
  "Shadow AI Assessment Interest",
  "AI Governance & Compliance Interest",
  "Careers Inquiry",
  "General Inquiry",
];

// ── Shadow AI Discovery ────────────────────────────────────────────────────────

export const shadowAIFinds = [
  "Unapproved generative AI tools accessing sensitive business data",
  "Personal ChatGPT, Gemini, and Claude accounts used for work tasks",
  "AI-powered browser extensions with broad data access",
  "Autonomous agents operating without security review",
  "SaaS tools with embedded AI features not covered by existing DLP policies",
  "Code assistants transmitting proprietary code to third-party models",
  "AI tools processing regulated data (PII, PHI, financial) without controls",
  "Shadow AI usage patterns that create compliance gaps in regulated industries",
];

// ── AI Governance & Compliance ─────────────────────────────────────────────────

export const governanceCapabilities = [
  "Continuous AI tool discovery and inventory management",
  "Risk scoring per tool based on data sensitivity and exposure",
  "Automated policy enforcement and access controls",
  "Audit trails and evidence generation for every AI interaction",
  "Shadow AI detection and remediation workflows",
  "Vendor risk assessment for third-party AI integrations",
  "Real-time alerting on policy violations and anomalous AI usage",
  "Role-based dashboards for security, compliance, and leadership",
  "API-level visibility into AI model usage and data flows",
];

export const complianceReadinessAreas = [
  "NIST AI Risk Management Framework (AI RMF)",
  "EU AI Act readiness assessment",
  "SOC 2 AI usage evidence and controls",
  "ISO 42001 AI management system alignment",
  "GDPR and CCPA data processing accountability",
  "HIPAA safeguards for AI processing PHI",
  "Financial sector AI governance (SR 11-7, OCC guidance)",
  "Board-level AI risk reporting and disclosure",
];

export const aiTechTypes = [
  "Generative AI (text, code, image)",
  "Autonomous agents",
  "AI-enhanced SaaS features",
  "Browser-based AI extensions",
  "Code assistants",
  "AI-powered analytics",
  "Conversational AI & chatbots",
  "AI-driven automation & RPA",
];

export const complianceStandards = [
  "NIST AI RMF",
  "EU AI Act",
  "ISO 42001",
  "SOC 2",
  "GDPR / CCPA",
  "HIPAA",
  "SR 11-7",
];

export const aiHelpsAnswer = [
  "Which AI tools are employees actively using?",
  "What sensitive data is flowing into AI systems?",
  "Which tools are approved, shadow, or under review?",
  "Where are our highest-risk AI exposure points?",
  "Are we meeting our AI governance obligations?",
  "What would auditors find if they looked today?",
  "How do we demonstrate compliance as an outcome?",
  "Which autonomous agents operate without oversight?",
];

// ── AI Usage Inventory (mockup) ────────────────────────────────────────────────

export interface InventoryRow {
  tool: string;
  category: string;
  status: "Approved" | "Shadow" | "Under review";
  users: number;
  dataSensitivity: "Low" | "Medium" | "High";
  exposure: number; // 0–100
}

export const inventoryRows: InventoryRow[] = [
  { tool: "GitHub Copilot",              category: "Coding assistant",    status: "Approved",      users: 120, dataSensitivity: "Medium", exposure: 34 },
  { tool: "Claude (API)",                category: "Gen AI",              status: "Approved",      users: 35,  dataSensitivity: "Medium", exposure: 28 },
  { tool: "ChatGPT (personal)",          category: "Gen AI",              status: "Shadow",        users: 48,  dataSensitivity: "High",   exposure: 82 },
  { tool: "Gemini",                      category: "Gen AI",              status: "Shadow",        users: 27,  dataSensitivity: "High",   exposure: 74 },
  { tool: "Midjourney",                  category: "Image gen",           status: "Under review",  users: 12,  dataSensitivity: "Low",    exposure: 46 },
  { tool: "Finance Reconciliation Agent",category: "Autonomous agent",    status: "Shadow",        users: 3,   dataSensitivity: "High",   exposure: 91 },
];

// ── Workforce HVI Dashboard (mockup) ──────────────────────────────────────────

export interface DeptRow {
  dept: string;
  score: number;
  qoq: number;
}

export const workforceDashboard = {
  avgHVI: 694,
  qoqChange: 11,
  highRiskPct: 18,
  departments: [
    { dept: "Engineering", score: 761, qoq: 12 },
    { dept: "Support",     score: 705, qoq: 8  },
    { dept: "Finance",     score: 688, qoq: 5  },
    { dept: "Sales",       score: 642, qoq: -3 },
    { dept: "HR",          score: 724, qoq: 9  },
    { dept: "Executive",   score: 598, qoq: 21 },
  ] as DeptRow[],
};
