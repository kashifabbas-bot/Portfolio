import { cn } from "@/lib/utils";
import type { PricingTier } from "@/lib/services";
import CTAButton from "@/components/CTAButton";

export default function PricingCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={cn(
        "card flex flex-col gap-6 p-8",
        tier.featured
          ? "border-accent/40 shadow-[0_15px_40px_rgba(0,229,255,0.15)]"
          : "",
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text">{tier.name}</h3>
        {tier.featured && (
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
            Popular
          </span>
        )}
      </div>

      <div>
        <p className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
          {tier.cadence}
        </p>
        <p className="mt-1 text-3xl font-extrabold tracking-tight text-text">
          {tier.price}
        </p>
      </div>

      <p className="text-[15px] leading-relaxed text-muted">
        {tier.description}
      </p>

      <ul className="flex flex-col gap-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-text">
            <span
              aria-hidden="true"
              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
            />
            <span className="text-muted">{feature}</span>
          </li>
        ))}
      </ul>

      <CTAButton
        href="/contact"
        variant={tier.featured ? "primary" : "secondary"}
        className="mt-auto w-full"
      >
        {tier.cta}
      </CTAButton>
    </div>
  );
}
