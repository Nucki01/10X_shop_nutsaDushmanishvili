import { useState } from 'react'
import { CATEGORIES, DM_PRODUCTS } from '../data/products'
import { ProductGrid } from '../components/product/ProductGrid'

// P2 — Catalog Page (/)
// Displays our 12 realistic dm (drogerie-markt) products and lets the user filter by category.
export function CatalogPage() {
  // State for the currently selected category ('All', 'Skincare', 'Hair Care', or 'Body & Personal Care')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? DM_PRODUCTS
      : DM_PRODUCTS.filter((product) => product.category === selectedCategory)

  return (
    <section className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-stone-900">
          dm Drogerie-Markt Catalog
        </h1>
        <p className="text-sm text-stone-600">
          Browse our Skincare, Hair Care, and Body & Personal Care products
        </p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                isActive
                  ? 'bg-emerald-700 text-white'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100'
              }`}
            >
              {category}
            </button>
          )
        })}
      </div>

      {/* Product Grid */}
      <ProductGrid products={filteredProducts} />
    </section>
  )
}
