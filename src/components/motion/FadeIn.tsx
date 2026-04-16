"use client";

import { motion, useAnimationControls, useInView } from "motion/react";
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  amount?: number;
  duration?: number;
};

export default function FadeIn({
  children,
  delay = 0,
  y = 24,
  className,
  amount = 0.12,
  duration = 0.55,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, {
    amount,
    once: false,
  });

  const bootstrappedRef = useRef(false);
  const suppressInitialAnimationRef = useRef(false);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const isVisibleOnLoad = rect.top < viewportHeight && rect.bottom > 0;

    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    const isReloadWithRestoredScroll =
      navigationEntry?.type === "reload" && window.scrollY > 4;

    suppressInitialAnimationRef.current =
      isReloadWithRestoredScroll && isVisibleOnLoad;

    controls.set(
      suppressInitialAnimationRef.current
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y },
    );

    bootstrappedRef.current = true;
  }, [controls, y]);

  useEffect(() => {
    if (!bootstrappedRef.current) return;

    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: suppressInitialAnimationRef.current
          ? { duration: 0 }
          : {
              duration,
              delay,
              ease: [0.22, 1, 0.36, 1],
            },
      });

      suppressInitialAnimationRef.current = false;
      return;
    }

    controls.start({
      opacity: 0,
      y,
      transition: {
        duration: Math.min(0.42, duration),
        ease: [0.22, 1, 0.36, 1],
      },
    });
  }, [controls, delay, duration, isInView, y]);

  return (
    <motion.div ref={ref} className={className} animate={controls}>
      {children}
    </motion.div>
  );
}
