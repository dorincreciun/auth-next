import { Switch } from "@shared/ui/switch"

export const TwoFactorField = () => {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/5 px-4 py-3.5">
      <label htmlFor="two-factor" className="text-foreground cursor-pointer text-sm font-medium">
        Autentificare în doi pași
      </label>
      <Switch id="two-factor" name="twoFactor" className="shrink-0" disabled />
    </div>
  )
}
