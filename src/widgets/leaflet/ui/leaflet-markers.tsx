import { Marker } from "react-leaflet"

import { LeafletPopup } from "./leaflet-popup"
import { markerIcon } from "../lib/marker-icon"
import type { LocationProps } from "../model/types"

interface MarkerProps {
    locations: LocationProps[]
}

export const LeafletMarkers = ({ locations }: MarkerProps) => {
    if (!locations.length) return null

    return locations.map(({ position, description }) => (
        <Marker key={position.join("-")} icon={markerIcon} position={position}>
            <LeafletPopup>{description}</LeafletPopup>
        </Marker>
    ))
}
