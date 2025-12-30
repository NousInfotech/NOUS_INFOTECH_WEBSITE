"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useLenis } from "lenis/react";

export const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const whatsappNumber = "+919384102425"; // Updated to a more likely starting point or placeholder
  const whatsappMessage = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-8 right-8 z-9999 flex flex-col gap-4 items-center">
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-foreground text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] dark:bg-primary dark:text-primary-foreground transition-all duration-300 group"
            title="Scroll to Top"
          >
            <ChevronUp className="w-7 h-7 group-hover:translate-y-[-2px] transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.5)] transition-all duration-300 group"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 fill-current group-hover:rotate-12 transition-transform" />
      </motion.a>
    </div>
  );
};
