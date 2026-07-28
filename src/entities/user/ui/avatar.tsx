import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar"

interface UserAvatarProps {
  size?: "default" | "sm" | "lg" | "xl" | "2xl"
}

export const UserAvatar = ({ size = "default" }: UserAvatarProps) => {
  return (
    <Avatar size={size}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>IP</AvatarFallback>
    </Avatar>
  )
}
