"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background px-5">
      <div className="relative z-10 text-center space-y-8">
        {/* Animated 404 Text */}
        <div className="relative inline-block">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100 
            }}
            className="text-[120px] md:text-[200px] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/20"
          >
            404
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
            Lost in <span className="text-primary">Digital Space</span>?
          </h2>
          <p className="text-foreground/50 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            The page you are looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back to familiar territory.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link href="/">
            <button className="group relative px-8 py-4 bg-primary text-white rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:pr-12 shadow-xl shadow-primary/20">
              <span className="relative z-10 flex items-center gap-2">
                <Home size={18} />
                Go Back Home
              </span>
              <ArrowLeft className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-x-[-1]" size={18} />
            </button>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="px-8 py-4 border border-foreground/10 hover:border-primary/50 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 text-foreground/60 hover:text-primary backdrop-blur-sm"
          >
            Previous Page
          </button>
        </motion.div>
      </div>
      
      {/* Visual Glitch/Noise Overlay (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
    </div>
  );
};

export default NotFound;
