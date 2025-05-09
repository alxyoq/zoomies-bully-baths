"use client";

import React, {
  forwardRef,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from "react";
import { motion, type MotionProps } from "framer-motion";
import Link from "next/link";

/** Tailwind-merge‐like helper (tiny): keeps last duplicate class */
function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const spring = { type: "spring", stiffness: 400, damping: 12 } as const;
const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
} satisfies MotionProps["variants"];

type Intent = "primary" | "secondary" | "outline" | "text";

const intentClasses: Record<Intent, string> = {
  primary:
    "bg-coral text-white hover:bg-opacity-90 focus:ring-coral focus:ring-2 focus:ring-offset-2",
  secondary:
    "bg-light-blue text-white hover:bg-opacity-90 focus:ring-light-blue focus:ring-2 focus:ring-offset-2",
  outline:
    "border-2 border-current text-coral hover:bg-coral/10 focus:ring-coral focus:ring-2 focus:ring-offset-2",
  text: "text-coral hover:underline focus:outline-none",
};

/* ——————————————————————————————————————————————————————————————————— */

interface SharedProps {
  intent?: Intent;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type Props = ButtonProps | AnchorProps;

/* ——————————————————————————————————————————————————————————————————— */

export const AnimatedButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Props
>(function AnimatedButton(
  { intent = "primary", className, disabled, href, children, ...rest },
  ref,
) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition-colors px-6 py-3",
    intentClasses[intent],
    disabled && "opacity-50 cursor-not-allowed pointer-events-none",
    className,
  );

  const motionProps: MotionProps = {
    variants: buttonVariants,
    initial: "rest",
    whileHover: disabled ? undefined : "hover",
    whileTap: disabled ? undefined : "tap",
    transition: spring,
  };

  // ————————————————————————————  anchor  ————————————————————————————
  if (href) {
    const isInternal = href.startsWith("/");
    const anchor = (
      <motion.a
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        {...motionProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        aria-disabled={disabled}
        className={classes}
        {...(!isInternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
      </motion.a>
    );
    return isInternal ? <Link href={href}>{anchor}</Link> : anchor;
  }

  // ————————————————————————————  button  ————————————————————————————
  return (
    <motion.button
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      {...motionProps}
      ref={ref as React.Ref<HTMLButtonElement>}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
});
