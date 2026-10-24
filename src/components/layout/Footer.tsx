import { Container } from '../ui/Container'

// Shared Footer Component (PRD Requirement P0.1 & O3 semantic HTML)
export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 mt-auto">
      <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
        <p>© 2026 10X Shop — Plantify Edition. Built with React, TypeScript & Tailwind CSS v4.</p>
        <p>Powered by DummyJSON API</p>
      </Container>
    </footer>
  )
}
