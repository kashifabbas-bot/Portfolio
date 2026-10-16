"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/hooks";

type Props = {
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseEnd?: number;
  pauseStart?: number;
  className?: string;
};

export default function TypingText({
  phrases,
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseEnd = 1500,
  pauseStart = 300,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const current = phrases[index % phrases.length];

    if (!deleting && text !== current) {
      const timer = window.setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        text === "" ? pauseStart : typeSpeed,
      );
      return () => window.clearTimeout(timer);
    }

    if (!deleting && text === current) {
      const timer = window.setTimeout(() => setDeleting(true), pauseEnd);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      if (text === "") {
        setDeleting(false);
        setIndex((value) => (value + 1) % phrases.length);
        return;
      }
      setText(current.slice(0, text.length - 1));
    }, deleteSpeed);

    return () => window.clearTimeout(timer);
  }, [
    text,
    deleting,
    index,
    phrases,
    typeSpeed,
    deleteSpeed,
    pauseEnd,
    pauseStart,
    reduced,
  ]);

  const visible = reduced ? phrases[0] : text;

  return (
    <span className={className}>
      <span aria-hidden="true">{visible}</span>
      <span className="sr-only">{phrases[0]}</span>
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
