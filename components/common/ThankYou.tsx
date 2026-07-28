"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

const messages = {
  "contact": {
    title: "Message Received",
    description: "Thank you for getting in touch. Our team will review your message and get back to you shortly."
  },
  "hire-us": {
    title: "Inquiry Submitted",
    description: "Thank you for considering us for your project. We'll be in touch soon to discuss the next steps."
  },
  "join-us": {
    title: "Application Received",
    description: "Thank you for your interest in joining our team. We will review your application and contact you if there's a good fit."
  },
  "partner-referral": {
    title: "Referral Received",
    description: "Thank you for the referral. We appreciate your trust in us and will reach out to them shortly."
  },
  "default": {
    title: "Thank You",
    description: "Your submission has been received successfully."
  }
};

const ThankYou = () => {
  const params = useParams();
  const type = (params?.type as string) || "default";
  const content = messages[type as keyof typeof messages] || messages["default"];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-background px-5">
      <div className="relative z-10 text-center space-y-8">
        <div className="relative inline-block">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1,
              type: "spring",
              stiffness: 100 
            }}
            className="text-[60px] md:text-[100px] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-b from-foreground to-foreground/20"
          >
            Thank You
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
            {content.title}
          </h2>
          <p className="text-foreground/50 max-w-md mx-auto text-sm md:text-base leading-relaxed">
            {content.description}
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
                Back to Home
              </span>
              <ArrowLeft className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-x-[-1]" size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
      
      {/* Visual Glitch/Noise Overlay (Subtle) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
    </div>
  );
};

export default ThankYou;
