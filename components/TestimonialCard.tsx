import { cn } from "@/lib/utils";

export default function TestimonialCard({
  quote,
  name,
  company,
  className,
}: {
  quote: string;
  name: string;
  company: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "card flex flex-col gap-6 p-8 sm:p-10",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="font-mono text-4xl leading-none text-accent"
      >
        &ldquo;
      </span>
      <blockquote className="text-lg leading-relaxed text-text sm:text-xl">
        {quote}
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-4 border-t border-border pt-6">
        <span
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-2 font-mono text-sm text-accent"
        >
          {name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-text">{name}</span>
          <span className="text-xs text-muted">{company}</span>
        </span>
      </figcaption>
    </figure>
  );
}
