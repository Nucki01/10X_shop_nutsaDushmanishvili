import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DM_PRODUCTS } from '../data/products'
import { useCart } from '../context/CartContext'
import { NotFoundPage } from './NotFoundPage'

// P3 — Product Details Page (/products/:id) [CORE Steps 10 & 11]
// Uses useParams() to read the product ID, shows full details, and lets the user
// choose a quantity and add the product to CartContext.
export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCart()

  // Local state for selected quantity and a confirmation message when added
  const [quantity, setQuantity] = useState(1)
  const [addedMessage, setAddedMessage] = useState(false)

  // Find the product with the matching ID from our dm products list
  const productId = Number(id)
  const product = DM_PRODUCTS.find((item) => item.id === productId)

  // If the ID is invalid (e.g. /products/999 or /products/abc), show the 404 page
  if (!product) {
    return <NotFoundPage />
  }

  // Determine stock badge text and color (PRD Section P3.3)
  let stockText = 'In stock'
  let stockColor = 'text-emerald-700 bg-emerald-50'
  if (product.stock === 0) {
    stockText = 'Out of stock'
    stockColor = 'text-red-700 bg-red-50'
  } else if (product.stock <= 5) {
    stockText = `Only ${product.stock} left!`
    stockColor = 'text-amber-700 bg-amber-50'
  }

  function handleAddToCart() {
    if (!product) return
    addItem(product, quantity)
    setAddedMessage(true)
  }

  return (
    <section className="space-y-6">
      <Link to="/" className="inline-block text-sm text-emerald-700 hover:underline">
        ← Back to catalog
      </Link>

      {/* Two-column layout on desktop (md:grid-cols-2), single column on mobile */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Product Image */}
        <div>
          <img
            src={product.images[0] || product.thumbnail}
            alt={product.title}
            className="w-full h-80 object-cover bg-stone-100 rounded-xl"
          />
        </div>

        {/* Right Column: Product Information & Controls */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
              {product.category}
            </span>
            {product.brand && (
              <span className="text-xs text-stone-500">Brand: {product.brand}</span>
            )}
          </div>

          <h1 className="text-2xl font-bold text-stone-900">{product.title}</h1>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-emerald-800">
              €{product.price.toFixed(2)}
            </span>
            <span className={`text-xs font-medium px-2.5 py-1 rounded-md ${stockColor}`}>
              {stockText}
            </span>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Stepper (- / +) and Add to Cart Button (PRD Step 11) */}
          <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4">
            <div className="flex items-center border border-stone-300 rounded-lg">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1 || product.stock === 0}
                className="px-3 py-2 text-sm font-bold disabled:opacity-40 cursor-pointer"
              >
                −
              </button>
              <span className="px-4 py-2 text-sm font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                disabled={quantity >= product.stock || product.stock === 0}
                className="px-3 py-2 text-sm font-bold disabled:opacity-40 cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white text-sm font-medium px-6 py-2.5 rounded-lg cursor-pointer"
            >
              Add to cart
            </button>
          </div>

          {/* Simple feedback message after adding to cart */}
          {addedMessage && (
            <p className="text-sm text-emerald-700 font-medium">
              Added to cart!{' '}
              <Link to="/cart" className="underline font-semibold">
                View Cart
              </Link>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
