"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { projects } from "@/lib/data";
import CTA from "../common/CTA";

const Projects = () => {
  return (
    <PageWrapper>
      <section className="md:px-10 px-5 mx-auto py-10 md:py-20">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-center">
              Featured <span className="text-primary">Works.</span>
            </h1>
            <p className="text-foreground/40 text-sm md:text-base text-center">
              Explore our portfolio of premium digital products and brand experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-16/10 bg-foreground/5 border border-foreground/10 mb-6 relative overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center group/btn hover:bg-primary hover:border-primary transition-all duration-500 shadow-2xl">
                        <svg 
                          width="20" 
                          height="20" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="white" 
                          strokeWidth="2.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="md:w-6 md:h-6 transition-transform duration-500 group-hover/btn:scale-110"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-md md:text-2xl font-medium group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-foreground/40 uppercase tracking-widest text-xs mt-2">{project.category}</p>
                    </div>
                    <span className="text-foreground/20 font-mono">{project.year}</span>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CTA/>
    </PageWrapper>
  );
}
export default Projects;
