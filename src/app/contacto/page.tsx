import FadeIn from "@/components/motion/FadeIn";
import StaggerGroup from "@/components/motion/StaggerGroup";
import StaggerItem from "@/components/motion/StaggerItem";

export default function ContactoPage() {
  return (
    <main className="bg-background px-6 py-14 md:py-18">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative rounded-[2.5rem] border border-border bg-card p-8 shadow-sm md:p-10 lg:p-12">
              <div className="absolute right-4 top-5 rotate-[-5deg] rounded-full border border-border bg-foreground px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm md:right-8">
                HABLEMOS CLARO
              </div>

              <p className="font-display text-2xl tracking-[0.08em] text-olive">
                CONTACTO
              </p>

              <h1 className="mt-5 font-display text-6xl leading-[0.92] tracking-[0.01em] text-foreground sm:text-7xl lg:text-[8rem]">
                VENGA, CUÉNTANOS
                <br />
                TU VIDA
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                condimentum odio senectus faucibus habitasse, arcu class orci
                aliquam a blandit.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] border border-border bg-background p-5">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    EVENTOS
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Cumpleaños, celebraciones, mesas dulces y encargos con algo
                    más de carácter.
                  </p>
                </div>

                <div className="translate-y-3 rounded-[1.75rem] border border-border bg-background p-5">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    A MEDIDA
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    Adaptamos ideas y detalles sin volver el resultado genérico.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[2.5rem] bg-foreground p-8 text-white shadow-sm md:p-10">
                <p className="font-display text-xl tracking-[0.08em] text-olive">
                  JPAAB
                </p>

                <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-[0.01em] sm:text-5xl">
                  NO VAMOS DE
                  <br />
                  QUEDAR BIEN.
                  <br />
                  VAMOS DE
                  <br />
                  DEJAR HUELLA.
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-7 text-white/75">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rotate-[2deg] rounded-[2rem] border border-border bg-background p-5 shadow-sm">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    EMAIL
                  </p>
                  <p className="mt-3 max-w-[18rem] text-lg font-bold leading-tight text-foreground">
                    hola@jpaab.es
                  </p>
                </div>

                <div className="translate-y-3 rotate-[-2deg] rounded-[2rem] border border-border bg-card p-5 shadow-sm">
                  <p className="font-display text-xl tracking-[0.08em] text-olive">
                    TELÉFONO
                  </p>
                  <p className="mt-3 max-w-[18rem] text-lg font-bold leading-tight text-foreground">
                    +34 600 000 000
                  </p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <FadeIn>
            <div className="rounded-[2.5rem] border border-border bg-card p-6 shadow-sm md:p-8">
              <p className="font-display text-2xl tracking-[0.08em] text-olive">
                ESCRÍBENOS
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                condimentum odio senectus faucibus habitasse, arcu class orci
                aliquam a blandit.
              </p>

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

                <button
                  type="button"
                  className="rotate-[-1deg] rounded-full bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:shadow-md"
                >
                  Enviar consulta
                </button>
              </form>
            </div>
          </FadeIn>

          <StaggerGroup className="space-y-6">
            <StaggerItem>
              <div className="rounded-[2rem] border border-border bg-background p-6 shadow-sm">
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  HORARIO
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Lunes a sábado · 09:00 a 19:00
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rounded-[2rem] border border-border bg-card p-6 shadow-sm">
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  QUÉ PUEDES PEDIR
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                  <li>• Tartas para cumpleaños y celebraciones</li>
                  <li>• Cupcakes y mesas dulces</li>
                  <li>• Encargos personalizados</li>
                  <li>• Diseños con más identidad que la media</li>
                </ul>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="rotate-[1deg] rounded-[2rem] border border-border bg-foreground p-6 text-white shadow-sm">
                <p className="font-display text-2xl tracking-[0.08em] text-olive">
                  CONSEJO
                </p>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
                  condimentum odio senectus faucibus habitasse, arcu class orci
                  aliquam a blandit.
                </p>
              </div>
            </StaggerItem>
          </StaggerGroup>
        </section>
      </div>
    </main>
  );
}
