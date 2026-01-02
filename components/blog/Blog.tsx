"use client";

import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogData } from "@/lib/data";
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
      <div className="md:px-10 px-5 mx-auto py-10">
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
              <p className="text-sm text-foreground/60 mx-auto max-w-lg">
                Our thoughts on the latest trends in technology, design, and digital strategy.
              </p>
            </motion.div>
          </div>
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
                      <p className="text-foreground/60 text-sm md:text-base line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
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
                      <h3 className="text-lg font-medium group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-primary font-bold text-xs">
                        Learn More <ArrowRight size={14} />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
          {/* Stylized Section Separator */}
          <div className="relative mb-10 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-px bg-primary/40" />
            </div>
            <div className="relative z-10 bg-background px-10 text-center">
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-foreground/40 mb-1">
                Explore More
              </h2>
              <div className="flex items-center justify-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-medium text-foreground/20 tracking-widest">BLOG ARCHIVE</span>
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>
            </div>
          </div>
          {/* All Blogs Grid - Starting from index 3 */}
          <BlogGrid remove={3} />
        </div>
      </div>
      <div>
        <CTA />
      </div>
    </PageWrapper>
  );
}
export default Blog;