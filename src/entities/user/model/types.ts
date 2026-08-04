import type { ApiResponse, GetSchema } from "@shared/api"

export type User = GetSchema<"UserDto">
export type UserProfile = GetSchema<"UserProfileDto">

export type UserResponse = ApiResponse<"/auth/me", "get">
