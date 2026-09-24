"use client"

import { ShieldOff } from "lucide-react"

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

import { useRevokeOtherSessions } from "../model/use-revoke-other-sessions"

type RevokeOtherSessionsButtonProps = {
  /** Câte sesiuni ar fi închise; la 0 butonul rămâne inactiv. */
  otherSessionsCount: number
}

export const RevokeOtherSessionsButton = ({
  otherSessionsCount,
}: RevokeOtherSessionsButtonProps) => {
  const { isPending, revokeOthers } = useRevokeOtherSessions()

  const hasOtherSessions = otherSessionsCount > 0

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0"
          disabled={isPending || !hasOtherSessions}
        >
          <ShieldOff data-icon="inline-start" />
          Sign out
        </Button>
      </DialogTrigger>

      <DialogContent
        className="bg-card/95 border-white/10 backdrop-blur-xl"
        showCloseButton={!isPending}
      >
        <DialogHeader>
          <DialogTitle>Sign out other devices</DialogTitle>
          <DialogDescription>
            {otherSessionsCount === 1
              ? "One other device will be signed out immediately. The current session stays active."
              : `${otherSessionsCount} devices will be signed out immediately. The current session stays active.`}
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
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="destructive"
            className="h-9 w-full sm:w-auto sm:min-w-32"
            disabled={isPending}
            onClick={revokeOthers}
          >
            <ShieldOff data-icon="inline-start" />
            {isPending ? "Signing out…" : "Sign out"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
