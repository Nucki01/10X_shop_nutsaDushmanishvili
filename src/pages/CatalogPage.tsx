import { Link } from 'react-router-dom'

// P2 — Catalog Page (/)
// Currently renders the route skeleton; in Step 7/8 we will connect GET /products from DummyJSON.
export function CatalogPage() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">Catalog</h1>
          <p className="text-sm text-stone-600">
            Browse products from our collection.
          </p>
        </div>
      </div>

      {/* Temporary navigation links to verify all CORE routes work without reload (PRD Step 4) */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 space-y-4 shadow-xs">
        <h2 className="text-base font-semibold text-stone-800">
          Route Verification (Step 4)
        </h2>
        <p className="text-sm text-stone-600">
          Click any route below to test client-side React Router navigation without page reload:
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            to="/products/1"
            className="bg-emerald-50 text-emerald-800 hover:bg-emerald-100 px-3.5 py-2 rounded-lg font-medium transition-colors"
          >
            Sample Product (/products/1)
          </Link>
          <Link
            to="/cart"
            className="bg-stone-100 text-stone-800 hover:bg-stone-200 px-3.5 py-2 rounded-lg font-medium transition-colors"
          >
            Cart (/cart)
          </Link>
          <Link
            to="/checkout"
            className="bg-stone-100 text-stone-800 hover:bg-stone-200 px-3.5 py-2 rounded-lg font-medium transition-colors"
          >
            Checkout (/checkout)
          </Link>
          <Link
            to="/login"
            className="bg-stone-100 text-stone-800 hover:bg-stone-200 px-3.5 py-2 rounded-lg font-medium transition-colors"
          >
            Login (/login)
          </Link>
          <Link
            to="/non-existent-route"
            className="bg-rose-50 text-rose-700 hover:bg-rose-100 px-3.5 py-2 rounded-lg font-medium transition-colors"
          >
            Test 404 Page (/non-existent-route)
          </Link>
        </div>
      </div>
    </section>
  )
}
