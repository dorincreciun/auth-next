"use client"

import { LogOut, X } from "lucide-react"

import { Button } from "@shared/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/ui/dialog"

import { useRevokeSession } from "../model/use-revoke-session"

type RevokeSessionButtonProps = {
  sessionId: string
  deviceLabel: string
  isCurrent?: boolean
}

export const RevokeSessionButton = ({
  sessionId,
  deviceLabel,
  isCurrent,
}: RevokeSessionButtonProps) => {
  const { isPending, revoke } = useRevokeSession({ sessionId, isCurrent })

  const Icon = isCurrent ? LogOut : X

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
          disabled={isPending}
        >
          <Icon data-icon="inline-start" />
          {isCurrent ? "Deconectează-te" : "Închide sesiunea"}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="bg-card/95 border-white/10 backdrop-blur-xl"
        showCloseButton={!isPending}
      >
        <DialogHeader>
          <DialogTitle>{isCurrent ? "Deconectare" : "Închide sesiunea"}</DialogTitle>
          <DialogDescription>
            {isCurrent
              ? "Aceasta este sesiunea curentă. Va trebui să te autentifici din nou pentru a accesa contul."
              : `Sesiunea de pe ${deviceLabel} va fi închisă imediat. Dispozitivul va trebui să se autentifice din nou.`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="h-9 w-full sm:w-auto sm:min-w-24"
              disabled={isPending}
            >
              Anulează
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            className="h-9 w-full sm:w-auto sm:min-w-32"
            disabled={isPending}
            onClick={revoke}
          >
            <Icon data-icon="inline-start" />
            {isPending ? "Se închide…" : "Închide sesiunea"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
