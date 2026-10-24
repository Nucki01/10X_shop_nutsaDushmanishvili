import { useState, type FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// P1 — Login Page (/login) [CORE Step 5]
// Uses simple controlled inputs with useState, onChange, and onSubmit.
export function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  // Input values stored in React state (Controlled Form)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Error messages stored in React state
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Check if ProtectedRoute sent the user here from "/checkout"
  const state = location.state as { from?: string } | null
  const redirectPath = state?.from || '/'

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // 1. Stop the browser from reloading the page
    e.preventDefault()

    // 2. Reset old errors before checking again
    let hasError = false
    setUsernameError('')
    setPasswordError('')

    // 3. Validate Username (PRD P1.2: required)
    if (!username.trim()) {
      setUsernameError('Username is required')
      hasError = true
    }

    // 4. Validate Password (PRD P1.2: required, min 6 characters)
    if (!password) {
      setPasswordError('Password is required')
      hasError = true
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters')
      hasError = true
    }

    // If any field has an error, stop here
    if (hasError) {
      return
    }

    // 5. Save login state in AuthContext and navigate to /checkout or /
    login(username)
    navigate(redirectPath)
  }

  return (
    <section className="max-w-md mx-auto my-6 space-y-4">
      <Link to="/" className="text-sm text-emerald-700 hover:underline">
        ← Back to catalog
      </Link>

      <div className="bg-white border border-stone-200 rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-2">Log In</h1>
        <p className="text-sm text-stone-600 mb-6">
          Enter any username and password (at least 6 characters).
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-2 focus:outline-emerald-600"
            />
            {usernameError && (
              <p className="text-xs text-red-600 mt-1">{usernameError}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-2 focus:outline-emerald-600"
            />
            {passwordError && (
              <p className="text-xs text-red-600 mt-1">{passwordError}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2.5 rounded-lg text-sm cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  )
}
