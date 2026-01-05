import React from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from '../animation/ScrollReveal'
const AboutStory = () => {
  return (
     <div className="border-beam">
          <div className="flex lg:flex-row flex-col md:items-center justify-center border-beam-content md:p-10 p-5 relative overflow-hidden gap-6">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-none duration-500"
            >
              The Story <span className="text-primary">Behind Nous.</span> 
            </motion.h1>
            <div className="space-y-3 text-foreground/70 text-sm md:text-lg font-light">
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
  )
}

export default AboutStory