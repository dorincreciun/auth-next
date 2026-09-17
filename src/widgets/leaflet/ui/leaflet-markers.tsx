import { Marker } from "react-leaflet"

import { LeafletPopup } from "./leaflet-popup"
import { markerIcon } from "../lib/marker-icon"
import type { LocationProps } from "../model/types"

type LeafletMarkersProps = {
  locations: LocationProps[]
}

export const LeafletMarkers = ({ locations }: LeafletMarkersProps) => {
  if (!locations.length) return null

  return locations.map(({ position, description }) => (
    <Marker key={position.join("-")} icon={markerIcon} position={position}>
      {description ? <LeafletPopup>{description}</LeafletPopup> : null}
    </Marker>
  ))
}
