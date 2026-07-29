import { type GetSchema } from "@shared/lib/openapi"

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

export type ErrorResponse = GetSchema<"ErrorResponseDto">

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse
