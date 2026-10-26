import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

// P4 — Shopping Cart Page (/cart) [CORE Step 13]
// Displays items in the cart, lets the user change quantities or remove items,
// calculates the total price, and navigates to /checkout.
export function CartPage() {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } =
    useCart()
  const navigate = useNavigate()

  // 1. Empty Cart State (PRD P4.1)
  if (items.length === 0) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-stone-900">Shopping Cart</h1>
        <div className="bg-white border border-stone-200 rounded-xl p-8 text-center">
          <p className="text-stone-600 mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2.5 rounded-lg text-sm"
          >
            Browse products
          </Link>
        </div>
      </section>
    )
  }

  // 2. Filled Cart State: Items list on the left, Order summary on the right
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-stone-900">
          Shopping Cart ({totalItems})
        </h1>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm text-red-600 hover:underline cursor-pointer"
        >
          Clear cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: List of Cart Items (takes 2 columns on desktop) */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => {
            const lineTotal = item.price * item.quantity

            return (
              <div
                key={item.productId}
                className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Product Thumbnail & Title */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-cover bg-stone-100 rounded-lg shrink-0"
                  />
                  <div>
                    <Link
                      to={`/products/${item.productId}`}
                      className="font-semibold text-stone-900 hover:text-emerald-700"
                    >
                      {item.title}
                    </Link>
                    <p className="text-sm text-stone-500 mt-1">
                      Unit price: €{item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Stepper (- / +), Line Total, and Remove Button */}
                <div className="flex items-center justify-between sm:justify-end gap-4">
                  <div className="flex items-center border border-stone-300 rounded-lg">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      className="px-3 py-1.5 text-sm font-bold disabled:opacity-40 cursor-pointer"
                    >
                      −
                    </button>
                    <span className="px-3 py-1.5 text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.productId, item.quantity + 1)
                      }
                      disabled={item.quantity >= item.stock}
                      className="px-3 py-1.5 text-sm font-bold disabled:opacity-40 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <span className="font-bold text-stone-900 w-20 text-right">
                    €{lineTotal.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeItem(item.productId)}
                    className="text-xs text-red-600 hover:underline cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Side: Order Summary Box */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 h-fit space-y-4">
          <h2 className="text-lg font-bold text-stone-900">Order Summary</h2>

          <div className="space-y-2 text-sm border-b border-stone-200 pb-4">
            <div className="flex justify-between text-stone-600">
              <span>Items ({totalItems})</span>
              <span>€{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>

          <div className="flex justify-between text-base font-bold text-stone-900">
            <span>Total</span>
            <span>€{totalPrice.toFixed(2)}</span>
          </div>

          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2.5 rounded-lg text-sm cursor-pointer"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </section>
  )
}
