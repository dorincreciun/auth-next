import { z } from "zod"

import type { UpdateProfileRequest } from "./types"

const updateProfileFieldsSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(50, "Prenumele poate avea maxim 50 de caractere")
    .optional(),
  lastName: z
    .string()
    .trim()
    .max(50, "Numele poate avea maxim 50 de caractere")
    .optional(),
  location: z
    .string()
    .trim()
    .max(100, "Locația poate avea maxim 100 de caractere")
    .optional(),
  jobTitle: z
    .string()
    .trim()
    .max(100, "Job title-ul poate avea maxim 100 de caractere")
    .optional(),
  bio: z
    .string()
    .trim()
    .max(500, "Biografia poate avea maxim 500 de caractere")
    .optional(),
}) satisfies z.ZodType<UpdateProfileRequest>

export const updateProfileSchema = updateProfileFieldsSchema.refine(
  (data) =>
    Object.values(data).some(
      (value) => typeof value === "string" && value.length > 0,
    ),
  { message: "Completează cel puțin un câmp" },
)
