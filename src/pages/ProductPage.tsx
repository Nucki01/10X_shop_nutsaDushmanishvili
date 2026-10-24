import { Link, useParams } from 'react-router-dom'

// P3 — Product Details Page (/products/:id)
// Reads the dynamic `:id` parameter from the URL using React Router's `useParams` hook.
export function ProductPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <section className="space-y-4">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
      >
        ← Back to catalog
      </Link>

      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">
          Product Details (ID: {id})
        </h1>
        <p className="text-sm text-stone-600">
          Dynamic route parameter <code>id = {id}</code> read via <code>useParams()</code>.
        </p>
      </div>
    </section>
  )
}
