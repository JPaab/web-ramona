import Link from "next/link";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      <Link href={`/productos/${product.slug}`} className="block">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-card">
          <div className="absolute left-4 top-4 z-10 rotate-[-4deg] rounded-full border border-border bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-sm">
            JPAAB
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-background">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </Link>

      <div className="mt-5 border-t border-border pt-4">
        <p className="font-display text-base tracking-[0.08em] text-olive">
          PIEZA
        </p>

        <div className="mt-2 flex items-start justify-between gap-4">
          <h2 className="max-w-[16rem] font-display text-3xl leading-[0.9] tracking-[0.02em] text-foreground transition duration-200 group-hover:text-olive">
            {product.name}
          </h2>

          <span className="font-display text-3xl leading-none tracking-[0.03em] text-foreground">
            {product.price}€
          </span>
        </div>

        <p className="mt-4 max-w-[24rem] text-sm leading-7 text-muted">
          {product.description}
        </p>

        <div className="mt-5">
          <Link
            href={`/productos/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-200 hover:text-olive"
          >
            Ver pieza
            <span className="transition duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
