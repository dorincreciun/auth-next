import type { NextConfig } from "next"

import { env } from "@shared/config/env.config"

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${env.API_URL}/:path*`,
      },
    ]
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

export default nextConfig
