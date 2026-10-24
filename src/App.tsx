import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

// Root App Component (PRD Requirement P0.1: Single BrowserRouter)
// Wraps the route map in <BrowserRouter> to enable client-side SPA routing.
export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
