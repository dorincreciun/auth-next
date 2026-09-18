import type { NextConfig } from "next"

import { env } from "@shared/config/env.config"

const nextConfig: NextConfig = {
  /**
   * Împachetează serverul cu doar dependențele folosite, ca imaginea Docker să
   * nu ducă tot `node_modules` cu ea.
   */
  output: "standalone",
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
        destination: `${env.API_URL}${env.API_BASE_PATH}/:path*`,
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
