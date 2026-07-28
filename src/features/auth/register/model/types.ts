import { type components } from "@shared/lib/openapi"

/** POST /auth/register */
export type RegisterBody = components["schemas"]["CreateUserRequestDto"]
export type RegisterSuccess = components["schemas"]["AuthUserApiResponseDto"]
export type RegisterError = components["schemas"]["ErrorResponseDto"]
