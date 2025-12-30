"use client";

import React from "react";
import { Skeleton } from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <div className="md:px-10 px-5 mx-auto py-10 md:py-20">
      <div className="mx-auto">
        {/* Header Section Skeleton */}
        <div className="mb-10 text-center space-y-4">
          <Skeleton className="h-16 w-1/2 mx-auto md:h-24" variant="rounded" />
          <Skeleton className="h-4 w-1/3 mx-auto" variant="rounded" />
        </div>

        {/* Featured Post Skeleton */}
        <div className="mb-16 space-y-6">
          <Skeleton className="aspect-video md:aspect-21/9 w-full rounded-2xl md:rounded-3xl" variant="rounded" glow={true} />
          <div className="space-y-4">
            <Skeleton className="h-4 w-20" variant="rounded" />
            <Skeleton className="h-10 w-3/4" variant="rounded" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-24" variant="rounded" />
              <Skeleton className="h-4 w-24" variant="rounded" />
            </div>
          </div>
        </div>

        {/* Blog Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-6">
              <Skeleton className="aspect-video w-full rounded-2xl" variant="rounded" />
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Skeleton className="h-3 w-20" variant="rounded" />
                  <Skeleton className="h-3 w-20" variant="rounded" />
                </div>
                <Skeleton className="h-8 w-5/6" variant="rounded" />
                <Skeleton className="h-4 w-full" variant="rounded" />
                <Skeleton className="h-4 w-2/3" variant="rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
