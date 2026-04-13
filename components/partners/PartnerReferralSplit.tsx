"use client";

import React from "react";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import BackgroundBlur from "@/components/animation/BackgroundBlur";
import PartnerReferralForm from "./PartnerReferralForm";

const points = [
  "Refer businesses that need tech systems or teams",
  "We handle consultation, execution, and delivery",
  "You earn a commission on every successful deal",
];

const PartnerReferralSplit = () => {
  return (
    <div
      id="referral"
      className="my-10 mx-5 md:mx-10 border-beam scroll-mt-24"
    >
      <section className="relative md:p-10 p-5 border-beam-content overflow-hidden">
        <BackgroundBlur className="top-0 right-1/4" opacity={0.07} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold mb-4">
              Referral box
            </p>
            <h2 className="text-2xl md:text-4xl font-medium mb-8 leading-tight">
              Turn your network into{" "}
              <span className="text-primary">revenue</span>
            </h2>
            <ul className="space-y-4">
              {points.map((text) => (
                <li
                  key={text}
                  className="flex gap-3 text-sm md:text-base text-foreground/80 font-light"
                >
                  <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-6 text-center md:text-left">
                Submit a referral
              </h3>
              <PartnerReferralForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PartnerReferralSplit;
