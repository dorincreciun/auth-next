import type { Area } from "react-easy-crop"

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.onload = () => resolve(img)
    img.onerror = reject
    img.src = src
  })

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
