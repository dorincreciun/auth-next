import { type ApiRequestBody, type ApiResponse } from "@shared/api"

export type ChangeAvatarRequest = ApiRequestBody<"/users/upload/avatar", "post">
export type ChangeAvatarResponse = ApiResponse<"/users/upload/avatar", "post">
export type DeleteAvatarResponse = ApiResponse<"/users/me/avatar", "delete">
