import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container } from '../ui/Container'
import { useAuth } from '../../context/AuthContext'

// Shared Header Component (CORE Step 4 & P0.3)
export function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-emerald-800 text-white">
      <Container className="py-4 flex flex-wrap items-center justify-between gap-3">
        {/* Brand Logo -> Catalog (/) */}
        <Link to="/" className="text-xl font-bold">
          10X Shop
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-4 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:underline'
            }
          >
            Catalog
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'font-bold underline' : 'hover:underline'
            }
          >
            Cart
          </NavLink>

          {/* Show Username + Log out if logged in, otherwise show Log in */}
          {user.isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-emerald-200">{user.username}</span>
              <button
                type="button"
                onClick={handleLogout}
                className="bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-md cursor-pointer"
              >
                Log out
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-md"
            >
              Log in
            </NavLink>
          )}
        </nav>
      </Container>
    </header>
  )
}
