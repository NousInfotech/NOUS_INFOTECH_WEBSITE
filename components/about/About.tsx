"use client";

import { motion } from "framer-motion";
import { PageWrapper } from "@/components/animation/PageWrapper";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import AboutTimeline from "./AboutTimeline";
import AboutBanner from "./AboutBanner";
import { teamMembers } from "@/lib/data";
import AboutTeamCard from "./AboutTeamCard";
import CTA from "../common/CTA";
import Testimonials from "../common/Testimonials";
const About = () => {
  return (
    <PageWrapper>
      <section className="md:px-10 px-5 mx-auto py-10 space-y-20">
       <AboutBanner />

         {/* Team Section */}
        <div className="space-y-4">
          <ScrollReveal>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-medium">
                The Minds <span className="text-primary">Behind the Code.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <AboutTeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>

        <div className="border-beam">
          <div className="flex lg:flex-row flex-col items-center justify-center border-beam-content md:p-10 p-5 relative overflow-hidden gap-6">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-none duration-500"
            >
              The Story <span className="text-primary">Behind Nous.</span> 
            </motion.h1>
            <div className="space-y-3 text-foreground/70 text-sm md:text-lg max-w-xl font-light">
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
        </div> 
        <Testimonials />
        <AboutTimeline />
      </section>
    <CTA/>

    </PageWrapper>
  );
}

export default About;
