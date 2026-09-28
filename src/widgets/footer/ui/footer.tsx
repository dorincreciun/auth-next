export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="text-muted-foreground flex w-full items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-xs md:px-6">
      <p>© {year}</p>
      <p>Account settings</p>
    </footer>
  )
}
