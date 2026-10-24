import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'
import { Container } from '../ui/Container'

// Shared Layout Component (PRD Requirement P0.1)
// Wraps all routes so Header and Footer are written once instead of repeated on every page.
// <Outlet /> is React Router's placeholder where the active child page is rendered.
export function Layout() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      <ScrollToTop />
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
