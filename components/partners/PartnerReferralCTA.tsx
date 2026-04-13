"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import BackgroundBlur from "@/components/animation/BackgroundBlur";

const PartnerReferralCTA = () => {
  return (
    <div className="my-10 mx-5 md:mx-10 border-beam">
      <section className="relative flex flex-col gap-6 md:gap-8 p-8 md:p-12 border-beam-content text-center md:text-left md:flex-row md:items-center md:justify-between overflow-hidden">
        <BackgroundBlur className="bottom-0 right-1/4" opacity={0.15} />
        <ScrollReveal>
          <h2 className="text-2xl md:text-4xl font-medium leading-tight max-w-xl">
            Know someone struggling with operations?
          </h2>
          <p className="mt-3 text-foreground/55 text-sm md:text-base font-light max-w-md">
            Send a referral in minutes — we handle the rest.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <Link href="/partners#referral" className="inline-block w-full md:w-auto">
            <Button className="w-full md:w-auto text-white">
              Refer now & earn
            </Button>
          </Link>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default PartnerReferralCTA;
