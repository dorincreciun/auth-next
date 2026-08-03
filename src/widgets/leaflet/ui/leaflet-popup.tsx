import type { ReactNode } from "react"
import { Popup } from "react-leaflet"

type LeafletPopupProps = {
  children: ReactNode
}

export const LeafletPopup = ({ children }: LeafletPopupProps) => {
  return <Popup>{children}</Popup>
}
