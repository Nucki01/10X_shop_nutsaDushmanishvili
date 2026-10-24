// src/types/product.ts
// Domain models for Products and Categories from DummyJSON API (PRD Section A1.5 & T2).
// Note for Defense: We use `interface` here because these describe object shapes
// returned by the API that could be extended or implemented by classes.

export interface Review {
  rating: number
  comment: string
  date: string
  reviewerName: string
}

export interface Product {
  id: number
  title: string
  description: string
  category: string
  brand?: string // Optional (`?`) because some DummyJSON products do not have a brand
  price: number
  discountPercentage: number
  rating: number
  stock: number
  thumbnail: string
  images: string[]
  reviews?: Review[]
}

// Shape of the response from GET https://dummyjson.com/products
export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Category {
  slug: string
  name: string
  url: string
}
