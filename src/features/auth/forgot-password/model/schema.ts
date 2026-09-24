import { z } from "zod"

import type { ForgotPasswordRequest } from "./types"

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .pipe(z.email("The email address is not valid")),
}) satisfies z.ZodType<ForgotPasswordRequest>
