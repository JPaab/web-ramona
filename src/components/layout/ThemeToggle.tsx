"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const handleToggle = () => {
    if (!mounted || isAnimating) return;

    setIsAnimating(true);

    const nextTheme = isDark ? "light" : "dark";

    window.dispatchEvent(
      new CustomEvent("theme-transition", {
        detail: {
          targetTheme: nextTheme,
        },
      }),
    );

    window.setTimeout(() => {
      setTheme(nextTheme);
    }, 150);

    window.setTimeout(() => {
      setIsAnimating(false);
    }, 540);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      disabled={isAnimating}
      aria-label={
        mounted
          ? isDark
            ? "Activar tema claro"
            : "Activar tema oscuro"
          : "Cambiar tema"
      }
      className="group inline-flex h-11 items-center rounded-full border border-border bg-background px-4 text-xs font-semibold uppercase tracking-[0.14em] text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-olive disabled:pointer-events-none"
    >
      <span className="relative inline-flex items-center gap-2">
        <span
          className={`inline-flex h-2 w-2 rounded-full transition duration-300 ${
            mounted ? (isDark ? "bg-olive" : "bg-foreground") : "bg-foreground"
          }`}
        />
        <span className="transition duration-300 group-hover:text-olive">
          {mounted ? (isDark ? "LUZ" : "SOMBRA") : "SOMBRA / LUZ"}
        </span>
      </span>
    </button>
  );
}
