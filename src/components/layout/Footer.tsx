import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-4xl leading-none tracking-[0.06em] text-foreground">
              JPaab
            </p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, montes
              condimentum odio senectus faucibus habitasse, arcu class orci
              aliquam a blandit.
            </p>
          </div>

          <div>
            <p className="font-display text-xl tracking-[0.08em] text-olive">
              MAPA
            </p>
            <nav className="mt-4 flex flex-col gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-muted">
              <Link
                href="/"
                className="transition duration-200 hover:text-foreground"
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="transition duration-200 hover:text-foreground"
              >
                Productos
              </Link>
              <Link
                href="/contacto"
                className="transition duration-200 hover:text-foreground"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <p className="font-display text-xl tracking-[0.08em] text-olive">
              CONTACTO
            </p>
            <div className="mt-4 space-y-3 text-sm text-muted">
              <p>contacto@marca.com</p>
              <p>+34 600 000 000</p>
              <p>Lunes a sábado · 09:00 a 19:00</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm font-medium uppercase tracking-[0.08em] text-muted">
            © 2026 JPaab
          </p>
        </div>
      </div>
    </footer>
  );
}
