import { useState } from 'react'
import { CATEGORIES, DM_PRODUCTS } from '../data/products'
import { HeroBanner } from '../components/product/HeroBanner'
import { ProductGrid } from '../components/product/ProductGrid'

// P2 — Catalog Page (/)
// Displays the Velvety HeroBanner, centered editorial heading, category filter buttons, and ProductGrid.
export function CatalogPage() {
  // State for the currently selected category ('All', 'Skincare', 'Hair Care', or 'Body & Personal Care')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? DM_PRODUCTS
      : DM_PRODUCTS.filter((product) => product.category === selectedCategory)

  return (
    <section className="space-y-8">
      {/* Top Velvety Hero Banner */}
      <HeroBanner />

      {/* Centered Editorial Section Heading (inspired by Velvety template) */}
      <div id="catalog-products" className="text-center max-w-xl mx-auto space-y-2 pt-2">
        <p className="text-xs uppercase tracking-widest text-velvety-sage">
          Our featured products
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-velvety-ink">
          Facial, hair and body care, natural and gentle
        </h2>
      </div>

      {/* Centered Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-stone-200 pb-6">
        {CATEGORIES.map((category) => {
          const isActive = selectedCategory === category
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-medium cursor-pointer transition-colors ${
                isActive
                  ? 'bg-velvety-green text-white'
                  : 'bg-white border border-stone-200 text-velvety-ink hover:bg-velvety-mist'
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
