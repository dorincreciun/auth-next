"use client"

import { useCallback, useRef, useState } from "react"

import { useRouter } from "next/navigation"
import type { Area, Point } from "react-easy-crop"
import { toast } from "sonner"

import { ZOOM_DEFAULT } from "./constants"
import { deleteAvatar } from "../api/delete-avatar"
import { uploadAvatar } from "../api/upload-avatar"
import { getCroppedImg } from "../lib/get-cropped-img"

export const useChangeAvatar = () => {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(ZOOM_DEFAULT)
  const [croppedArea, setCroppedArea] = useState<Area | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

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
      toast.error("The file exceeds the 2 MB limit!")
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
      const avatarFile = new File([croppedBlob], "avatar.jpg", {
        type: "image/jpeg",
      })

      const response = await uploadAvatar({ avatarFile })

      if (!response.success) {
        toast.error(response.message || "Something went wrong while saving the avatar.")
        return
      }

      toast.success("Avatar updated successfully!")
      resetState()
      router.refresh()
    } catch {
      toast.error("Something went wrong while saving the avatar.")
    } finally {
      setIsSaving(false)
    }
  }, [croppedArea, previewUrl, resetState, router])

  const onDelete = useCallback(async () => {
    if (isDeleting || isSaving) return

    setIsDeleting(true)
    try {
      const response = await deleteAvatar()

      if (!response.success) {
        toast.error(response.message || "Something went wrong while deleting the avatar.")
        return
      }

      toast.success("Avatar deleted successfully!")
      resetState()
      router.refresh()
    } catch {
      toast.error("Something went wrong while deleting the avatar.")
    } finally {
      setIsDeleting(false)
    }
  }, [isDeleting, isSaving, resetState, router])

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
    isDeleting,
    inputRef,
    setCrop,
    setZoom,
    onCropComplete,
    onFileChange,
    onCancel,
    onSave,
    onDelete,
    openFilePicker,
    resetState,
  }
}
