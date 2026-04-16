"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";
import { cartReducer, initialCartState } from "@/components/cart/cart-reducer";
import {
  readCartFromStorage,
  writeCartToStorage,
} from "@/components/cart/cart-storage";
import type { CartLine, CartState } from "@/types/cart";

type AddToCartInput = Omit<CartLine, "lineId" | "quantity"> & {
  quantity?: number;
};

type CartContextValue = {
  state: CartState;
  itemCount: number;
  subtotal: number;
  addToCart: (input: AddToCartInput) => void;
  removeFromCart: (lineId: string) => void;
  setQuantity: (lineId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    const stored = readCartFromStorage();
    if (stored) {
      dispatch({ type: "hydrate", payload: stored });
    }
  }, []);

  useEffect(() => {
    writeCartToStorage(state);
  }, [state]);

  const value = useMemo(() => {
    const itemCount = state.lines.reduce((acc, line) => acc + line.quantity, 0);
    const subtotal = state.lines.reduce(
      (acc, line) => acc + line.price * line.quantity,
      0,
    );

    return {
      state,
      itemCount,
      subtotal,
      addToCart: (input: AddToCartInput) =>
        dispatch({ type: "add", payload: input }),
      removeFromCart: (lineId: string) =>
        dispatch({ type: "remove", payload: { lineId } }),
      setQuantity: (lineId: string, quantity: number) =>
        dispatch({ type: "set_quantity", payload: { lineId, quantity } }),
      clearCart: () => dispatch({ type: "clear" }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
