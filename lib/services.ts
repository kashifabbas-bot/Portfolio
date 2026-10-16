export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "custom-web-apps",
    icon: "⚡",
    title: "Custom Web Apps",
    short: "Booking systems, portals, internal tools and SaaS dashboards.",
    description:
      "When off-the-shelf software stops fitting, you get a system shaped around how your business actually runs. I handle the database, the API, the interface and the deploy.",
    deliverables: [
      "Database schema and secure API layer",
      "Authentication and role-based access",
      "Admin dashboard and reporting",
      "Third-party integrations (payments, SMS, email)",
      "Deployment, monitoring and handover docs",
    ],
  },
  {
    slug: "ecommerce-development",
    icon: "🛒",
    title: "E-commerce Development",
    short: "Fast storefronts, checkout flows and inventory sync.",
    description:
      "Storefronts that load instantly and checkouts that do not lose customers. I build custom frontends that connect to the tools you already use, or a full stack if you need it.",
    deliverables: [
      "Product catalogue with search and filters",
      "Cart, checkout and payment gateway",
      "Inventory and order management",
      "Shipping and tax rules",
      "Analytics funnel and abandoned cart tracking",
    ],
  },
  {
    slug: "landing-pages",
    icon: "🎨",
    title: "Landing Pages & Marketing Sites",
    short: "High-converting pages for launches and campaigns.",
    description:
      "One page, one job: turn a visitor into a lead. Built fast, wired to your analytics, and easy for you to edit without touching code.",
    deliverables: [
      "Conversion-focused single page layout",
      "Copy and section structure guidance",
      "Form and CRM / email integration",
      "Analytics and event tracking",
      "SEO metadata and Open Graph images",
    ],
  },
  {
    slug: "maintenance-support",
    icon: "🔧",
    title: "Maintenance & Retainers",
    short: "Ongoing updates, monitoring and improvements.",
    description:
      "Software is not finished on launch day. Monthly retainers cover monitoring, small features, dependency updates and a guaranteed response time.",
    deliverables: [
      "Uptime and error monitoring",
      "Priority bug fixes with SLA",
      "Monthly feature hours",
      "Dependency and security updates",
      "Performance and cost reviews",
    ],
  },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  featured: boolean;
  features: string[];
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Rs 5,000 – 10,000",
    cadence: "range",
    description: "A single high-converting landing page.",
    featured: false,
    features: [
      "One-page marketing site",
      "Mobile-first responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "2 revision rounds",
      "2 weeks delivery",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "Rs 15,000 – 30,000",
    cadence: "range",
    description: "A full web app or storefront with a backend.",
    featured: true,
    features: [
      "Multi-page app or storefront",
      "Database, auth and admin panel",
      "Payments or third-party integrations",
      "Performance budget under 1.5s",
      "4 revision rounds",
      "4-8 weeks delivery",
      "30 days post-launch support",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Custom",
    price: "Let's talk",
    cadence: "scope-based",
    description: "Multi-tenant SaaS, integrations or retainers.",
    featured: false,
    features: [
      "Complex or multi-tenant systems",
      "Team and role management",
      "Ongoing retainer option",
      "Dedicated Slack channel",
      "Architecture and scaling advice",
      "Priority response time",
    ],
    cta: "Book a discovery call",
  },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How long does a typical project take?",
    answer:
      "A landing page is usually 2 weeks. A web app or storefront is 4 to 8 weeks depending on integrations and how fast feedback comes back. You get a week-by-week plan before we start.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Starter includes 2 rounds, Growth includes 4. A revision round means you collect all feedback and send it at once, which keeps things moving. Extra rounds are billed hourly.",
  },
  {
    question: "What are the payment terms?",
    answer:
      "40% to start, 40% at the first working demo, 20% on launch. For retainers it is billed monthly in advance. Bank transfer and Wise both work for international clients.",
  },
  {
    question: "Do I own the code?",
    answer:
      "Yes. On final payment you own the full source code and the design files. I hand over the repository, the database and the deployment, with documentation so another developer can pick it up.",
  },
  {
    question: "Who handles hosting?",
    answer:
      "I deploy to Vercel on your account so you keep control. Hosting for typical projects sits in the free tier or a few dollars a month. I cover the setup and show you how to manage it.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Growth projects include 30 days of free bug support. After that, most clients move to a monthly retainer for updates, monitoring and small features. It is optional, not required.",
  },
  {
    question: "Can you work with my existing designer or codebase?",
    answer:
      "Absolutely. I work from Figma files regularly, and I can join an existing codebase for a retainer or a fixed-scope project. I will review it first and tell you honestly if it is worth continuing.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Most of my clients are international. I keep a 4-hour overlap with your working day for calls and I answer messages within 24 hours.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
