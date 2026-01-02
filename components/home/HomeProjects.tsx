"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import { projects } from "@/lib/data";
import { Badge } from "../ui/Badge";

const HomeProjects = () => {
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Constants for speed and width
  const homeProjects = projects.slice(0, 8);
  const speed = 80; // Higher is slower (was 40)
  const totalWidth = homeProjects.length * 570; // 450px width + 32px gap

  const startAnimation = useCallback((currentX: number) => {
    const animate = async (startX: number) => {
      const remainingDistance = Math.abs(-totalWidth - startX);
      const duration = (remainingDistance / totalWidth) * speed;

      await controls.start({
        x: -totalWidth,
        transition: {
          duration,
          ease: "linear",
        },
      });

      x.set(0);
      animate(0);
    };

    animate(currentX);
  }, [controls, speed, totalWidth, x]);

  useEffect(() => {
    if (!isPaused) {
      startAnimation(x.get());
    } else {
      controls.stop();
    }
    return () => controls.stop();
  }, [controls, isPaused, startAnimation, x]);


  const handleDragStart = () => {
    // Stop animation and clear any existing timers
    controls.stop();
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleDragEnd = () => {
    // Start 5 second timer to resume
    timerRef.current = setTimeout(() => {
      setIsPaused(false);
      // Ensure x is wrapped within the limits
      let currentX = x.get();
      if (currentX <= -totalWidth) currentX = 0;
      if (currentX > 0) currentX = -totalWidth;
      x.set(currentX);
    }, 5000);
  };

  return (
    <section className="py-10 px-5 md:px-10 bg-background relative overflow-hidden">
      <div className="mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-10 px-2">
            <Badge>Projects</Badge>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h2 className="text-2xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tighter">
                Crafting digital
                <span className="text-primary"> excellence.</span>
              </h2>
              <Link href="/projects" className="hidden md:block">
                <Button variant="outline" className="group">
                  View All Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative overflow-hidden -mx-10 cursor-grab active:cursor-grabbing group/marquee">
          <motion.div 
            ref={containerRef}
            className="flex gap-8 px-10"
            style={{ x }}
            animate={controls}
            drag="x"
            dragConstraints={{ left: -totalWidth, right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {/* Double the projects for infinite scroll feel during drag */}
            {[...homeProjects, ...homeProjects].map((project, index) => (
               <motion.div 
                 key={index} 
                 className="flex-none w-[280px] md:w-[500px]"
                 whileHover={{ 
                   y: -10,
                   transition: { type: "spring", stiffness: 400, damping: 17 }
                 }}
               >
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-foreground/10 group select-none bg-foreground/5">
                    {/* Image with enhanced scale and rotation on hover */}
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 pointer-events-none"
                      />
                    </div>
                    
                    {/* Dynamic Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80 pointer-events-none" />

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

                    <div className="absolute inset-x-0 bottom-0 p-3 flex flex-col justify-end z-10">
                      <div className="flex items-center justify-between gap-4">
                        <div className="pointer-events-none flex-1">
                          <motion.h3 
                            className="text-sm md:text-3xl font-medium text-white tracking-tighter"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                          >
                            {project.title}
                          </motion.h3>
                        </div>
                        
                        <Link href={project.link} target="_blank" className="relative group/btn z-20">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 45 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-7 h-7 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-white text-white"
                          >
                            <ArrowUpRight className="w-5 h-5 md:w-7 md:h-7 transition-colors duration-300" />
                          </motion.div>
                        </Link>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-tr-2xl pointer-events-none" />
                  </div>
               </motion.div>
            ))}
          </motion.div>
      
        </div>

        <div className="md:hidden mt-10">
          <ScrollReveal delay={0.4}>
            <Link href="/projects" className="flex items-center justify-center mx-5">
              <Button variant="outline" className="w-full md:w-auto">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
