export type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

export const projectTypes = [
  "Custom Web App",
  "E-commerce Store",
  "Landing Page",
  "Dashboard / SaaS",
  "Maintenance / Retainer",
  "Something else",
] as const;

export const budgetRanges = [
  "Under Rs 10,000",
  "Rs 10,000 – Rs 30,000",
  "Rs 30,000 – Rs 100,000",
  "Rs 100,000+",
  "Not sure yet",
] as const;

export const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/kashif" },
  { label: "GitHub", href: "https://github.com/kashif" },
  { label: "X / Twitter", href: "https://x.com/kashif" },
  { label: "Email", href: "mailto:kashif@example.com" },
];

export const contact = {
  email: "kashif@example.com",
  whatsapp: "https://wa.me/923000000000",
  responseTime: "Within 24 hours",
};
