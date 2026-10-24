// src/types/api.ts
// Generic union type for representing asynchronous API fetch states (PRD Section A1.5 & T2).
// Note for Defense: We use `type` (not `interface`) here because `AsyncState<T>` is a
// discriminated union (`|` means "one of these variants"), which interfaces cannot express.
// `<T>` is a Generic type parameter — it lets us reuse this same type for `AsyncState<Product>`
// or `AsyncState<ProductsResponse>`.

export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string }
