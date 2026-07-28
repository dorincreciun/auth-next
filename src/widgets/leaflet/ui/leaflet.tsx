"use client"

import dynamic from "next/dynamic"

import { LeafletSkeleton } from "./leaflet-skeleton"
import { type LeafletCanvasProps } from "../model/types"

const DynamicLeaflet = dynamic(
    () => import("./leaflet-canvas").then((mod) => mod.LeafletCanvas),
    {
        ssr: false,
        loading: () => <LeafletSkeleton />,
    },
)

export const Leaflet = (props: LeafletCanvasProps) => <DynamicLeaflet {...props} />
