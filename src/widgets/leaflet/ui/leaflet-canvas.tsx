import { MapContainer } from "react-leaflet"

import { cn } from "@shared/lib/utils"

import { LeafletMarkers } from "./leaflet-markers"
import { LeafletTile } from "./leaflet-tile"
import { CANVAS_CONFIG } from "../config/leaflet-config"
import { type LeafletCanvasProps } from "../model/types"

import "leaflet/dist/leaflet.css"
import "./leaflet-dark.css"

export const LeafletCanvas = ({
    center = CANVAS_CONFIG.DEFAULT_CENTER,
    zoom = CANVAS_CONFIG.DEFAULT_ZOOM,
    scrollWheelZoom = true,
    locations = [],
    className,
    ...props
}: LeafletCanvasProps) => {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={scrollWheelZoom}
            {...props}
            className={cn("size-full min-h-80", className)}
        >
            <LeafletTile />
            <LeafletMarkers locations={locations} />
        </MapContainer>
    )
}
