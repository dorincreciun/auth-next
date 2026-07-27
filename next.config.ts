import type { NextConfig } from "next"

import "@shared/config/env"
import { env } from "@shared/config/env"

const nextConfig: NextConfig = {
    /* config options here */
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `${env.SERVER_API_URL}/:path*`,
            },
        ]
    },
}

export default nextConfig
