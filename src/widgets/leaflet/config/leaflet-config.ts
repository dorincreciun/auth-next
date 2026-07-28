import type { CanvasConfig, MarkerConfig, TileConfig } from "../model/types"

export const MARKER_CONFIG = {
    ICON_URL: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    ICON_2X_URL: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    SHADOW_URL: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    ICON_SIZE: [25, 41],
    ICON_ANCHOR: [12, 41],
    POPUP_ANCHOR: [1, -34],
    SHADOW_SIZE: [41, 41],
} satisfies MarkerConfig

export const CANVAS_CONFIG = {
    DEFAULT_CENTER: [51.505, -0.09],
    DEFAULT_ZOOM: 13,
} satisfies CanvasConfig

export const TILE_CONFIG = {
    URL: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    ATTRIBUTION: "&copy; OpenStreetMap contributors &copy; CARTO",
} satisfies TileConfig
