This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

Două moduri: **development** (hot-reload, sursele montate) și **production** (imagine `standalone`).

Backend-ul trăiește în compose-ul din `auth-nest` — pornește-l întâi, ca rețeaua `auth-nest_default` să existe.

### Development (recomandat local)

```bash
cd ../auth-nest && npm run docker:dev   # api watch + postgres + redis
cd ../auth-next && npm run docker:dev   # next dev pe http://localhost:3000
```

`docker-compose.dev.yml` pornește etapa `dev` din Dockerfile (`next dev`), montează `src/` / `app/` din gazdă și păstrează `node_modules` + `.next` în volume Docker, ca să nu se amestece cu instalarea de pe mașină. În acest mod `API_URL` e citit la runtime, deci nu trebuie rebuild când schimbi adresa API-ului.

Oprești totul cu `npm run docker:down` (în fiecare repo).

### Production

```bash
cd ../auth-nest && npm run docker:up
cd ../auth-next && npm run docker:up
```

Etapele imaginii de producție:

| Etapă     | Rol                                                           |
| --------- | ------------------------------------------------------------- |
| `deps`    | `npm ci` cu toate dependențele                                |
| `build`   | `next build`, cu adresa API-ului primită ca `ARG`             |
| `runtime` | doar `server.js`, `.next/static` și `public`, rulat ca `node` |

În producție `next build` scrie rewrite-urile în `routes-manifest.json`, deci `API_URL` e fixat la build. În rețeaua Docker valoarea corectă e numele serviciului (`http://api:5000`), nu `localhost`. `.env` (pentru `npm run dev` pe gazdă) și containerul folosesc variabile separate:

| Variabilă        | Unde                         | Implicit                |
| ---------------- | ---------------------------- | ----------------------- |
| `API_URL`        | `.env`, `npm run dev` gazdă  | `http://localhost:5000` |
| `API_URL_DOCKER` | compose (dev + prod)         | `http://api:5000`       |
| `API_BASE_PATH`  | ambele                       | `/api/v1`               |
| `SESSION_NAME`   | ambele                       | `sessionId`             |

Dacă schimbi adresa API-ului în **producție**, reconstruiește imaginea. În development e suficientă o repornire.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
