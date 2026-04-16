"use client";

import { motion, useAnimationControls, useInView } from "motion/react";
import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";

type StaggerGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  baseDelay?: number;
  amount?: number;
};

export default function StaggerGroup({
  children,
  className,
  stagger = 0.1,
  baseDelay = 0,
  amount = 0.08,
}: StaggerGroupProps) {
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
      suppressInitialAnimationRef.current ? "visible-instant" : "hidden",
    );
    bootstrappedRef.current = true;
  }, [controls]);

  useEffect(() => {
    if (!bootstrappedRef.current) return;

    if (isInView) {
      controls.start(
        suppressInitialAnimationRef.current ? "visible-instant" : "visible",
      );
      suppressInitialAnimationRef.current = false;
      return;
    }

    controls.start("hidden");
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={controls}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: baseDelay,
            staggerChildren: stagger,
          },
        },
        "visible-instant": {
          transition: {
            delayChildren: 0,
            staggerChildren: 0,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
