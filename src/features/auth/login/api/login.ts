import { client, type ApiResponse } from "@shared/lib/openapi"

import { type LoginPayload, type LoginResponse } from "../model/types"

export const login = async (body: LoginPayload): Promise<ApiResponse<LoginResponse>> => {
  const { data, error } = await client.POST("/auth/login", { body })

  if (error) {
    return error
  }

  return data
}
