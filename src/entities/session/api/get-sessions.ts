import { cache } from "react"

import "server-only"

import { server } from "@shared/api/server"

import type { Session } from "../model/types"

/**
 * Sesiunile active ale utilizatorului (doar pe server / RSC).
 * Backend-ul întoarce sesiunea curentă prima, deci ordinea se păstrează.
 * Pe client importă din `@entities/session` (UI/tipuri), nu de aici.
 */
export const getSessions = cache(async (): Promise<Session[] | null> => {
  try {
    const api = await server()
    const { data, error } = await api.GET("/sessions")

    if (error || !data?.success) {
      return null
    }

    return data.data.sessions
  } catch {
    return null
  }
})
