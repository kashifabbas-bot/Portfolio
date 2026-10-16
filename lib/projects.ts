export type ProjectCategory =
  | "Web Apps"
  | "E-commerce"
  | "Landing Pages"
  | "Dashboards";

export type ProjectFeature = {
  icon: string;
  title: string;
  description: string;
};

export type ProjectScreenshot = {
  src: string;
  caption: string;
};

export type ProjectResult = {
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tag: string;
  summary: string;
  cover: string;
  url?: string;
  client?: string;
  timeline?: string;
  role?: string;
  year?: string;
  overview: string;
  problem?: string;
  solution?: string;
  features?: ProjectFeature[];
  tech: string[];
  screenshots?: ProjectScreenshot[];
  results?: ProjectResult[];
  testimonial?: {
    quote: string;
    name: string;
    company: string;
  };
};

export const projects: Project[] = [
  {
    slug: "linkmyleads",
    title: "LinkMyLeads",
    category: "Web Apps",
    tag: "Business",
    summary:
      "A live business web app built with React, Supabase and Tailwind CSS.",
    cover: "/images/projects/linkmyleads.svg",
    url: "https://linkmyleads.net",
    role: "Full-Stack Developer",
    year: "2026",
    overview:
      "LinkMyLeads is a production business web app I built end to end: React on the front end, Supabase for the database and auth, Tailwind CSS for the interface. It runs live at linkmyleads.net.",
    tech: ["React", "Supabase", "Tailwind CSS"],
  },
  {
    slug: "dental-booking-platform",
    title: "Dental Booking Platform",
    category: "Web Apps",
    tag: "Healthcare",
    summary:
      "Appointment and patient management platform for a multi-location dental clinic.",
    cover: "/images/projects/dental-booking-platform.svg",
    client: "SmileLab Dental",
    timeline: "9 weeks",
    role: "Full-Stack Developer",
    year: "2025",
    overview:
      "SmileLab was running three clinics on phone calls and a paper diary. Every missed call was a lost patient. I designed and built a booking platform where patients pick a slot online and the front desk stops chasing the phone.",
    problem:
      "The front desk handled 120+ calls a day, double-booked chairs, and had no record of who cancelled or why. Patients had no way to book after 6pm, which is exactly when most people have time to book.",
    solution:
      "I built a public booking flow with real-time slot availability per clinic, plus an internal dashboard for staff. Automated SMS reminders went out 24 hours before each appointment, and cancellations instantly released the slot back to the pool.",
    features: [
      {
        icon: "📅",
        title: "Real-time Slots",
        description: "Live availability per clinic and per chair.",
      },
      {
        icon: "🔔",
        title: "SMS Reminders",
        description: "Automated 24h reminders cut no-shows sharply.",
      },
      {
        icon: "👩‍⚕️",
        title: "Staff Dashboard",
        description: "Day view, drag-to-reschedule, patient history.",
      },
      {
        icon: "💳",
        title: "Stripe Payments",
        description: "Optional online deposit at the time of booking.",
      },
      {
        icon: "📊",
        title: "Reports",
        description: "Chair utilisation, cancellations, revenue by clinic.",
      },
      {
        icon: "🔐",
        title: "Roles & Access",
        description: "Owner, manager and receptionist permissions.",
      },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    screenshots: [
      {
        src: "/images/projects/dental-booking-platform-1.svg",
        caption: "Public booking flow with live slot availability.",
      },
      {
        src: "/images/projects/dental-booking-platform-2.svg",
        caption: "Staff day view with drag-to-reschedule.",
      },
      {
        src: "/images/projects/dental-booking-platform-3.svg",
        caption: "Patient history and treatment notes.",
      },
    ],
    results: [
      { value: "+40%", label: "Online bookings in 60 days" },
      { value: "-25%", label: "Missed calls at the front desk" },
      { value: "0.9s", label: "Largest contentful paint" },
    ],
    testimonial: {
      quote:
        "Patients book at midnight and my team finds out in the morning. We stopped losing appointments the week it launched.",
      name: "Dr. Ayesha Khan",
      company: "SmileLab Dental",
    },
  },
  {
    slug: "fashion-store-redesign",
    title: "Fashion Store Redesign",
    category: "E-commerce",
    tag: "Retail",
    summary:
      "Complete rebuild of a slow WooCommerce store into a fast custom storefront.",
    cover: "/images/projects/fashion-store-redesign.svg",
    client: "Noor Apparel",
    timeline: "7 weeks",
    role: "Full-Stack Developer",
    year: "2025",
    overview:
      "Noor Apparel had traffic but a terrible checkout. I rebuilt the storefront from scratch, kept the existing inventory system, and cut page weight by more than half.",
    problem:
      "The old store loaded in 6 seconds on 4G, the cart lost items on refresh, and mobile checkout had eleven form fields. Two thirds of carts were abandoned on mobile.",
    solution:
      "A custom Next.js storefront with server-rendered product pages, optimistic cart state that survives refreshes, and a three-step mobile checkout. Inventory stayed in sync through a thin Node.js API layer over their existing database.",
    features: [
      {
        icon: "🛍️",
        title: "Product Catalogue",
        description: "Filter, sort and search across every collection.",
      },
      {
        icon: "🛒",
        title: "Persistent Cart",
        description: "Cart survives refresh and device switches.",
      },
      {
        icon: "📱",
        title: "3-Step Checkout",
        description: "Address, shipping and payment only.",
      },
      {
        icon: "🔍",
        title: "Instant Search",
        description: "Type-ahead results with image thumbnails.",
      },
      {
        icon: "📦",
        title: "Order Tracking",
        description: "Customers follow orders without emailing.",
      },
      {
        icon: "📈",
        title: "Analytics",
        description: "Funnel events wired to their dashboard.",
      },
    ],
    tech: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    screenshots: [
      {
        src: "/images/projects/fashion-store-redesign-1.svg",
        caption: "Collection page with instant filtering.",
      },
      {
        src: "/images/projects/fashion-store-redesign-2.svg",
        caption: "Product page with sticky add-to-cart on mobile.",
      },
      {
        src: "/images/projects/fashion-store-redesign-3.svg",
        caption: "Three-step checkout built for thumbs.",
      },
    ],
    results: [
      { value: "+62%", label: "Conversion on mobile" },
      { value: "-58%", label: "Page weight" },
      { value: "1.1s", label: "Time to interactive" },
    ],
    testimonial: {
      quote:
        "Same products, same prices, double the orders. Turns out speed was the whole problem.",
      name: "Noor Fatima",
      company: "Noor Apparel",
    },
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Dashboards",
    tag: "SaaS",
    summary:
      "Multi-tenant analytics dashboard with custom charts and role-based access.",
    cover: "/images/projects/analytics-dashboard.svg",
    client: "Pulse Analytics",
    timeline: "11 weeks",
    role: "Frontend Lead",
    year: "2024",
    overview:
      "Pulse needed a dashboard that could render millions of events without feeling slow, and hand each customer only their own slice of the data.",
    problem:
      "Their first dashboard froze at 50k rows, every chart re-fetched on tab switch, and there was no way to give a client read-only access to just their workspace.",
    solution:
      "I led the frontend: a virtualised data grid, cached query layer with stale-while-revalidate, and chart components built on a shared transform pipeline. Row-level security in Postgres handled tenant isolation at the database level.",
    features: [
      {
        icon: "📊",
        title: "Custom Charts",
        description: "Line, bar, funnel and cohort views.",
      },
      {
        icon: "⚡",
        title: "Virtualised Grid",
        description: "Smooth scrolling through millions of rows.",
      },
      {
        icon: "🧩",
        title: "Saved Views",
        description: "Pin filters and share them with the team.",
      },
      {
        icon: "🔐",
        title: "Multi-Tenant RLS",
        description: "Row-level security per workspace.",
      },
      {
        icon: "📤",
        title: "CSV & API Export",
        description: "Any view exports as data or widgets.",
      },
      {
        icon: "🌗",
        title: "Density Modes",
        description: "Comfortable and compact layouts.",
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Three.js",
    ],
    screenshots: [
      {
        src: "/images/projects/analytics-dashboard-1.svg",
        caption: "Overview with saved views and date ranges.",
      },
      {
        src: "/images/projects/analytics-dashboard-2.svg",
        caption: "Cohort analysis with drill-down.",
      },
      {
        src: "/images/projects/analytics-dashboard-3.svg",
        caption: "Virtualised event stream.",
      },
    ],
    results: [
      { value: "10x", label: "Rows rendered without lag" },
      { value: "-45%", label: "API calls per session" },
      { value: "98", label: "Lighthouse performance" },
    ],
    testimonial: {
      quote:
        "The dashboard became the reason customers upgraded. It stopped being a cost centre.",
      name: "Bilal Ahmed",
      company: "Pulse Analytics",
    },
  },
  {
    slug: "restaurant-ordering-app",
    title: "Restaurant Ordering App",
    category: "Web Apps",
    tag: "Food",
    summary:
      "QR menu and online ordering for a chain of four restaurants.",
    cover: "/images/projects/restaurant-ordering-app.svg",
    client: "Chaska Foods",
    timeline: "6 weeks",
    role: "Full-Stack Developer",
    year: "2024",
    overview:
      "Chaska wanted customers to order from the table without flagging down a waiter, and to let regulars order delivery from the same menu.",
    problem:
      "Every table needed a printed menu, orders were shouted across the kitchen, and there was no record of what sold well at which branch.",
    solution:
      "A QR code per table opens a mobile ordering flow. Orders land on a kitchen display screen with sound alerts, and each branch gets its own menu availability and pricing.",
    features: [
      {
        icon: "📷",
        title: "QR Per Table",
        description: "Scan, order, no app install.",
      },
      {
        icon: "🍳",
        title: "Kitchen Display",
        description: "Live tickets with accept and bump.",
      },
      {
        icon: "💳",
        title: "Stripe Checkout",
        description: "Pay at table or on delivery.",
      },
      {
        icon: "🏬",
        title: "Multi-Branch",
        description: "Per-branch menus and stock flags.",
      },
      {
        icon: "🎁",
        title: "Offers Engine",
        description: "Happy hour and combo pricing rules.",
      },
      {
        icon: "📲",
        title: "Order Notifications",
        description: "Push and sound alerts for staff.",
      },
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Vercel"],
    screenshots: [
      {
        src: "/images/projects/restaurant-ordering-app-1.svg",
        caption: "Mobile menu with modifiers and offers.",
      },
      {
        src: "/images/projects/restaurant-ordering-app-2.svg",
        caption: "Kitchen display with live tickets.",
      },
      {
        src: "/images/projects/restaurant-ordering-app-3.svg",
        caption: "Branch sales breakdown.",
      },
    ],
    results: [
      { value: "+35%", label: "Average order value" },
      { value: "-3 min", label: "Time to take an order" },
      { value: "4", label: "Branches live in 6 weeks" },
    ],
    testimonial: {
      quote:
        "Rush hour used to be chaos. Now the kitchen just watches the screen.",
      name: "Usman Tariq",
      company: "Chaska Foods",
    },
  },
  {
    slug: "real-estate-listings-portal",
    title: "Real Estate Listings Portal",
    category: "Web Apps",
    tag: "PropTech",
    summary:
      "Property listings portal with map search and agent enquiry routing.",
    cover: "/images/projects/real-estate-listings-portal.svg",
    client: "Skyline Estates",
    timeline: "8 weeks",
    role: "Full-Stack Developer",
    year: "2024",
    overview:
      "Skyline's agents were posting the same listing to Facebook, WhatsApp status and three property sites. I built one portal that became the source of truth.",
    problem:
      "Listings went stale, duplicate enquiries went to the wrong agent, and buyers had no way to search by area on a map.",
    solution:
      "An agent dashboard for publishing listings once, a public search with map clustering, and an enquiry router that assigns leads to the agent who owns the property.",
    features: [
      {
        icon: "🗺️",
        title: "Map Search",
        description: "Cluster pins with draw-a-boundary search.",
      },
      {
        icon: "🏠",
        title: "Listing Manager",
        description: "Publish once, status auto-expires.",
      },
      {
        icon: "🧭",
        title: "Lead Routing",
        description: "Enquiries reach the right agent instantly.",
      },
      {
        icon: "🖼️",
        title: "Media Gallery",
        description: "Drag-drop uploads with auto watermarks.",
      },
      {
        icon: "🔔",
        title: "Saved Searches",
        description: "Buyers get alerts on new matches.",
      },
      {
        icon: "📊",
        title: "Agent Scoreboard",
        description: "Views, enquiries and conversion per agent.",
      },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
    ],
    screenshots: [
      {
        src: "/images/projects/real-estate-listings-portal-1.svg",
        caption: "Map search with clustered pins.",
      },
      {
        src: "/images/projects/real-estate-listings-portal-2.svg",
        caption: "Listing detail with enquiry panel.",
      },
      {
        src: "/images/projects/real-estate-listings-portal-3.svg",
        caption: "Agent dashboard and lead inbox.",
      },
    ],
    results: [
      { value: "1,200+", label: "Listings migrated" },
      { value: "+28%", label: "Qualified enquiries" },
      { value: "-70%", label: "Time to publish a listing" },
    ],
    testimonial: {
      quote:
        "One listing, everywhere. We deleted three spreadsheets the first week.",
      name: "Hina Malik",
      company: "Skyline Estates",
    },
  },
  {
    slug: "fitness-coaching-platform",
    title: "Fitness Coaching Platform",
    category: "Web Apps",
    tag: "Health",
    summary:
      "Subscription platform where coaches deliver plans and clients log progress.",
    cover: "/images/projects/fitness-coaching-platform.svg",
    client: "FormLab Coaching",
    timeline: "10 weeks",
    role: "Full-Stack Developer",
    year: "2024",
    overview:
      "FormLab coaches were sending workout plans as PDFs over WhatsApp. This platform turned that into a product with recurring revenue.",
    problem:
      "Plans were lost, clients had no progress history, and billing was manual invoicing every single month.",
    solution:
      "A subscription platform with coach-assigned plans, in-app set logging, progress charts and Stripe recurring billing. Coaches get a queue of check-ins to review each week.",
    features: [
      {
        icon: "🏋️",
        title: "Plan Builder",
        description: "Reusable templates with per-client tweaks.",
      },
      {
        icon: "✅",
        title: "Set Logging",
        description: "Clients log reps, weight and RPE.",
      },
      {
        icon: "📈",
        title: "Progress Charts",
        description: "Volume, bodyweight and PR trends.",
      },
      {
        icon: "💬",
        title: "Coach Check-ins",
        description: "Weekly queue with notes and replies.",
      },
      {
        icon: "🔁",
        title: "Recurring Billing",
        description: "Stripe subscriptions with dunning.",
      },
      {
        icon: "📱",
        title: "Installable App",
        description: "PWA so clients skip the app store.",
      },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Tailwind CSS",
    ],
    screenshots: [
      {
        src: "/images/projects/fitness-coaching-platform-1.svg",
        caption: "Client dashboard with the week ahead.",
      },
      {
        src: "/images/projects/fitness-coaching-platform-2.svg",
        caption: "Set logging with rest timer.",
      },
      {
        src: "/images/projects/fitness-coaching-platform-3.svg",
        caption: "Coach check-in queue.",
      },
    ],
    results: [
      { value: "MRR", label: "Recurring revenue from day one" },
      { value: "-90%", label: "Manual billing work" },
      { value: "3.5x", label: "Coach capacity per client" },
    ],
    testimonial: {
      quote:
        "It stopped being a side hustle and started being a business with numbers.",
      name: "Sara Iqbal",
      company: "FormLab Coaching",
    },
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Web Apps",
  "E-commerce",
  "Landing Pages",
  "Dashboards",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
}
