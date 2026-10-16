"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import CTAButton from "@/components/CTAButton";
import { cn } from "@/lib/utils";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";

const PAGE_SIZE = 4;

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active, projects],
  );

  const shown = filtered.slice(0, visible);

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter projects">
        {projectCategories.map((category) => {
          const selected = active === category;
          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => {
                setActive(category);
                setVisible(PAGE_SIZE);
              }}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                selected
                  ? "border-accent bg-accent text-black"
                  : "border-border text-muted hover:-translate-y-0.5 hover:border-accent/30 hover:text-text",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((project, index) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % PAGE_SIZE) * 0.06 }}
          >
            <ProjectCard project={project} className="h-full" />
          </motion.div>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="text-[15px] text-muted">
          No projects in this category yet. Check back soon.
        </p>
      )}

      {visible < filtered.length && (
        <div className="flex justify-center">
          <CTAButton
            variant="secondary"
            onClick={() => setVisible((value) => value + PAGE_SIZE)}
          >
            Load more
          </CTAButton>
        </div>
      )}
    </div>
  );
}
