import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import Accordion from "@/components/Accordion";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { faqs, pricingTiers } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Fixed-scope pricing for landing pages, web apps and storefronts. Clear ranges, milestone payments and no surprise invoices.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Simple ranges, no surprise invoices."
        subtitle="Final numbers depend on integrations and scope. You get a fixed quote before anything starts, and it does not move unless the scope does."
      />

      <section className="pb-8">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.1}>
                <PricingCard tier={tier} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x flex flex-col gap-14">
          <Reveal className="flex flex-col gap-5">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)]">
              Questions clients ask first.
            </h2>
          </Reveal>

          <Reveal>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
