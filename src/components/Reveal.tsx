"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.2, 0.8, 0.2, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  as?: "div" | "section" | "header" | "span";
};

/** Fade-and-rise a block into view once, from a visible resting state on reduced-motion. */
export function Reveal({ children, className, id, delay = 0, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M
      id={id}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

const container: Variants = {
  hide: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hide: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Container that staggers its <StaggerItem> children as they enter. */
export function Stagger({
  children,
  className,
  id,
  style,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div id={id} className={className} style={style}>
        {children}
      </div>
    );
  }
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      variants={container}
      initial="hide"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
