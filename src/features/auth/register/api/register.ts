import { client } from "@shared/lib/openapi"
import { type ApiResponse } from "@shared/types"

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
