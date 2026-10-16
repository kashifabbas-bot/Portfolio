import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";

export default function PageHero({
  label,
  title,
  subtitle,
  children,
}: {
  label: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-[160px] pb-16 sm:pt-[180px] sm:pb-20">
      <div className="container-x">
        <Reveal className="flex flex-col gap-6">
          <SectionLabel>{label}</SectionLabel>
          <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05]">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
