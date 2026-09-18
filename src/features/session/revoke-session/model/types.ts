import { type ApiResponse } from "@shared/api"

export type RevokeSessionResponse = ApiResponse<"/sessions/{id}", "delete">
