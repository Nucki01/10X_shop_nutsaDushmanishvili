import { Routes, Route } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { CatalogPage } from '../pages/CatalogPage'
import { ProductPage } from '../pages/ProductPage'
import { CartPage } from '../pages/CartPage'
import { LoginPage } from '../pages/LoginPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { NotFoundPage } from '../pages/NotFoundPage'

// Application Route Map (PRD Section A1.2 & P0.1)
// All pages sit inside a single parent <Route element={<Layout />}> so Header and Footer
// stay mounted while the inner <Outlet /> switches pages without reloading the browser.
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
