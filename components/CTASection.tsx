import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";

export default function CTASection({
  label = "Let's Talk",
  title = "Have a project in mind? Let's talk.",
  description = "Book a free 30-minute call. We will scope the idea, talk timelines and you will get an honest answer on whether I am the right fit — no pitch deck, no pressure.",
  buttonLabel = "Book a Free Call",
  href = "/contact",
}: {
  label?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-[linear-gradient(135deg,rgba(0,229,255,0.08),rgba(124,92,255,0.08))] px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[36rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]"
            />
            <div className="relative flex flex-col items-center gap-6">
              <SectionLabel>{label}</SectionLabel>
              <h2 className="max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-tight">
                {title}
              </h2>
              <p className="max-w-xl text-[15px] leading-relaxed text-muted">
                {description}
              </p>
              <CTAButton href={href} className="mt-2">
                {buttonLabel}
              </CTAButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
