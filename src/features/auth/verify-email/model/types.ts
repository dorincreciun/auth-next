import type { ApiRequestBody, ApiResponse } from "@shared/api"

export type SendVerifyEmailResponse = ApiResponse<"/auth/email/verify/send", "post">
export type ConfirmEmailRequest = ApiRequestBody<"/auth/email/verify/confirm", "post">
export type ConfirmEmailResponse = ApiResponse<"/auth/email/verify/confirm", "post">
