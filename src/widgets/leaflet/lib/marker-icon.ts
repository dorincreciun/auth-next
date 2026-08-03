import L from "leaflet"

import { MARKER_CONFIG } from "../config/leaflet-config"

export const markerIcon = L.icon({
  iconUrl: MARKER_CONFIG.ICON_URL,
  iconRetinaUrl: MARKER_CONFIG.ICON_2X_URL,
  shadowUrl: MARKER_CONFIG.SHADOW_URL,
  iconSize: MARKER_CONFIG.ICON_SIZE,
  iconAnchor: MARKER_CONFIG.ICON_ANCHOR,
  popupAnchor: MARKER_CONFIG.POPUP_ANCHOR,
  shadowSize: MARKER_CONFIG.SHADOW_SIZE,
})
