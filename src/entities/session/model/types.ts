import type { ApiResponse, GetSchema } from "@shared/api"

export type Session = GetSchema<"ActiveSessionDto">
export type SessionDeviceData = GetSchema<"DeviceDataDto">

export type SessionsResponse = ApiResponse<"/sessions", "get">
