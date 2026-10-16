"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Faq } from "@/lib/services";

export default function Accordion({ items }: { items: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-lg font-medium text-text">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="relative flex h-6 w-6 shrink-0 items-center justify-center text-accent"
                >
                  <span className="absolute h-[2px] w-4 bg-current" />
                  <span
                    className="absolute h-4 w-[2px] bg-current transition-transform duration-300"
                    style={{ transform: open ? "scaleY(0)" : "scaleY(1)" }}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
