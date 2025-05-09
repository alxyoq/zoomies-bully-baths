"use client";

import React, { type ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale" | "opacity";
  delay?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
}

export function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
  });

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  if (!hasLoaded) {
    return <div className={className}>{children}</div>;
  }

  let initial = {};

  switch (direction) {
    case "up":
      initial = { opacity: 0, y: 50 };
      break;
    case "down":
      initial = { opacity: 0, y: -50 };
      break;
    case "left":
      initial = { opacity: 0, x: 50 };
      break;
    case "right":
      initial = { opacity: 0, x: -50 };
      break;
    case "scale":
      initial = { opacity: 0, scale: 0.8 };
      break;
    case "opacity":
      initial = { opacity: 0 };
      break;
    default:
      initial = { opacity: 0, y: 20 };
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={initial}
        animate={inView ? { opacity: 1, y: 0, x: 0, scale: 1 } : initial}
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
    </div>
  );
}
