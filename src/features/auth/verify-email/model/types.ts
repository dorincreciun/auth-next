import { type components } from "@shared/lib/openapi"

/** POST /auth/email/verify/confirm */
export type ConfirmEmailRequest = components["schemas"]["ConfirmEmailRequestDto"]
export type ConfirmEmailResponse = components["schemas"]["AuthUserApiResponseDto"]

/** POST /auth/email/verify/send */
export type SendVerificationResponse = components["schemas"]["TokenSentApiResponseDto"]
