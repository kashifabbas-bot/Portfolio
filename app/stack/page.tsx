import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import TechPill from "@/components/TechPill";
import CTASection from "@/components/CTASection";
import { stackGroups } from "@/lib/stack";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The tools behind the work: Next.js, React, Node.js, Supabase, PostgreSQL, Tailwind CSS and the rest of the day-to-day stack.",
};

export default function StackPage() {
  return (
    <>
      <PageHero
        label="Stack"
        title="Tools I work with every day."
        subtitle="A small, boring set of tools I know deeply — picked for shipping fast and staying maintainable, not for the resume."
      />

      <section className="pb-8">
        <div className="container-x flex flex-col gap-14">
          {stackGroups.map((group, index) => (
            <Reveal
              key={group.group}
              delay={index * 0.08}
              className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[220px_1fr]"
            >
              <h2 className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                {group.group}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <TechPill>{item}</TechPill>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
