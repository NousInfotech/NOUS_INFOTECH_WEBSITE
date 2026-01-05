"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Instagram, Linkedin} from "lucide-react";
import { navLinks } from "@/lib/data";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://www.instagram.com/nousinfotech?igsh=MWVwajVuMHF5b2hlZA==", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/nous-infotech/posts/?feedView=all", label: "LinkedIn" },
];

export const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
  }, []);

  return (
    <footer className="bg-background border-t border-foreground/10 px-5 md:px-10 py-20 mt-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tighter mb-6 block"
          >
            <div className="w-[150px] relative transition-all duration-500 group-hover:scale-105">
              <Image
                src={
                  mounted && theme === "dark"
                    ? "/logo/dark-logo-removebg-preview.png"
                    : "/logo/lettermark.png"
                }
                alt="NOUS Logo"
                width={200}
                height={200}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </Link>

          <p className="text-foreground/60 max-w-sm mb-8">
            A premium creative agency specializing in high-performance digital
            experiences and strategic branding.
          </p>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary transition-all duration-300 group/social"
              >
                <Icon
                  size={18}
                  className="group-hover/social:scale-110 transition-transform"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold mb-6">
            Company
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-foreground/60">
            {navLinks.slice(0, 4).map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-foreground transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      {/* Resources */}
         <div>
          <h4 className="text-primary uppercase tracking-widest font-bold mb-6">
            Resources
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-foreground/60">
            {navLinks.slice(4).map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-foreground transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold mb-6">
            Contact
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-foreground/60">
            <li>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nousinfotechq@gmail.com.com&su=Business%20Inquiry&body=Hello%20Suhail,%0A%0AI%20would%20like%20to%20connect." 
                className="hover:text-primary transition-colors"
              >
                nousinfotechq@gmail.com
              </a>
            </li>
            <li>
              <a 
                href="tel:+919384102425" 
                className="hover:text-primary transition-colors"
              >
                +91 93841 02425
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-foreground transition-colors"
              >
                Get in touch
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto pt-20 border-t border-foreground/5 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-foreground/40 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} NOUS INFOTECH. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
