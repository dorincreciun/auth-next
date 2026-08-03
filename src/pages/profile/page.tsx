import {ChangeAvatar} from "@features/change-avatar";

export const DefaultProfilePage = () => {
    return (
        <div
            className="[&>section:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:pb-10">
            <ChangeAvatar/>
        </div>
    );
};