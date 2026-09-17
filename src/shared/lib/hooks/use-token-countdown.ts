"use client"

import { useSyncExternalStore } from "react"

const TICK_MS = 1000

/**
 * Un singur ceas partajat pentru toate countdown-urile din pagină.
 * `now` e memorat între tick-uri ca `getSnapshot` să întoarcă mereu aceeași
 * valoare pentru aceeași randare, cerință a lui `useSyncExternalStore`.
 */
let now = Date.now()
let tickId: ReturnType<typeof setInterval> | null = null
const listeners = new Set<() => void>()

const subscribeToClock = (onStoreChange: () => void) => {
  listeners.add(onStoreChange)

  if (tickId === null) {
    now = Date.now()
    tickId = setInterval(() => {
      now = Date.now()
      listeners.forEach((notify) => notify())
    }, TICK_MS)
  }

  return () => {
    listeners.delete(onStoreChange)

    if (listeners.size === 0 && tickId !== null) {
      clearInterval(tickId)
      tickId = null
    }
  }
}

const getClockSnapshot = () => now

/** `null` pe server: nu formatăm date la SSR, ca să evităm mismatch de hidratare. */
const getServerClockSnapshot = () => null

const formatCountdown = (remainingMs: number) => {
  const totalSeconds = Math.max(0, Math.ceil(remainingMs / 1000))
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  }

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
}

/** Countdown client-only până la `expiresAt` (ISO). */
export const useTokenCountdown = (expiresAt: string | null) => {
  const clock = useSyncExternalStore(subscribeToClock, getClockSnapshot, getServerClockSnapshot)

  const target = expiresAt ? new Date(expiresAt).getTime() : Number.NaN
  const remainingMs = clock === null || Number.isNaN(target) ? null : Math.max(0, target - clock)

  return {
    remainingMs,
    isExpired: remainingMs === 0,
    formatted: remainingMs === null ? null : formatCountdown(remainingMs),
  }
}
