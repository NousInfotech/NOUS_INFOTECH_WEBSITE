"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { aboutPageContent } from "@/lib/data";
import { Badge } from "../ui/Badge";

const { banner, highlights } = aboutPageContent;

const leaderSocials = [
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/nous-infotech/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nousinfotechq@gmail.com&su=Business%20Inquiry&body=Hello%20Suhail,%0A%0AI%20would%20like%20to%20connect.",
    label: "Email",
  },
];

export default function AboutBanner() {
  return (
    <section className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 max-w-4xl"
      >
        <Badge>{banner.eyebrow}</Badge>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-[1.05]">
          {banner.headline}{" "}
          <span className="text-primary">{banner.headlineAccent}</span>
        </h1>
        <p className="text-sm md:text-lg text-foreground/70 font-light leading-relaxed max-w-3xl">
          {banner.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {highlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-5 md:p-6 text-center hover:border-primary/30 transition-colors duration-300"
          >
            <p className="text-lg md:text-xl font-medium tracking-tight text-primary">
              {item.title}
            </p>
            <p className="text-[10px] md:text-xs uppercase tracking-widest text-foreground/50 mt-2 font-medium leading-snug">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="border-beam rounded-3xl p-[2px] border-primary">
              <div className="border-beam-content rounded-[calc(1.5rem-2px)] relative aspect-4/5 md:aspect-square overflow-hidden shadow-2xl">
              <Image
                src={banner.leaderImage}
                alt={`${banner.leaderName}, ${banner.leaderRole}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </motion.div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
              {banner.leaderSectionEyebrow}
            </span>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm md:text-2xl text-foreground font-medium leading-relaxed mt-2"
            >
              {banner.leaderQuote}{" "}
              <span className="text-primary text-2xl font-light">
                {banner.leaderQuoteAccent}
              </span>
            </motion.p>

            <h2 className="text-md md:text-xl font-extralight tracking-tighter mt-3 text-foreground/70">
              {banner.leaderTaglinePrefix}{" "}
              <span className="text-primary">{banner.leaderTaglineAccent}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div>
              <h3 className="text-xl font-medium">{banner.leaderName}</h3>
              <p className="text-primary font-medium uppercase tracking-widest text-xs">
                {banner.leaderRole}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-widest text-foreground/40">
                Connect
              </p>
              <div className="flex items-center gap-4">
                {leaderSocials.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      social.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors group/social"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground/60 group-hover/social:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
