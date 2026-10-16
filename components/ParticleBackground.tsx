"use client";

import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/lib/hooks";

const ParticleScene = dynamic(() => import("./three/ParticleScene"), {
  ssr: false,
});

export default function ParticleBackground() {
  const reduced = usePrefersReducedMotion();

  if (reduced) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <ParticleScene />
    </div>
  );
}
