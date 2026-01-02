import { ScrollReveal } from '../animation/ScrollReveal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamMember } from '@/types/dataTypes';
import { Linkedin, Twitter, Github, Instagram } from 'lucide-react'; 

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
};

const AboutTeamCard = ({ member, index }: { member: TeamMember, index: number }) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.div 
        whileHover={{ 
          transition: { type: "spring", stiffness: 400, damping: 17 }
        }}
        className="group relative overflow-hidden bg-foreground/5 dark:bg-foreground/3 border border-foreground/10 p-4 transition-all duration-500 hover:border-primary/50 rounded-3xl"
      >
        <div className="relative aspect-4/5 overflow-hidden mb-6 bg-primary/5 flex items-center justify-center rounded-2xl">
          {member.image ? (
            <>
              <Image 
                src={member.image} 
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 z-20" />
              
              {/* Social Icons Container */}
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-center gap-3 z-30 translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">
                {member.socials?.map((social, idx) => {
                  const Icon = socialIcons[social.platform];
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        boxShadow: "0 10px 25px -5px rgba(var(--primary), 0.5)" 
                      }}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-300 shadow-xl"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20"
              >
                <span className="text-4xl font-bold text-primary/40 leading-none">
                  {member.name.charAt(0)}
                </span>
              </motion.div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary/30 font-medium">
                No Portrait Available
              </div>

              {/* Social Overlay for No Portrait */}
              <div className="absolute inset-0 bg-black/20 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20">
                {member.socials?.map((social, idx) => {
                  const Icon = socialIcons[social.platform];
                  return (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-primary text-white flex items-center justify-center backdrop-blur-md border border-white/30 transition-all duration-300 relative z-30"
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="space-y-1 relative z-10">
          <motion.h3 
            className="text-xl font-bold uppercase tracking-tighter transition-colors duration-300 group-hover:text-primary"
          >
            {member.name}
          </motion.h3>
          <p className="text-sm text-primary font-medium uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
            {member.role}
          </p>
        </div>
        
        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/40 group-hover:w-full group-hover:h-full transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none" />
        
        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      </motion.div>
    </ScrollReveal>
  );
};
export default AboutTeamCard
