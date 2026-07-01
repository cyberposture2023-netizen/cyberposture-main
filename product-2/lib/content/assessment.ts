export interface AssessmentOption {
  label: string;
  points: number;
}

export interface AssessmentQuestion {
  dim: string;
  question: string;
  options: AssessmentOption[];
}

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    dim: "Data Breach Exposure",
    question: "Have your email or passwords shown up in known data breaches?",
    options: [
      { label: "I monitor for breaches and rotate exposed credentials", points: 100 },
      { label: "I'm not sure — I haven't checked recently", points: 50 },
      { label: "Yes, and I reuse some of those passwords", points: 12 },
    ],
  },
  {
    dim: "Digital Footprint",
    question: "How much personal information about you is publicly available online?",
    options: [
      { label: "Very little — I lock down profiles and limit what I share", points: 100 },
      { label: "A typical amount — normal social presence", points: 52 },
      { label: "A lot — public profiles, posts, and personal details", points: 18 },
    ],
  },
  {
    dim: "Password Hygiene",
    question: "How do you manage your passwords?",
    options: [
      { label: "Password manager with unique, strong passwords everywhere", points: 100 },
      { label: "A few strong passwords I reuse across accounts", points: 42 },
      { label: "Simple or repeated passwords I can remember", points: 10 },
    ],
  },
  {
    dim: "Phishing Susceptibility",
    question: 'A message says your account is locked — "act now." You…',
    options: [
      { label: "Ignore the link and verify through the official app or site", points: 100 },
      { label: "Hover the link and hesitate, unsure what to do", points: 52 },
      { label: "Click the link to check quickly", points: 14 },
    ],
  },
  {
    dim: "Security Knowledge",
    question: "How confident are you spotting scams and unsafe requests?",
    options: [
      { label: "Very confident — I know the common tactics", points: 96 },
      { label: "Somewhat confident", points: 54 },
      { label: "Not very confident", points: 20 },
    ],
  },
  {
    dim: "MFA & Controls",
    question: "Is multi-factor authentication enabled on your important accounts?",
    options: [
      { label: "Yes — app or hardware key on everything important", points: 100 },
      { label: "On some accounts, not all", points: 48 },
      { label: "Rarely or never", points: 10 },
    ],
  },
  {
    dim: "Risky Behaviors",
    question: "Do you bypass security warnings or policies for convenience?",
    options: [
      { label: "Never — I treat warnings seriously", points: 100 },
      { label: "Occasionally, when in a hurry", points: 48 },
      { label: "Often — they slow me down", points: 14 },
    ],
  },
  {
    dim: "Stress & Fatigue",
    question: "How often do you handle sensitive requests while rushed or tired?",
    options: [
      { label: "Rarely — I slow down for anything sensitive", points: 95 },
      { label: "Sometimes", points: 52 },
      { label: "Often — I move fast under pressure", points: 22 },
    ],
  },
  {
    dim: "Reporting & Resilience",
    question: "If you spotted something suspicious, would you report it?",
    options: [
      { label: "Yes — I know how and would do it quickly", points: 100 },
      { label: "Probably, eventually", points: 52 },
      { label: "I wouldn't know how, or wouldn't bother", points: 18 },
    ],
  },
  {
    dim: "Attack Surface",
    question: "How many accounts, devices, and connected apps do you actively manage?",
    options: [
      { label: "Few and well-maintained — I close what I no longer use", points: 94 },
      { label: "A moderate number I mostly keep track of", points: 54 },
      { label: "Many — hard to keep track of them all", points: 24 },
    ],
  },
];

export const recommendationMap: Record<string, string> = {
  "Data Breach Exposure":
    "Check your email against breach databases and rotate any exposed or reused passwords.",
  "Digital Footprint":
    "Reduce public personal information and tighten privacy settings on social profiles.",
  "Password Hygiene":
    "Use a password manager with a unique, strong password for every account.",
  "Phishing Susceptibility":
    "Verify urgent requests through an independent, official channel before acting.",
  "Security Knowledge":
    "Refresh your awareness of common scam and social-engineering tactics.",
  "MFA & Controls":
    "Enable multi-factor authentication on all of your important accounts.",
  "Risky Behaviors":
    "Treat security warnings seriously rather than bypassing them for convenience.",
  "Stress & Fatigue":
    "Slow down on sensitive requests, especially when rushed, tired, or under pressure.",
  "Reporting & Resilience":
    "Learn how to report suspicious activity quickly and accurately.",
  "Attack Surface":
    "Close accounts, devices, and app connections you no longer use.",
};

export interface ScoreTier {
  label: string;
  sublabel: string;
  color: string;
  min: number;
}

export const scoreTiers: ScoreTier[] = [
  { min: 800, label: "Excellent", sublabel: "Very Low Vulnerability",  color: "#039fc0" },
  { min: 740, label: "Strong",    sublabel: "Low Vulnerability",       color: "#00b8d9" },
  { min: 670, label: "Fair",      sublabel: "Moderate Vulnerability",  color: "#1a65b8" },
  { min: 580, label: "Elevated",  sublabel: "High Vulnerability",      color: "#f5a623" },
  { min: 0,   label: "Critical",  sublabel: "Very High Vulnerability", color: "#e05260" },
];

export function computeScore(answers: number[]): number {
  const raw = answers.reduce((a, b) => a + b, 0) / answers.length;
  return Math.round(300 + (raw / 100) * 550);
}

export function tierFor(score: number): ScoreTier {
  return scoreTiers.find((t) => score >= t.min) ?? scoreTiers[scoreTiers.length - 1];
}
