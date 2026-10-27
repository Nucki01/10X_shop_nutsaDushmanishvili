# 10X Shop — Project Plan

**Author:** Nutsa Dushmanishvili  
**Repository:** `10x-shop-nutsa-dushmanishvili`  
**Design Reference:** Plantify E-Commerce UI Kit (Figma)  


## 1. Project Goal & Module Scope (CORE First Strategy)

The goal is to build **10X Shop**, a responsive Single Page Application (SPA) online store using **React 19, TypeScript (strict), Tailwind CSS v4, and React Router**, powered by the **DummyJSON API**.

following a **CORE FIRST** methodology: all mandatory CORE requirements across all 5 evaluation modules will be completed and deployed first before adding visual Figma polish and selected FULL features.

### Module 1: React
- ✅ **CORE Scope (Mandatory Priority) — DONE:** Functional components, `props` & `children`, `useState`/`useEffect`, `.map()` with stable `key`, React Router (`/`, `/login`, `/products/:id`, `/cart`, `/checkout`, `*`), `AuthContext`, `CartContext` (immutable updates), controlled Login & Checkout forms.
- ⏳ **Planned FULL Enhancements (Phase 2):** Search with `useDebounce`, Category filter (✅ Done), Sorting, Pagination, URL state (`useSearchParams`).

### Module 2: TypeScript
- ✅ **CORE Scope (Mandatory Priority) — DONE:** `"strict": true`, zero `any`, `npm run typecheck` = 0 errors, typed domain models (`Product`, `ProductsResponse`, `CartItem`, `AuthUser`, `ShippingInfo`), typed component props & API functions.
- ⏳ **Planned FULL Enhancements (Phase 2):** Discriminated unions (`AsyncState<T>`), utility types (`Pick`), type guards for `localStorage`.

### Module 3: Tailwind CSS
- ✅ **CORE Scope (Mandatory Priority) — DONE:** Tailwind CSS v4 via `@tailwindcss/vite`, `@import "tailwindcss"`, utility-first layout (Flex/Grid), mobile-first responsive design (`375px` to desktop), `hover:`, `focus:`, `disabled:` states.
- ⏳ **Planned FULL Enhancements (Phase 2):** Custom Plantify design tokens via `@theme` in `src/index.css`.

### Module 4: Optimization
- ✅ **CORE Scope (Mandatory Priority) — DONE:** Responsive layout without horizontal scroll on `375px`, `ErrorBoundary` class component, `DEBUG-LOG.md` (min 3 real bugs), lazy image attributes (`loading="lazy"`, `width`, `height`).
- ⏳ **Planned FULL Enhancements (Phase 2):** Route-level code splitting (`React.lazy` + `Suspense`), Lighthouse before/after comparison.

### Module 5: Practical Process
- ✅ **CORE Scope (Mandatory Priority) — DONE:** `PLAN.md` committed before feature work, meaningful daily Git commits, `README.md` (EN), `REPORT.md`, and `vercel.json` SPA rewrite configuration.
- ✅ **Planned FULL Enhancements (Phase 2) — IN PROGRESS:** Detailed daily progress tracking and clean modular commit history.

## 2. Work Breakdown Structure (WBS)

### ✅ Epic 1: Setup & Plan — DONE
- **Status:** ✅ Completed
- **Task Description:** Scaffold Vite + React 19 + TS (strict), configure Tailwind v4 & React Router, write `PLAN.md`.
- **Level:** CORE
- **Definition of Done (DoD):** `npm run typecheck`, `npm run lint`, and `npm run build` succeed with 0 errors; `PLAN.md` committed.

### ✅ Epic 2: Architecture & Layout — DONE
- **Status:** ✅ Completed
- **Task Description:** Create domain types (`src/types/`), shared `Layout`, `Header`, `Footer`, and route structure (`AppRoutes.tsx`).
- **Level:** CORE
- **Definition of Done (DoD):** All CORE routes render inside shared Layout without page reload; unknown URLs show 404 NotFound page.

### ✅ Epic 3: Auth & Login (P1) — DONE
- **Status:** ✅ Completed
- **Task Description:** Implement `AuthContext` (`login`/`logout`), controlled `/login` form with validation, and `ProtectedRoute` for `/checkout`.
- **Level:** CORE
- **Definition of Done (DoD):** Empty username/short password blocked with exact inline error messages; guest visiting `/checkout` redirects to `/login` and returns after login.

### ✅ Epic 4: Catalog (P2) — DONE
- **Status:** ✅ Completed
- **Task Description:** Load 12 realistic dm products (`DM_PRODUCTS`), category filtering (`Skincare`, `Hair Care`, `Body & Personal Care`), build `ProductGrid` and `ProductCard` with Euro price helpers.
- **Level:** CORE
- **Definition of Done (DoD):** 12 products render using `.map()` and `key={product.id}`; clicking card navigates to `/products/:id`.

### ✅ Epic 5: Cart Context & Product Details (P3) — DONE
- **Status:** ✅ Completed
- **Task Description:** Build `CartContext` (`addItem`, `removeItem`, `updateQuantity`, `clearCart` + `localStorage`), and build `/products/:id` page with image & quantity stepper.
- **Level:** CORE
- **Definition of Done (DoD):** `/products/1` shows details, Euro price, stock status; invalid ID shows NotFound; Add to Cart updates Header badge.

### ✅ Epic 6: Cart Page (P4) — DONE
- **Status:** ✅ Completed
- **Task Description:** Build `/cart` page with item list, quantity stepper (`1..stock`), item removal, clear cart, empty state, and subtotal/total calculation.
- **Level:** CORE
- **Definition of Done (DoD):** Changing quantity or removing items updates totals immediately without page reload; empty cart shows link back to catalog.

### ✅ Epic 7: Checkout (P5) — DONE
- **Status:** ✅ Completed
- **Task Description:** Build `/checkout` controlled form (`fullName`, `email`, `address`, `city`), validation, order summary, and local order confirmation screen.
- **Level:** CORE
- **Definition of Done (DoD):** Invalid fields show inline errors; valid submission displays `"Thank you! Your order has been placed."` with total and clears cart.

### ✅ Epic 8: CORE Quality & First Deploy — DONE
- **Status:** ✅ Completed (Ready for Vercel Live Link)
- **Task Description:** Add `ErrorBoundary`, document real bugs in `DEBUG-LOG.md`, verify `375px` responsive layout, configure `vercel.json` with SPA rewrite.
- **Level:** CORE
- **Definition of Done (DoD):** `ErrorBoundary`, `DEBUG-LOG.md`, and `vercel.json` completed; 0 horizontal scroll at `375px`.

### ⏳ Epic 9: Figma Styling (Plantify) — NEXT
- **Status:** ⏳ Next Up
- **Task Description:** Apply Plantify Figma theme (`@theme` colors, typography, cards, buttons) across Catalog, Product, Cart, Login, and Checkout.
- **Level:** CORE/FULL
- **Definition of Done (DoD):** UI matches Plantify aesthetic while preserving all CORE acceptance criteria and responsive breakpoints.

### ⏳ Epic 10: FULL Catalog Features — PLANNED
- **Status:** ⏳ Planned (Phase 2)
- **Task Description:** Add debounced search (`useDebounce`), category filter (✅ Done), sorting, pagination, and URL state (`useSearchParams`).
- **Level:** FULL
- **Definition of Done (DoD):** Search, category, sort, and page parameters sync with URL and product list.

### ⏳ Epic 11: Docs, QA & Defense Prep — IN PROGRESS
- **Status:** ✅ `README.md` & `REPORT.md` Done / ⏳ Final QA & Defense Prep Remaining
- **Task Description:** Complete `README.md`, `REPORT.md`, `COMPATIBILITY.md`, Lighthouse checks, Theory Quiz prep, and final submission.
- **Level:** CORE
- **Definition of Done (DoD):** All checks (`typecheck`, `lint`, `build`) pass with 0 errors; repo submitted before deadline.

## 3. Risks & Mitigation Plan

1. **Risk 1: DummyJSON API downtime or slow network response.**
   - *Impact:* Catalog or Product Details pages could fail or hang during testing or evaluation.
   - *Mitigation:* Implement explicit `loading` and `error` UI states with user-friendly messages and a Retry option so the app never crashes on network failures.

2. **Risk 2: Corrupted or invalid JSON data in `localStorage` (`shop_cart`).**
   - *Impact:* Calling `JSON.parse()` on malformed storage data can crash the entire React app on startup.
   - *Mitigation:* Wrap `localStorage` reads in `try/catch`, validate parsed data with a TypeScript type guard, and wrap the app in an `ErrorBoundary` fallback component.

3. **Risk 3: Running out of time before the deadline due to over-styling or complex optional features.**
   - *Impact:* Missing mandatory CORE features or failing `npm run typecheck`.
   - *Mitigation:* Strictly complete and deploy all CORE requirements before spending time on Figma visual polish or optional FULL features.

4. **Risk 4: Broken direct URL refresh (`/products/5`) after deploying to Vercel/Netlify.**
   - *Impact:* Evaluators refreshing a deep route receive a 404 from the hosting server.
   - *Mitigation:* Include `vercel.json` (or `_redirects`) with SPA rewrite rules (`"/(.*)" -> "/index.html"`) and verify direct route refresh immediately upon deployment.
