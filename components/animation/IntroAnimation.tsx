"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export const IntroAnimation = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll during animation
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 3500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const containerVariants: Variants = {
    exit: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.2,
      },
    },
  };

  const textContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const letterVariants: Variants = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const words = ["NOUS", "INFOTECH"];

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="intro"
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-100 flex items-center justify-center bg-background"
          >
            <motion.div
              variants={textContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col md:flex-row items-center gap-4 md:gap-8 relative"
            >
              {words.map((word, idx) => (
                <div key={idx} className="flex overflow-hidden">
                  {word.split("").map((letter, letterIdx) => (
                    <motion.span
                      key={letterIdx}
                      variants={letterVariants}
                      className={`text-6xl md:text-9xl font-medium tracking-tighter ${
                        idx === 0 ? "text-foreground" : "text-primary"
                      }`}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
              ))}
              
              {/* Subtle light sweep effect */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-primary/20 to-transparent skew-x-12 pointer-events-none"
              />
            </motion.div>

            {/* Bottom progress bar or line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full h-[2px] bg-primary origin-left"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};
