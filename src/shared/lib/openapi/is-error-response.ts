import { type ErrorResponse } from "@shared/types"

export const isErrorResponse = (value: unknown): value is ErrorResponse => {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    "statusCode" in value &&
    "message" in value &&
    Array.isArray((value as ErrorResponse).message)
  )
}
