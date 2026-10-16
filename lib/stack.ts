export type StackGroup = {
  group: string;
  items: string[];
};

export const stackGroups: StackGroup[] = [
  {
    group: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    group: "Backend",
    items: ["Node.js", "REST APIs", "Server Actions", "Resend"],
  },
  {
    group: "Database",
    items: ["Supabase", "PostgreSQL", "Row Level Security", "Prisma"],
  },
  {
    group: "Design",
    items: ["Figma", "Design Systems", "Accessibility", "Prototyping"],
  },
];

export const stack: string[] = [
  "Next.js",
  "React",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Three.js",
  "Figma",
];
