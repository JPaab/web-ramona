import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-zinc-900">
          La Ramona
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            Productos
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
