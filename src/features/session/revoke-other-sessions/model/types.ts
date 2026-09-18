import { type ApiResponse } from "@shared/api"

export type RevokeOtherSessionsResponse = ApiResponse<"/sessions/others", "delete">
