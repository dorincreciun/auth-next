import type {ApiResponse} from "@shared/api";

export type LogoutResponse = ApiResponse<"/auth/logout", "post">;
