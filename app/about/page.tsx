import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kashif is a self-taught full-stack web developer with 2 years of experience, building booking systems, storefronts and dashboards for small businesses and startups.",
};

const timeline = [
  {
    year: "2024",
    title: "Taught myself to code",
    description:
      "Started with HTML, CSS and JavaScript from free docs and YouTube. No bootcamp, no degree — just projects that had to work.",
  },
  {
    year: "2025",
    title: "First paying client",
    description:
      "A local gym needed a website. It went live, it worked, and the referrals started.",
  },
  {
    year: "2026",
    title: "Full-time freelance",
    description:
      "Two years in, building booking systems, storefronts and dashboards for clients — mostly on Next.js, Node.js and Supabase.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Hi, I'm Kashif."
        subtitle="Self-taught full-stack web developer with 2 years of experience. I build the kind of software that quietly does its job every day, then I stick around to keep it that way."
      />

      <section className="pb-20">
        <div className="container-x grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative rounded-3xl bg-[linear-gradient(135deg,var(--accent),var(--accent-2))] p-[1.5px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-bg-2">
                <div className="absolute inset-0 flex items-center justify-center text-7xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <SectionLabel>Background</SectionLabel>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Self-taught, two years into shipping real software.
            </h2>
            <p className="text-[15px] leading-relaxed text-muted">
              I started in 2024 with HTML and a lot of curiosity, learning from
              free documentation, YouTube and my own broken builds. Nobody
              handed me a syllabus, so everything I know came from projects that
              had to actually work.
            </p>
            <p className="text-[15px] leading-relaxed text-muted">
              Since then I have worked as a freelance developer, mostly on
              Next.js, Node.js and Supabase. The work usually looks the same
              underneath: a real database schema, a secure API, an interface
              somebody uses on a busy Tuesday afternoon.
            </p>
            <p className="text-[15px] leading-relaxed text-muted">
              I care about the unglamorous parts — load time, error states,
              what happens when a payment fails at 2am. That is where a product
              earns trust.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x flex flex-col gap-14">
          <Reveal className="flex flex-col gap-5">
            <SectionLabel>Journey</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)]">
              How I got here.
            </h2>
          </Reveal>

          <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
            {timeline.map((item, index) => (
              <Reveal as="li" key={item.year} delay={index * 0.08}>
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border border-accent bg-bg shadow-[0_0_12px_var(--accent)]"
                />
                <span className="font-mono text-sm tracking-[0.15em] text-accent">
                  {item.year}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-text">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
