"use client";

import { useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import type { Product } from "@/types/catalog";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    });

    setJustAdded(true);

    window.setTimeout(() => {
      setJustAdded(false);
    }, 1400);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="inline-flex rounded-full border border-foreground bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
    >
      {justAdded ? "Añadido" : "Añadir al carrito"}
    </button>
  );
}
