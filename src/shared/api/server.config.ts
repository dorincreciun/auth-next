import "server-only"
import { cache } from "react"

import { cookies } from "next/headers"
import createClient from "openapi-fetch"

import { env } from "@shared/config/env.config"

import type { paths } from "./v1"

export const server = cache(async () => {
  const cookieStore = await cookies()

  return createClient<paths>({
    baseUrl: `${env.API_URL}${env.API_BASE_PATH}`,
    headers: {
      cookie: cookieStore.toString(),
    },
  })
})
