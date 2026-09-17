import type { NextConfig } from "next"

import { env } from "@shared/config/env.config"

const nextConfig: NextConfig = {
  /**
   * Next generează AGENTS.md/CLAUDE.md la fiecare `next dev`. Regulile pentru
   * agenți sunt ținute versionat în `.cursor/skills`, deci fișierele generate ar
   * fi doar zgomot necontrolat în repo.
   */
  agentRules: false,
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
