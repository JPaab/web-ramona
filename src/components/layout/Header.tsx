"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useCart } from "@/components/cart/CartProvider";
import MiniCartPanel from "@/components/cart/MiniCartPanel";
import { CART_ITEM_ADDED_EVENT } from "@/components/cart/cart-events";
import ThemeToggle from "@/components/layout/ThemeToggle";

const productTypes = [
  { name: "Tartas", href: "/productos" },
  { name: "Cupcakes", href: "/productos" },
  { name: "Cold cheesecakes", href: "/productos" },
  { name: "Mesas dulces", href: "/productos" },
  { name: "New York cookies", href: "/productos" },
  { name: "Tartas de queso", href: "/productos" },
  { name: "Encargos personalizados", href: "/contacto" },
];

const mainLinks = [
  { name: "Contacto", href: "/contacto" },
  { name: "El museo", href: "/museo" },
];

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [isCartPulseActive, setIsCartPulseActive] = useState(false);

  const { itemCount } = useCart();

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const miniCartAutoCloseRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const cartPulseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const desktopMiniCartRef = useRef<HTMLDivElement | null>(null);
  const mobileMiniCartRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }

      if (miniCartAutoCloseRef.current) {
        clearTimeout(miniCartAutoCloseRef.current);
      }

      if (cartPulseTimeoutRef.current) {
        clearTimeout(cartPulseTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsProductsOpen(false);
        setIsMobileMenuOpen(false);
        setIsMiniCartOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedInsideDesktop =
        desktopMiniCartRef.current?.contains(target) ?? false;
      const clickedInsideMobile =
        mobileMiniCartRef.current?.contains(target) ?? false;

      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setIsMiniCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  useEffect(() => {
    const handleCartItemAdded = () => {
      setIsMiniCartOpen(true);
      setIsCartPulseActive(true);

      if (miniCartAutoCloseRef.current) {
        clearTimeout(miniCartAutoCloseRef.current);
      }

      if (cartPulseTimeoutRef.current) {
        clearTimeout(cartPulseTimeoutRef.current);
      }

      miniCartAutoCloseRef.current = setTimeout(() => {
        setIsMiniCartOpen(false);
      }, 2600);

      cartPulseTimeoutRef.current = setTimeout(() => {
        setIsCartPulseActive(false);
      }, 520);
    };

    window.addEventListener(CART_ITEM_ADDED_EVENT, handleCartItemAdded);

    return () => {
      window.removeEventListener(CART_ITEM_ADDED_EVENT, handleCartItemAdded);
    };
  }, []);

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
    }, 180);
  };

  const updateStickerTarget = (event: ReactPointerEvent<HTMLAnchorElement>) => {
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

  const handleLogoEnter = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    setIsLogoHovered(true);
    updateStickerTarget(event);
  };

  const handleLogoLeave = () => {
    setIsLogoHovered(false);
    stickerX.set(0);
    stickerY.set(0);
  };

  const handleLogoMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    updateStickerTarget(event);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 px-6 py-4">
          <div className="flex min-w-0 items-center justify-start">
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
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
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
                  className="h-auto w-[82px] md:w-[88px]"
                />
              </motion.div>
            </Link>
          </div>

          <nav className="hidden items-center justify-center gap-6 md:flex lg:gap-8">
            <div
              className="relative flex h-11 items-center"
              onMouseEnter={openProductsMenu}
              onMouseLeave={closeProductsMenu}
            >
              <Link
                href="/productos"
                className="group relative inline-flex items-center gap-0 text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
              >
                <span>Productos</span>
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
                    id="desktop-products-menu"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-1/2 top-full z-40 mt-7.5 -translate-x-1/2"
                  >
                    <div className="w-[280px] rounded-[2rem] border border-border bg-background/90 p-3 shadow-sm backdrop-blur-xl">
                      <div className="flex flex-col">
                        {productTypes.map((item, index) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsProductsOpen(false)}
                            className={`group block px-4 py-4 ${
                              index < productTypes.length - 1
                                ? "border-b border-border"
                                : ""
                            }`}
                          >
                            <div className="flex items-center justify-between gap-4">
                              <p className="font-display text-2xl leading-none tracking-[0.04em] text-foreground transition duration-200 group-hover:scale-[1.03] group-hover:text-olive">
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
              href="/museo"
              className="group relative inline-flex min-h-[46px] items-end rounded-[1.1rem] border border-border/80 px-4 pb-2.5 pt-4 text-foreground transition duration-300 hover:-translate-y-0.5 hover:border-olive/70 hover:bg-foreground/[0.03]"
            >
              <span className="pointer-events-none absolute left-4 top-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-muted transition duration-300 group-hover:text-olive">
                Archivo
              </span>

              <span className="flex items-center gap-3">
                <span className="relative text-sm font-semibold uppercase tracking-[0.16em] text-muted transition duration-300 group-hover:text-foreground">
                  El museo
                  <span className="absolute left-0 top-[calc(100%+6px)] h-px w-8 bg-olive/80 transition-all duration-300 group-hover:w-full" />
                </span>

                <span className="text-xs text-olive/80 transition duration-300 group-hover:translate-x-0.5 group-hover:text-olive">
                  ↗
                </span>
              </span>
            </Link>

            <Link
              href="/contacto"
              className="group relative inline-flex items-center text-sm font-semibold uppercase tracking-[0.12em] text-muted transition duration-200 hover:-translate-y-0.5 hover:text-foreground"
            >
              <span>Contacto</span>
              <span className="absolute left-0 top-full mt-1 h-[2px] w-0 rounded-full bg-olive transition-all duration-200 group-hover:w-full" />
            </Link>
          </nav>

          <div className="flex min-w-0 items-center justify-end md:hidden">
            <div className="flex items-center gap-3">
              <div
                ref={mobileMiniCartRef}
                className="relative flex h-11 items-center"
              >
                <button
                  type="button"
                  onClick={() => {
                    if (miniCartAutoCloseRef.current) {
                      clearTimeout(miniCartAutoCloseRef.current);
                    }

                    setIsMiniCartOpen((prev) => !prev);
                    setIsMobileMenuOpen(false);
                  }}
                  className="group relative inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-foreground bg-foreground text-background shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-olive hover:bg-olive"
                  aria-expanded={isMiniCartOpen}
                  aria-label={`Abrir carrito${
                    itemCount > 0 ? `, ${itemCount} artículos` : ""
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-[18px] w-[18px] transition duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="9" cy="20" r="1.4" />
                    <circle cx="18" cy="20" r="1.4" />
                    <path d="M3 4h2l2.1 10.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H7.2" />
                  </svg>

                  {itemCount > 0 ? (
                    <motion.span
                      animate={
                        isCartPulseActive
                          ? {
                              scale: [1, 1.18, 1],
                            }
                          : {
                              scale: 1,
                            }
                      }
                      transition={{
                        duration: 0.36,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`absolute -right-1 -top-1 inline-flex min-w-5 items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                        isCartPulseActive
                          ? "bg-background text-foreground"
                          : "bg-olive text-background"
                      }`}
                    >
                      {itemCount}
                    </motion.span>
                  ) : null}
                </button>

                <AnimatePresence>
                  {isMiniCartOpen ? (
                    <MiniCartPanel
                      onNavigate={() => setIsMiniCartOpen(false)}
                    />
                  ) : null}
                </AnimatePresence>
              </div>

              <ThemeToggle />

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen((prev) => !prev);
                  setIsMiniCartOpen(false);
                }}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={
                  isMobileMenuOpen ? "Cerrar navegación" : "Abrir navegación"
                }
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition duration-200 hover:border-olive"
              >
                <span className="text-lg leading-none">
                  {isMobileMenuOpen ? "×" : "≡"}
                </span>
              </button>
            </div>
          </div>

          <div className="hidden md:flex min-w-0 items-center justify-end pr-16 lg:pr-20">
            <div
              ref={desktopMiniCartRef}
              className="relative flex h-11 items-center"
            >
              <button
                type="button"
                onClick={() => {
                  if (miniCartAutoCloseRef.current) {
                    clearTimeout(miniCartAutoCloseRef.current);
                  }

                  setIsMiniCartOpen((prev) => !prev);
                }}
                className="group relative inline-flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-olive"
                aria-expanded={isMiniCartOpen}
                aria-label={`Abrir carrito${
                  itemCount > 0 ? `, ${itemCount} artículos` : ""
                }`}
              >
                <span className="text-muted transition duration-300 group-hover:text-foreground">
                  Carrito
                </span>

                <motion.span
                  animate={
                    isCartPulseActive
                      ? {
                          scale: [1, 1.16, 1],
                        }
                      : {
                          scale: 1,
                        }
                  }
                  transition={{
                    duration: 0.36,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`inline-flex min-w-6 items-center justify-center rounded-full border px-2 py-1 text-[10px] leading-none transition duration-300 ${
                    isCartPulseActive
                      ? "border-olive bg-olive text-background"
                      : "border-border text-foreground group-hover:border-olive"
                  }`}
                >
                  {itemCount}
                </motion.span>
              </button>

              <AnimatePresence>
                {isMiniCartOpen ? (
                  <MiniCartPanel onNavigate={() => setIsMiniCartOpen(false)} />
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-6 hidden items-center md:flex lg:right-8">
          <div className="pointer-events-auto">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-background/95 px-6 pb-6 pt-5 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-6xl">
              <nav className="flex flex-col">
                {mainLinks.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-4 text-lg font-semibold uppercase tracking-[0.08em] text-foreground ${
                      index < mainLinks.length - 1
                        ? "border-b border-border"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-6 rounded-[2rem] border border-border bg-card p-4">
                <Link
                  href="/productos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex text-2xl font-display tracking-[0.08em] text-olive transition duration-200 hover:text-foreground"
                >
                  Productos
                </Link>

                <div className="mt-4 flex flex-col">
                  {productTypes.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`py-3 text-sm font-semibold uppercase tracking-[0.08em] text-muted transition duration-200 hover:text-foreground ${
                        index < productTypes.length - 1
                          ? "border-b border-border"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
