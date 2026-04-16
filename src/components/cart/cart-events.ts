export const CART_ITEM_ADDED_EVENT = "cart:item-added";

export type CartItemAddedDetail = {
  productId: number;
};

export function dispatchCartItemAdded(detail: CartItemAddedDetail) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent<CartItemAddedDetail>(CART_ITEM_ADDED_EVENT, {
      detail,
    }),
  );
}
