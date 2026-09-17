import { redirect } from "next/navigation"

import { APP_ROUTES, getRoutePath } from "@shared/config"

export default function Home() {
  redirect(getRoutePath(APP_ROUTES.PROFILE))
}
