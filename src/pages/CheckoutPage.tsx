import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { OrderConfirmation } from '../components/cart/OrderConfirmation'
import {
  validateCheckoutForm,
  type CheckoutErrors,
} from '../utils/checkoutValidation'
import { formatPrice } from '../utils/format'

// P5 — Checkout Page (/checkout) [CORE Steps 14 & 15]
// Uses 4 controlled inputs (Full name, Email, Address, City), validates on submit,
// shows the order confirmation screen, and clears the cart.
export function CheckoutPage() {
  const { user } = useAuth()
  const { items, totalItems, totalPrice, clearCart } = useCart()

  // 1. Controlled Form State for the 4 required fields (pre-fills name from AuthContext if available)
  const [fullName, setFullName] = useState(user.username || '')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')

  // 2. State for validation errors and completed order
  const [errors, setErrors] = useState<CheckoutErrors>({})
  const [placedOrderTotal, setPlacedOrderTotal] = useState<number | null>(null)

  // 3. If the order was just placed, show the "Thank you!" confirmation screen (PRD Step 15)
  if (placedOrderTotal !== null) {
    return (
      <OrderConfirmation
        shipping={{ fullName, email, address, city }}
        total={placedOrderTotal}
      />
    )
  }

  // 4. If the user opens /checkout with an empty cart, show a message and link back to /cart (PRD P5.1)
  if (items.length === 0) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-bold text-stone-900">Checkout</h1>
        <div className="bg-white border border-stone-200 rounded-xl p-8 text-center">
          <p className="text-stone-600 mb-4">
            Your cart is empty. Please add items before checking out.
          </p>
          <Link
            to="/cart"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2.5 rounded-lg text-sm"
          >
            Back to cart
          </Link>
        </div>
      </section>
    )
  }

  // 5. Handle form submission (prevent reload -> validate -> confirm order -> clear cart)
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formErrors = validateCheckoutForm({ fullName, email, address, city })
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }

    // Valid order: save total for confirmation screen and empty the cart
    setErrors({})
    setPlacedOrderTotal(totalPrice)
    clearCart()
  }

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold text-stone-900">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Controlled Checkout Form (4 required fields) */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-white border border-stone-200 rounded-xl p-6 space-y-4"
        >
          <h2 className="text-lg font-bold text-stone-900">
            Shipping Information
          </h2>

          {/* Field 1: Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              Full name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Nutsa Dushmanishvili"
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-2 focus:outline-emerald-600"
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Field 2: Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. nutsa@example.com"
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-2 focus:outline-emerald-600"
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Field 3: Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Address
            </label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Street and building number"
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-2 focus:outline-emerald-600"
            />
            {errors.address && (
              <p className="text-xs text-red-600 mt-1">{errors.address}</p>
            )}
          </div>

          {/* Field 4: City */}
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">
              City
            </label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Tbilisi"
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-2 focus:outline-emerald-600"
            />
            {errors.city && (
              <p className="text-xs text-red-600 mt-1">{errors.city}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2.5 rounded-lg text-sm cursor-pointer"
          >
            Place order
          </button>
        </form>

        {/* Right Side: Cart Summary */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 h-fit space-y-4">
          <h2 className="text-lg font-bold text-stone-900">Order Summary</h2>

          <ul className="space-y-2 text-sm border-b border-stone-200 pb-4">
            {items.map((item) => (
              <li key={item.productId} className="flex justify-between gap-2">
                <span className="text-stone-600 truncate">
                  {item.title} × {item.quantity}
                </span>
                <span className="font-medium text-stone-900 shrink-0">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between text-sm text-stone-600">
            <span>Total items</span>
            <span>{totalItems}</span>
          </div>

          <div className="flex justify-between text-base font-bold text-stone-900">
            <span>Total</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
