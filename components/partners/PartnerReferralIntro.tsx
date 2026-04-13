"use client";

import React from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import BackgroundBlur from "@/components/animation/BackgroundBlur";
import { Badge } from "@/components/ui/Badge";

const PartnerReferralIntro = () => {
  return (
    <section className="relative px-5 md:px-10 py-12 md:py-16 overflow-hidden">
      <BackgroundBlur className="top-1/2 right-0" opacity={0.1} />
      <ScrollReveal>
        <Badge>Partner referral program</Badge>
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-5 max-w-4xl">
          Grow With Us —{" "}
          <span className="text-primary">Earn by Referring</span>
        </h2>
        <p className="text-sm md:text-xl text-foreground/65 max-w-3xl font-light leading-relaxed">
          Partner with us and earn by introducing businesses that need systems,
          automation, or tech teams.
        </p>
      </ScrollReveal>
    </section>
  );
};

export default PartnerReferralIntro;
