import { type components } from "@shared/lib/openapi"

/** POST /auth/password/forgot */
export type ForgotPasswordRequest = components["schemas"]["ForgotPasswordRequestDto"]
export type ForgotPasswordResponse = components["schemas"]["TokenSentApiResponseDto"]
