import { client } from "@shared/api"

import type { UpdateProfileRequest, UpdateProfileResponse } from "../model/types"

export const updateProfile = async (
  values: UpdateProfileRequest,
): Promise<UpdateProfileResponse> => {
  const { data, error } = await client.PATCH("/users/me/profile", {
    body: values,
  })

  if (error) {
    return error
  }

  if (!data) {
    throw new Error("Empty update profile response")
  }

  return data
}
