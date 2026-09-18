import { client } from "@shared/api"

import type { RevokeOtherSessionsResponse } from "../model/types"

export const revokeOtherSessions = async (): Promise<RevokeOtherSessionsResponse> => {
  const { data, error } = await client.DELETE("/sessions/others")

  if (error) {
    return error
  }

  if (!data) {
    throw new Error("Empty revoke other sessions response")
  }

  return data
}
