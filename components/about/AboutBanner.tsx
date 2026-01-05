"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Instagram } from 'lucide-react';

const AboutBanner = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center lg:px-30">
          {/* Left Side: CEO Image */}
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
                  src="/team/nous-ceo1.png"
                  alt="CEO of Nous Infotech"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
          {/* Right Side: Content */}
          <div className="space-y-5">
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm">
                  Together we can achieve more
                </span>
               
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm md:text-2xl text-foreground font-medium leading-relaxed"
              >
                If you can dream about it, if you can picture it in your mind <span className="text-primary text-2xl font-light">THEN YOU CAN ACHIEVE IT</span>
               </motion.p>

                <h2 className="text-md md:text-xl font-extralight tracking-tighter mt-3 text-foreground/70">
                  Driving Innovation 
                  <span className="text-primary"> with Purpose.</span>
                </h2>
              </motion.div>

             
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-5"
            >
              <div>
                <h3 className="text-xl font-medium">Suhail Ahmed</h3>
                <p className="text-primary font-medium uppercase tracking-widest text-xs">
                  Founder & CEO
                </p>
              </div>

              {/* Connect Section */}
              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-widest text-foreground/40">
                  Connect
                </p>
                <div className="flex items-center gap-4">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/suhail-ahamed/", label: "LinkedIn" },
                    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=Suhxil14@gmail.com&su=Business%20Inquiry&body=Hello%20Suhail,%0A%0AI%20would%20like%20to%20connect.", label: "Email" },
                    { icon: Instagram, href: "https://www.instagram.com/ahmedddddd.ddddd?igsh=MXJ0MTRtam1mZHd5Yw==", label: "Instagram" },
                   ].map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                      rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                      className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </section>
  );
};

export default AboutBanner;
