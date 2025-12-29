"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg" | "auto"; // ⬅️ added "auto"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "auto", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:opacity-90",
      outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    };

    // 📱📲💻 Auto responsive sizing
    const responsiveSize =
      "px-4 py-2 text-xs sm:px-5 sm:py-2.5 md:px-6 md:py-3 md:text-sm lg:px-7 lg:py-3.5 xl:px-8 xl:py-4 xl:text-base font-semibold";

    const sizes = {
      sm: "px-4 py-2 text-xs font-medium",
      md: "px-6 py-3 text-sm font-semibold",
      lg: "px-8 py-4 text-base font-bold",
      auto: responsiveSize, // ⬅️ Default responsive behavior
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "inline-flex items-center justify-center rounded-[30px] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
