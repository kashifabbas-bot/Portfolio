import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.email("Enter a valid email address."),
  projectType: z.string().min(1, "Select a project type."),
  budget: z.string().min(1, "Select a budget range."),
  message: z
    .string()
    .trim()
    .min(20, "Please add a bit more detail (at least 20 characters)."),
});

export type ContactInput = z.infer<typeof contactSchema>;
