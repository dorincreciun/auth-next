import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    API_URL: z.string().url(),
    /**
     * Prefixul global + versiunea din backend (`API_PREFIX`/`API_VERSION`).
     * Ține-l aici, nu în path-urile de request: tipurile generate din Swagger
     * sunt curățate de prefix, iar rewrite-ul din `next.config.ts` îl adaugă.
     */
    API_BASE_PATH: z.string().startsWith("/").default("/api/v1"),
    SESSION_NAME: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
    API_BASE_PATH: process.env.API_BASE_PATH,
    SESSION_NAME: process.env.SESSION_NAME,
  },
  emptyStringAsUndefined: true,
})
