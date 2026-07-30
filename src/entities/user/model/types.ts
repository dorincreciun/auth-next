import { type GetSchema } from "@shared/lib/openapi"

export type User = GetSchema<"UserDto">
export type AuthMeDto = GetSchema<"AuthUserDataDto">
