import { client, type ApiResponse } from "@shared/lib/openapi"

import { type LogoutResponse } from "../model/types"

export const logout = async (): Promise<ApiResponse<LogoutResponse>> => {
  const { data, error } = await client.POST("/auth/logout")

  if (error) return error

  return data
}
