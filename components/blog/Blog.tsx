"use client";

import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { blogData } from "@/lib/blog-data";
import formatName from "@/lib/formatName";
import CTA from "../common/CTA";
import { PageWrapper } from "../animation/PageWrapper";
import BlogGrid from "../common/BlogGrid";
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

const Blog = () => {
  return (
    <PageWrapper>
    <div className="md:px-10 px-5 mx-auto py-10 md:py-20">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-center">
              Insights & <span className="text-primary">Innovations</span>
            </h1>
            <p className="text-sm text-foreground/60 mx-auto">
              Our thoughts on the latest trends in technology, design, and digital strategy.
            </p>
          </motion.div>
        </div>

        {/* Featured Post (Largest) */}
        <Link href={`/blog/${formatName(blogData[0].title)}`}>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-16 group cursor-pointer"
          >
            <div className="relative aspect-video md:aspect-21/9 overflow-hidden rounded-2xl md:rounded-3xl mb-8 border border-foreground/10">
              <Image
                src={blogData[0].image}
                alt={blogData[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-12 md:left-12 md:right-12">
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-4">
                  Featured
                </span>
                <h2 className="text-sm md:text-5xl font-medium text-white mb-2 md:mb-4 max-w-3xl leading-tight">
                  {blogData[0].title}
                </h2>
                <div className="flex items-center gap-4 md:gap-6 text-white/70 text-[10px] md:text-sm">
                  <span className="flex items-center gap-1.5 md:gap-2"><Calendar size={14} /> {blogData[0].date}</span>
                  <span className="flex items-center gap-1.5 md:gap-2"><Clock size={14} /> {blogData[0].readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </Link>

        {/* Blog Grid */}
        <BlogGrid remove={1}/>
      
      </div>
      
    </div>
     <CTA/>
    </PageWrapper>
  );
}
export default Blog;