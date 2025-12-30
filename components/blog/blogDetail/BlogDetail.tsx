"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2, Check } from "lucide-react";
import { blogData } from "@/lib/blog-data";
import formatName from "@/lib/formatName";

const BlogDetail = () => {
const params = useParams()
const blog = blogData.find((blog) => formatName(blog.title) === params.slug)
const [copied, setCopied] = useState(false);

const handleShare = async () => {
  const shareData = {
    title: blog?.title,
    text: "Check out this article from Nous Infotech",
    url: window.location.href,
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Error sharing:", err);
    }
  } else {
    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error copying to clipboard:", err);
    }
  }
};

  if (!blog) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-25 px-5 md:px-10">
      <div className="mx-auto">
        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-5"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground/60 hover:text-primary transition-colors group"
          >
            <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            Back to Insights
          </Link>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              {blog.category}
            </span>
            <div className="flex items-center gap-4 text-foreground/40 text-xs">
              <span className="flex items-center gap-1.5"><Calendar size={12} /> {blog.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={12} /> {blog.readTime}</span>
            </div>
          </div>
          
          <h1 className="md:text-4xl lg:text-6xl font-medium mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center justify-between pb-8 border-b border-foreground/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-foreground/10">
                <Image
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100"
                  alt="Author"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold">{blog.userName}</p>
                <p className="text-xs text-foreground/50">{blog.userTech}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-foreground/5 transition-colors relative"
                title="Share this article"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Check size={18} className="text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="share"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                    >
                      <Share2 size={18} className="text-foreground/60" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-video rounded-4xl overflow-hidden mb-10 border border-foreground/10"
        >
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="prose prose-invert prose-lg max-w-none mb-5"
        >
          <div 
            className="text-foreground/80 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: blog.content || "" }} 
          />
        </motion.div>

        {/* Footer Navigation */}
        <div className="pt-5 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex flex-col gap-2">
             <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Tags</p>
             <div className="flex gap-2">
               {["Innovation", "Tech", "Future"].map(tag => (
                 <span key={tag} className="text-sm text-foreground/60 hover:text-primary cursor-pointer transition-colors">#{tag}</span>
               ))}
             </div>
           </div>
           
           <Link href="/blog">
             <button className="px-8 py-3 rounded-full border border-foreground/10 hover:border-primary hover:text-primary transition-all duration-300 font-medium text-sm">
               Read more articles
             </button>
           </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
