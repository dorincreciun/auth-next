import { cookies } from "next/headers"
import createClient from "openapi-fetch"

import { env } from "@shared/config/env"

import type { paths } from "./v1"

export async function createServerClient() {
    const cookieStore = await cookies()
    const session = cookieStore.get(env.SESSION_NAME)

    return createClient<paths>({
        baseUrl: env.SERVER_API_URL,
        headers: session ? { Cookie: `${env.SESSION_NAME}=${session.value}` } : undefined,
    })
}
