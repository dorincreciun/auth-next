import { type GetSchema } from "@shared/lib/openapi"

export type LoginPayload = GetSchema<"LoginPayloadDto">
export type LoginResponse = GetSchema<"AuthUserDataDto">
