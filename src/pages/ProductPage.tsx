import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DM_PRODUCTS } from '../data/products'
import { useCart } from '../context/CartContext'
import { formatPrice } from '../utils/format'
import { NotFoundPage } from './NotFoundPage'

// P3 — Product Details Page (/products/:id) [CORE Steps 10 & 11]
// Styled with Velvety @theme tokens (font-serif, bg-velvety-mist, bg-velvety-green).
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
  let stockColor = 'text-velvety-green bg-velvety-mist'
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
      <Link
        to="/"
        className="inline-block text-xs uppercase tracking-wider font-medium text-velvety-sage hover:text-velvety-green"
      >
        ← Back to catalog
      </Link>

      {/* Two-column layout on desktop (md:grid-cols-2), single column on mobile */}
      <div className="bg-white border border-stone-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Product Image inside soft sage-mist frame */}
        <div className="bg-velvety-mist/60 p-6">
          <img
            src={product.images[0] || product.thumbnail}
            alt={product.title}
            className="w-full h-80 object-cover bg-white"
          />
        </div>

        {/* Right Column: Product Information & Controls */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs uppercase tracking-wider text-stone-500">
            <span>
              {product.brand ? `${product.brand} · ` : ''}
              {product.category}
            </span>
            <span className="text-velvety-sage font-semibold">
              ★ {product.rating.toFixed(1)}
            </span>
          </div>

          <h1 className="font-serif text-3xl text-velvety-ink">
            {product.title}
          </h1>

          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold text-velvety-green">
              {formatPrice(product.price)}
            </span>
            <span className={`text-xs font-medium px-2.5 py-1 ${stockColor}`}>
              {stockText}
            </span>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity Stepper (- / +) and Add to Cart Button (PRD Step 11) */}
          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-4">
            <div className="flex items-center border border-stone-300 bg-velvety-cream">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                disabled={quantity <= 1 || product.stock === 0}
                className="px-3.5 py-2 text-sm font-bold disabled:opacity-40 cursor-pointer"
              >
                −
              </button>
              <span className="px-4 py-2 text-sm font-medium">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                disabled={quantity >= product.stock || product.stock === 0}
                className="px-3.5 py-2 text-sm font-bold disabled:opacity-40 cursor-pointer"
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="bg-velvety-green hover:bg-velvety-sage disabled:bg-stone-300 text-white text-xs uppercase tracking-wider font-medium px-6 py-3 cursor-pointer transition-colors"
            >
              Add to cart
            </button>
          </div>

          {/* Simple feedback message after adding to cart */}
          {addedMessage && (
            <p className="text-sm text-velvety-green font-medium">
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
