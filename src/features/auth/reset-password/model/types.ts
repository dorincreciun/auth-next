import { type GetSchema } from "@shared/lib/openapi"

/** POST /auth/password/reset */
export type ResetPasswordPayload = GetSchema<"ResetPasswordPayloadDto">
export type ResetPasswordData = GetSchema<"MessageDataDto">
