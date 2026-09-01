import { z } from "zod"

import type { ConfirmEmailRequest } from "./types"

export const confirmEmailSchema = z.object({
  token: z
    .string()
    .trim()
    .min(1, "Codul de verificare este obligatoriu")
    .regex(/^\d{6}$/, "Codul trebuie să conțină exact 6 cifre"),
}) satisfies z.ZodType<ConfirmEmailRequest>
