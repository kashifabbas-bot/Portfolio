import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import TechPill from "@/components/TechPill";
import TiltImage from "@/components/TiltImage";
import CTAButton from "@/components/CTAButton";
import CTASection from "@/components/CTASection";
import TestimonialCard from "@/components/TestimonialCard";
import { getNextProject, getProject, projects } from "@/lib/projects";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const next = getNextProject(slug);

  const meta = [
    { label: "Client", value: project.client },
    { label: "Timeline", value: project.timeline },
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
  ].filter((item) => Boolean(item.value));

  return (
    <>
      <section className="pt-[140px] pb-16">
        <div className="container-x flex flex-col gap-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-muted uppercase">
              <li>
                <Link href="/work" className="transition-colors hover:text-accent">
                  Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-text">{project.title}</li>
            </ol>
          </nav>

          <Reveal className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
              {project.tag}
            </span>
            <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
              {project.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {project.summary}
            </p>
            {project.url && (
              <CTAButton href={project.url} external className="self-start">
                Visit live site →
              </CTAButton>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-6 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
              {meta.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-[11px] tracking-[0.15em] text-muted uppercase">
                    {item.label}
                  </dt>
                  <dd className="text-sm font-medium text-text">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <Reveal>
            <TiltImage src={project.cover} alt={project.title} priority />
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-x grid gap-16 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-14">
            <Reveal className="flex flex-col gap-5">
              <SectionLabel>Overview</SectionLabel>
              <p className="max-w-2xl text-[17px] leading-relaxed text-muted">
                {project.overview}
              </p>
            </Reveal>

            {project.problem && (
              <Reveal className="flex flex-col gap-4 border-l-2 border-accent/50 pl-6">
                <h2 className="text-xl font-semibold text-text">
                  The Problem
                </h2>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
                  {project.problem}
                </p>
              </Reveal>
            )}

            {project.solution && (
              <Reveal className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-text">
                  The Solution
                </h2>
                <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
                  {project.solution}
                </p>
              </Reveal>
            )}

            {project.features && project.features.length > 0 && (
              <Reveal className="flex flex-col gap-6">
                <h2 className="text-xl font-semibold text-text">
                  Key Features
                </h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature.title}
                      className="card flex flex-col gap-2 p-6"
                    >
                      <span aria-hidden="true" className="text-xl">
                        {feature.icon}
                      </span>
                      <span className="font-semibold text-text">
                        {feature.title}
                      </span>
                      <span className="text-sm text-muted">
                        {feature.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>

          <aside className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="flex flex-col gap-4">
              <SectionLabel>Tech Used</SectionLabel>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech}>
                    <TechPill>{tech}</TechPill>
                  </li>
                ))}
              </ul>
            </Reveal>

            {project.results && project.results.length > 0 && (
              <Reveal delay={0.1} className="card flex flex-col gap-4 p-6">
                <SectionLabel>Impact</SectionLabel>
                <ul className="flex flex-col gap-5">
                  {project.results.map((result) => (
                    <li key={result.label} className="flex flex-col gap-1">
                      <span className="gradient-text text-3xl font-extrabold">
                        {result.value}
                      </span>
                      <span className="text-sm text-muted">
                        {result.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </aside>
        </div>
      </section>

      {project.screenshots && project.screenshots.length > 0 && (
        <section className="section pt-0">
          <div className="container-x flex flex-col gap-16">
            <Reveal>
              <SectionLabel>Gallery</SectionLabel>
            </Reveal>

            {project.screenshots.map((shot, index) => (
              <Reveal
                key={shot.src}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border">
                  <Image
                    src={shot.src}
                    alt={shot.caption}
                    fill
                    sizes="(max-width: 1023px) 100vw, 560px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-xs tracking-[0.15em] text-accent uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-relaxed text-text">
                    {shot.caption}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {project.testimonial && (
        <section className="section pt-0">
          <div className="container-x">
            <Reveal>
              <TestimonialCard
                quote={project.testimonial.quote}
                name={project.testimonial.name}
                company={project.testimonial.company}
              />
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container-x">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-3 border-t border-border pt-8"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
              Next Project
            </span>
            <span className="flex items-center gap-3 text-2xl font-semibold text-text transition-colors group-hover:text-accent sm:text-3xl">
              {next.title}
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
