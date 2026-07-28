import type { ReactNode } from "react"

import { Popup } from "react-leaflet"

export const LeafletPopup = ({children}: {children: ReactNode}) => {
    if (!children) return null
    return (
        <Popup>
            {children}
        </Popup>
    )
}
