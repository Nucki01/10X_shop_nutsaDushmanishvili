import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Container } from '../ui/Container'

// Shared Layout Component (styled with Velvety cream background and ink text)
export function Layout() {
  return (
    <div className="min-h-screen bg-velvety-cream text-velvety-ink flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
