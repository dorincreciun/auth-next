import fsd from "@feature-sliced/steiger-plugin"
import { defineConfig } from "steiger"

export default defineConfig([
  ...fsd.configs.recommended,
  {
    rules: {
      // Public API
      "fsd/public-api": "error",
      "fsd/no-public-api-sidestep": "error",
      "fsd/no-layer-public-api": "error",

      // Importuri (înlocuiește no-cross-imports + no-higher-level-imports)
      "fsd/forbidden-imports": "error",

      // Structură
      "fsd/ambiguous-slice-names": "error",
      "fsd/insignificant-slice": "warn", // warn, nu error – poate fi zgomotos
      "fsd/inconsistent-naming": "error",
      "fsd/no-processes": "error",
    },
  },
  {
    /**
     * În Next.js App Router codul server-only (`next/headers`, `server-only`) nu
     * poate trece prin `index.ts`, altfel orice client component care importă
     * slice-ul ar trage `next/headers` în bundle-ul de browser și build-ul cade.
     * De aceea slice-urile expun un al doilea entrypoint, `server.ts`, iar
     * consumatorii lui sunt exceptați de la regula de public API.
     */
    files: [
      "./src/entities/user/api/get-me.ts",
      "./src/entities/session/api/get-sessions.ts",
      "./src/pages/**/ui/**",
    ],
    rules: {
      "fsd/no-public-api-sidestep": "off",
    },
  },
  {
    /**
     * Steiger analizează doar `./src`, deci nu vede consumatorii din `app/`.
     * Aceste trei widget-uri sunt folosite în `app/profile/layout.tsx`, iar
     * regula le-ar raporta greșit ca „slice fără nicio referință”.
     */
    files: [
      "./src/widgets/breadcrumb/**",
      "./src/widgets/footer/**",
      "./src/widgets/sidebar-profile/**",
    ],
    rules: {
      "fsd/insignificant-slice": "off",
    },
  },
])
