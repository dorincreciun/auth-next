"use client"

import { useRef, useState } from "react"

import { Save, Upload, X, ZoomIn } from "lucide-react"
import type { Area, Point } from "react-easy-crop"
import Cropper from "react-easy-crop"
import { toast } from "sonner"

import { UserAvatar } from "@entities/user"
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

export const getCroppedImg = async (
  imageSrc: string,
  cropArea: Area,
  outputSize = 512,
): Promise<Blob> => {
  const image = await loadImage(imageSrc)

  const canvas = document.createElement("canvas")
  canvas.width = outputSize
  canvas.height = outputSize

  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("Canvas context indisponibil")

  ctx.drawImage(
    image,
    cropArea.x,
    cropArea.y,
    cropArea.width,
    cropArea.height,
    0,
    0,
    outputSize,
    outputSize,
  )

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Eroare la generarea imaginii"))
          return
        }
        resolve(blob)
      },
      "image/jpeg",
      0.9,
    )
  })
}

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })

const ZOOM_DEFAULT = 1
const ZOOM_MIN = 1
const ZOOM_MAX = 10
const ZOOM_STEP = 0.1

export const ChangeAvatar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(ZOOM_DEFAULT)
  const [croppedArea, setCroppedArea] = useState<Area | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  const handleCropComplete = (_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    if (selectedFile.size > 2 * 1024 * 1024) {
      toast.error("Fișierul depășește limita de 2 MB!")
      return
    }

    setFile(selectedFile)
    setPreviewUrl(URL.createObjectURL(selectedFile))
  }

  const resetState = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setFile(null)
    setPreviewUrl(null)
    setCrop({ x: 0, y: 0 })
    setZoom(ZOOM_DEFAULT)
    setCroppedArea(null)
    if (inputRef.current) inputRef.current.value = ""
  }

  const handleCancel = () => {
    resetState()
  }

  const handleSave = async () => {
    if (!previewUrl || !croppedArea) return

    setIsSaving(true)
    try {
      const croppedBlob = await getCroppedImg(previewUrl, croppedArea)

      console.log("Cropped Blob:", croppedBlob)

      toast.success("Avatarul a fost actualizat cu succes!")
      resetState()
    } catch {
      toast.error("A apărut o eroare la salvarea avatarului.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="flex items-center gap-5">
      <div className="shrink-0 rounded-full border border-white/10 bg-white/5 p-1 shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
        <UserAvatar size="2xl" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <p className="text-foreground text-sm font-semibold tracking-tight">Încarcă avatar nou</p>

        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg"
          className="sr-only"
          tabIndex={-1}
          onChange={handleFileChange}
        />

        <Button
          type="button"
          size="sm"
          className="h-8 max-w-max gap-1.5"
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

      <Dialog
        open={!!previewUrl}
        onOpenChange={(open) => {
          if (!open) resetState()
        }}
      >
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
                onZoomChange={setZoom}
                onCropChange={setCrop}
                onCropComplete={handleCropComplete}
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
              onValueChange={([value]) => setZoom(value)}
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
              onClick={handleCancel}
              disabled={isSaving}
            >
              <X data-icon="inline-start" />
              Anulează
            </Button>
            <Button
              type="button"
              className="h-9 w-full sm:w-auto sm:min-w-28"
              onClick={handleSave}
              disabled={isSaving || !croppedArea}
            >
              <Save data-icon="inline-start" />
              {isSaving ? "Se salvează..." : "Salvează"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
