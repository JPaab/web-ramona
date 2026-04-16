"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export default function StaggerItem({
  children,
  className,
  y = 24,
}: StaggerItemProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y,
          transition: {
            duration: 0.34,
            ease: [0.22, 1, 0.36, 1],
          },
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
        "visible-instant": {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
