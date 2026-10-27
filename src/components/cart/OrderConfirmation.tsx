import { Link } from 'react-router-dom'
import type { ShippingInfo } from '../../types/order'
import { formatPrice } from '../../utils/format'

// Props passed from CheckoutPage after a valid order is submitted
interface OrderConfirmationProps {
  shipping: ShippingInfo
  total: number
}

// OrderConfirmation Component (PRD Step 15 & Section P5.3)
// Displays "Thank you! Your order has been placed." along with the shipping info and total.
export function OrderConfirmation({ shipping, total }: OrderConfirmationProps) {
  return (
    <section className="max-w-lg mx-auto my-8 bg-white border border-stone-200 rounded-xl p-8 text-center space-y-4">
      <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
        ✓
      </div>

      <h1 className="text-2xl font-bold text-stone-900">
        Thank you! Your order has been placed.
      </h1>

      <p className="text-sm text-stone-600">
        Confirmation for <strong>{shipping.fullName}</strong> ({shipping.email})
      </p>

      <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 text-sm text-left space-y-2">
        <div className="flex justify-between">
          <span className="text-stone-500">Delivery address:</span>
          <span className="font-medium text-stone-900">
            {shipping.address}, {shipping.city}
          </span>
        </div>
        <div className="flex justify-between border-t border-stone-200 pt-2">
          <span className="font-bold text-stone-900">Order Total:</span>
          <span className="font-bold text-emerald-800">{formatPrice(total)}</span>
        </div>
      </div>

      <Link
        to="/"
        className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-2.5 rounded-lg text-sm"
      >
        Continue shopping
      </Link>
    </section>
  )
}
