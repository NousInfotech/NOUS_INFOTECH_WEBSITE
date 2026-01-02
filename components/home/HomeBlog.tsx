"use client";
import Link from "next/link";
import {  ArrowRight } from "lucide-react";
import { Badge } from "../ui/Badge";
import { ScrollReveal } from "../animation/ScrollReveal";
import { Button } from "../ui/Button";
import BlogGrid from "../common/BlogGrid";

const HomeBlog = () => {
  return (
    <section className="py-10 px-5 md:px-10 bg-background relative overflow-hidden">
      <div className="mx-auto relative z-10">
        <ScrollReveal>
          <div className="mb-12 px-2">
            <Badge>Latest Insights</Badge>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-2xl md:text-5xl lg:text-7xl font-medium leading-tight tracking-tighter max-w-4xl">
                Thoughts on <span className="text-primary">innovation.</span>
              </h2>
              <Link href="/blog" className="hidden md:block">
                <Button variant="outline" className="group">
                  View All Insights
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      
      <BlogGrid count={3}/>

        <div className="mt-12 md:hidden">
          <Link href="/blog">
            <Button variant="outline" className="w-full">
              View All Insights
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;