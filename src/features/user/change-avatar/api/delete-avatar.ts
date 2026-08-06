import { client } from "@shared/api"

import type { DeleteAvatarResponse } from "../model/types"

export const deleteAvatar = async (): Promise<DeleteAvatarResponse> => {
  const { data, error } = await client.DELETE("/users/me/avatar")

  if (error) {
    return error
  }

  if (!data) {
    throw new Error("Empty delete avatar response")
  }

  return data
}
