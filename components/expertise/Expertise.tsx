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
          <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium tracking-tighter mb-10 text-center">
            Our <span className="text-primary">Expertise</span>
          </h1>
        </ScrollReveal>
        <ExpertiseGrid />
      </section>
       <CTA/>
    </PageWrapper>
  );
}
  
export default Expertise