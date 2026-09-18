# syntax=docker/dockerfile:1

# ─── Dependențe complete (inclusiv dev) ───────────────────────────────────────
FROM node:24-bookworm-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ─── Build Next.js ────────────────────────────────────────────────────────────
FROM deps AS build
WORKDIR /app

# `next build` scrie rewrite-urile în routes-manifest.json, deci adresa API-ului
# este fixată aici, nu la pornirea containerului. Valoarea trebuie să fie cea
# validă din rețeaua în care va rula imaginea (în compose: numele serviciului
# backend), nu `localhost`, care ar trimite request-urile în containerul propriu.
ARG API_URL=http://api:5000
ARG API_BASE_PATH=/api/v1
ARG SESSION_NAME=sessionId
ENV NODE_ENV=production \
  API_URL=$API_URL \
  API_BASE_PATH=$API_BASE_PATH \
  SESSION_NAME=$SESSION_NAME \
  NEXT_TELEMETRY_DISABLED=1

COPY tsconfig.json next.config.ts postcss.config.mjs proxy.ts ./
COPY app ./app
COPY src ./src
COPY public ./public
# `pages/` de la root este doar un marcaj: fără el, Next ia stratul FSD
# `src/pages` drept Pages Router și refuză să pornească alături de `app/`.
COPY pages ./pages
RUN npm run build

# ─── Development: `next dev` cu sursele montate din compose ───────────────────
FROM deps AS dev
WORKDIR /app
ENV NODE_ENV=development \
  NEXT_TELEMETRY_DISABLED=1 \
  HOSTNAME=0.0.0.0 \
  PORT=3000 \
  API_URL=http://api:5000 \
  API_BASE_PATH=/api/v1 \
  SESSION_NAME=sessionId
EXPOSE 3000
# Fără USER node: bind-mount-ul din compose e scris de userul gazdei.
HEALTHCHECK --interval=30s --timeout=5s --start-period=45s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/login').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
CMD ["npm", "run", "dev"]

# ─── Imaginea finală ──────────────────────────────────────────────────────────
FROM node:24-bookworm-slim AS runtime
ENV NODE_ENV=production \
  PORT=3000 \
  HOSTNAME=0.0.0.0
WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends dumb-init \
  && rm -rf /var/lib/apt/lists/*

# `output: "standalone"` produce un server.js cu doar dependențele folosite;
# `static` și `public` nu sunt incluse acolo și se copiază separat.
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static

# Serverul scrie în `.next/cache`, deci directorul trebuie să fie al userului.
RUN mkdir -p .next/cache && chown -R node:node .next

# Procesul rulează fără privilegii de root.
USER node
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/login').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

# `dumb-init` face PID 1 să propage corect semnalele, ca shutdown-ul să fie curat.
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "server.js"]
