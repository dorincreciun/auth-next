import { TileLayer } from "react-leaflet"

import { TILE_CONFIG } from "../config/leaflet-config"

export const LeafletTile = () => {
  return <TileLayer attribution={TILE_CONFIG.ATTRIBUTION} url={TILE_CONFIG.URL} />
}
