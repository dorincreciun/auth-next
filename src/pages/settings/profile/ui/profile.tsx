import { ChangeAvatar } from "@features/user/change-avatar"
import { DeleteAccount } from "@features/user/delete-account"
import { UpdateProfile, UpdateProfileAbout } from "@features/user/update-profile"
import { Button } from "@shared/ui/button"
import { Notice } from "@shared/ui/notice"
import { Section } from "@shared/ui/section"

export const SettingsProfilePage = () => {
  return (
    <div className="[&>section:not(:last-child)]:border-border/50 flex flex-col gap-10 [&>section:not(:last-child)]:border-b [&>section:not(:last-child)]:pb-10">
      <Notice>
        Secțiunile de mai jos sunt un mockup. Backendul expune deocamdată doar endpoint-urile
        de autentificare, iar din câmpurile afișate doar prenumele și numele există în API.
      </Notice>

      <form className="contents">
        <Section title="Fotografie de profil">
          <ChangeAvatar />
        </Section>

        <Section
          title="Informații personale"
          description="Actualizează datele afișate în contul tău."
        >
          <UpdateProfile />
        </Section>

        <Section title="Despre tine" description="Locație, job title și o biografie scurtă.">
          <UpdateProfileAbout />
        </Section>

        <div className="flex justify-end pt-2">
          <Button type="submit" disabled>
            Salvează modificările
          </Button>
        </div>
      </form>

      <Section
        title="Zona periculoasă"
        description="Acțiuni ireversibile asupra contului."
        variant="danger"
      >
        <DeleteAccount />
      </Section>
    </div>
  )
}
