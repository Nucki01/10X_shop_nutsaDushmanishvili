import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ScrollToTop Component (PRD Requirement P0.1)
// Automatically scrolls the browser window back to the top (0, 0) whenever
// the URL pathname changes. Without this, navigating in a Single Page App (SPA)
// keeps the previous page's scroll position.
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]) // Dependency array: runs only when `pathname` changes

  return null
}
