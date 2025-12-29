"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { homeProjects } from "@/lib/data";

const Projects = () => {
  return (
    <PageWrapper>
      <section className="px-6 max-w-7xl mx-auto py-20">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
              Featured <br /> <span className="text-primary italic">Works.</span>
            </h1>
            <p className="text-foreground/40 uppercase tracking-widest text-sm max-w-xs text-right">
              Explore our portfolio of premium digital products and brand experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {homeProjects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-16/10 bg-foreground/5 border border-foreground/10 mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className="text-primary text-5xl font-black opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                    NOUS.
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-black uppercase group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-foreground/40 uppercase tracking-widest text-xs mt-2">{project.category}</p>
                  </div>
                  <span className="text-foreground/20 font-mono">{project.year}</span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
export default Projects