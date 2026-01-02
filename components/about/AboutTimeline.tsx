"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { timelineData } from "@/lib/data";

const AboutTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative max-w-7xl mx-auto py-10 md:py-20 px-5 overflow-hidden">
      <div className="text-center mb-10 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter"
        >
          Our <span className="text-primary">Process</span>
        </motion.h2>
      </div>

      <div className="relative pt-20 pb-20">
        {/* Top Wordmark */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 -top-1 z-20"
        >
          <Image 
            src="/logo/wordmark.png" 
            alt="Nous Wordmark Top" 
            width={120} 
            height={40} 
          />
        </motion.div>

        {/* Central Line Background */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-foreground/10" />
        
        {/* Center Line Fill Animation */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary origin-top z-0"
        />

        <div className="space-y-16 md:space-y-32">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isPortrait = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-row items-center">
                {/* Side Image */}
                <div className={`flex w-1/2 items-center justify-center ${isEven ? 'order-2 pl-4 md:pl-12 lg:pl-20' : 'order-1 pr-4 md:pr-12 lg:pr-20'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: isEven ? 5 : -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative overflow-hidden rounded-xl md:rounded-2xl border border-foreground/10 shadow-lg md:shadow-2xl ${
                      isPortrait ? 'aspect-3/4 w-full md:w-1/2' : 'aspect-4/3 w-full md:w-2/3'
                    }`}
                  >
                    <Image
                      src={item.image || '/placeholder.png'}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content Block */}
                <div className={`w-1/2 ${isEven ? 'order-1 text-right pr-4 md:pr-12 lg:pr-20' : 'order-2 text-left pl-4 md:pl-12 lg:pl-20'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:block"
                  >

                    <h3 className="text-sm md:text-2xl lg:text-3xl font-bold uppercase mb-1 md:mb-4 text-foreground leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-[10px] md:text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Circle (Following the line) */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-4 h-4 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-background border-2 md:border-4 border-primary flex items-center justify-center shadow-lg"
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Wordmark */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 z-20"
        >
          <Image 
            src="/logo/wordmark.png" 
            alt="Nous Wordmark Bottom" 
            width={120} 
            height={40} 
            className="dark:invert grayscale"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTimeline;
