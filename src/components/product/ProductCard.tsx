import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'

// Props for ProductCard
interface ProductCardProps {
  product: Product
}

// Reusable ProductCard Component
// Displays a dm product's picture, category, name, short description, and price in Euros (€).
export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col justify-between">
      {/* Clicking the image or title opens the Product Details page (/products/:id) */}
      <Link to={`/products/${product.id}`} className="block space-y-3">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          width={300}
          height={300}
          className="w-full h-48 object-cover bg-stone-100 rounded-lg"
        />

        <div className="space-y-1">
          <span className="inline-block text-xs font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md">
            {product.category}
          </span>
          <h2 className="font-semibold text-stone-900 hover:text-emerald-700">
            {product.title}
          </h2>
          <p className="text-xs text-stone-600 line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>

      {/* Price in Euros (€) and View Details button */}
      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
        <span className="text-lg font-bold text-emerald-800">
          €{product.price.toFixed(2)}
        </span>

        <Link
          to={`/products/${product.id}`}
          className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium px-3 py-2 rounded-lg"
        >
          View details
        </Link>
      </div>
    </div>
  )
}
