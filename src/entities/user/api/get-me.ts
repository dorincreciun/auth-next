import type { User } from "@entities/user"
import { createServerClient } from "@shared/lib/openapi"

export const getMe = async (): Promise<User | null> => {
    const api = await createServerClient()
    const { data, error } = await api.GET("/auth/me")
    if (error || !data) {
        return null
    }
    return data.data.user
}
