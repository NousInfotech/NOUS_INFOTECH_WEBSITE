"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "../animation/ScrollReveal";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { aboutExpertiseSnapshot } from "@/lib/data";

const AboutExpertiseSnapshot = () => {
  return (
    <section className="relative">
      <div className="border-beam">
        <div className="border-beam-content md:p-10 p-5 space-y-8 md:space-y-10">
          <ScrollReveal>
            <Badge>What we&apos;re built for</Badge>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10">
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-5xl lg:text-6xl font-medium tracking-tighter leading-tight max-w-4xl"
              >
                {aboutExpertiseSnapshot.headline}{" "}
                <span className="text-primary">{aboutExpertiseSnapshot.headlineAccent}</span>
              </motion.h2>
              <Link href="/expertise" className="shrink-0 hidden lg:block">
                <Button variant="outline">
                  View expertise
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-foreground/70 text-sm md:text-lg font-light leading-relaxed max-w-3xl">
              {aboutExpertiseSnapshot.body}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {aboutExpertiseSnapshot.focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm text-foreground/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <div className="lg:hidden">
            <ScrollReveal delay={0.2}>
              <Link href="/expertise" className="flex justify-center">
                <Button variant="outline" className="w-full sm:w-auto">
                  View expertise
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExpertiseSnapshot;
