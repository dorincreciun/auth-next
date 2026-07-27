"use client"

import type { ReactNode } from "react"

import { SettingsSidebar } from "@widgets/settings-sidebar"

interface SettingsShellProps {
    children: ReactNode
}

export const SettingsShell = ({ children }: SettingsShellProps) => {
    return (
        <div className="flex h-full min-h-0 w-full flex-1 flex-col md:flex-row md:items-stretch">
            <SettingsSidebar />
            <div className="min-w-0 flex-1 overflow-auto px-4 py-5 md:px-6 md:py-6">
                {children}
            </div>
        </div>
    )
}
