"use client"

import type { CSSProperties } from "react"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const toasterVars = {
  "--normal-bg": "color-mix(in oklab, var(--card) 85%, #050303)",
  "--normal-text": "var(--foreground)",
  "--normal-border": "rgba(255, 255, 255, 0.1)",
  "--border-radius": "0.5rem",
  "--success-bg": "color-mix(in oklab, var(--primary) 14%, #0a0506)",
  "--success-border": "color-mix(in oklab, var(--primary) 40%, transparent)",
  "--success-text": "var(--foreground)",
  "--error-bg": "color-mix(in oklab, var(--destructive) 16%, #0a0506)",
  "--error-border": "color-mix(in oklab, var(--destructive) 45%, transparent)",
  "--error-text": "var(--foreground)",
  "--info-bg": "color-mix(in oklab, var(--muted) 90%, #050303)",
  "--info-border": "rgba(255, 255, 255, 0.1)",
  "--info-text": "var(--foreground)",
  "--warning-bg": "color-mix(in oklab, var(--accent) 70%, #0a0506)",
  "--warning-border": "color-mix(in oklab, var(--accent-foreground) 40%, transparent)",
  "--warning-text": "var(--foreground)",
} as CSSProperties

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      position="top-right"
      closeButton
      richColors
      icons={{
        success: <CircleCheckIcon className="size-4 text-primary" />,
        info: <InfoIcon className="size-4 text-muted-foreground" />,
        warning: <TriangleAlertIcon className="size-4 text-accent-foreground" />,
        error: <OctagonXIcon className="size-4 text-destructive" />,
        loading: <Loader2Icon className="size-4 animate-spin text-muted-foreground" />,
      }}
      style={toasterVars}
      toastOptions={{
        classNames: {
          toast:
            "cn-toast group/toast !shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl",
          title: "text-sm font-medium tracking-tight",
          description: "!text-muted-foreground text-xs",
          actionButton:
            "!rounded-lg !bg-[linear-gradient(135deg,#ee2943_0%,#d31e5a_100%)] !text-primary-foreground !shadow-[0_10px_30px_rgba(234,40,69,0.35)]",
          cancelButton: "!rounded-lg !border !border-white/15 !bg-white/5 !text-foreground",
          closeButton:
            "!border-white/10 !bg-white/5 !text-muted-foreground hover:!bg-white/10 hover:!text-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
