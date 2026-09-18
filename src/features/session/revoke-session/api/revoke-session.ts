import { client } from "@shared/api"

import type { RevokeSessionResponse } from "../model/types"

export const revokeSession = async (sessionId: string): Promise<RevokeSessionResponse> => {
  const { data, error } = await client.DELETE("/sessions/{id}", {
    params: { path: { id: sessionId } },
  })

  if (error) {
    return error
  }

  if (!data) {
    throw new Error("Empty revoke session response")
  }

  return data
}
