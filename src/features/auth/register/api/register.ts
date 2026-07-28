import {
  type RegisterBody,
  type RegisterError,
  type RegisterSuccess,
} from "@features/auth/register"
import { client } from "@shared/lib/openapi"

type Response = Promise<RegisterSuccess | RegisterError>

export const register = async (payload: RegisterBody): Response => {
  const { data, error } = await client.POST("/auth/register", {
    body: payload,
  })

  if (error || !data) {
    return error
  }

  return data
}
