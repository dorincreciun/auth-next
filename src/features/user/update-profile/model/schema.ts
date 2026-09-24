import { z } from "zod"

import type { UpdateProfileRequest } from "./types"

const updateProfileFieldsSchema = z.object({
  firstName: z.string().trim().max(50, "First name can be at most 50 characters").optional(),
  lastName: z.string().trim().max(50, "Last name can be at most 50 characters").optional(),
  location: z.string().trim().max(100, "Location can be at most 100 characters").optional(),
  jobTitle: z.string().trim().max(100, "Job title can be at most 100 characters").optional(),
  bio: z.string().trim().max(500, "Bio can be at most 500 characters").optional(),
}) satisfies z.ZodType<UpdateProfileRequest>

export const updateProfileSchema = updateProfileFieldsSchema.refine(
  (data) => Object.values(data).some((value) => typeof value === "string" && value.length > 0),
  { message: "Fill in at least one field" },
)
