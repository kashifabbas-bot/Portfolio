"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "A free call to understand the goal, the users and what done looks like.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "Fixed scope, fixed price, a week-by-week plan and a start date.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Weekly demos on a live URL. You see progress instead of waiting.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Deploy, handover docs, then 30 days of bug support on the house.",
  },
];

export default function ProcessTimeline() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.fromTo(
        ".process-line-fill",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );

      gsap.fromTo(
        ".process-step",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root,
            start: "top 75%",
          },
        },
      );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <div
        aria-hidden="true"
        className="absolute top-[22px] right-0 left-0 hidden h-px lg:block"
      >
        <div className="h-full w-full bg-[var(--border)]" />
        <div className="process-line-fill absolute inset-0 h-full bg-[linear-gradient(90deg,var(--accent),var(--accent-2))]" />
      </div>

      <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
        {steps.map((step) => (
          <li key={step.number} className="process-step flex flex-col gap-4">
            <span className="relative z-[1] flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-2 font-mono text-sm text-accent">
              {step.number}
            </span>
            <h3 className="text-xl font-semibold text-text">{step.title}</h3>
            <p className="max-w-xs text-[15px] leading-relaxed text-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
