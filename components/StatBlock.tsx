import { cn } from "@/lib/utils";

export default function StatBlock({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className="gradient-text text-4xl font-extrabold tracking-tight sm:text-5xl">
        {value}
      </span>
      <span className="font-mono text-xs tracking-[0.15em] text-muted uppercase">
        {label}
      </span>
    </div>
  );
}
