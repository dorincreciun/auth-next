import { z } from "zod"

import type { LoginRequest } from "./types"

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .pipe(z.email("The email address is not valid")),
  password: z.string().min(1, "Password is required"),
}) satisfies z.ZodType<LoginRequest>
