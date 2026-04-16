import type { CartAction, CartState } from "@/types/cart";

export const initialCartState: CartState = {
  lines: [],
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return action.payload;

    case "add": {
      const quantityToAdd = action.payload.quantity ?? 1;

      const existingLine = state.lines.find(
        (line) => line.productId === action.payload.productId,
      );

      if (existingLine) {
        return {
          lines: state.lines.map((line) =>
            line.productId === action.payload.productId
              ? { ...line, quantity: line.quantity + quantityToAdd }
              : line,
          ),
        };
      }

      return {
        lines: [
          ...state.lines,
          {
            lineId: `${action.payload.productId}`,
            productId: action.payload.productId,
            slug: action.payload.slug,
            name: action.payload.name,
            image: action.payload.image,
            price: action.payload.price,
            quantity: quantityToAdd,
          },
        ],
      };
    }

    case "remove":
      return {
        lines: state.lines.filter(
          (line) => line.lineId !== action.payload.lineId,
        ),
      };

    case "set_quantity":
      return {
        lines: state.lines
          .map((line) =>
            line.lineId === action.payload.lineId
              ? {
                  ...line,
                  quantity: Math.max(1, action.payload.quantity),
                }
              : line,
          )
          .filter((line) => line.quantity > 0),
      };

    case "clear":
      return {
        lines: [],
      };

    default:
      return state;
  }
}
