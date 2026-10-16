import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card card-hover edge-glow group relative flex flex-col overflow-hidden",
        className,
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">
        <Image
          src={project.cover}
          alt={`${project.title} cover`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 380px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 rounded-full border border-border bg-bg/70 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-accent uppercase backdrop-blur-sm">
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-8">
        <div className="flex items-center gap-3 font-mono text-xs tracking-[0.15em] text-muted uppercase">
          {typeof index === "number" && <span>0{index + 1}</span>}
          <span className="h-px w-6 bg-border" />
          <span>{project.category}</span>
        </div>

        <h3 className="text-[22px] leading-snug font-semibold text-text">
          {project.title}
        </h3>

        <p className="text-[15px] leading-relaxed text-muted">
          {project.summary}
        </p>

        <ul className="flex flex-wrap gap-2 pt-1">
          {project.tech.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <span className="mt-auto pt-4 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.url ? "Visit website →" : "View case study →"}
        </span>
      </div>

      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the ${project.title} website`}
          className="absolute inset-0 z-10"
        />
      ) : (
        <Link
          href={`/work/${project.slug}`}
          aria-label={`View the ${project.title} case study`}
          className="absolute inset-0 z-10"
        />
      )}

      {project.url && (
        <span className="absolute top-4 right-4 z-20 rounded-full border border-accent/40 bg-bg/80 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-accent uppercase backdrop-blur-sm">
          Live ↗
        </span>
      )}
    </div>
  );
}
