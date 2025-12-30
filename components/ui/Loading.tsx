"use client";

import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

export default function LoadingComponent() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto space-y-12">
      {/* Hero Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Skeleton className="h-12 w-2/3 md:h-20" variant="rounded" glow={true} />
          <Skeleton className="h-6 w-full" variant="rounded" />
          <Skeleton className="h-6 w-5/6" variant="rounded" />
          <div className="pt-4">
            <Skeleton className="h-12 w-40 rounded-full" />
          </div>
        </div>
        <Skeleton className="aspect-square w-full" variant="rounded" glow={true} />
      </div>

      {/* Grid Section Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4 p-6 border border-foreground/5 bg-foreground/5 rounded-2xl">
            <Skeleton className="h-40 w-full mb-4" variant="rounded" />
            <Skeleton className="h-6 w-1/3" variant="rounded" />
            <Skeleton className="h-8 w-full" variant="rounded" />
            <Skeleton className="h-4 w-5/6" variant="rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
