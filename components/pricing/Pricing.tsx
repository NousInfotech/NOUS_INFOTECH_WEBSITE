"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PageWrapper } from "../animation/PageWrapper";
import PricingCard from "../common/PricingCard";

const Pricing = () => {
  return (
    <PageWrapper>
    <section className="md:px-10 px-5 mx-auto py-10 md:py-20">
      <ScrollReveal>
        <div className="text-center mb-10 space-y-4">
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-center">
            Our <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-foreground/40 tracking-widest text-sm mx-auto">
            Transparent pricing for every stage of your digital journey.
          </p>
        </div>
      </ScrollReveal>
     <PricingCard/>
    </section>
    </PageWrapper>
  );
};

export default Pricing;
