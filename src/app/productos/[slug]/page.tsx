import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

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
    <main className="bg-background px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/productos"
          className="inline-flex items-center text-sm font-medium text-olive transition duration-200 hover:text-olive-dark"
        >
          ← Volver a productos
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="overflow-hidden rounded-4xl border border-border bg-card shadow-sm">
            <div className="aspect-4/3 overflow-hidden bg-background">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="rounded-4xl border border-border bg-card p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-olive">
              Producto destacado
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              {product.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted">
              {product.description}
            </p>

            <div className="mt-8 flex items-center justify-between gap-6 border-y border-border py-6">
              <div>
                <p className="text-sm text-muted">Precio</p>
                <p className="mt-1 text-3xl font-bold text-foreground">
                  {product.price} €
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-muted">Disponibilidad</p>
                <p className="mt-1 text-sm font-semibold text-olive">
                  Bajo encargo
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md">
                Añadir al carrito
              </button>

              <Link
                href="/contacto"
                className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive hover:shadow-md"
              >
                Consultar encargo
              </Link>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-olive">
                  Elaboración
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-5">
                <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-olive">
                  Personalización
                </h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
