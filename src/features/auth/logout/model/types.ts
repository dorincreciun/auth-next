import { type GetSchema } from "@shared/lib/openapi"

/** POST /auth/logout */
export type LogoutResponse = GetSchema<"MessageDataDto">
