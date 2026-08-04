"use client"

import { Save, X, ZoomIn } from "lucide-react"
import type { Area, Point } from "react-easy-crop"
import Cropper from "react-easy-crop"

import { Button } from "@shared/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@shared/ui/dialog"
import { Slider } from "@shared/ui/slider"

import { ZOOM_MAX, ZOOM_MIN, ZOOM_STEP } from "../model/constants"

interface AvatarCropDialogProps {
  previewUrl: string | null
  crop: Point
  zoom: number
  croppedArea: Area | null
  isSaving: boolean
  onCropChange: (crop: Point) => void
  onZoomChange: (zoom: number) => void
  onCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void
  onCancel: () => void
  onSave: () => void
  onOpenChange: (open: boolean) => void
}

export const AvatarCropDialog = ({
  previewUrl,
  crop,
  zoom,
  croppedArea,
  isSaving,
  onCropChange,
  onZoomChange,
  onCropComplete,
  onCancel,
  onSave,
  onOpenChange,
}: AvatarCropDialogProps) => {
  return (
    <Dialog open={!!previewUrl} onOpenChange={onOpenChange}>
      <DialogContent
        className="bg-card/95 border-white/10 backdrop-blur-xl sm:max-w-lg"
        showCloseButton={!isSaving}
      >
        <DialogHeader>
          <DialogTitle>Ajustează avatarul</DialogTitle>
          <DialogDescription>
            Poziționează și mărește imaginea pentru a obține cel mai bun cadru. Zona vizibilă în
            cerc va fi folosită ca avatar.
          </DialogDescription>
        </DialogHeader>

        <div className="relative h-[320px] w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[inset_0_0_40px_rgba(0,0,0,0.35)] sm:h-[360px]">
          {!!previewUrl && (
            <Cropper
              image={previewUrl}
              crop={crop}
              aspect={1}
              zoom={zoom}
              minZoom={ZOOM_MIN}
              maxZoom={ZOOM_MAX}
              onZoomChange={onZoomChange}
              onCropChange={onCropChange}
              onCropComplete={onCropComplete}
              cropShape="round"
              showGrid={true}
              style={{
                containerStyle: {
                  backgroundColor: "transparent",
                  borderRadius: 0,
                },
                mediaStyle: {
                  transition: "transform 0.15s ease-out",
                  borderRadius: 0,
                },
              }}
            />
          )}
        </div>

        <div className="flex items-center gap-3 px-1">
          <ZoomIn className="text-muted-foreground size-4 shrink-0" aria-hidden />
          <Slider
            value={[zoom]}
            onValueChange={([value]) => onZoomChange(value)}
            min={ZOOM_MIN}
            max={ZOOM_MAX}
            step={ZOOM_STEP}
            className="w-full"
            aria-label="Nivel de zoom"
          />
          <span className="text-muted-foreground w-10 shrink-0 text-right text-xs tabular-nums">
            {zoom.toFixed(1)}×
          </span>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            className="h-9 w-full sm:w-auto sm:min-w-24"
            onClick={onCancel}
            disabled={isSaving}
          >
            <X data-icon="inline-start" />
            Anulează
          </Button>
          <Button
            type="button"
            className="h-9 w-full sm:w-auto sm:min-w-28"
            onClick={onSave}
            disabled={isSaving || !croppedArea}
          >
            <Save data-icon="inline-start" />
            {isSaving ? "Se salvează..." : "Salvează"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
