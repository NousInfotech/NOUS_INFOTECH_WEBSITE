"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "rectangle" | "circle" | "rounded";
  glow?: boolean;
}

export const Skeleton = ({ className, variant = "rectangle", glow = false }: SkeletonProps) => {
  return (
    <div className="relative group">
      {glow && (
        <div 
          className={cn(
            "absolute inset-0 bg-foreground/10 blur-2xl animate-pulse-glow z-0",
            variant === "circle" && "rounded-full",
            variant === "rounded" && "rounded-lg",
            variant === "rectangle" && "rounded-sm"
          )}
        />
      )}
      <div
        className={cn(
          "relative overflow-hidden bg-foreground/5 z-10",
          variant === "circle" && "rounded-full",
          variant === "rounded" && "rounded-lg",
          variant === "rectangle" && "rounded-sm",
          "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-linear-to-r before:from-transparent before:via-foreground/3 before:to-transparent",
          className
        )}
      />
    </div>
  );
};
