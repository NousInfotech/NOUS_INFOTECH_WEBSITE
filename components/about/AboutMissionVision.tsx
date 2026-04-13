"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Gem } from "lucide-react";
import { ScrollReveal } from "../animation/ScrollReveal";
import { aboutMissionVisionValues } from "@/lib/data";

const icons = [Compass, Eye, Gem];

const AboutMissionVision = () => {
  return (
    <section className="relative">
      <div className="border-beam">
        <div className="border-beam-content md:p-10 p-5 space-y-10 md:space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto space-y-2"
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              Purpose
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tighter">
              Mission, vision &{" "}
              <span className="text-primary">values.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {aboutMissionVisionValues.map((pillar, index) => {
              const Icon = icons[index] ?? Compass;
              return (
                <ScrollReveal key={pillar.title} delay={index * 0.08}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="h-full rounded-2xl border border-foreground/10 bg-foreground/5 p-6 md:p-8 flex flex-col gap-4"
                  >
                    <div className="w-12 h-12 rounded-full border border-foreground/10 bg-background flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" aria-hidden />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-foreground/70 text-sm md:text-base font-light leading-relaxed flex-1">
                      {pillar.description}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMissionVision;
