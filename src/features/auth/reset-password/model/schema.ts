import {z} from "zod";
import type {ResetPasswordRequest} from "./types";

export const resetPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Adresa de email este obligatorie")
    .pipe(z.email("Adresa de email nu este validă")),
  token: z
    .string()
    .trim()
    .min(1, "Codul de verificare este obligatoriu")
    .regex(/^\d{6}$/, "Codul trebuie să conțină exact 6 cifre"),
  newPassword: z
    .string()
    .min(1, "Parola este obligatorie")
    .min(8, "Parola trebuie să aibă minim 8 caractere")
    .regex(/[a-z]/, "Parola trebuie să conțină cel puțin o literă mică")
    .regex(/[A-Z]/, "Parola trebuie să conțină cel puțin o literă mare")
    .regex(/\d/, "Parola trebuie să conțină cel puțin o cifră")
    .regex(
      /[^A-Za-z0-9]/,
      "Parola trebuie să conțină cel puțin un caracter special",
    ),
}) satisfies z.ZodType<ResetPasswordRequest>;
