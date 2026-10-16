import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center">
      <div className="container-x">
        <Reveal className="flex flex-col items-start gap-6">
          <SectionLabel>Error 404</SectionLabel>
          <h1 className="gradient-text text-[clamp(4rem,14vw,10rem)] leading-none font-extrabold">
            404
          </h1>
          <p className="text-xl font-medium text-text">
            This page doesn&apos;t exist.
          </p>
          <p className="max-w-md text-[15px] leading-relaxed text-muted">
            The link might be old, or the page moved. Let&apos;s get you back to
            something useful.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <CTAButton href="/">Take me home →</CTAButton>
            <CTAButton href="/work" variant="secondary">
              See my work
            </CTAButton>
          </div>
          <Link
            href="/contact"
            className="mt-2 text-sm text-muted transition-colors hover:text-accent"
          >
            Or report a broken link →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
