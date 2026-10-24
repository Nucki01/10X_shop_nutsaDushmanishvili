// src/types/product.ts
// TypeScript types for products coming from the DummyJSON API (CORE Step 3).

export interface Product {
  id: number
  title: string
  description: string
  category: string
  brand?: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  thumbnail: string
  images: string[]
}

// Type for the API response when fetching a list of products (GET /products)
export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}
