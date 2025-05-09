"use client";

import React, { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "text";
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
}

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  href,
}: AnimatedButtonProps) {
  const baseStyles = "rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: "bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500",
    secondary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
    outline: "bg-transparent border-2 border-current text-pink-600 hover:bg-pink-50 focus:ring-pink-500",
    text: "bg-transparent text-pink-600 hover:text-pink-800 focus:ring-pink-500 hover:underline",
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const classes = cn(
    baseStyles,
    variantStyles[variant],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10
        }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
    >
      {children}
    </motion.button>
  );
}
