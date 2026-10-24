import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { AppRoutes } from './routes/AppRoutes'

// Root App Component (PRD Requirement P0.1 & P0.2)
// Wraps the application in <AuthProvider> and a single <BrowserRouter>
// so authentication state and routing are available to all pages and Header.
export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
