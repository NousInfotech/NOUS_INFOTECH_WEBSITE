"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { projects } from "@/lib/data";

const Projects = () => {
  return (
    <PageWrapper>
      <section className="px-5 md:px-10 mx-auto py-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
            <h1 className="text-2xl md:text-5xl lg:text-7xl font-medium ">
              Featured <span className="text-primary">Works.</span>
            </h1>
            <p className="text-foreground/40 text-sm">
              Explore our portfolio of premium digital products and brand experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    </PageWrapper>
  );
}
export default Projects;
