import { type GetSchema } from "@shared/lib/openapi"

/** POST /auth/email/verify/confirm */
export type ConfirmEmailPayload = GetSchema<"ConfirmEmailPayloadDto">
export type ConfirmEmailData = GetSchema<"MessageDataDto">

/** POST /auth/email/verify/send */
export type SendVerificationData = GetSchema<"TokenSentDataDto">
