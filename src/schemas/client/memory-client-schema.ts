import { z } from "zod";

export const memoryFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  price: z.coerce.number(),
  speed: z.array(z.coerce.number()),
  modules: z.array(z.coerce.number()),
  price_per_gb: z.coerce.number(),
  color: z.string().nullable().default(""),
  first_word_latency: z.coerce.number(),
  cas_latency: z.coerce.number(),
});
