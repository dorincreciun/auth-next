import type { ComponentProps, ReactNode } from "react"

import { type MapContainer } from "react-leaflet"

export type CoordinatesFormat = [number, number]

export interface MarkerConfig {
    ICON_URL: string
    ICON_2X_URL: string
    SHADOW_URL: string
    ICON_SIZE: CoordinatesFormat
    ICON_ANCHOR: CoordinatesFormat
    POPUP_ANCHOR: CoordinatesFormat
    SHADOW_SIZE: CoordinatesFormat
}

export interface CanvasConfig {
    DEFAULT_CENTER: CoordinatesFormat
    DEFAULT_ZOOM: number
}

export interface TileConfig {
    URL: string
    ATTRIBUTION: string
}

export interface LocationProps {
    position: CoordinatesFormat
    description: ReactNode
}

export type LeafletCanvasProps = ComponentProps<typeof MapContainer> & {
    locations?: LocationProps[]
}
