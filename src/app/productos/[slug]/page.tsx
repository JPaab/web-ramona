import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import FadeIn from "@/components/motion/FadeIn";
import AddToCartButton from "@/components/cart/AddToCartButton";

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

  const isCartProduct = product.purchaseMode === "cart";
  const isEnquiryProduct = product.purchaseMode === "enquiry";

  return (
    <main className="bg-background px-6 pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn amount={0.08}>
          <div className="mb-8">
            <Link
              href="/productos"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-olive transition duration-200 hover:text-olive-dark"
            >
              <span>←</span>
              <span>Volver a piezas</span>
            </Link>
          </div>
        </FadeIn>

        <FadeIn amount={0.08} delay={0.02}>
          <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="relative">
              <div className="absolute left-4 top-4 z-10 rotate-[-4deg] rounded-full border border-border bg-background/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
                JPAAB
              </div>

              <div className="overflow-hidden rounded-[2.6rem] bg-card">
                <div className="aspect-[4/4.7] overflow-hidden bg-background">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:pt-2">
              <p className="font-display text-2xl tracking-[0.08em] text-olive">
                PIEZA
              </p>

              <h1 className="mt-4 font-display text-6xl leading-[0.86] tracking-[0.01em] text-foreground sm:text-7xl">
                {product.name}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                {product.description}
              </p>

              <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Precio
                  </p>
                  <p className="mt-2 font-display text-6xl leading-none tracking-[0.03em] text-foreground">
                    {product.price}€
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Estado
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-olive">
                    {product.availability === "in_stock"
                      ? "Disponible"
                      : product.availability === "made_to_order"
                        ? "Bajo encargo"
                        : "Agotado"}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {isCartProduct ? (
                  <>
                    <AddToCartButton product={product} />

                    <Link
                      href="/contacto"
                      className="inline-flex rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
                    >
                      Consultar esta pieza
                    </Link>
                  </>
                ) : null}

                {isEnquiryProduct ? (
                  <>
                    <Link
                      href="/contacto"
                      className="inline-flex rounded-full border border-olive bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
                    >
                      Pedir esta pieza
                    </Link>

                    <button
                      type="button"
                      disabled
                      className="cursor-not-allowed rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground/60 opacity-70"
                    >
                      Carrito no disponible
                    </button>
                  </>
                ) : null}
              </div>

              <div className="mt-4">
                <p className="text-xs leading-6 text-muted">
                  {isCartProduct
                    ? "Esta pieza entra en compra directa y se puede añadir al carrito."
                    : "Esta pieza se trabaja por encargo para mantener control de acabado, presencia y personalización."}
                </p>
              </div>

              <div className="mt-12 border-t border-border pt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="font-display text-2xl tracking-[0.06em] text-foreground">
                      ELABORACIÓN
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      mauris nascetur commodo fringilla, viverra interdum
                      pharetra magnis sociosqu blandit molestie lacinia mattis
                      metus.
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-2xl tracking-[0.06em] text-foreground">
                      PERSONALIZACIÓN
                    </p>
                    <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      mauris nascetur commodo fringilla, viverra interdum
                      pharetra magnis sociosqu blandit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="mt-16 border-t border-border pt-10">
          <FadeIn amount={0.1}>
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  MANIFIESTO DE PIEZA
                </p>
              </div>

              <div>
                <h2 className="max-w-4xl text-3xl font-bold leading-tight text-foreground md:text-5xl md:leading-[1.02]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mauris
                  nascetur commodo fringilla, viverra interdum pharetra magnis
                  sociosqu blandit.
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="font-display text-2xl tracking-[0.05em] text-foreground">
                      PRESENCIA
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Cada producto tiene que entrar fuerte antes del primer
                      bocado.
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-2xl tracking-[0.05em] text-foreground">
                      SABOR
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      Lo visual importa, pero nunca por encima de lo que pasa al
                      probarlo.
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-2xl tracking-[0.05em] text-foreground">
                      REMATE
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      No va de quedar bien. Va de que se acuerden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="mt-16">
          <FadeIn amount={0.1} delay={0.02}>
            <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  PIEZA A MEDIDA
                </p>

                <h2 className="mt-4 font-display text-5xl leading-[0.86] tracking-[0.01em] text-foreground sm:text-6xl">
                  PIEZA
                  <br />A MEDIDA
                </h2>
              </div>

              <div className="lg:pl-10">
                <p className="max-w-md text-base leading-8 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mauris
                  nascetur commodo fringilla, viverra interdum pharetra magnis
                  sociosqu blandit.
                </p>
                <Link
                  href="/contacto"
                  className="mt-8 inline-flex rounded-full border border-olive bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-background transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
                >
                  Quiero este encargo
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  );
}
