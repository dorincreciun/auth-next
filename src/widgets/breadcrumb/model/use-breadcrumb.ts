"use client"

import { usePathname } from "next/navigation"

import { BREADCRUMB_LABELS } from "./labels"
import type { BreadcrumbCrumb } from "./types"

const formatSegmentLabel = (segment: string) => {
  const knownLabel = BREADCRUMB_LABELS[segment]
  if (knownLabel) return knownLabel

  return segment.charAt(0).toUpperCase() + segment.slice(1)
}

export const useBreadcrumb = () => {
  const pathname = usePathname()

  if (!pathname) {
    return { crumbs: [] as BreadcrumbCrumb[] }
  }

  const segments = pathname.split("/").filter(Boolean)

  const crumbs: BreadcrumbCrumb[] = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`

    return {
      label: formatSegmentLabel(segment),
      href,
    }
  })

  return { crumbs }
}
