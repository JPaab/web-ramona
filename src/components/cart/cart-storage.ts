import type { CartState } from "@/types/cart";

const CART_STORAGE_KEY = "la-ramona-cart-v1";

export function readCartFromStorage(): CartState | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CartState;

    if (!parsed || !Array.isArray(parsed.lines)) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function writeCartToStorage(state: CartState) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // noop
  }
}
