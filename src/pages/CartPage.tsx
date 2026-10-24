import { Link } from 'react-router-dom'

// P4 — Shopping Cart Page (/cart)
export function CartPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold text-stone-900">Shopping Cart</h1>
      <div className="bg-white border border-stone-200 rounded-xl p-8 text-center shadow-xs">
        <p className="text-stone-600 mb-4">Your cart is empty.</p>
        <Link
          to="/"
          className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
        >
          Browse products
        </Link>
      </div>
    </section>
  )
}
