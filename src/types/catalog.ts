export type ProductCategory =
  | "tartas"
  | "cupcakes"
  | "cheesecakes"
  | "mesas-dulces"
  | "cookies"
  | "personalizados";

export type ProductAvailability = "in_stock" | "made_to_order" | "sold_out";

export type ProductPurchaseMode = "cart" | "enquiry";

export type Product = {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: ProductCategory;
  availability: ProductAvailability;
  purchaseMode: ProductPurchaseMode;
  featured?: boolean;
};
