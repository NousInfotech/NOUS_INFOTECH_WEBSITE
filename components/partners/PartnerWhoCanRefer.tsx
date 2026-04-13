"use client";

import React from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import BackgroundBlur from "@/components/animation/BackgroundBlur";

const roles = [
  "Consultants",
  "Accountants",
  "Agency owners",
  "Business advisors",
];

const PartnerWhoCanRefer = () => {
  return (
    <div className="mx-5 md:mx-10 mb-10 border-beam">
      <section className="relative md:p-10 p-6 border-beam-content overflow-hidden">
        <BackgroundBlur className="bottom-0 left-0" opacity={0.06} />
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-medium mb-3">
            Who can <span className="text-primary">refer</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base mb-8 max-w-2xl font-light">
            Anyone with access to growing businesses:
          </p>
        </ScrollReveal>
        <div className="flex flex-wrap gap-3">
          {roles.map((role, i) => (
            <ScrollReveal key={role} delay={0.05 * i}>
              <span className="inline-block px-5 py-2.5 rounded-full border border-foreground/12 bg-foreground/[0.04] text-sm font-medium">
                {role}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PartnerWhoCanRefer;
