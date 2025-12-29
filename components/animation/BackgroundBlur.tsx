"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackgroundBlurProps {
  className?: string;
  size?: string;
  color?: string;
  opacity?: number;
  blur?: string;
  animate?: boolean;
}

const BackgroundBlur = ({
  className,
  size = "w-[600px] h-[600px]",
  color = "bg-primary",
  opacity = 0.05,
  blur = "blur-[120px]",
  animate = true,
}: BackgroundBlurProps) => {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full pointer-events-none z-0",
        size,
        color,
        blur,
        className
      )}
      initial={{ opacity: 0 }}
      animate={
        animate
          ? {
              opacity: [opacity, opacity * 1.5, opacity],
              scale: [1, 1.1, 1],
            }
          : { opacity }
      }
      transition={
        animate
          ? {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : { duration: 0.5 }
      }
    />
  );
};

export default BackgroundBlur;
