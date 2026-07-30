import { z } from "zod"

import { type LoginPayload } from "./types"

/**
 * La autentificare validăm doar prezența parolei, nu complexitatea ei.
 * Regulile de complexitate se aplică la crearea sau schimbarea parolei; aplicate
 * aici ar bloca din client conturile cu parole mai vechi decât regulile actuale,
 * fără ca userul să aibă cum să treacă mai departe.
 */
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Adresa de email este obligatorie")
    .pipe(z.email("Adresa de email nu este validă")),
  password: z.string().min(1, "Parola este obligatorie"),
}) satisfies z.ZodType<LoginPayload>
