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
            Solutions for <span className="text-primary">Digital Growth</span>
          </h1>
          <p className="text-center text-foreground/60 font-light max-w-2xl mx-auto mb-10 text-sm md:text-lg">
            From digital transformation and workflow automation to custom software,
            integrations, and long-term technology partnership.
          </p>
        </ScrollReveal>
        <ExpertiseGrid />
      </section>
       <CTA/>
    </PageWrapper>
  );
}
  
export default Expertise