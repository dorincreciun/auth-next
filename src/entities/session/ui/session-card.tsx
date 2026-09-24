import type { ReactNode } from "react"

import { Clock, Globe, MonitorSmartphone, Smartphone } from "lucide-react"

import { cn } from "@shared/lib/utils"

import {
  formatAbsoluteTime,
  formatExpiresIn,
  formatRelativeTime,
  getDeviceLabel,
} from "../lib/format"
import type { Session } from "../model/types"

type SessionCardProps = {
  session: Session
  /** Acțiunile aparțin stratului features, deci ajung aici ca slot. */
  action?: ReactNode
  className?: string
}

export const SessionCard = ({ session, action, className }: SessionCardProps) => {
  const { deviceData, expiresInSeconds, isCurrent } = session

  const DeviceIcon = deviceData?.isMobile ? Smartphone : MonitorSmartphone

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-lg border px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between",
        isCurrent ? "border-primary/30 bg-primary/[0.06]" : "border-white/10 bg-white/5",
        className,
      )}
    >
      <div className="flex min-w-0 items-start gap-3">
        <span
          className={cn(
            "mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md border",
            isCurrent
              ? "border-primary/30 bg-primary/10 text-primary"
              : "text-muted-foreground border-white/10 bg-white/5",
          )}
        >
          <DeviceIcon className="size-4" aria-hidden />
        </span>

        <div className="flex min-w-0 flex-col gap-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-foreground truncate text-sm font-medium">
              {getDeviceLabel(deviceData)}
            </p>

            {isCurrent ? (
              <span className="border-primary/30 bg-primary/10 text-primary inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold">
                This device
              </span>
            ) : null}
          </div>

          <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            {deviceData ? (
              <>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="size-3" aria-hidden />
                  {deviceData.ip}
                </span>
                <span
                  className="inline-flex items-center gap-1.5"
                  title={`Signed in: ${formatAbsoluteTime(deviceData.loggedAt)}`}
                >
                  <Clock className="size-3" aria-hidden />
                  Active {formatRelativeTime(deviceData.lastActiveAt)}
                </span>
              </>
            ) : (
              <span>No device metadata</span>
            )}

            <span>Expires {formatExpiresIn(expiresInSeconds)}</span>
          </div>
        </div>
      </div>

      {action ? <div className="shrink-0 sm:self-center">{action}</div> : null}
    </div>
  )
}
