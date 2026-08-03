import type {ApiRequestBody, ApiResponse} from "@shared/api";

export type ResetPasswordRequest = ApiRequestBody<
  "/auth/password/reset",
  "post"
>;
export type ResetPasswordResponse = ApiResponse<
  "/auth/password/reset",
  "post"
>;
