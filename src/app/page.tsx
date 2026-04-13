import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGroup from "@/components/motion/StaggerGroup";
import StaggerItem from "@/components/motion/StaggerItem";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      <section className="bg-background px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-10 lg:p-12">
                <div className="absolute -right-3 top-6 -rotate-6 rounded-full border border-border bg-foreground px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-sm md:-right-6">
                  NO ES LA TÍPICA
                </div>

                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  JPaab
                </p>

                <h1 className="mt-6 font-display text-7xl leading-[0.9] tracking-[0.01em] text-foreground sm:text-8xl lg:text-[9rem]">
                  DULCES
                  <br />
                  CON
                  <br />
                  CARÁCTER
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/productos"
                    className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive hover:shadow-md"
                  >
                    Ver la selección
                  </Link>

                  <Link
                    href="/contacto"
                    className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive hover:shadow-md"
                  >
                    Quiero un encargo
                  </Link>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-border bg-background p-5">
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      NADA DE LO TÍPICO
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit,
                      montes condimentum odio senectus faucibus habitasse, arcu
                      class orci aliquam a blandit.
                    </p>
                  </div>

                  <div className="translate-y-3 rounded-[1.75rem] border border-border bg-background p-5">
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      SABOR + PRESENCIA
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit,
                      montes condimentum odio senectus faucibus habitasse, arcu
                      class orci aliquam a blandit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6">
                <div className="rounded-[2.5rem] bg-foreground p-8 text-white shadow-sm md:p-10">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    MANIFIESTO
                  </p>

                  <h2 className="mt-4 font-display text-5xl leading-[0.92] tracking-[0.01em] sm:text-6xl">
                    NO HACEMOS
                    <br />
                    ALGO MONO.
                    <br />
                    HACEMOS ALGO
                    <br />
                    QUE SE
                    <br />
                    RECUERDE.
                  </h2>

                  <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit,
                    montes condimentum odio senectus faucibus habitasse, arcu
                    class orci aliquam a blandit.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="-rotate-2 rounded-[2rem] border border-border bg-background p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      PERSONALIZABLE
                    </p>
                    <p className="mt-3 max-w-[18rem] text-lg font-bold leading-tight text-foreground">
                      Hecho a tu manera, sin perder carácter.
                    </p>
                  </div>

                  <div className="translate-y-3 rotate-2 rounded-[2rem] border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      CON PRESENCIA
                    </p>
                    <p className="mt-3 max-w-[18rem] text-lg font-bold leading-tight text-foreground">
                      Bonito, sí. Pero con intención.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-background px-6 py-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <StaggerGroup className="grid gap-8 md:grid-cols-3">
            <StaggerItem>
              <article className="min-h-[220px] rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  NADA PLANO
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground">
                  Cada encargo tiene que tener algo que decir.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem className="md:translate-y-2">
              <article className="min-h-[220px] rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  HECHO A MEDIDA
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground">
                  Adaptamos la idea sin volverla genérica.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="min-h-[220px] rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  REMATE FINAL
                </p>
                <h2 className="mt-3 text-2xl font-bold text-foreground">
                  Si se ve increíble, tiene que saber mejor todavía.
                </h2>
                <p className="mt-4 text-sm leading-6 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>
              </article>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <section className="bg-background px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  SELECCIÓN DESTACADA
                </p>
                <h2 className="mt-2 text-3xl font-bold text-foreground">
                  Algunos de nuestros favoritos
                </h2>
              </div>

              <Link
                href="/productos"
                className="text-sm font-semibold text-olive transition duration-200 hover:text-olive-dark"
              >
                Ver todo el catálogo
              </Link>
            </div>
          </FadeIn>

          <StaggerGroup className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>
    </main>
  );
}
