"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";
import { ScrollReveal } from "../animation/ScrollReveal";
import { projects } from "@/lib/data";

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
    <section className="pb-10 px-5 md:px-10 bg-background relative overflow-hidden">
      <div className="mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-10 px-2">
            <div className="inline-block mb-6 px-4 py-2 bg-foreground/5 rounded-full border border-foreground/10 backdrop-blur-sm">
              <span className="text-sm font-semibold tracking-wider opacity-80 text-primary uppercase">Projects</span>
            </div>
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

        <div className="relative overflow-hidden -mx-10 cursor-grab active:cursor-grabbing">
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
               <div key={index} className="flex-none w-[350px] md:w-[450px]">
                  <div className="relative aspect-video overflow-hidden rounded-3xl border border-foreground/10 group select-none">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transition-opacity duration-300 group-hover:opacity-80 pointer-events-none"
                      />
                    </div>
                    
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90 pointer-events-none" />

                    <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center justify-between">
                        <div className="pointer-events-none">
                          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-1 block opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                            {project.category}
                          </span>
                          <h3 className="text-2xl font-semibold text-white tracking-tight">
                            {project.title}
                          </h3>
                        </div>
                        
                        <Link href={project.link} target="_blank" className="z-20">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-white/20">
                            <ArrowUpRight className="text-white w-5 h-5 md:w-6 md:h-6" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
               </div>
            ))}
          </motion.div>

          {/* Side Fades for Premium Look */}
          {/* <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-background to-transparent z-20 pointer-events-none" /> */}
        </div>

        <div className="md:hidden mt-10">
          <ScrollReveal delay={0.4}>
            <Link href="/projects" className="flex items-center justify-center">
              <Button variant="outline">
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
