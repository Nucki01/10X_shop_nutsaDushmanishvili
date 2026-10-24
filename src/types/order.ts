// src/types/order.ts
// Domain models for CORE Checkout form and local Order confirmation (PRD Section A1.5 & P5).

import type { CartItem } from './cart'

// The 4 required controlled fields in CORE Checkout (PRD P5.2)
export interface ShippingInfo {
  fullName: string
  email: string
  address: string
  city: string
}

// Local order confirmation summary shown after clicking "Place order" (PRD P5.3)
export interface OrderSummary {
  id: number
  items: CartItem[]
  shipping: ShippingInfo
  total: number
  placedAt: string
}
