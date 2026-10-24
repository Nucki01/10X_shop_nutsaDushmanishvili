import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container } from '../ui/Container'
import { useAuth } from '../../context/AuthContext'

// Shared Header Component (PRD Requirement P0.3)
// Connects to AuthContext to display either:
// - Guest view: "Log in" link to /login
// - Logged-in view: current username + "Log out" button (which resets AuthContext and navigates to "/")
export function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  // Handles logging out: sets user to guest in AuthContext and returns to Catalog ("/")
  const handleLogout = (): void => {
    logout()
    navigate('/')
  }

  // Helper function for NavLink className based on whether the route is currently active
  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-emerald-300 ${
      isActive
        ? 'bg-emerald-900 text-white font-semibold'
        : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
    }`

  return (
    <header className="bg-emerald-800 text-white shadow-xs sticky top-0 z-30">
      <Container className="py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand Logo -> returns to Catalog (/) */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white hover:text-emerald-200 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-emerald-300 rounded-xs"
        >
          10X Shop
        </Link>

        {/* Main Navigation Links (wraps cleanly on 375px mobile screens to prevent horizontal scroll) */}
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-2 sm:gap-3">
          <NavLink to="/" end className={getNavLinkClass}>
            Catalog
          </NavLink>

          <NavLink to="/cart" className={getNavLinkClass}>
            <span>Cart</span>
          </NavLink>

          {/* Conditional Rendering based on AuthContext state (PRD P0.3) */}
          {user.isLoggedIn ? (
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm text-emerald-100 font-medium px-2 py-1 bg-emerald-900/50 rounded-md">
                Hi, {user.username}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="px-3.5 py-1.5 rounded-md text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition-colors cursor-pointer focus:outline-2 focus:outline-offset-2 focus:outline-emerald-300"
              >
                Log out
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-emerald-300 ${
                  isActive
                    ? 'bg-white text-emerald-900 font-semibold'
                    : 'bg-emerald-600 text-white hover:bg-emerald-500'
                }`
              }
            >
              Log in
            </NavLink>
          )}
        </nav>
      </Container>
    </header>
  )
}
