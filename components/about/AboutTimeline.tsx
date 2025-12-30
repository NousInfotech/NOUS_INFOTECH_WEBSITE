"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";

const timelineData = [
  {
    title: "The Foundation",
    description: "Nous Infotech was founded with a vision to redefine digital experiences through precision and innovation.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Global Expansion",
    description: "We expanded our reach, collaborating with international partners and delivering high-impact solutions globally.",
    image: "https://images.pexels.com/photos/3182762/pexels-photo-3182762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Design Mastery",
    description: "Our focus shifted towards high-end aesthetics, merging elite design with robust technical foundations.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Award Winning Projects",
    description: "Recognized for excellence in web development and creative strategy across multiple industries.",
    image: "https://images.pexels.com/photos/700413/pexels-photo-700413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "The Future of Nous",
    description: "Continuing to push boundaries with AI integration and immersive digital storytelling.",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

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
    <section ref={containerRef} className="relative max-w-7xl mx-auto py-10 px-5 overflow-hidden">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter"
        >
          Our <span className="text-primary">Journey</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Central Line Background */}
        <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-foreground/10" />
        
        {/* Center Line Fill Animation */}
        <motion.div 
          style={{ scaleY }}
          className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary origin-top z-0"
        />

        <div className="space-y-16 md:space-y-32">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isPortrait = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                {/* Desktop Side Image (md and up) */}
                <div className={`hidden md:flex w-1/2 items-center justify-center ${isEven ? 'order-2 pl-12 lg:pl-20' : 'order-1 pr-12 lg:pr-20'}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: isEven ? 5 : -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative overflow-hidden rounded-2xl border border-foreground/10 shadow-2xl ${
                      isPortrait ? 'aspect-3/4 w-1/2' : 'aspect-4/3 w-2/3'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                {/* Content Block */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:order-1 md:pr-12 lg:pr-20' : 'md:order-2 md:pl-12 lg:pl-20'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`md:block ${isEven ? 'md:text-right' : 'md:text-left'}`}
                  >
                    {/* Mobile/Tablet Image */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="md:hidden relative aspect-video w-full rounded-xl overflow-hidden mb-6 border border-foreground/5"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase mb-2 md:mb-4 text-foreground leading-tight tracking-tight">
                      {item.title}
                    </h3>
                    <p className={`text-foreground/70 text-base md:text-lg leading-relaxed ${isEven ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Circle (Following the line) */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 md:-translate-y-1/2 z-10 pt-1 md:pt-0">
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
      </div>
    </section>
  );
};

export default AboutTimeline;
