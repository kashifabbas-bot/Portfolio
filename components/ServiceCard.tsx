import { cn } from "@/lib/utils";

export default function ServiceCard({
  icon,
  title,
  description,
  className,
}: {
  icon: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "card card-hover edge-glow flex flex-col gap-4 p-8",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-2 text-xl"
      >
        {icon}
      </span>
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      <p className="text-[15px] leading-relaxed text-muted">{description}</p>
    </div>
  );
}
