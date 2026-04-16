import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGroup from "@/components/motion/StaggerGroup";
import StaggerItem from "@/components/motion/StaggerItem";

export default function ProductosPage() {
  return (
    <main className="bg-background px-6 pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <section className="border-b border-border pb-10">
          <FadeIn amount={0.08}>
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
              <div>
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  SELECCIÓN
                </p>

                <h1 className="mt-5 font-display text-[4.5rem] leading-[0.82] tracking-[0.01em] text-foreground sm:text-[5.8rem] lg:text-[8rem]">
                  PIEZAS
                  <br />
                  QUE
                  <br />
                  ENTRAN
                  <br />
                  FUERTE.
                </h1>
              </div>

              <div className="lg:pt-8">
                <p className="max-w-md text-lg leading-8 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  faucibus orci penatibus, odio conubia litora bibendum metus.
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className="font-display text-3xl leading-none tracking-[0.05em] text-foreground">
                      {products.length} PIEZAS
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      faucibus orci penatibus.
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-3xl leading-none tracking-[0.05em] text-foreground">
                      A MEDIDA
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      faucibus orci penatibus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="pt-10">
          <FadeIn amount={0.1} delay={0.02}>
            <div className="mb-10 grid gap-6 border-b border-border pb-6 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  OBRA DISPONIBLE
                </p>
                <h2 className="mt-2 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                  Una selección de piezas con presencia propia.
                </h2>
              </div>
            </div>
          </FadeIn>

          <StaggerGroup
            className="grid gap-x-8 gap-y-14 md:grid-cols-2"
            amount={0.08}
            stagger={0.08}
            baseDelay={0.04}
          >
            {products.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      </div>
    </main>
  );
}
