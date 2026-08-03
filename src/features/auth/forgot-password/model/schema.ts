import {z} from "zod";
import type {ForgotPasswordRequest} from "./types";

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Adresa de email este obligatorie")
    .pipe(z.email("Adresa de email nu este validă")),
}) satisfies z.ZodType<ForgotPasswordRequest>;
