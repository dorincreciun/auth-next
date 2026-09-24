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
          {isCurrent ? "Sign out" : "Close session"}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="bg-card/95 border-white/10 backdrop-blur-xl"
        showCloseButton={!isPending}
      >
        <DialogHeader>
          <DialogTitle>{isCurrent ? "Sign out" : "Close session"}</DialogTitle>
          <DialogDescription>
            {isCurrent
              ? "This is the current session. You will need to sign in again to access your account."
              : `The session on ${deviceLabel} will be closed immediately. That device will need to sign in again.`}
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
            onClick={revoke}
          >
            <Icon data-icon="inline-start" />
            {isPending ? "Closing…" : "Close session"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
