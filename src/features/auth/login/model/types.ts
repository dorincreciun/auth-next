import type {ApiRequestBody, ApiResponse} from "@shared/api";

export type LoginRequest = ApiRequestBody<"/auth/login", "post">;
export type LoginResponse = ApiResponse<"/auth/login", "post">;
