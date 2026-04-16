import FadeIn from "@/components/motion/FadeIn";
import StaggerGroup from "@/components/motion/StaggerGroup";
import StaggerItem from "@/components/motion/StaggerItem";

export default function ContactoPage() {
  return (
    <main className="bg-background px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <FadeIn amount={0.08}>
          <section className="rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-10 lg:p-12">
            <div>
              <div className="mb-6 flex items-start justify-between gap-4">
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  CONTACTO
                </p>

                <div className="shrink-0 rotate-[-5deg] rounded-full border border-border bg-foreground px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm">
                  HABLEMOS CLARO
                </div>
              </div>

              <h1 className="font-display text-6xl leading-[0.92] tracking-[0.01em] text-foreground sm:text-7xl lg:text-[8rem]">
                VENGA VA, CUÉNTANOS
                <br />
                TU VIDA
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
                orci penatibus, odio conubia litora bibendum metus praesent
                montes.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-border bg-background p-5">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    EVENTOS
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    faucibus orci.
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-border bg-background p-5">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    A MEDIDA
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <FadeIn amount={0.14}>
          <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[2.5rem] border border-border bg-card p-6 shadow-sm md:p-8">
              <p className="font-display text-2xl tracking-[0.08em] text-olive">
                ESCRÍBENOS
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">V1</p>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="nombre"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted focus:border-olive"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="tuemail@ejemplo.com"
                    className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted focus:border-olive"
                  />
                </div>

                <div>
                  <label
                    htmlFor="tipo"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                  >
                    Qué necesitas
                  </label>
                  <select
                    id="tipo"
                    className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 focus:border-olive"
                    defaultValue="Encargo personalizado"
                  >
                    <option>Encargo personalizado</option>
                    <option>Tarta para evento</option>
                    <option>Consulta de producto</option>
                    <option>Otra cosa</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground"
                  >
                    Cuéntanos
                  </label>
                  <textarea
                    id="mensaje"
                    rows={6}
                    placeholder="Qué quieres, para cuándo y con qué idea en mente"
                    className="w-full rounded-[1.25rem] border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition duration-200 placeholder:text-muted focus:border-olive"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-full border border-border bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground/60 opacity-70"
                  >
                    ENVIAR
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-border bg-background p-6 shadow-sm">
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  HORARIO
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Lunes a sábado · 09:00 a 19:00
                </p>
              </div>

              <StaggerGroup
                className="space-y-6"
                amount={0.08}
                stagger={0.14}
                baseDelay={0.28}
              >
                <StaggerItem>
                  <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                    <p className="font-display text-2xl tracking-[0.08em] text-olive">
                      QUÉ PUEDES PEDIR
                    </p>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                      <li>• 1</li>
                      <li>• 2</li>
                      <li>• 3</li>
                      <li>• 4</li>
                    </ul>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="rotate-[1deg] rounded-[2rem] border border-border bg-foreground p-6 text-white shadow-sm">
                    <p className="font-display text-2xl tracking-[0.08em] text-olive">
                      CONSEJO
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/80">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      faucibus orci penatibus
                    </p>
                  </div>
                </StaggerItem>
              </StaggerGroup>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
