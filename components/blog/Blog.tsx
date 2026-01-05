"use client";

import { motion } from "framer-motion";
import CTA from "../common/CTA";
import { PageWrapper } from "../animation/PageWrapper";
import BlogGrid from "../common/BlogGrid";
import LatestBlog from "./LatestBlog";

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
          {/* Latest Blog Section */}
          <LatestBlog/>
          {/* Blog Grid Section */}
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