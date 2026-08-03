import { BadgeCheck } from "lucide-react"

export const ActiveProfileBadge = () => {
  return (
    <span className="border-primary/30 bg-primary/10 text-primary inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold">
      <BadgeCheck className="size-3" aria-hidden />
      Activ
    </span>
  )
}
