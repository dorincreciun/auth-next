"use client"

import { useRef } from "react"

import { Upload } from "lucide-react"

import { UserAvatar } from "@entities/user"
import { Button } from "@shared/ui/button"

export const ChangeAvatar = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex items-center gap-5">
      <UserAvatar size="2xl" />

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <p className="text-foreground text-sm font-semibold">Încarcă avatar nou</p>

        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg"
          className="sr-only"
          tabIndex={-1}
          disabled
        />

        <Button
          type="button"
          size="sm"
          className="max-w-max rounded-full"
          disabled
          onClick={() => inputRef.current?.click()}
        >
          <Upload data-icon="inline-start" />
          Alege fișier
        </Button>

        <p className="text-muted-foreground text-xs leading-relaxed">
          Dimensiunea ideală este 192 × 192 pixeli. Mărimea maximă permisă: 2 MB.
        </p>

        <Button
          type="button"
          variant="outline"
          size="sm"
          className="border-destructive/40 text-destructive hover:bg-destructive/10 hover:text-destructive max-w-max"
          disabled
        >
          Șterge avatarul
        </Button>
      </div>
    </div>
  )
}
