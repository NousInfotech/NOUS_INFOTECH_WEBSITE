"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '../ui/Button';

const ComingSoon = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background px-5">
      <div className="relative z-10 text-center mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest shadow-lg"
        >
          Under Construction
        </motion.div>

        {/* Hero Text */}
        <div className="space-y-4 mt-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-tight"
          >
          Coming <span className='text-primary'>Soon</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/50 font-light text-sm md:text-xl max-w-lg mx-auto leading-relaxed"
          >
            We&apos;re currently crafting a next-level digital experience. 
            Stay tuned for the unveiling of our new features.
          </motion.p>
        </div>
      
        <Button className='mt-5'>
          <Link href="/">
          Back to Home
          </Link>
        </Button>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};

export default ComingSoon;
