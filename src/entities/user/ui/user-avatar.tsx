import {Avatar, AvatarFallback, AvatarImage} from "@shared/ui/avatar";

type UserAvatarProps = {
  src?: string | null;
};

export const UserAvatar = ({src}: UserAvatarProps) => {
  return (
    <Avatar>
      {src ? <AvatarImage src={src} alt="Avatar" /> : null}
      <AvatarFallback>?</AvatarFallback>
    </Avatar>
  );
};
