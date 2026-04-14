"use client";

import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { products } from "@/data/products";

const SIDE_PEEK = 12;
const AUTOPLAY_DELAY = 3000;

export default function FeaturedProductsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: false,
    skipSnaps: false,
    containScroll: false,
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(interval);
    };
  }, [emblaApi]);

  return (
    <section className="bg-background px-6 py-8 md:py-10">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="font-display text-lg tracking-[0.08em] text-olive">
            PRODUCTOS DESTACADOS
          </p>
          <h2 className="mt-1 text-2xl font-bold text-foreground md:text-3xl">
            Una pieza cada vez
          </h2>
        </div>

        <div className="mx-auto max-w-[600px]">
          <div ref={emblaRef} className="overflow-hidden px-1 py-3">
            <div className="flex">
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    flex: `0 0 calc(100% - ${SIDE_PEEK * 2}px)`,
                    minWidth: 0,
                    marginLeft: `${SIDE_PEEK}px`,
                    marginRight: `${SIDE_PEEK}px`,
                    boxSizing: "border-box",
                  }}
                >
                  <article className="group overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    <div className="relative h-[320px] overflow-hidden border-b border-border bg-background">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="p-5">
                      <p className="font-display text-base tracking-[0.06em] text-olive">
                        DESTACADO
                      </p>

                      <h3 className="mt-2 text-xl font-bold leading-tight text-foreground">
                        {product.name}
                      </h3>

                      <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">
                        {product.description}
                      </p>

                      <div className="mt-5 flex items-end justify-between gap-4">
                        <span className="font-display text-2xl leading-none tracking-[0.03em] text-foreground">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
