import { useEffect, useState } from 'react'
import type { Product, ProductsResponse } from '../types/product'
import { ProductGrid } from '../components/product/ProductGrid'

// P2 — Catalog Page (/) [CORE Steps 7 & 8]
// Fetches products from DummyJSON API when the page loads using useEffect.
export function CatalogPage() {
  // 1. State for storing the products list, loading status, and any error message
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  // 2. Fetch products once when CatalogPage mounts (empty dependency array `[]`)
  useEffect(() => {
    async function loadProducts() {
      try {
        setIsLoading(true)
        setError('')

        const response = await fetch('https://dummyjson.com/products?limit=12&skip=0')
        if (!response.ok) {
          throw new Error('Failed to load products from the server.')
        }

        const data = (await response.json()) as ProductsResponse
        setProducts(data.products)
      } catch {
        setError('Could not load products. Please check your internet connection.')
      } finally {
        setIsLoading(false)
      }
    }

    loadProducts()
  }, [])

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">Catalog</h1>
        <p className="text-sm text-stone-600">Browse our latest products</p>
      </div>

      {/* 3. Conditional Rendering: Loading -> Error -> Empty -> ProductGrid */}
      {isLoading && (
        <p className="text-stone-600 py-8 text-center">Loading products...</p>
      )}

      {!isLoading && error && (
        <p className="text-red-600 bg-red-50 border border-red-200 rounded-lg p-4">
          {error}
        </p>
      )}

      {!isLoading && !error && products.length === 0 && (
        <p className="text-stone-600 py-8 text-center">No products found.</p>
      )}

      {!isLoading && !error && products.length > 0 && (
        <ProductGrid products={products} />
      )}
    </section>
  )
}
