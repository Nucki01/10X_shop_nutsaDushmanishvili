import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Container } from '../ui/Container'

// Shared Layout Component (CORE Step 4 & P0.1)
// Renders Header at the top, the active page inside <Outlet />, and Footer at the bottom.
export function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
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
