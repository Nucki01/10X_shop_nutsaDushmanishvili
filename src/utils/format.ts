// src/utils/format.ts
// Simple price formatting helper function (PRD Section T3).
// Formats a number into a Euro price string like "€2.45".

export function formatPrice(amount: number): string {
  return `€${amount.toFixed(2)}`
}
