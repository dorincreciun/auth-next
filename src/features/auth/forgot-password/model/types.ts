import type {ApiRequestBody, ApiResponse} from "@shared/api";

export type ForgotPasswordRequest = ApiRequestBody<
  "/auth/password/forgot",
  "post"
>;
export type ForgotPasswordResponse = ApiResponse<
  "/auth/password/forgot",
  "post"
>;
