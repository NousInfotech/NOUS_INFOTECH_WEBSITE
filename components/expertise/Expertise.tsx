"use client";

import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ExpertiseGrid } from "../common/ExpertiseGrid";
import CTA from "../common/CTA";

const Expertise = () => {
  return (
    <PageWrapper>
      <section className="md:px-10 px-5 mx-auto py-10 md:py-20">
        <ScrollReveal>
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-6 text-center">
            Scale with <span className="text-primary">High-Converting Solutions</span>
          </h1>
          <p className="text-center text-foreground/60 font-light max-w-2xl mx-auto mb-10 text-sm md:text-lg">
            From digital marketing and lead generation to full digital transformation, custom software,
            and long-term growth partnership.
          </p>
        </ScrollReveal>
        <ExpertiseGrid />
      </section>
       <CTA/>
    </PageWrapper>
  );
}
  
export default Expertise