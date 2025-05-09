"use client";

import React, { type ReactNode, memo } from "react";
import { motion, useInView, type MotionProps } from "framer-motion";

export interface AnimatedSectionProps {
  children: ReactNode;
  /** Direction the element animates _from_ when entering view. */
  direction?: "up" | "down" | "left" | "right" | "scale" | "opacity";
  /** Extra delay (s) before the animation starts. */
  delay?: number;
  className?: string;
  /** Intersection ratio that counts as “visible”. */
  threshold?: number;
  /** Animate only the first time it becomes visible. */
  once?: boolean;
}

const presets: Record<
  NonNullable<AnimatedSectionProps["direction"]>,
  MotionProps["initial"]
> = {
  up: { opacity: 0, y: 50 },
  down: { opacity: 0, y: -50 },
  left: { opacity: 0, x: 50 },
  right: { opacity: 0, x: -50 },
  scale: { opacity: 0, scale: 0.8 },
  opacity: { opacity: 0 },
};

/* ——————————————————————————————————————————————————————————————————— */

function AnimatedSectionBase({
  children,
  direction = "up",
  delay = 0,
  className,
  threshold = 0.15,
  once = true,
}: AnimatedSectionProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: threshold, once });

  const initial = presets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0, scale: 1 } : initial}
      transition={{
        duration: 0.5,
        delay,
        type: "spring",
        damping: 25,
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
}

export const AnimatedSection = memo(AnimatedSectionBase);
