import { z } from "zod"

import type { UpdateProfileRequest } from "./types"

export const updateProfileSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(50, "Prenumele poate avea maxim 50 de caractere"),
  lastName: z
    .string()
    .trim()
    .max(50, "Numele poate avea maxim 50 de caractere"),
  location: z
    .string()
    .trim()
    .max(100, "Locația poate avea maxim 100 de caractere"),
  jobTitle: z
    .string()
    .trim()
    .max(100, "Job title-ul poate avea maxim 100 de caractere"),
  bio: z
    .string()
    .trim()
    .max(500, "Biografia poate avea maxim 500 de caractere"),
}) satisfies z.ZodType<UpdateProfileRequest>
