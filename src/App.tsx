import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from './components/ui/ErrorBoundary'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { AppRoutes } from './routes/AppRoutes'

// Root App Component
// Wraps the entire app inside ErrorBoundary, AuthProvider, CartProvider, and BrowserRouter.
export function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  )
}

export default App
