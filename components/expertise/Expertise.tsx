"use client";

import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { services } from "@/lib/data";

const Expertise = () => {
  return (
    <PageWrapper>
      <section className="px-6 max-w-7xl mx-auto py-20">
        <ScrollReveal>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-20 text-center">
            Our <span className="text-primary">Expertise</span>
          </h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {services.map((service, i) => (
            <div key={service.title} className="bg-background p-12 hover:bg-foreground hover:text-background transition-all duration-500 group">
              <ScrollReveal delay={i * 0.05}>
                <service.icon className="w-12 h-12 text-primary mb-8 group-hover:text-black transition-colors" />
                <h3 className="text-2xl font-black uppercase mb-4">{service.title}</h3>
                <p className="text-foreground/60 group-hover:text-background/60 transition-colors">
                  {service.desc}
                </p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
  
export default Expertise