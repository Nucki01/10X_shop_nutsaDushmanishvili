import { Container } from '../ui/Container'

// Shared Footer Component (styled with Velvety @theme tokens)
export function Footer() {
  return (
    <footer className="bg-velvety-green text-velvety-mist/80 border-t border-white/10 mt-auto">
      <Container className="py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div>
          <p className="font-serif text-base text-white tracking-widest uppercase">
            10X Shop
          </p>
          <p className="text-velvety-mist/70 mt-1">
            Natural facial, hair, and body care essentials.
          </p>
        </div>
        <p className="text-velvety-mist/70">
          © 2026 10X Shop · Built by Nutsa Dushmanishvili
        </p>
      </Container>
    </footer>
  )
}
