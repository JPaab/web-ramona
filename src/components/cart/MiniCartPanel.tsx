"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useCart } from "@/components/cart/CartProvider";

type MiniCartPanelProps = {
  onNavigate?: () => void;
};

export default function MiniCartPanel({ onNavigate }: MiniCartPanelProps) {
  const { state, subtotal, itemCount } = useCart();

  const linesToShow = [...state.lines].slice(-3).reverse();
  const hiddenCount = state.lines.length - linesToShow.length;
  const hasItems = state.lines.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-0 top-full z-50 mt-7.5 w-[360px] max-w-[calc(100vw-2rem)] rounded-[2rem] border border-border bg-background/95 p-4 shadow-sm backdrop-blur-xl"
    >
      <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
        <div>
          <p className="font-display text-xl tracking-[0.08em] text-olive">
            TU SELECCIÓN
          </p>
          <p className="mt-1 text-sm leading-6 text-muted">
            {itemCount} {itemCount === 1 ? "pieza" : "piezas"} en el carrito
          </p>
        </div>

        {hasItems ? (
          <p className="font-display text-3xl leading-none tracking-[0.03em] text-foreground">
            {subtotal}€
          </p>
        ) : null}
      </div>

      {hasItems ? (
        <>
          <div className="mt-4 space-y-3">
            {linesToShow.map((line) => (
              <Link
                key={line.lineId}
                href={`/productos/${line.slug}`}
                onClick={onNavigate}
                className="group grid grid-cols-[72px_1fr] gap-4 rounded-[1.4rem] border border-transparent p-2 transition duration-200 hover:border-border hover:bg-card"
              >
                <div className="aspect-[4/4.8] overflow-hidden rounded-[1rem] bg-card">
                  <img
                    src={line.image}
                    alt={line.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="min-w-0">
                  <p className="font-display text-lg leading-[0.92] tracking-[0.03em] text-foreground">
                    {line.name}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                      {line.quantity} × {line.price}€
                    </p>

                    <p className="font-display text-xl leading-none tracking-[0.03em] text-foreground">
                      {line.quantity * line.price}€
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {hiddenCount > 0 ? (
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-muted">
              + {hiddenCount} {hiddenCount === 1 ? "pieza más" : "piezas más"}{" "}
              en tu selección
            </p>
          ) : null}

          <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4">
            <Link
              href="/carrito"
              onClick={onNavigate}
              className="inline-flex justify-center rounded-full border border-olive bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
            >
              Ver selección
            </Link>

            <Link
              href="/productos"
              onClick={onNavigate}
              className="inline-flex justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
            >
              Seguir viendo piezas
            </Link>
          </div>
        </>
      ) : (
        <div className="mt-4">
          <p className="max-w-xs text-sm leading-7 text-muted">
            Todavía no has añadido ninguna pieza. Empieza por las que ya
            permiten compra directa.
          </p>

          <Link
            href="/productos"
            onClick={onNavigate}
            className="mt-5 inline-flex rounded-full border border-olive bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
          >
            Ver piezas
          </Link>
        </div>
      )}
    </motion.div>
  );
}
