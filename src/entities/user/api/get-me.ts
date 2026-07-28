import { createServerClient } from "@shared/lib/openapi"

import type { User } from "../model/types"

export const getMe = async (): Promise<User | null> => {
    const api = await createServerClient()
    const { data, error } = await api.GET("/auth/me")
    if (error || !data) {
        return null
    }
    return data.data.user
}
