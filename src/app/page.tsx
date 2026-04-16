import Link from "next/link";
import FadeIn from "@/components/motion/FadeIn";
import FeaturedProductsCarousel from "@/components/home/FeaturedProductsCarousel";
import DraggableSticker from "@/components/ui/DraggableSticker";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-background px-6 pb-14 pt-10 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <DraggableSticker
              className="left-0 top-0"
              initialX={-264}
              initialY={206}
              showPosition
            />

            <div className="pointer-events-none absolute right-0 top-0 hidden font-display text-[11rem] leading-none tracking-[0.01em] text-foreground/[0.04] lg:block">
              LA
              <br />
              RAMONA
            </div>

            <FadeIn amount={0.08}>
              <div className="grid gap-12 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
                <div className="relative z-10">
                  <h1 className="mt-6 max-w-5xl font-display text-[4.8rem] leading-[0.8] tracking-[0.01em] text-foreground sm:text-[6.2rem] lg:text-[8.8rem]">
                    ERA
                    <br />
                    LO QUE
                    <br />
                    NECESITABAS.
                  </h1>

                  <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    faucibus orci penatibus, odio conubia litora bibendum metus
                    praesent montes.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/productos"
                      className="inline-flex rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
                    >
                      Ver catalogo
                    </Link>

                    <Link
                      href="/contacto"
                      className="inline-flex rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:text-olive"
                    >
                      Encargo a medida
                    </Link>
                  </div>
                </div>

                <div className="relative pt-4 lg:pt-16">
                  <div className="border-t border-border pt-5">
                    <p className="font-display text-lg tracking-[0.08em] text-olive">
                      NO HACEMOS LO TÍPICO
                    </p>
                  </div>

                  <div className="mt-8 space-y-10">
                    <div>
                      <p className="font-display text-3xl leading-none tracking-[0.05em] text-foreground">
                        PRESENCIA
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        faucibus orci penatibus, odio conubia litora bibendum
                        metus.
                      </p>
                    </div>

                    <div>
                      <p className="font-display text-3xl leading-none tracking-[0.05em] text-foreground">
                        COMPOSICIÓN
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        faucibus orci penatibus, odio conubia litora bibendum
                        metus praesent.
                      </p>
                    </div>

                    <div>
                      <p className="font-display text-3xl leading-none tracking-[0.05em] text-foreground">
                        CARÁCTER
                      </p>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        faucibus orci penatibus, odio conubia litora bibendum
                        metus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn amount={0.1} delay={0.02}>
              <div className="mt-16 border-t border-border pt-8">
                <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
                  <div>
                    <p className="font-display text-xl tracking-[0.08em] text-olive">
                      MANIFIESTO
                    </p>
                  </div>

                  <div>
                    <h2 className="max-w-4xl text-3xl font-bold leading-tight text-foreground md:text-5xl md:leading-[1.02]">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      faucibus orci penatibus, odio conubia litora bibendum
                      metus praesent montes imperdiet cum nisl.
                    </h2>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <p className="text-base leading-8 text-muted">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        faucibus orci penatibus, odio conubia litora bibendum
                        metus praesent montes imperdiet cum nisl, facilisi
                        gravida cursus mollis nibh.
                      </p>

                      <p className="text-base leading-8 text-muted">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        faucibus orci penatibus, odio conubia litora bibendum
                        metus praesent montes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <FadeIn amount={0.1}>
            <div className="grid gap-8 border-y border-border py-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  OBRA DESTACADA
                </p>
              </div>

              <div>
                <p className="max-w-3xl text-2xl font-bold leading-tight text-foreground md:text-4xl md:leading-[1.08]">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  faucibus orci penatibus.
                </p>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  faucibus orci penatibus, odio conubia litora bibendum metus
                  praesent montes imperdiet cum nisl, facilisi gravida cursus
                  mollis nibh porttitor auctor aliquet morbi.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <FeaturedProductsCarousel />

      <section className="bg-background px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn amount={0.1}>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  PIEZAS A MEDIDA
                </p>

                <h2 className="mt-4 font-display text-5xl leading-[0.86] tracking-[0.01em] text-foreground sm:text-6xl md:text-7xl">
                  LO HACEMOS
                  <br />
                  A TU MANERA,
                  <br />
                  PERO CON
                  <br />
                  CRITERIO.
                </h2>
              </div>

              <div className="lg:pl-10">
                <p className="max-w-md text-base leading-8 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit
                  faucibus orci penatibus, odio conubia litora bibendum metus
                  praesent montes imperdiet cum nisl, facilisi gravida cursus
                  mollis nibh porttitor auctor.
                </p>

                <Link
                  href="/contacto"
                  className="mt-8 inline-flex rounded-full border border-olive bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive hover:text-background"
                >
                  Quiero un encargo
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
