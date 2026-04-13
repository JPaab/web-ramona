import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-[240px] overflow-hidden border-b border-border bg-background">
        <div className="absolute left-4 top-4 z-10 rotate-[-4deg] rounded-full border border-border bg-background px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm">
          JPAAB
        </div>

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-5">
        <p className="font-display text-lg tracking-[0.06em] text-olive">
          DESTACADO
        </p>

        <h2 className="mt-2 text-2xl font-bold leading-tight text-foreground">
          {product.name}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
          {product.description}
        </p>

        <div className="mt-5 flex items-end justify-between gap-4">
          <span className="font-display text-3xl leading-none tracking-[0.03em] text-foreground">
            {product.price}€
          </span>

          <Link
            href={`/productos/${product.slug}`}
            className="text-sm font-semibold uppercase tracking-[0.08em] text-olive transition duration-200 hover:text-olive-dark"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
