import { z } from "zod";

export const todoSchema = z.object({
  title: z.string().trim().min(1),
});

export type todoFormSchema = z.output<typeof todoSchema>;
