# 10X Shop — Project Plan (PLAN.md)

**Author:** Nutsa Dushmanishvili  
**Repository:** `10x-shop-nutsa-dushmanishvili`  
**Design Reference:** Plantify E-Commerce UI Kit (Figma)  
**Deadline:** November 6, 2026 (23:59 GET)

---

## 1. Project Goal & Module Scope (CORE First Strategy)

The goal is to build **10X Shop**, a responsive Single Page Application (SPA) online store using **React 19, TypeScript (strict), Tailwind CSS v4, and React Router**, powered by the **DummyJSON API**.

We follow a strict **CORE FIRST** methodology: all mandatory CORE requirements across all 5 evaluation modules will be completed and deployed first before adding visual Figma polish and selected FULL features.

| Module | CORE Scope (Mandatory Priority) | Planned FULL Enhancements (Phase 2) |
| :--- | :--- | :--- |
| **React** | Functional components, `props` & `children`, `useState`/`useEffect`, `.map()` with stable `key`, React Router (`/`, `/login`, `/products/:id`, `/cart`, `/checkout`, `*`), `AuthContext`, `CartContext` (immutable updates), controlled Login & Checkout forms. | Search with `useDebounce`, Category filter, Sorting, Pagination, URL state (`useSearchParams`). |
| **TypeScript** | `"strict": true`, zero `any`, `npm run typecheck` = 0 errors, typed domain models (`Product`, `ProductsResponse`, `CartItem`, `AuthUser`, `ShippingInfo`), typed component props & API functions. | Discriminated unions (`AsyncState<T>`), utility types (`Pick`), type guards for `localStorage`. |
| **Tailwind CSS** | Tailwind CSS v4 via `@tailwindcss/vite`, `@import "tailwindcss"`, utility-first layout (Flex/Grid), mobile-first responsive design (`375px` to desktop), `hover:`, `focus:`, `disabled:` states. | Custom Plantify design tokens via `@theme` in `src/index.css`. |
| **Optimization** | Responsive layout without horizontal scroll on `375px`, `ErrorBoundary` class component, `DEBUG-LOG.md` (min 3 real bugs), lazy image attributes (`loading="lazy"`, `width`, `height`). | Route-level code splitting (`React.lazy` + `Suspense`), Lighthouse before/after comparison. |
| **Practical Process** | `PLAN.md` committed before feature work, meaningful daily Git commits, `README.md` (EN), `REPORT.md`, and live SPA deployment on Vercel/Netlify. | Detailed daily progress tracking and clean modular commit history. |

---

## 2. Work Breakdown Structure (WBS) & Timeline

| Epic | Task Description | Level | Est. Hours | Target Dates | Definition of Done (DoD) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **1. Setup & Plan** | Scaffold Vite + React 19 + TS (strict), configure Tailwind v4 & React Router, write `PLAN.md`. | CORE | 2h | Oct 24 (Day 1) | `npm run typecheck`, `npm run lint`, and `npm run build` succeed with 0 errors; `PLAN.md` committed. |
| **2. Architecture & Layout** | Create domain types (`src/types/`), shared `Layout`, `Header`, `Footer`, `ScrollToTop`, and route structure (`AppRoutes.tsx`). | CORE | 3h | Oct 25 (Day 2) | All CORE routes render inside shared Layout without page reload; unknown URLs show 404 NotFound page. |
| **3. Auth & Login (P1)** | Implement `AuthContext` (`login`/`logout`), controlled `/login` form with validation, and `ProtectedRoute` for `/checkout`. | CORE | 3h | Oct 26 (Day 3) | Empty username/short password blocked with exact inline error messages; guest visiting `/checkout` redirects to `/login` and returns after login. |
| **4. Catalog (P2)** | Fetch `GET /products?limit=12&skip=0`, handle loading/error/empty states, build `ProductGrid` and `ProductCard` with price helpers. | CORE | 4h | Oct 27 (Day 4) | 12 products render from DummyJSON using `.map()` and `key={product.id}`; clicking card navigates to `/products/:id`. |
| **5. Cart Context & Product Details (P3)** | Build `CartContext` (`addItem`, `removeItem`, `updateQuantity`, `clearCart` + `localStorage`), and build `/products/:id` page with gallery & quantity stepper. | CORE | 4h | Oct 28 (Day 5) | `/products/1` shows details, discounted price, stock status; invalid ID shows NotFound; Add to Cart updates Header badge. |
| **6. Cart Page (P4)** | Build `/cart` page with item list, quantity stepper (`1..stock`), item removal, clear cart, empty state, and subtotal/total calculation. | CORE | 3h | Oct 29 (Day 6) | Changing quantity or removing items updates totals immediately without page reload; empty cart shows link back to catalog. |
| **7. Checkout (P5)** | Build `/checkout` controlled form (`fullName`, `email`, `address`, `city`), validation, order summary, and local order confirmation screen. | CORE | 3h | Oct 30 (Day 7) | Invalid fields show inline errors; valid submission displays `"Thank you! Your order has been placed."` with total and clears cart. |
| **8. CORE Quality & First Deploy** | Add `ErrorBoundary`, document real bugs in `DEBUG-LOG.md`, verify `375px` responsive layout, deploy to Vercel with SPA rewrite. | CORE | 3h | Oct 31 (Day 8) | Live URL works; refreshing `/products/5` on live URL works; 0 horizontal scroll at `375px`. |
| **9. Figma Styling (Plantify)** | Apply Plantify Figma theme (`@theme` colors, typography, cards, buttons) across Catalog, Product, Cart, Login, and Checkout. | CORE/FULL | 5h | Nov 1–2 (Days 9–10) | UI matches Plantify aesthetic while preserving all CORE acceptance criteria and responsive breakpoints. |
| **10. FULL Catalog Features** | Add debounced search (`useDebounce`), category filter, sorting, pagination, and URL state (`useSearchParams`). | FULL | 4h | Nov 3 (Day 11) | Search, category, sort, and page parameters sync with URL and DummyJSON endpoints. |
| **11. Docs, QA & Defense Prep** | Complete `README.md`, `REPORT.md`, `COMPATIBILITY.md`, Lighthouse checks, Theory Quiz prep (Nov 5), and final submission. | CORE | 4h | Nov 4–6 (Days 12–14) | All checks (`typecheck`, `lint`, `build`) pass with 0 errors; repo submitted before Nov 6, 23:59. |

---

## 3. Risks & Mitigation Plan

1. **Risk 1: DummyJSON API downtime or slow network response.**
   - *Impact:* Catalog or Product Details pages could fail or hang during testing or evaluation.
   - *Mitigation:* Implement explicit `loading` and `error` UI states with user-friendly messages and a Retry option so the app never crashes on network failures.
2. **Risk 2: Corrupted or invalid JSON data in `localStorage` (`shop_cart`).**
   - *Impact:* Calling `JSON.parse()` on malformed storage data can crash the entire React app on startup.
   - *Mitigation:* Wrap `localStorage` reads in `try/catch`, validate parsed data with a TypeScript type guard, and wrap the app in an `ErrorBoundary` fallback component.
3. **Risk 3: Running out of time before the November 6 deadline due to over-styling or complex optional features.**
   - *Impact:* Missing mandatory CORE features or failing `npm run typecheck`.
   - *Mitigation:* Strictly complete and deploy all CORE requirements by Day 8 (October 31) before spending time on Figma visual polish or optional FULL features.
4. **Risk 4: Broken direct URL refresh (`/products/5`) after deploying to Vercel/Netlify.**
   - *Impact:* Evaluators refreshing a deep route receive a 404 from the hosting server.
   - *Mitigation:* Include `vercel.json` (or `_redirects`) with SPA rewrite rules (`"/(.*)" -> "/index.html"`) and verify direct route refresh immediately on Day 8.
