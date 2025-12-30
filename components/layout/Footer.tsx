"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);

  return (
    <footer className="bg-background border-t border-foreground/10 py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="text-3xl font-bold tracking-tighter mb-6 block">
          <div className="w-[150px] relative transition-all duration-500 group-hover:scale-105">
            <Image 
              src={mounted && (theme === "dark") ? "/logo/dark-logo-removebg-preview.png" : "/logo/lettermark.png"} 
              alt="NOUS Logo" 
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
          </Link>
          <p className="text-foreground/60 max-w-sm mb-8">
            A premium creative agency specializing in high-performance digital experiences and strategic branding.
          </p>
        </div>

        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold mb-6">Company</h4>
          <ul className="flex flex-col gap-4 text-sm text-foreground/60">
            <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="/expertise" className="hover:text-foreground transition-colors">Expertise</Link></li>
            <li><Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link></li>
            <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold mb-6">Contact</h4>
          <ul className="flex flex-col gap-4 text-sm text-foreground/60">
            <li>hello@nousinfotech.com</li>
            <li>+1 (555) 000-0000</li>
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Get in touch</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-20 border-t border-foreground/5 flex flex-col md:row justify-between items-center gap-6 mt-20">
        <p className="text-foreground/40 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} NOUS INFOTECH. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
