"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

type ThemeTransitionDetail = {
  targetTheme: "light" | "dark";
};

export default function ThemeTransitionOverlay() {
  const [transition, setTransition] = useState<ThemeTransitionDetail | null>(
    null,
  );

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleThemeTransition = (event: Event) => {
      const customEvent = event as CustomEvent<ThemeTransitionDetail>;
      setTransition(customEvent.detail);

      timeoutId = window.setTimeout(() => {
        setTransition(null);
      }, 520);
    };

    window.addEventListener(
      "theme-transition",
      handleThemeTransition as EventListener,
    );

    return () => {
      window.removeEventListener(
        "theme-transition",
        handleThemeTransition as EventListener,
      );

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {transition ? (
        <motion.div
          key={transition.targetTheme}
          className="pointer-events-none fixed inset-0 z-[200]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{
              opacity: 0,
              scaleY: 0.985,
            }}
            animate={{
              opacity: transition.targetTheme === "dark" ? 1 : 0.92,
              scaleY: 1,
            }}
            exit={{
              opacity: 0,
              scaleY: 1.01,
            }}
            transition={{
              duration: 0.36,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "center center",
              background:
                transition.targetTheme === "dark"
                  ? "rgba(8, 8, 8, 0.18)"
                  : "rgba(255, 255, 255, 0.14)",
            }}
          />

          <motion.div
            className="absolute inset-x-0 top-0 h-px"
            initial={{ opacity: 0, scaleX: 0.92 }}
            animate={{ opacity: 0.45, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 1.02 }}
            transition={{
              duration: 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              background:
                transition.targetTheme === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.08)",
              transformOrigin: "center center",
            }}
          />

          <motion.div
            className="absolute inset-x-0 bottom-0 h-px"
            initial={{ opacity: 0, scaleX: 0.92 }}
            animate={{ opacity: 0.3, scaleX: 1 }}
            exit={{ opacity: 0, scaleX: 1.02 }}
            transition={{
              duration: 0.34,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              background:
                transition.targetTheme === "dark"
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(0,0,0,0.06)",
              transformOrigin: "center center",
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
