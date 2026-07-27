import type { ReactNode } from "react"

interface SettingsSectionProps {
    title: string
    description?: string
    children: ReactNode
}

export const SettingsSection = ({ title, description, children }: SettingsSectionProps) => {
    return (
        <section className="flex flex-col gap-6">
            <div className="border-b border-white/10 pb-4">
                <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
                {description ? (
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                ) : null}
            </div>
            <div className="flex flex-col gap-4">{children}</div>
        </section>
    )
}
