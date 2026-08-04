"use client"

import { useCallback, useRef, useState } from "react"

import type { Area, Point } from "react-easy-crop"
import { toast } from "sonner"

import { getCroppedImg } from "../lib/get-cropped-img"
import { ZOOM_DEFAULT } from "./constants"

export const useChangeAvatar = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(ZOOM_DEFAULT)
  const [croppedArea, setCroppedArea] = useState<Area | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  const resetState = useCallback(() => {
    setPreviewUrl((current) => {
      if (current) URL.revokeObjectURL(current)
      return null
    })
    setFile(null)
    setCrop({ x: 0, y: 0 })
    setZoom(ZOOM_DEFAULT)
    setCroppedArea(null)
    if (inputRef.current) inputRef.current.value = ""
  }, [])

  const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels)
  }, [])

  const onFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    if (selectedFile.size > 2 * 1024 * 1024) {
      toast.error("Fișierul depășește limita de 2 MB!")
      return
    }

    setFile(selectedFile)
    setPreviewUrl(URL.createObjectURL(selectedFile))
  }, [])

  const onCancel = useCallback(() => {
    resetState()
  }, [resetState])

  const onSave = useCallback(async () => {
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
  }, [croppedArea, previewUrl, resetState])

  const openFilePicker = useCallback(() => {
    inputRef.current?.click()
  }, [])

  return {
    file,
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
  }
}
