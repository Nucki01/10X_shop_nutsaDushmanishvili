import { Link } from 'react-router-dom'

// P1 — Login Page (/login)
export function LoginPage() {
  return (
    <section className="max-w-md mx-auto space-y-4">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
      >
        ← Back to catalog
      </Link>

      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
        <h1 className="text-2xl font-bold text-stone-900 mb-2">Log In</h1>
        <p className="text-sm text-stone-600">
          Controlled login form and AuthContext will be connected in Day 3 (PRD Step 5).
        </p>
      </div>
    </section>
  )
}
