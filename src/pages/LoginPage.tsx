import { useState, type FormEvent, type ChangeEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import type { LoginFormValues } from '../types/user'
import { validateLoginForm, type LoginFormErrors } from '../utils/validation'

// Helper type for reading router location state when redirected from ProtectedRoute (/checkout)
interface LocationState {
  from?: string
}

// P1 — Login Page (/login) [CORE]
// Demonstrates a Controlled Form in React:
// 1. Form field values (`username`, `password`) live in React state (`useState`).
// 2. Every keystroke triggers `onChange`, updating React state immediately.
// 3. Submitting triggers `handleSubmit` -> `e.preventDefault()` (stops browser reload) -> validation.
// 4. If valid, calls `AuthContext.login(username)` and navigates to `/checkout` (if redirected) or `/`.
export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Read where the user came from (e.g., "/checkout"), or default to "/" (Catalog)
  const state = location.state as LocationState | null
  const redirectTo = state?.from || '/'

  // Controlled form state
  const [values, setValues] = useState<LoginFormValues>({
    username: '',
    password: '',
  })

  // Inline validation error state for each field
  const [errors, setErrors] = useState<LoginFormErrors>({})

  // Handles input changes for both username and password fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev, // Immutable update: copy previous fields and overwrite the changed field
      [name]: value,
    }))

    // Clear the inline error for the field as the user types
    if (errors[name as keyof LoginFormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  // Handles form submission without reloading the page
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const validationErrors = validateLoginForm(values)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Valid submission: update AuthContext and navigate to target route
    login(values.username)
    navigate(redirectTo, { replace: true })
  }

  return (
    <section className="max-w-md mx-auto my-4 space-y-4">
      {/* Back to catalog link (PRD P1.1) */}
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 focus:outline-2 focus:outline-offset-2 focus:outline-emerald-600 rounded-xs"
      >
        ← Back to catalog
      </Link>

      <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
        <h1 className="text-2xl font-bold text-stone-900 mb-1">Log In</h1>
        <p className="text-sm text-stone-600 mb-6">
          {redirectTo === '/checkout'
            ? 'Please log in to continue to Checkout.'
            : 'Enter any username and a password (min 6 characters) to sign in.'}
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Username Controlled Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-stone-800 mb-1.5"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={values.username}
              onChange={handleChange}
              placeholder="e.g. emilys"
              aria-invalid={Boolean(errors.username)}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 transition-colors focus:outline-2 focus:outline-offset-0 ${
                errors.username
                  ? 'border-rose-500 focus:border-rose-600 focus:outline-rose-500 bg-rose-50/30'
                  : 'border-stone-300 focus:border-emerald-600 focus:outline-emerald-600 bg-white'
              }`}
            />
            {errors.username && (
              <p role="alert" className="mt-1.5 text-xs font-medium text-rose-600">
                {errors.username}
              </p>
            )}
          </div>

          {/* Password Controlled Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-stone-800 mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={values.password}
              onChange={handleChange}
              placeholder="At least 6 characters"
              aria-invalid={Boolean(errors.password)}
              className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 transition-colors focus:outline-2 focus:outline-offset-0 ${
                errors.password
                  ? 'border-rose-500 focus:border-rose-600 focus:outline-rose-500 bg-rose-50/30'
                  : 'border-stone-300 focus:border-emerald-600 focus:outline-emerald-600 bg-white'
              }`}
            />
            {errors.password && (
              <p role="alert" className="mt-1.5 text-xs font-medium text-rose-600">
                {errors.password}
              </p>
            )}
          </div>

          {/* Submit Button with hover, focus, and disabled Tailwind variants (PRD TW4) */}
          <button
            type="submit"
            className="w-full min-h-11 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  )
}
