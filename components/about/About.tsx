"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const About = () => {
  return (
    <PageWrapper>
      <section className="px-6 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
            >
              The <span className="text-primary italic">Story</span> <br /> Behind Nous.
            </motion.h1>
            <div className="space-y-6 text-foreground/70 text-lg">
              <ScrollReveal delay={0.1}>
                <p>
                  NOUS INFOTECH was born out of a desire to bridge the gap between technical excellence and creative expression. We don&apos;t just build websites; we build digital identities.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p>
                  Our culture is built on the pursuit of perfection. Every pixel, every line of code, and every interaction is meticulously crafted to ensure the highest standard of quality.
                </p>
              </ScrollReveal>
            </div>
          </div>
          
          <div className="relative aspect-square bg-foreground/5 border border-foreground/10 flex items-center justify-center overflow-hidden">
             <motion.div 
               animate={{ 
                 scale: [1, 1.1, 1],
                 rotate: [0, 5, -5, 0]
               }}
               transition={{ duration: 10, repeat: Infinity }}
               className="w-2/3 h-2/3 border-2 border-primary"
             />
             <motion.div 
               animate={{ 
                 scale: [1.2, 1, 1.2],
                 rotate: [0, -10, 10, 0]
               }}
                transition={{ duration: 15, repeat: Infinity }}
                className="absolute w-1/2 h-1/2 border-2 border-foreground/20"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-50" />
          </div>
        </div>

        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12">
          {['Innovation', 'Precision', 'Elegance'].map((value, i) => (
            <ScrollReveal key={value} delay={i * 0.1}>
              <div className="p-10 bg-foreground text-background h-full">
                <span className="text-primary font-bold text-4xl mb-4 block">0{i+1}</span>
                <h3 className="text-2xl font-black uppercase mb-4">{value}</h3>
                <p className="text-background/60">
                  Driving the industry forward with cutting-edge solutions and a commitment to excellence.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}

export default About;