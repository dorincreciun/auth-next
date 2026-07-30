import { cache } from "react"

import { createServerClient } from "@shared/lib/openapi-server"

import type { User } from "../model/types"

/**
 * Userul curent, pe baza sesiunii din request. Doar pe server.
 *
 * `cache` memoizează rezultatul pe durata unui singur request de randare:
 * layout + pagină + widgeturi pot apela toate `getMe()` și `/auth/me`
 * se execută o singură dată. Nu persistă între navigări sau utilizatori.
 */
export const getMe = cache(async (): Promise<User | null> => {
  const api = await createServerClient()
  const { data, error } = await api.GET("/auth/me")

  if (error || !data) {
    return null
  }

  return data.data.user
})
