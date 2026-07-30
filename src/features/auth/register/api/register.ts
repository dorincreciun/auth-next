import { client, type ApiResponse } from "@shared/lib/openapi"

import { type RegisterPayload, type RegisterResponse } from "../model/types"

export const registerUser = async (
  payload: RegisterPayload,
): Promise<ApiResponse<RegisterResponse>> => {
  const { data, error } = await client.POST("/auth/register", {
    body: payload,
  })

  if (error) {
    return error
  }

  return data
}
