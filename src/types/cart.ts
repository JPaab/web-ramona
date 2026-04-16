export type CartLine = {
  lineId: string;
  productId: number;
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

export type CartState = {
  lines: CartLine[];
};

export type CartAction =
  | { type: "hydrate"; payload: CartState }
  | {
      type: "add";
      payload: Omit<CartLine, "lineId" | "quantity"> & { quantity?: number };
    }
  | { type: "remove"; payload: { lineId: string } }
  | { type: "set_quantity"; payload: { lineId: string; quantity: number } }
  | { type: "clear" };
