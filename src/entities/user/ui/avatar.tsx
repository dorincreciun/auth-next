import { Avatar, AvatarFallback, AvatarImage } from "@shared/ui/avatar"

interface UserAvatarProps {
  size?: "default" | "sm" | "lg" | "xl" | "2xl"
  src?: string
}

export const UserAvatar = ({
  size = "default",
  src = "https://github.com/shadcn.png",
}: UserAvatarProps) => {
  return (
    <Avatar size={size}>
      <AvatarImage src={src} />
      <AvatarFallback>IP</AvatarFallback>
    </Avatar>
  )
}
