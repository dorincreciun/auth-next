import { client } from "@shared/api"

import type { ConfirmEmailRequest, ConfirmEmailResponse } from "../model/types"

export const confirmEmail = async (values: ConfirmEmailRequest): Promise<ConfirmEmailResponse> => {
  const { data, error } = await client.POST("/auth/email/verify/confirm", {
    body: values,
  })

  if (error) {
    return error
  }

  if (!data) {
    throw new Error("Empty confirm-email response")
  }

  return data
}
