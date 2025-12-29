"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

useEffect(() => {
  Promise.resolve().then(() => setMounted(true));
}, []);


  if (!mounted) return <div className="p-2 w-10 h-10" />;

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-none border border-foreground/10 hover:border-primary transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} className="text-primary" />
      ) : (
        <Moon size={20} className="text-primary" />
      )}
    </motion.button>
  );
};
