// src/types/cart.ts
// Domain models for Shopping Cart items and state (PRD Section A1.5 & P4).

export interface CartItem {
  productId: number
  title: string
  thumbnail: string
  price: number
  discountPercentage: number
  stock: number
  quantity: number
}

export interface CartState {
  items: CartItem[]
  promoCode?: string | null
}
