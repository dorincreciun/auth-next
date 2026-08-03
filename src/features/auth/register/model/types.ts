import type {ApiRequestBody, ApiResponse} from "@shared/api";

export type RegisterRequest = ApiRequestBody<"/auth/register", "post">;
export type RegisterResponse = ApiResponse<"/auth/register", "post">;
