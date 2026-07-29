import { type GetSchema } from "@shared/lib/openapi"

export type RegisterPayload = GetSchema<"RegisterPayloadDto">
export type RegisterResponse = GetSchema<"AuthUserDataDto">
