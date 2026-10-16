import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full h-12 px-6 text-[15px] font-semibold whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-black hover:-translate-y-0.5 hover:shadow-[0_15px_40px_rgba(0,229,255,0.3)]",
  secondary:
    "border border-border text-text hover:-translate-y-0.5 hover:border-accent/30 hover:bg-card-hover",
  ghost: "text-accent hover:-translate-y-0.5 hover:text-text",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
};

export default function CTAButton({
  children,
  href,
  variant = "primary",
  className,
  external,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: Props) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
