import { z } from "zod"

import type { ResetPasswordRequest } from "./types"

export const resetPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .pipe(z.email("The email address is not valid")),
  token: z
    .string()
    .trim()
    .min(1, "The reset code is required")
    .regex(/^\d{6}$/, "The code must be exactly 6 digits"),
  newPassword: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one digit")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
}) satisfies z.ZodType<ResetPasswordRequest>
