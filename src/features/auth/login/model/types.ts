import { type components } from "@shared/lib/openapi"

/** POST /auth/login */
export type LoginRequest = components["schemas"]["LoginRequestDto"]
export type LoginResponse = components["schemas"]["AuthUserApiResponseDto"]
