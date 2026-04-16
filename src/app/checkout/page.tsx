"use client";

import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import { useCart } from "@/components/cart/CartProvider";

export default function CheckoutPage() {
  const { state, subtotal, itemCount } = useCart();

  const hasItems = state.lines.length > 0;

  return (
    <main className="bg-background px-6 pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn amount={0.08}>
          <section className="border-b border-border pb-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  CHECKOUT
                </p>

                <h1 className="mt-5 font-display text-[4.4rem] leading-[0.82] tracking-[0.01em] text-foreground sm:text-[5.6rem] lg:text-[7.2rem]">
                  ÚLTIMO
                  <br />
                  PASO
                  <br />
                  PARA PECAR.
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
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {hasItems ? (
          <section className="grid gap-12 pt-10 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn amount={0.1}>
              <div className="rounded-[2.4rem] border border-border bg-card p-6 shadow-sm md:p-8">
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  DATOS
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                  Esta sería la estructura real del flujo de compra.
                </p>

                <form className="mt-8 space-y-5">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                    >
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted focus:border-olive"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="tuemail@ejemplo.com"
                        className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted focus:border-olive"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefono"
                        className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                      >
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        placeholder="+34"
                        className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted focus:border-olive"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="entrega"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                    >
                      Entrega / recogida
                    </label>
                    <select
                      id="entrega"
                      defaultValue="Recogida"
                      className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 focus:border-olive"
                    >
                      <option>Recogida</option>
                      <option>Entrega local</option>
                      <option>Por definir</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="notas"
                      className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                    >
                      Notas del pedido
                    </label>
                    <textarea
                      id="notas"
                      rows={6}
                      placeholder="Fecha, detalle o cualquier indicación útil"
                      className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted focus:border-olive"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-full border border-border bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background opacity-80"
                    >
                      Pago próximamente
                    </button>
                  </div>
                </form>
              </div>
            </FadeIn>

            <FadeIn amount={0.12} delay={0.04}>
              <aside className="rounded-[2.4rem] border border-border bg-card p-6 shadow-sm md:p-8">
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  RESUMEN FINAL
                </p>

                <div className="mt-8 space-y-5 border-b border-border pb-6">
                  {state.lines.map((line) => (
                    <div
                      key={line.lineId}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-xl leading-[0.95] tracking-[0.03em] text-foreground">
                          {line.name}
                        </p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                          {line.quantity} × {line.price}€
                        </p>
                      </div>

                      <p className="font-display text-2xl leading-none tracking-[0.03em] text-foreground">
                        {line.price * line.quantity}€
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                      Importe actual
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Falta integrar SumUp/pago/validaciones finales.
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-display text-5xl leading-none tracking-[0.03em] text-foreground">
                      {subtotal}€
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href="/carrito"
                    className="inline-flex justify-center rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
                  >
                    Editar selección
                  </Link>

                  <Link
                    href="/productos"
                    className="inline-flex justify-center text-[11px] font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:text-foreground"
                  >
                    Seguir viendo piezas
                  </Link>
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
                    SIN SELECCIÓN
                  </p>
                </div>

                <div>
                  <h2 className="max-w-4xl text-3xl font-bold leading-tight text-foreground md:text-5xl md:leading-[1.02]">
                    No hay piezas en el checkout todavía.
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                    Vuelve al catálogo o al carrito y añade una selección antes
                    de continuar.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/productos"
                      className="inline-flex rounded-full border border-olive bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
                    >
                      Ver piezas
                    </Link>

                    <Link
                      href="/carrito"
                      className="inline-flex rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
                    >
                      Ir al carrito
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>
        )}
      </div>
    </main>
  );
}
