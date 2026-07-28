export const Footer = () => {
  return (
    <footer className="flex w-full shrink-0 items-center justify-center border-t border-white/10 px-4 py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} AuthNext. Toate drepturile rezervate.
    </footer>
  )
}
