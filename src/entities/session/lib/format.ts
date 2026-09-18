import type { SessionDeviceData } from "../model/types"

const UNKNOWN_DEVICE = "Dispozitiv necunoscut"

const relativeFormatter = new Intl.RelativeTimeFormat("ro", { numeric: "auto" })

/**
 * Pentru expirare, „auto” alternează între „luna viitoare” și „peste 30 de zile”
 * la durate practic egale; forma numerică rămâne consecventă.
 */
const expiresFormatter = new Intl.RelativeTimeFormat("ro", { numeric: "always" })

const dateFormatter = new Intl.DateTimeFormat("ro-RO", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
})

/** Unitățile de la cea mai mare la cea mai mică, cu numărul de secunde al fiecăreia. */
const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 60 * 60 * 24 * 365],
  ["month", 60 * 60 * 24 * 30],
  ["day", 60 * 60 * 24],
  ["hour", 60 * 60],
  ["minute", 60],
]

/** „Chrome pe Linux”, sau doar ce e cunoscut din User-Agent. */
export const getDeviceLabel = (deviceData: SessionDeviceData | null): string => {
  if (!deviceData) {
    return UNKNOWN_DEVICE
  }

  const { browser, os } = deviceData

  if (browser && os) {
    return `${browser} pe ${os}`
  }

  return browser || os || UNKNOWN_DEVICE
}

/** „acum 5 minute”, „ieri”. Sub un minut e tratat ca activitate în curs. */
export const formatRelativeTime = (isoDate: string): string => {
  const timestamp = new Date(isoDate).getTime()

  if (Number.isNaN(timestamp)) {
    return "necunoscut"
  }

  const elapsedSeconds = (timestamp - Date.now()) / 1000

  for (const [unit, secondsInUnit] of UNITS) {
    if (Math.abs(elapsedSeconds) >= secondsInUnit) {
      return relativeFormatter.format(Math.round(elapsedSeconds / secondsInUnit), unit)
    }
  }

  return "chiar acum"
}

/** Data absolută, pentru tooltip-ul de lângă timpul relativ. */
export const formatAbsoluteTime = (isoDate: string): string => {
  const date = new Date(isoDate)

  return Number.isNaN(date.getTime()) ? "necunoscut" : dateFormatter.format(date)
}

/** Cât mai ține sesiunea, plecând de la `expiresInSeconds`. */
export const formatExpiresIn = (expiresInSeconds: number): string => {
  if (expiresInSeconds <= 0) {
    return "expirată"
  }

  for (const [unit, secondsInUnit] of UNITS) {
    if (expiresInSeconds >= secondsInUnit) {
      return expiresFormatter.format(Math.round(expiresInSeconds / secondsInUnit), unit)
    }
  }

  return expiresFormatter.format(Math.round(expiresInSeconds), "second")
}
