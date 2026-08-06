import { client } from "@shared/api"

import type { ChangeAvatarRequest, ChangeAvatarResponse } from "../model/types"

export const uploadAvatar = async (
  values: ChangeAvatarRequest,
): Promise<ChangeAvatarResponse> => {
  const { data, error } = await client.POST("/users/upload/avatar", {
    body: values,
    bodySerializer(body) {
      const formData = new FormData()
      const file = body.avatarFile
      formData.append(
        "avatarFile",
        file,
        file instanceof File ? file.name : "avatar.jpg",
      )
      return formData
    },
  })

  if (error) {
    return error
  }

  if (!data) {
    throw new Error("Empty upload avatar response")
  }

  return data
}
