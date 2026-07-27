import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@shared/ui/card"

const fakeDevices = [
    {
        name: "Windows · Chrome",
        location: "București, România",
        active: true,
    },
    {
        name: "iPhone · Safari",
        location: "Cluj-Napoca, România",
        active: false,
    },
]

export default function SettingsDevicesPage() {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Dispozitive</CardTitle>
                <CardDescription>
                    Sesiunile active și dispozitivele conectate recent la contul tău.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                {fakeDevices.map((device) => (
                    <div
                        key={device.name}
                        className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5"
                    >
                        <div className="min-w-0">
                            <p className="truncate text-sm font-medium">{device.name}</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">{device.location}</p>
                        </div>
                        <span
                            className={
                                device.active
                                    ? "shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary"
                                    : "shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                            }
                        >
                            {device.active ? "Activ acum" : "Inactiv"}
                        </span>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
