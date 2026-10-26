import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import { AppRoutes } from './routes/AppRoutes'

// Root App Component
// Wraps the app in AuthProvider, CartProvider, and BrowserRouter so login state,
// shopping cart state, and routing work on every page.
export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
