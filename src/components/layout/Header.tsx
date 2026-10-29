import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Container } from '../ui/Container'
import { useAuth } from '../../context/AuthContext'
import { useCart } from '../../context/CartContext'

// Shared Header Component (styled with Velvety @theme tokens — PRD TW5)
export function Header() {
  const { user, logout } = useAuth()
  const { totalItems } = useCart()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/')
  }

  return (
    <header className="bg-velvety-green text-white border-b border-white/10">
      <Container className="py-5 flex flex-wrap items-center justify-between gap-4">
        {/* Brand Logo in Velvety serif style with lining-nums so "10" matches "X" height */}
        <Link to="/" className="flex flex-col">
          <span className="font-serif lining-nums text-2xl tracking-widest uppercase">
            10X Shop
          </span>
          <span className="text-[10px] tracking-widest uppercase text-velvety-mist/80">
            Beauty &amp; Personal Care
          </span>
        </Link>

        {/* Minimalist Uppercase Navigation Links */}
        <nav className="flex flex-wrap items-center gap-6 text-xs tracking-wider uppercase font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'text-white underline underline-offset-4 font-semibold'
                : 'text-velvety-mist hover:text-white transition-colors'
            }
          >
            Shop
          </NavLink>

          {/* Cart link with live item count */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `flex items-center gap-1.5 ${
                isActive
                  ? 'text-white underline underline-offset-4 font-semibold'
                  : 'text-velvety-mist hover:text-white transition-colors'
              }`
            }
          >
            <span>Cart ({totalItems})</span>
          </NavLink>

          {/* Show Username + Log out if logged in, otherwise show Log in */}
          {user.isLoggedIn ? (
            <div className="flex items-center gap-3">
              <span className="text-velvety-mist normal-case">
                Hi, {user.username}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="bg-white text-velvety-green hover:bg-velvety-mist px-3.5 py-1.5 rounded-xs text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors"
              >
                Log out
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-white text-velvety-green hover:bg-velvety-mist px-3.5 py-1.5 rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Log in
            </NavLink>
          )}
        </nav>
      </Container>
    </header>
  )
}
