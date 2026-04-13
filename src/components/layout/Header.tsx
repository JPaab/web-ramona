"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-3xl leading-none tracking-[0.06em] text-foreground transition duration-200 hover:opacity-80"
        >
          JPaab
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:text-foreground"
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:text-foreground"
          >
            Productos
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>

        <Link
          href="/contacto"
          className="rotate-[-2deg] rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:shadow-md"
        >
          Encargar
        </Link>
      </div>
    </motion.header>
  );
}
