import { type components } from "./v1"

type ApiMeta = {
  path?: string
  timestamp?: string
}

export type SuccessResponse<T> = {
  success: true
  statusCode: number
  meta: ApiMeta
  data: T
}

export type ErrorResponse = components["schemas"]["ErrorResponseDto"]

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
