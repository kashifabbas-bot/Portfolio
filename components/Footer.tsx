import Link from "next/link";
import { socials } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border">
      <div className="container-x flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          © 2026 Kashif. All rights reserved.
        </p>

        <nav aria-label="Social links">
          <ul className="flex flex-wrap items-center gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container-x pb-10">
        <p className="font-mono text-xs tracking-[0.1em] text-muted/70">
          Built with Next.js, Three.js &amp; Supabase
        </p>
        <Link
          href="/contact"
          className="mt-2 inline-block text-xs text-muted transition-colors hover:text-accent sm:hidden"
        >
          Start a project →
        </Link>
      </div>
    </footer>
  );
}
