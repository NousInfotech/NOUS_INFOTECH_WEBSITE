import React from 'react'
import { blogData } from '@/lib/blog-data'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import formatName from '@/lib/formatName'

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  },
};
const LatestBlog = () => {
  return (
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
            {/* Left Column: Large Featured Blog (1) */}
            <div className="lg:col-span-8">
              {blogData.slice(0, 1).map((post) => (
                <Link key={post.id} href={`/blog/${formatName(post.title)}`}>
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group cursor-pointer flex flex-col h-full space-y-4"
                  >
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-foreground/10">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-5 left-5 flex gap-2">
                        <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
                          Latest
                        </span>
                        <span className="px-4 py-1.5 rounded-full bg-background/60 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-foreground">
                          {post.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h2 className="text-sm md:text-4xl font-medium text-white line-clamp-2 md:leading-tight">
                          {post.title}
                        </h2>
                      </div>
                    </div>
                    <div className="px-4 space-y-3">
                      <div className="flex items-center gap-4 text-xs text-foreground/50">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                      </div>
                      <div className="text-foreground/60 text-sm md:text-base line-clamp-4 leading-relaxed space-y-2">
                        {post.content.slice(0, 4).map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all duration-300">
                        Read Full Story <ArrowRight size={16} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Column: Two Small Blogs Stacked (2) */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {blogData.slice(1, 3).map((post) => (
                <Link key={post.id} href={`/blog/${formatName(post.title)}`}>
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="group cursor-pointer flex flex-col h-full space-y-3"
                  >
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-foreground/10">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-primary text-white text-[9px] font-bold uppercase tracking-wider shadow-md">
                          Latest
                        </span>
                        <span className="px-3 py-1 rounded-full bg-background/60 backdrop-blur-md border border-white/10 text-[9px] font-bold uppercase tracking-wider text-foreground">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="px-2 space-y-2">
                      <div className="flex items-center gap-3 text-[10px] text-foreground/50 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                      </div>
                      <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-2">
                        {post.title}
                      </h3>
                      {/* <div className="text-foreground/60 text-xs line-clamp-2 leading-relaxed mb-3">
                        {post.content.slice(0, 2).join(' ')}
                      </div> */}
                      <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                        Learn More <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
  )
}

export default LatestBlog