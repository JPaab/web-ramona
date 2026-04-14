"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const productTypes = [
  { name: "Tartas", href: "/productos" },
  { name: "Cupcakes", href: "/productos" },
  { name: "Cold Cheesecakes", href: "/productos" },
  { name: "Mesas dulces", href: "/productos" },
  { name: "New York Cookies", href: "/productos" },
  { name: "Tartas de queso", href: "/productos" },
  { name: "Encargos personalizados", href: "/contacto" },
];

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  const stickerX = useMotionValue(0);
  const stickerY = useMotionValue(0);

  const smoothX = useSpring(stickerX, {
    stiffness: 260,
    damping: 22,
    mass: 0.7,
  });

  const smoothY = useSpring(stickerY, {
    stiffness: 260,
    damping: 22,
    mass: 0.7,
  });

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

  const updateStickerTarget = (
    event: React.PointerEvent<HTMLAnchorElement>,
  ) => {
    if (!logoRef.current) return;

    const rect = logoRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const localX = event.clientX - rect.left;
    const localY = event.clientY - rect.top;

    const normalizedX = (localX - centerX) / centerX;
    const normalizedY = (localY - centerY) / centerY;

    stickerX.set(normalizedX * 42);
    stickerY.set(normalizedY * 32);
  };

  const handleLogoEnter = (event: React.PointerEvent<HTMLAnchorElement>) => {
    setIsLogoHovered(true);
    updateStickerTarget(event);
  };

  const handleLogoLeave = () => {
    setIsLogoHovered(false);
    stickerX.set(0);
    stickerY.set(0);
  };

  const handleLogoMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    updateStickerTarget(event);
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
          ref={logoRef}
          href="/"
          aria-label="Ir al inicio"
          onPointerEnter={handleLogoEnter}
          onPointerLeave={handleLogoLeave}
          onPointerMove={handleLogoMove}
          className="relative block h-[62px] w-[170px] overflow-visible md:w-[190px]"
        >
          <motion.div
            initial={false}
            animate={
              isLogoHovered
                ? {
                    opacity: 0,
                    x: 12,
                    y: -4,
                    rotate: -2,
                    scale: 0.95,
                    filter: "blur(2px)",
                  }
                : {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }
            }
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 24,
              mass: 0.9,
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/logo/horizontal.svg"
              alt="La Ramona"
              fill
              priority
              className="object-contain"
            />
          </motion.div>

          <motion.div
            initial={false}
            style={{ x: smoothX, y: smoothY }}
            animate={
              isLogoHovered
                ? {
                    opacity: 1,
                    rotate: -5,
                    scale: 1,
                    filter: "blur(0px)",
                  }
                : {
                    opacity: 0,
                    rotate: -12,
                    scale: 0.78,
                    filter: "blur(1px)",
                  }
            }
            transition={{
              type: "spring",
              stiffness: 340,
              damping: 20,
              mass: 0.8,
            }}
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/images/logo/sticker.svg"
              alt="La Ramona sticker"
              width={92}
              height={92}
              priority
              className="h-auto w-[82px] md:w-[88px]"
            />
          </motion.div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="group relative inline-flex -translate-y-0 items-center text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
          >
            <span>Inicio</span>
            <span className="absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full bg-olive transition-all duration-200 group-hover:w-full" />
          </Link>

          <div className="relative">
            <Link
              href="/productos"
              onMouseEnter={openProductsMenu}
              onMouseLeave={closeProductsMenu}
              className="group relative inline-flex items-center text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
            >
              Productos
              <motion.span
                animate={{ rotate: isProductsOpen ? 180 : 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex h-3.5 w-3.5 items-center justify-center"
              >
                <span className="block text-[0.95rem] leading-none">↓</span>
              </motion.span>
              <span className="absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full bg-olive transition-all duration-200 group-hover:w-full" />
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
                >
                  <div className="w-[260px] rounded-[2rem] border border-border bg-background/85 p-3 shadow-sm backdrop-blur-xl">
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
            className="group relative inline-flex items-center text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
          >
            <span>Contacto</span>
            <span className="absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full bg-olive transition-all duration-200 group-hover:w-full" />
          </Link>
        </nav>

        <Link
          href="/museo"
          className="rotate-[-2deg] rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:rotate-0 hover:border-olive hover:bg-background hover:text-white hover:shadow-md"
        >
          EL MUSEO
        </Link>
      </div>
    </motion.header>
  );
}
