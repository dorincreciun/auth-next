import { type components } from "@shared/lib/openapi"

export type SuccessResponse<T> = {
  success: true
  statusCode: number
  timestamp: string
  path: string
  data: T
}

export type ErrorResponse = Omit<components["schemas"]["ErrorResponseDto"], "success"> & {
  success: false
}

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
