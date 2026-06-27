"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  width?: "w-full" | "w-fit" | "inline";
  delay?: number;
  duration?: number;
  y?: number;
}

export default function Reveal({
  children,
  width = "w-full",
  delay = 0,
  duration = 0.5,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const mainVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className={width === "inline" ? "inline" : width}
    >
      <motion.div
        variants={mainVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{
          duration: shouldReduceMotion ? 0.05 : duration,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
