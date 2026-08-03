import {createEnv} from "@t3-oss/env-nextjs"
import {z} from "zod"

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        API_URL: z.string().url(),
        SESSION_NAME: z.string().min(1),
    },
    client: {},
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        API_URL: process.env.API_URL,
        SESSION_NAME: process.env.SESSION_NAME,
    },
    emptyStringAsUndefined: true
})