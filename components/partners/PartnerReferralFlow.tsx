"use client";

import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const steps = [
  "Refer a Business",
  "We Analyze & Consult",
  "We Close & Execute",
  "You Earn Commission",
];

const PartnerReferralFlow = () => {
  return (
    <div className="mx-5 md:mx-10 mb-10">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-6">
          Referral flow
        </p>
      </ScrollReveal>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-4 lg:gap-2">
        {steps.map((label, i) => (
          <React.Fragment key={label}>
            <ScrollReveal delay={0.05 * i}>
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <div className="w-full lg:w-auto min-w-[200px] px-6 py-4 rounded-2xl border border-foreground/12 bg-foreground/[0.04] text-center text-sm md:text-base font-medium shadow-sm">
                  {label}
                </div>
              </div>
            </ScrollReveal>
            {i < steps.length - 1 && (
              <div
                className="flex justify-center lg:justify-center text-primary shrink-0"
                aria-hidden
              >
                <ArrowDown className="w-6 h-6 lg:hidden" />
                <ArrowRight className="w-6 h-6 hidden lg:block" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PartnerReferralFlow;
