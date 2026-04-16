"use client";

import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { useCart } from "@/components/cart/CartProvider";

export default function CarritoPage() {
  const { state, subtotal, itemCount, removeFromCart, setQuantity, clearCart } =
    useCart();

  const hasItems = state.lines.length > 0;

  return (
    <main className="bg-background px-6 pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn amount={0.08}>
          <section className="border-b border-border pb-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  CARRITO
                </p>

                <h1 className="mt-5 font-display text-[4.4rem] leading-[0.82] tracking-[0.01em] text-foreground sm:text-[5.6rem] lg:text-[7.2rem]">
                  TU
                  <br />
                  SELECCIÓN.
                </h1>
              </div>

              <div className="lg:pt-8">
                <p className="max-w-md text-lg leading-8 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mauris
                  nascetur commodo fringilla, viverra interdum pharetra magnis
                  sociosqu blandit molestie lacinia mattis metus.
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="font-display text-3xl leading-none tracking-[0.05em] text-foreground">
                      {itemCount} {itemCount === 1 ? "PIEZA" : "PIEZAS"}
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                      Una selección corta, clara y preparada para pasar al
                      siguiente paso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {hasItems ? (
          <section className="grid gap-12 pt-10 lg:grid-cols-[1.18fr_0.82fr]">
            <FadeIn amount={0.1}>
              <div className="space-y-6">
                {state.lines.map((line) => (
                  <article
                    key={line.lineId}
                    className="grid gap-5 border-b border-border pb-6 sm:grid-cols-[160px_1fr]"
                  >
                    <Link
                      href={`/productos/${line.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[4/4.8] overflow-hidden rounded-[1.8rem] bg-card">
                        <img
                          src={line.image}
                          alt={line.name}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </Link>

                    <div className="flex flex-col justify-between gap-6">
                      <div>
                        <div className="flex items-start justify-between gap-6">
                          <p className="font-display text-base tracking-[0.08em] text-olive">
                            PIEZA
                          </p>

                          <button
                            type="button"
                            onClick={() => removeFromCart(line.lineId)}
                            aria-label={`Eliminar ${line.name} del carrito`}
                            className="group inline-flex h-10 items-center gap-2 rounded-full border border-border bg-card px-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-foreground transition duration-200 hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background"
                          >
                            <span className="text-base leading-none transition duration-200 group-hover:rotate-90">
                              ×
                            </span>
                            <span>Eliminar</span>
                          </button>
                        </div>

                        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h2 className="max-w-[20rem] font-display text-3xl leading-[0.92] tracking-[0.02em] text-foreground">
                              {line.name}
                            </h2>

                            <Link
                              href={`/productos/${line.slug}`}
                              className="mt-3 inline-flex text-sm font-semibold uppercase tracking-[0.08em] text-muted transition duration-200 hover:text-foreground"
                            >
                              Ver pieza
                            </Link>
                          </div>

                          <div className="text-right">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                              Unidad
                            </p>
                            <p className="mt-2 font-display text-3xl leading-none tracking-[0.03em] text-foreground">
                              {line.price}€
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-end justify-between gap-5">
                        <div className="inline-flex items-center rounded-full border border-border bg-card p-1">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(line.lineId, line.quantity - 1)
                            }
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition duration-200 hover:bg-background"
                            aria-label={`Restar una unidad de ${line.name}`}
                          >
                            −
                          </button>

                          <span className="min-w-10 text-center text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
                            {line.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              setQuantity(line.lineId, line.quantity + 1)
                            }
                            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground transition duration-200 hover:bg-background"
                            aria-label={`Sumar una unidad de ${line.name}`}
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                            Subtotal
                          </p>
                          <p className="mt-2 font-display text-4xl leading-none tracking-[0.03em] text-foreground">
                            {line.price * line.quantity}€
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </FadeIn>

            <FadeIn amount={0.12} delay={0.04}>
              <aside className="h-fit rounded-[2.4rem] border border-border bg-card p-6 shadow-sm md:p-8">
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  RESUMEN
                </p>

                <div className="mt-8 space-y-4 border-b border-border pb-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">
                      Piezas
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.08em] text-foreground">
                      {itemCount}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">
                      Subtotal
                    </span>
                    <span className="font-display text-3xl leading-none tracking-[0.03em] text-foreground">
                      {subtotal}€
                    </span>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-muted">
                  Aun falta implementar el checkout y la integración de pago
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/checkout"
                    className="inline-flex justify-center rounded-full border border-olive bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
                  >
                    Pago Seguro
                  </Link>

                  <Link
                    href="/productos"
                    className="inline-flex justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
                  >
                    Seguir viendo piezas
                  </Link>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="mt-2 inline-flex justify-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:text-foreground"
                  >
                    Vaciar carrito
                  </button>
                </div>
              </aside>
            </FadeIn>
          </section>
        ) : (
          <section className="pt-10">
            <FadeIn amount={0.1}>
              <div className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    TODAVÍA VACÍO
                  </p>
                </div>

                <div>
                  <h2 className="max-w-4xl text-3xl font-bold leading-tight text-foreground md:text-5xl md:leading-[1.02]">
                    Aún no has añadido ninguna pieza al carrito.
                  </h2>
                  <Link
                    href="/productos"
                    className="mt-8 inline-flex rounded-full border border-olive bg-backgroud px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
                  >
                    Volver atrás
                  </Link>
                </div>
              </div>
            </FadeIn>
          </section>
        )}
      </div>
    </main>
  );
}
