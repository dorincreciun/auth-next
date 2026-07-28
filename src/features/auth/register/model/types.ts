import { type components } from "@shared/lib/openapi"

/** POST /auth/register */
export type RegisterRequest = components["schemas"]["CreateUserRequestDto"]
export type RegisterResponse = components["schemas"]["AuthUserApiResponseDto"]
