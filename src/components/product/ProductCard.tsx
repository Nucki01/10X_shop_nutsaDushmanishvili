import { Link } from 'react-router-dom'
import type { Product } from '../../types/product'

// Props for ProductCard (CORE Step 8 & P2.3)
interface ProductCardProps {
  product: Product
}

// Reusable ProductCard Component
// Displays a single product's image, title, category, price, and link to details.
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
          className="w-full h-48 object-contain bg-stone-50 rounded-lg"
        />

        <div>
          <p className="text-xs text-stone-500 capitalize">{product.category}</p>
          <h2 className="font-semibold text-stone-900 line-clamp-1 hover:text-emerald-700">
            {product.title}
          </h2>
        </div>
      </Link>

      {/* Price and View Details link */}
      <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
        <span className="text-lg font-bold text-emerald-800">
          ${product.price.toFixed(2)}
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
