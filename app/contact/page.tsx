import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { contact, socials } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Kashif. Send a brief, book a free 30-minute call, or email directly. Replies within 24 hours.",
};

const infoCards = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "WhatsApp", value: "Message me directly", href: contact.whatsapp },
  { label: "Response time", value: contact.responseTime },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Let's build something."
        subtitle="Tell me about the project. The more context you share about the problem, the more useful my first reply will be."
      />

      <section className="pb-8">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="flex flex-col gap-4">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="card flex flex-col gap-1.5 p-6 transition-colors duration-300 hover:border-accent/30"
              >
                <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                  {card.label}
                </span>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-[15px] font-medium text-text transition-colors hover:text-accent"
                  >
                    {card.value}
                  </a>
                ) : (
                  <span className="text-[15px] font-medium text-text">
                    {card.value}
                  </span>
                )}
              </div>
            ))}

            <div className="card flex flex-col gap-4 p-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
                Elsewhere
              </span>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={
                        social.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        social.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
