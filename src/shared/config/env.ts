import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        SERVER_API_URL: z.string().url(),
        SESSION_NAME: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_URL: z.string().url(),
    },
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        SERVER_API_URL: process.env.SERVER_API_URL,
        NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
        SESSION_NAME: process.env.SESSION_NAME,
    },
    emptyStringAsUndefined: true,
})
