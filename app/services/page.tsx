import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTAButton from "@/components/CTAButton";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom web apps, e-commerce development, landing pages and maintenance retainers. Clear deliverables, fixed scope and honest timelines.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Services"
        title="What I do best."
        subtitle="Four ways to work together, from a single landing page to a multi-tenant app with a monthly retainer."
      />

      <section className="pb-8">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <div className="card card-hover edge-glow flex h-full flex-col gap-5 p-8">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-2 text-xl"
                >
                  {service.icon}
                </span>

                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold text-text">
                    {service.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>

                <ul className="flex flex-col gap-2.5">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <CTAButton
                  href="/contact"
                  variant="secondary"
                  className="mt-auto h-10 self-start px-5 text-sm"
                >
                  Discuss this
                </CTAButton>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
