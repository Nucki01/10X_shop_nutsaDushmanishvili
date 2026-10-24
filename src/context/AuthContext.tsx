import { createContext, useContext, useState, type ReactNode } from 'react'
import type { AuthUser } from '../types/user'

// Shape of the value shared by AuthContext across the app (PRD Step 5 & P0.2)
export interface AuthContextValue {
  user: AuthUser
  login: (username: string) => void
  logout: () => void
}

const STORAGE_KEY = 'shop_user'

// Type guard to safely verify data read from localStorage (PRD Section T3: no `as` cast without guard)
function isAuthUser(value: unknown): value is AuthUser {
  if (typeof value !== 'object' || value === null) return false
  const candidate = value as Record<string, unknown>
  return (
    typeof candidate.username === 'string' &&
    typeof candidate.isLoggedIn === 'boolean'
  )
}

// Load initial auth state safely from localStorage (or default to guest state)
function getInitialUser(): AuthUser {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { username: '', isLoggedIn: false }
    const parsed: unknown = JSON.parse(raw)
    if (isAuthUser(parsed) && parsed.isLoggedIn && parsed.username.trim()) {
      return parsed
    }
  } catch {
    // If localStorage is unavailable or corrupted, fall back safely to guest
  }
  return { username: '', isLoggedIn: false }
}

// Create the context with `undefined` default so useAuth() can detect if used outside AuthProvider
const AuthContext = createContext<AuthContextValue | undefined>(undefined)

// AuthProvider wraps the app and provides `user`, `login`, and `logout` to any child component
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(getInitialUser)

  // Sets logged-in state in React Context (simulated local login per PRD P1.3)
  const login = (username: string): void => {
    const nextUser: AuthUser = {
      username: username.trim(),
      isLoggedIn: true,
    }
    setUser(nextUser)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser))
    } catch {
      // Ignore storage write errors
    }
  }

  // Resets user back to guest state without touching the shopping cart (PRD P0.3)
  const logout = (): void => {
    const guestUser: AuthUser = { username: '', isLoggedIn: false }
    setUser(guestUser)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {
      // Ignore storage remove errors
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook for consuming AuthContext cleanly in components (e.g., Header, LoginPage, ProtectedRoute)
export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
