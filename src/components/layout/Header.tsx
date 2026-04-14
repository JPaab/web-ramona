"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { useRef, useState } from "react";

const productTypes = [
  { name: "Tartas", href: "/productos" },
  { name: "Cupcakes", href: "/productos" },
  { name: "Cheesecakes", href: "/productos" },
  { name: "Mesas dulces", href: "/productos" },
  { name: "Galletas decoradas", href: "/productos" },
  { name: "Encargos personalizados", href: "/contacto" },
];

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProductsMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProductsOpen(true);
  };

  const closeProductsMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 220);
  };
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProductsMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProductsOpen(true);
  };

  const closeProductsMenu = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 220);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-3xl leading-none tracking-[0.06em] text-foreground transition duration-200 hover:opacity-80"
        >
          LA RAMONA
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:text-foreground"
          >
            Inicio
          </Link>

          <div className="relative">
          <div className="relative">
            <Link
              href="/productos"
              onMouseEnter={openProductsMenu}
              onMouseLeave={closeProductsMenu}
              onMouseEnter={openProductsMenu}
              onMouseLeave={closeProductsMenu}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:text-foreground"
            >
              Productos
              <motion.span
                animate={{ rotate: isProductsOpen ? 180 : 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex h-3.5 w-3.5 items-center justify-center"
              >
                <span className="block text-[0.95rem] leading-none">↓</span>
              </motion.span>
            </Link>

            <AnimatePresence>
              {isProductsOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={openProductsMenu}
                  onMouseLeave={closeProductsMenu}
                  className="absolute left-1/2 top-full z-40 -translate-x-1/2 mt-8"
                  onMouseEnter={openProductsMenu}
                  onMouseLeave={closeProductsMenu}
                  className="absolute left-1/2 top-full z-40 -translate-x-1/2 mt-8"
                >
                  <div className="w-[260px] rounded-[2rem] border border-border bg-background p-3 shadow-sm">
                    <div className="flex flex-col">
                      {productTypes.map((item, index) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`group block px-4 py-4 ${
                            index < productTypes.length - 1
                              ? "border-b border-border"
                              : ""
                          }`}
                        >
                          <div className="flex items-center justify-between gap-4">
                            <p className="font-display text-2xl leading-none tracking-[0.04em] text-foreground transition duration-200 group-hover:scale-[1.06] group-hover:text-olive">
                              {item.name}
                            </p>

                            <span className="text-sm text-muted opacity-60 transition duration-200 group-hover:translate-x-1 group-hover:opacity-100 group-hover:text-olive">
                              →
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <Link
            href="/contacto"
            className="text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:text-foreground"
          >
            Contacto
          </Link>
        </nav>

        <Link
          href="/contacto"
          className="rotate-[-2deg] rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:border-foreground hover:bg-foreground hover:text-white hover:shadow-md"
        >
          Encargar
        </Link>
      </div>
    </motion.header>
  );
}
