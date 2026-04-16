import FadeIn from "@/components/motion/FadeIn";
import StaggerGroup from "@/components/motion/StaggerGroup";
import StaggerItem from "@/components/motion/StaggerItem";

export default function MuseoPage() {
  return (
    <main className="bg-background px-6 py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn amount={0.08}>
          <section className="border-b border-border pb-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  EL MUSEO
                </p>

                <h1 className="mt-5 font-display text-[4.6rem] leading-[0.82] tracking-[0.01em] text-foreground sm:text-[5.8rem] lg:text-[8rem]">
                  ARCHIVO,
                  <br />
                  PROCESO
                  <br />
                  Y PIEZAS
                  <br />
                  CON PESO.
                </h1>
              </div>

              <div className="lg:pt-8">
                <p className="max-w-md text-lg leading-8 text-muted">
                  Este espacio queda reservado para proceso, referencias,
                  composiciones y piezas que ayudan a entender la marca más allá
                  del catálogo.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="pt-10">
          <StaggerGroup
            className="grid gap-6 md:grid-cols-3"
            amount={0.1}
            stagger={0.1}
            baseDelay={0.04}
          >
            <StaggerItem>
              <article className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <p className="font-display text-2xl tracking-[0.08em] text-foreground">
                  PROCESO
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Bocetos, pruebas, composición y decisiones visuales.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <p className="font-display text-2xl tracking-[0.08em] text-foreground">
                  REFERENCIAS
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Lenguaje editorial, moda, arte y tensión visual controlada.
                </p>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <p className="font-display text-2xl tracking-[0.08em] text-foreground">
                  ARCHIVO
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Una futura selección de piezas, campañas y material de marca.
                </p>
              </article>
            </StaggerItem>
          </StaggerGroup>
        </section>
      </div>
    </main>
  );
}
