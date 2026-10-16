import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import WorkGrid from "@/components/WorkGrid";
import CTASection from "@/components/CTASection";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case studies from Kashif — booking platforms, e-commerce storefronts, analytics dashboards and internal tools built with Next.js and Supabase.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Selected work."
        subtitle="Case studies from real client projects — each one a business problem with numbers attached."
      />

      <section className="pb-8">
        <div className="container-x">
          <WorkGrid projects={projects} />
        </div>
      </section>

      <CTASection
        label="Next Step"
        title="Your project could be next."
        description="Tell me what you are building. If it is a fit I will send a scope and a timeline within a couple of days."
        buttonLabel="Start a Project"
      />
    </>
  );
}
