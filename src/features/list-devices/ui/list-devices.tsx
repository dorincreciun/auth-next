"use client"

import { FAKE_DEVICES } from "../model/constants"

export const ListDevices = () => {
  return (
    <ul className="flex flex-col gap-3">
      {FAKE_DEVICES.map((device) => (
        <li
          key={device.name}
          className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{device.name}</p>
            <p className="text-muted-foreground mt-0.5 text-xs">{device.location}</p>
          </div>
          <span
            className={
              device.active
                ? "border-primary/30 bg-primary/10 text-primary shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-semibold"
                : "text-muted-foreground shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold"
            }
          >
            {device.active ? "Activ acum" : "Inactiv"}
          </span>
        </li>
      ))}
    </ul>
  )
}
