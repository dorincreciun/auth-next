"use client"

import { LogOut } from "lucide-react"

import { Button } from "@shared/ui/button"

export const LogoutButton = () => {
  return (
    <Button type="button" variant="outline" size="sm" className="w-full">
      <LogOut data-icon="inline-start" />
      Deconectează-te
    </Button>
  )
}
