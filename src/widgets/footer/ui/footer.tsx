export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="text-muted-foreground flex w-full items-center justify-between border-t border-white/10 px-6 py-3 text-xs">
      <p>© {year}</p>
      <p>Setări cont</p>
    </footer>
  )
}
