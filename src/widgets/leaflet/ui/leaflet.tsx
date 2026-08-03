"use client"

import dynamic from "next/dynamic"

import type { LeafletCanvasProps } from "../model/types"
import { LeafletSkeleton } from "./leaflet-skeleton"

const DynamicLeaflet = dynamic(
  () => import("./leaflet-canvas").then((mod) => mod.LeafletCanvas),
  {
    ssr: false,
    loading: () => <LeafletSkeleton />,
  },
)

export const Leaflet = (props: LeafletCanvasProps) => <DynamicLeaflet {...props} />
