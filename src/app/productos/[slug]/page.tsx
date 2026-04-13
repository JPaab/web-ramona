import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import FadeIn from "@/components/motion/FadeIn";
import StaggerGroup from "@/components/motion/StaggerGroup";
import StaggerItem from "@/components/motion/StaggerItem";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-background px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="mb-8">
            <Link
              href="/productos"
              className="text-sm font-semibold uppercase tracking-[0.08em] text-olive transition duration-200 hover:text-olive-dark"
            >
              ← Volver a productos
            </Link>
          </div>
        </FadeIn>

        <FadeIn>
          <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="relative self-start overflow-hidden rounded-[2.5rem] border border-border bg-background shadow-sm">
              <div className="absolute left-4 top-4 z-10 -rotate-[4deg] rounded-full border border-border bg-background px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm">
                JPAAB
              </div>

              <div className="aspect-[4/3.9] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="grid gap-6">
              <div className="relative rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-10">
                <div className="absolute right-4 top-5 rotate-[4deg] rounded-full border border-border bg-foreground px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
                  HECHO CON CARÁCTER
                </div>

                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  PRODUCTO
                </p>

                <h1 className="mt-5 font-display text-5xl leading-[0.92] tracking-[0.01em] text-foreground sm:text-6xl">
                  {product.name}
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                  {product.description}
                </p>

                <div className="mt-8 flex items-end justify-between gap-6 border-t border-border pt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Precio
                    </p>
                    <p className="mt-2 font-display text-5xl leading-none tracking-[0.03em] text-foreground">
                      {product.price}€
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      Disponible
                    </p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-olive">
                      Bajo encargo
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button className="-rotate-[1deg] rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:shadow-md">
                    Añadir al carrito
                  </button>

                  <Link
                    href="/contacto"
                    className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive hover:shadow-md"
                  >
                    Quiero este encargo
                  </Link>
                </div>
              </div>

              <StaggerGroup className="grid gap-4 sm:grid-cols-2">
                <StaggerItem>
                  <div className="rounded-[2rem] border border-border bg-background p-5 shadow-sm">
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      ELABORACIÓN
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit,
                      montes condimentum odio senectus faucibus habitasse, arcu
                      class orci aliquam a blandit.
                    </p>
                  </div>
                </StaggerItem>

                <StaggerItem className="sm:translate-y-3">
                  <div className="rounded-[2rem] border border-border bg-card p-5 shadow-sm">
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      PERSONALIZACIÓN
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit,
                      montes condimentum odio senectus faucibus habitasse, arcu
                      class orci aliquam a blandit.
                    </p>
                  </div>
                </StaggerItem>
              </StaggerGroup>
            </div>
          </section>
        </FadeIn>

        <section className="mt-10">
          <StaggerGroup className="grid gap-6 md:grid-cols-3">
            <StaggerItem>
              <div className="min-h-[180px] rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  PRESENCIA
                </p>
                <p className="mt-3 text-lg font-bold leading-tight text-foreground">
                  Cada producto tiene que entrar fuerte antes del primer bocado.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem className="md:translate-y-2">
              <div className="min-h-[180px] rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  SABOR
                </p>
                <p className="mt-3 text-lg font-bold leading-tight text-foreground">
                  Lo visual importa, pero nunca por encima de lo que pasa al
                  probarlo.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="min-h-[180px] rounded-[2rem] border border-border bg-foreground p-6 text-white shadow-sm">
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  LA RAMONA
                </p>
                <p className="mt-3 text-lg font-bold leading-tight text-white">
                  No va de quedar bien. Va de que se acuerden.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </section>
      </div>
    </main>
  );
}
