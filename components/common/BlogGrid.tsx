import React from 'react'
import { motion, Variants } from 'framer-motion'
import { blogData } from '@/lib/blog-data'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import formatName from '@/lib/formatName'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

const BlogGrid = ({count, remove}: {count?: number, remove?: number}) => {
  
  return (
    <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {blogData.slice(remove, count).map((post) => (
            <Link key={post.id} href={`/blog/${formatName(post.title)}`}>
              <motion.div
                variants={itemVariants}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl mb-6 border border-foreground/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-background/60 backdrop-blur-md border border-foreground/10 text-xs font-medium text-foreground">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-foreground/50 mb-3">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  
                  <h3 className=" md:text-2xl font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <div className="text-foreground/60 line-clamp-3 mb-6 text-xs md:text-sm flex-1">
                    {post.content.slice(0, 2).map((p, idx) => (
                      <p key={idx} className="mb-2 last:mb-0">{p}</p>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-4 transition-all duration-300">
                    Read More <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
  )
}

export default BlogGrid