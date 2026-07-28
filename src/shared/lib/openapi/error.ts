import { isErrorResponse } from "@shared/lib/openapi/is-error-response"
import { type ErrorResponse } from "@shared/types"

export class OpenApiError extends Error {
  public readonly success: boolean
  public readonly statusCode: number
  public readonly timestamp: string
  public readonly path: string
  public readonly error: string
  public readonly messages: string[]

  constructor(input: unknown) {
    const errorResponse = OpenApiError.normalize(input)
    super(errorResponse.message.join(", "))

    this.name = OpenApiError.name
    this.success = errorResponse.success
    this.statusCode = errorResponse.statusCode
    this.timestamp = errorResponse.timestamp
    this.path = errorResponse.path
    this.error = errorResponse.error
    this.messages = errorResponse.message
  }

  private static normalize(input: unknown): ErrorResponse {
    if (isErrorResponse(input)) return input

    return {
      success: false,
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: "",
      error: "UnknownError",
      message: [input instanceof Error ? input.message : "A apărut o eroare neașteptată"],
    }
  }
}
