// Main Application Component (Day 1 Foundation)
// Currently renders a Tailwind CSS v4 styled header and welcome banner
// to verify that Vite, React 19, TypeScript, and Tailwind v4 work together.
export function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      {/* Top Navigation Header styled with Tailwind v4 utilities */}
      <header className="bg-emerald-800 text-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">10X Shop</span>
          <nav className="flex items-center gap-6 text-sm font-medium">
            <span className="text-emerald-200">Catalog</span>
            <span className="hover:text-emerald-200 transition-colors cursor-pointer">
              Cart (0)
            </span>
            <span className="bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 rounded-md transition-colors cursor-pointer">
              Log in
            </span>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-12">
        <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-xs">
          <h1 className="text-2xl md:text-3xl font-bold text-emerald-950 mb-2">
            Welcome to 10X Shop
          </h1>
          <p className="text-stone-600">
            Day 1 foundation is ready: Vite + React 19 + Strict TypeScript + Tailwind CSS v4.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
