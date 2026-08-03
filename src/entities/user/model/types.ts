import type {ApiResponse, GetSchema} from "@shared/api";

export type User = GetSchema<"UserDto">;
export type UserResponse = ApiResponse<'/auth/me', 'get'>;