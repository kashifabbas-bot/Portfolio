"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { contactSchema, type ContactInput } from "@/lib/validation";
import { budgetRanges, projectTypes } from "@/lib/contact";
import { cn } from "@/lib/utils";
import CTAButton from "@/components/CTAButton";

type Status = "idle" | "submitting" | "success" | "error";

const fieldBase =
  "w-full rounded-xl border border-border bg-bg-2/60 px-4 py-3 text-[15px] text-text placeholder:text-muted/70 transition-colors duration-300 focus:border-accent/40 focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [attachmentName, setAttachmentName] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactInput) => {
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, attachmentName }),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      reset();
      setAttachmentName("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="card relative overflow-hidden p-8 sm:p-10">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex min-h-[420px] flex-col items-center justify-center gap-6 text-center"
          >
            <motion.span
              aria-hidden="true"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-accent/40 bg-accent/10 text-3xl text-accent"
            >
              ✓
            </motion.span>
            <h3 className="text-2xl font-semibold text-text">
              Message received.
            </h3>
            <p className="max-w-sm text-[15px] text-muted">
              Shukriya! I read every message myself and reply within 24 hours.
              Keep an eye on your inbox.
            </p>
            <CTAButton variant="secondary" onClick={() => setStatus("idle")}>
              Send another message
            </CTAButton>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-text">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  className={cn(fieldBase, errors.name && "border-red-400/60")}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs text-red-300">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-text">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={Boolean(errors.email)}
                  className={cn(fieldBase, errors.email && "border-red-400/60")}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-red-300">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="projectType"
                  className="text-sm font-medium text-text"
                >
                  Project type
                </label>
                <select
                  id="projectType"
                  aria-invalid={Boolean(errors.projectType)}
                  className={cn(
                    fieldBase,
                    "appearance-none",
                    errors.projectType && "border-red-400/60",
                  )}
                  {...register("projectType")}
                >
                  <option value="">Select a type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-xs text-red-300">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="budget"
                  className="text-sm font-medium text-text"
                >
                  Budget range
                </label>
                <select
                  id="budget"
                  aria-invalid={Boolean(errors.budget)}
                  className={cn(
                    fieldBase,
                    "appearance-none",
                    errors.budget && "border-red-400/60",
                  )}
                  {...register("budget")}
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-xs text-red-300">
                    {errors.budget.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-text">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="What are you building, and what does success look like?"
                aria-invalid={Boolean(errors.message)}
                className={cn(
                  fieldBase,
                  "resize-y",
                  errors.message && "border-red-400/60",
                )}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-red-300">{errors.message.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="attachment"
                className="text-sm font-medium text-text"
              >
                Attachment{" "}
                <span className="font-normal text-muted">(optional)</span>
              </label>
              <input
                id="attachment"
                type="file"
                accept=".pdf,.png,.jpg,.jpeg,.fig"
                onChange={(event) =>
                  setAttachmentName(event.target.files?.[0]?.name ?? "")
                }
                className={cn(
                  fieldBase,
                  "file:mr-4 file:rounded-full file:border-0 file:bg-accent/15 file:px-4 file:py-1.5 file:text-xs file:font-medium file:text-accent",
                )}
              />
              <p className="text-xs text-muted">
                Brief, screenshots or a Figma export. You can also email files
                after we connect.
              </p>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-300">
                Something went wrong sending your message. Please try again, or
                email kashif@example.com directly.
              </p>
            )}

            <CTAButton
              type="submit"
              disabled={status === "submitting"}
              className="mt-1 w-full sm:w-auto sm:self-start"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </CTAButton>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
