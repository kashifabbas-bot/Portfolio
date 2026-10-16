import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import CTASection from "@/components/CTASection";
import ProjectCard from "@/components/ProjectCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import StatBlock from "@/components/StatBlock";
import TechPill from "@/components/TechPill";
import TypingText from "@/components/TypingText";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { stack } from "@/lib/stack";

export const metadata: Metadata = {
  title: "Kashif — Full-Stack Web Developer",
  description:
    "Kashif builds fast, modern web apps, storefronts and dashboards with Next.js, Node.js and Supabase. Working with clients worldwide.",
};

const typedPhrases = [
  "Web Developer",
  "Next.js Developer",
  "Node.js Developer",
  "Supabase Developer",
  "Full-Stack Developer",
  "React Developer",
];

const aboutStats = [
  { value: "2+", label: "Years Experience" },
  { value: "24h", label: "Reply Time" },
  { value: "100%", label: "Client Retention" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[100svh] flex-col justify-center pt-[140px] pb-24">
        <div className="container-x flex flex-col items-start gap-8">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted">
              <span className="pulse-dot h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
              Available for new projects
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] font-extrabold">
              <span className="block">This is Kashif.</span>
              <span className="mt-2 block">
                I&apos;m a{" "}
                <span className="gradient-text">
                  <TypingText phrases={typedPhrases} />
                </span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              I build booking systems, dashboards and storefronts that load
              fast and do not break. Next.js, Node.js and Supabase — from the
              database to the last pixel of the interface.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton href="/contact">Start a Project</CTAButton>
              <CTAButton href="/work" variant="secondary">
                View My Work →
              </CTAButton>
            </div>
          </Reveal>
        </div>

        <div className="container-x mt-20 hidden sm:block">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-muted uppercase">
              Scroll
            </span>
            <span className="scroll-line block h-px w-24 bg-accent" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x flex flex-col gap-14">
          <Reveal className="flex flex-col gap-5">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)]">
              Projects that deliver results.
            </h2>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <ProjectCard project={project} index={index} className="h-full" />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href="/work"
              className="text-sm font-medium text-accent transition-colors hover:text-text"
            >
              View all projects →
            </Link>
          </Reveal>
        </div>
      </section>

      <section id="stack" className="section scroll-mt-24">
        <div className="container-x flex flex-col gap-14">
          <Reveal className="flex flex-col gap-5">
            <SectionLabel>Tech Stack</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)]">
              Tools I work with every day.
            </h2>
          </Reveal>

          <Reveal>
            <ul className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <li key={item}>
                  <TechPill>{item}</TechPill>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x flex flex-col gap-14">
          <Reveal className="flex flex-col gap-5">
            <SectionLabel>Services</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)]">
              What I can build for you.
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.08}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.short}
                  className="h-full"
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <Link
              href="/services"
              className="text-sm font-medium text-accent transition-colors hover:text-text"
            >
              Explore services in detail →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,rgba(0,229,255,0.12),rgba(124,92,255,0.14))]">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <SectionLabel>About</SectionLabel>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)]">
              Hi, I&apos;m Kashif.
            </h2>
            <p className="text-[15px] leading-relaxed text-muted">
              Two years of experience building for the web, full-stack from the
              database to the last pixel. Most of my work is a system somebody
              actually uses every day: a booking flow, an admin panel, an
              ordering screen in a busy kitchen.
            </p>
            <p className="text-[15px] leading-relaxed text-muted">
              I like projects where speed and clarity matter more than
              decoration. That usually means a clean database, a boring
              reliable API, and an interface that gets out of the way.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4">
              {aboutStats.map((stat) => (
                <StatBlock
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
            <CTAButton href="/about" variant="secondary" className="self-start">
              More about me →
            </CTAButton>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-x flex flex-col gap-16">
          <Reveal className="flex flex-col gap-5">
            <SectionLabel>How I Work</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)]">
              A simple, transparent process.
            </h2>
          </Reveal>

          <ProcessTimeline />
        </div>
      </section>

      <CTASection />
    </>
  );
}
