import { type GetSchema } from "@shared/lib/openapi"

/** POST /auth/password/forgot */
export type ForgotPasswordPayload = GetSchema<"ForgotPasswordPayloadDto">
export type ForgotPasswordData = GetSchema<"TokenSentDataDto">
