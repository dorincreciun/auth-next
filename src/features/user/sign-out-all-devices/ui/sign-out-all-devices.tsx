"use client"

import { Button } from "@shared/ui/button"

export const SignOutAllDevices = () => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5">
      <p className="text-sm text-muted-foreground">Include și sesiunea curentă</p>
      <Button type="button" variant="outline" size="sm" className="shrink-0" disabled>
        Deconectează
      </Button>
    </div>
  )
}
