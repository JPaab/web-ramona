"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/components/cart/CartProvider";
import { dispatchCartItemAdded } from "@/components/cart/cart-events";
import type { Product } from "@/types/catalog";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [isAddedStateVisible, setIsAddedStateVisible] = useState(false);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    });

    dispatchCartItemAdded({ productId: product.id });

    setIsAddedStateVisible(true);

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = setTimeout(() => {
      setIsAddedStateVisible(false);
    }, 1600);
  };

  return (
    <motion.button
      type="button"
      onClick={handleAddToCart}
      disabled={isAddedStateVisible}
      whileTap={{ scale: 0.985 }}
      animate={
        isAddedStateVisible
          ? {
              y: [0, -2, 0],
              scale: [1, 1.01, 1],
            }
          : {
              y: 0,
              scale: 1,
            }
      }
      transition={{
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative inline-flex h-[50px] min-w-[220px] items-center justify-center overflow-hidden rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 disabled:pointer-events-none ${
        isAddedStateVisible
          ? "border-olive bg-background text-foreground"
          : "border-foreground bg-foreground text-background hover:border-olive hover:bg-olive"
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isAddedStateVisible ? (
          <motion.span
            key="added"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-5 w-5 items-center justify-center"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="20" r="1.4" />
                <circle cx="18" cy="20" r="1.4" />
                <path d="M3 4h2l2.1 10.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H7.2" />
              </svg>
            </span>
            <span>En carrito</span>
          </motion.span>
        ) : (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center"
          >
            Añadir al carrito
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
