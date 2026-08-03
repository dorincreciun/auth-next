import {z} from "zod";
import type {LoginRequest} from "./types";

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Adresa de email este obligatorie")
    .pipe(z.email("Adresa de email nu este validă")),
  password: z.string().min(1, "Parola este obligatorie"),
}) satisfies z.ZodType<LoginRequest>;
