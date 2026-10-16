"use client";

import { ReactLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/lib/hooks";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{ duration: 1.1, lerp: 0.1, smoothWheel: true }}
    >
      {children}
    </ReactLenis>
  );
}
