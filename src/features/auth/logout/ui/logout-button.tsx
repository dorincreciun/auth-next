"use client";

import {LogOut} from "lucide-react";

import {Button} from "@shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@shared/ui/dialog";

import {useLogout} from "../model/use-logout";

export const LogoutButton = () => {
  const {isPending, logout} = useLogout();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="h-9 w-full justify-center gap-2"
          disabled={isPending}
        >
          <LogOut data-icon="inline-start" />
          {isPending ? "Signing out…" : "Sign out"}
        </Button>
      </DialogTrigger>

      <DialogContent
        className="border-white/10 bg-card/95 backdrop-blur-xl"
        showCloseButton={!isPending}
      >
        <DialogHeader>
          <DialogTitle>Sign out</DialogTitle>
          <DialogDescription>
            Are you sure you want to sign out? You will need to sign in again to access your
            account.
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
            onClick={logout}
          >
            <LogOut data-icon="inline-start" />
            {isPending ? "Signing out…" : "Sign out"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
