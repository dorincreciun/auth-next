import type { LatLngExpression, MapOptions } from "leaflet"
import type { ReactNode } from "react"

export type LocationProps = {
  position: [number, number]
  description?: ReactNode
}

export type LeafletCanvasProps = {
  center?: LatLngExpression
  zoom?: number
  scrollWheelZoom?: boolean
  locations?: LocationProps[]
  className?: string
} & Omit<MapOptions, "center" | "zoom" | "scrollWheelZoom">

export type MarkerConfig = {
  ICON_URL: string
  ICON_2X_URL: string
  SHADOW_URL: string
  ICON_SIZE: [number, number]
  ICON_ANCHOR: [number, number]
  POPUP_ANCHOR: [number, number]
  SHADOW_SIZE: [number, number]
}

export type CanvasConfig = {
  DEFAULT_CENTER: [number, number]
  DEFAULT_ZOOM: number
}

export type TileConfig = {
  URL: string
  ATTRIBUTION: string
}
