import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import FeaturedProductsCarousel from "@/components/home/FeaturedProductsCarousel";
import DraggableSticker from "@/components/ui/DraggableSticker";

export default function Home() {
  return (
    <main>
      <section className="bg-background px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="relative rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-10 lg:p-12">
                <DraggableSticker
                  className="left-0 top-0"
                  initialX={-70}
                  initialY={8}
                />

                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  JPAAB
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
                      Encargos con intención, estética y una personalidad que no
                      se queda en lo correcto.
                    </p>
                  </div>

                  <div className="translate-y-3 rounded-[1.75rem] border border-border bg-background p-5">
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      SABOR + PRESENCIA
                    </p>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      Si entra por los ojos, tiene que rematar en boca. Y aquí
                      eso no se negocia.
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
                    La marca no va de quedar bien. Va de tener identidad propia,
                    dejar huella y aparecer en la mesa con más intención que
                    cualquiera.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rotate-[-2deg] rounded-[2rem] border border-border bg-background p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      PERSONALIZABLE
                    </p>
                    <p className="mt-3 max-w-[18rem] text-lg font-bold leading-tight text-foreground">
                      Hecho a tu manera, sin perder carácter.
                    </p>
                  </div>

                  <div className="translate-y-3 rotate-[2deg] rounded-[2rem] border border-border bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
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
          <FadeIn>
            <div className="rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                <div>
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    LO QUE HAY AQUÍ
                  </p>
                  <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                    No hacemos dulces
                    <br />
                    para pasar desapercibidos.
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="border-b border-border pb-5">
                    <p className="font-display text-2xl tracking-[0.06em] text-olive">
                      NADA PLANO
                    </p>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
                      Nos importa el acabado, la composición y la presencia
                      visual porque el conjunto también forma parte del sabor.
                    </p>
                  </div>

                  <div className="border-b border-border pb-5">
                    <p className="font-display text-2xl tracking-[0.06em] text-olive">
                      HECHO A MEDIDA
                    </p>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
                      Personalizamos encargos para celebraciones, eventos y
                      pedidos con intención, sin perder identidad por el camino.
                    </p>
                  </div>

                  <div>
                    <p className="font-display text-2xl tracking-[0.06em] text-olive">
                      REMATE FINAL
                    </p>
                    <p className="mt-3 max-w-2xl text-base leading-8 text-muted">
                      Lo visual importa, pero nunca sustituye al sabor. Aquí una
                      cosa tiene que estar a la altura de la otra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FeaturedProductsCarousel />
    </main>
  );
}
