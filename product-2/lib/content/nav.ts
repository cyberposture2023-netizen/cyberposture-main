export interface NavItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  items: NavItem[];
}

export const platformsMenu: NavItem[] = [
  { label: "Human Vulnerability Index (HVI)", href: "/hvi" },
  { label: "AI Risk & Governance", href: "/ai-risk-governance" },
];

export const solutionsMenu: NavItem[] = [
  { label: "For Individuals", href: "/hvi#assessment" },
  { label: "For Organizations", href: "/hvi#workforce" },
  { label: "Shadow AI Discovery", href: "/solutions/shadow-ai-discovery" },
  { label: "AI Governance & Compliance", href: "/solutions/ai-governance-compliance" },
];

export const topNavLinks: NavItem[] = [
  { label: "Resources", href: "/resources" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = [
  {
    heading: "Platforms",
    links: [
      { label: "Human Vulnerability Index", href: "/hvi" },
      { label: "AI Risk & Governance", href: "/ai-risk-governance" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Shadow AI Discovery", href: "/solutions/shadow-ai-discovery" },
      { label: "AI Governance & Compliance", href: "/solutions/ai-governance-compliance" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Resources", href: "/resources" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "Responsible Use", href: "/legal/responsible-use" },
    ],
  },
];
