import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGroup from "@/components/motion/StaggerGroup";
import StaggerItem from "@/components/motion/StaggerItem";

export default function ProductosPage() {
  return (
    <main className="bg-background px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-10 lg:p-12">
              <div className="absolute right-4 top-5 rotate-[4deg] rounded-full border border-border bg-foreground px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm md:right-8">
                NO HAY RELLENO
              </div>

              <p className="font-display text-2xl tracking-[0.08em] text-olive">
                CATÁLOGO
              </p>

              <h1 className="mt-5 font-display text-6xl leading-[0.92] tracking-[0.01em] text-foreground sm:text-7xl lg:text-[8rem]">
                COSAS QUE
                <br />
                ENTRAN
                <br />
                FUERTE
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                condimentum odio senectus faucibus habitasse, arcu class orci
                aliquam a blandit.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2.5rem] bg-foreground p-8 text-white shadow-sm md:p-10">
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  SELECCIÓN
                </p>

                <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-[0.01em] sm:text-5xl">
                  AQUÍ NO
                  <br />
                  HAY NADA
                  <br />
                  TÍMIDO
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rotate-[-2deg] rounded-[2rem] border border-border bg-background p-5 shadow-sm">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    {products.length} PIEZAS
                  </p>
                  <p className="mt-3 max-w-[18rem] text-lg font-bold leading-tight text-foreground">
                    Una primera selección con bastante carácter.
                  </p>
                </div>

                <div className="translate-y-3 rotate-[2deg] rounded-[2rem] border border-border bg-card p-5 shadow-sm">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    PERSONALIZABLE
                  </p>
                  <p className="mt-3 max-w-[18rem] text-lg font-bold leading-tight text-foreground">
                    Adaptable, sí. Genérico, no.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="mt-10">
          <FadeIn>
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  PRODUCTOS
                </p>
                <h2 className="mt-2 text-3xl font-bold text-foreground">
                  Lo que tenemos ahora mismo
                </h2>
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
                JPAAB
              </p>
            </div>
          </FadeIn>

          <StaggerGroup className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {products.map((product, index) => (
              <StaggerItem
                key={product.id}
                className={index % 2 === 1 ? "xl:translate-y-6" : ""}
              >
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </div>
    </main>
  );
}
