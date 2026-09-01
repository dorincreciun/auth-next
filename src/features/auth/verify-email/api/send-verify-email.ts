import { client } from "@shared/api"

import type { SendVerifyEmailResponse } from "../model/types"

let inFlight: Promise<SendVerifyEmailResponse> | null = null

export const sendVerifyEmail = (): Promise<SendVerifyEmailResponse> => {
  if (inFlight) {
    return inFlight
  }

  inFlight = (async () => {
    const { data, error } = await client.POST("/auth/email/verify/send")

    if (error) {
      return error
    }

    if (!data) {
      throw new Error("Empty send-verify-email response")
    }

    return data
  })().finally(() => {
    inFlight = null
  })

  return inFlight
}
