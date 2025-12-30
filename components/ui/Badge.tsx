"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div 
      className={cn(
        "inline-block mb-6 px-3 py-1 md:px-4 md:py-2 bg-foreground/5 rounded-full border border-foreground/10 backdrop-blur-sm",
        className
      )}
    >
      <span className="text-[10px] md:text-xs lg:text-sm font-bold tracking-widest uppercase opacity-80 text-primary">
        {children}
      </span>
    </div>
  );
};
