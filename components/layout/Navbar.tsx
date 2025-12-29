"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  // { name: "About", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-9999 bg-background/80 backdrop-blur-xs border-b border-foreground/10">
      <div className="mx-auto px-6 h-[80px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <div className="w-[150px] relative transition-all duration-500 group-hover:scale-105">
            <Image 
              src="/logo/lettermark.png" 
              alt="NOUS Logo" 
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm tracking-widest hover:text-primary transition-colors py-2"
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
          <Link href="/hire">
            <button className="cursor-pointer bg-primary text-white px-6 py-2 text-xs font-medium uppercase tracking-widest hover:opacity-90 transition-opacity rounded-2xl">
              Hire Agency
            </button>
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background border-b border-foreground/10 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg uppercase tracking-widest font-medium",
                pathname === link.href ? "text-primary" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/hire" onClick={() => setIsOpen(false)}>
            <button className="w-full bg-primary text-black py-4 font-bold uppercase tracking-widest">
              Hire Agency
            </button>
          </Link>
          <div className="flex justify-center pt-4">
            <ThemeToggle />
          </div>
        </motion.div>
      )}
    </nav>
  );
};
