import { type ApiRequestBody, type ApiResponse } from "@shared/api"

export type UpdateProfileRequest = ApiRequestBody<"/users/me/profile", "patch">
export type UpdateProfileResponse = ApiResponse<"/users/me/profile", "patch">
