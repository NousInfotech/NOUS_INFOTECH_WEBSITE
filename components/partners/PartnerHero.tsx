"use client";

import React from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import BackgroundBlur from "@/components/animation/BackgroundBlur";
import { Badge } from "@/components/ui/Badge";

const PartnerHero = () => {
  return (
    <section className="relative px-5 md:px-10 pt-6 pb-4 md:pb-8 overflow-hidden">
      <BackgroundBlur className="top-0 right-1/3" opacity={0.12} />
      <ScrollReveal>
        <div className="max-w-4xl">
          <Badge>Partners</Badge>
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-medium tracking-tighter leading-tight mb-6">
            Build the future{" "}
            <span className="text-primary">with us</span>
          </h1>
          <p className="text-sm md:text-xl text-foreground/65 max-w-2xl font-light leading-relaxed">
            Align with a team that ships systems, automation, and dedicated tech
            talent — and unlock new revenue when you refer businesses that need
            it most.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default PartnerHero;
