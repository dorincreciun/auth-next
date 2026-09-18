import { type ApiRequestBody, type ApiResponse } from "@shared/api"

export type ChangeAvatarRequest = ApiRequestBody<"/users/me/avatar", "post">
export type ChangeAvatarResponse = ApiResponse<"/users/me/avatar", "post">
export type DeleteAvatarResponse = ApiResponse<"/users/me/avatar", "delete">
