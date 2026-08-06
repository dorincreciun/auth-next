"use client"

import { Upload } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar"
import { Button } from "@shared/ui/button"

import { AvatarCropDialog } from "./avatar-crop-dialog"
import { useChangeAvatar } from "../model/use-change-avatar"

type ChangeAvatarProps = {
  avatarUrl?: string | null
}

export const ChangeAvatar = ({ avatarUrl }: ChangeAvatarProps) => {
  const {
    previewUrl,
    crop,
    zoom,
    croppedArea,
    isSaving,
    inputRef,
    setCrop,
    setZoom,
    onCropComplete,
    onFileChange,
    onCancel,
    onSave,
    openFilePicker,
    resetState,
  } = useChangeAvatar()

  return (
    <div className="flex items-center gap-5">
      <div className="shrink-0 rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
        <Avatar size="2xl">
          {avatarUrl ? <AvatarImage src={avatarUrl} alt="Avatar" /> : null}
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <p className="text-foreground text-sm font-semibold tracking-tight">Încarcă avatar nou</p>

        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg"
          className="sr-only"
          tabIndex={-1}
          onChange={onFileChange}
        />

        <Button type="button" size="sm" className="h-8 max-w-max gap-1.5" onClick={openFilePicker}>
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

      <AvatarCropDialog
        previewUrl={previewUrl}
        crop={crop}
        zoom={zoom}
        croppedArea={croppedArea}
        isSaving={isSaving}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
        onCancel={onCancel}
        onSave={onSave}
        onOpenChange={(open) => {
          if (!open) resetState()
        }}
      />
    </div>
  )
}
