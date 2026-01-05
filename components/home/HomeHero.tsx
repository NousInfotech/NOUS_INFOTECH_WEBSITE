"use client"
import { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useTheme } from 'next-themes';

const HomeHero = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    Promise.resolve().then(() => setMounted(true));
   }, []);

  const video1 = useRef<HTMLVideoElement>(null);
  const video2 = useRef<HTMLVideoElement>(null);

useEffect(() => {
  const v1 = video1.current;
  const v2 = video2.current;
  if (!v1 || !v2) return;

  const tryPlay = async (video: HTMLVideoElement) => {
    try {
      await video.play();
    } catch (err) {
      console.warn("Video autoplay blocked:", err);
    }
  };

  const syncVideos = () => {
    v1.currentTime = 0;
    v2.currentTime = 0;
    tryPlay(v1);
    tryPlay(v2);
  };

  const start = () => {
    syncVideos();
  };

  v1.addEventListener("loadeddata", start);
  v2.addEventListener("loadeddata", start);

  v1.addEventListener("ended", syncVideos);
  v2.addEventListener("ended", syncVideos);

  return () => {
    v1.removeEventListener("loadeddata", start);
    v2.removeEventListener("loadeddata", start);
    v1.removeEventListener("ended", syncVideos);
    v2.removeEventListener("ended", syncVideos);
  };
}, []);
  return (
      <section className="relative py-10 md:py-15 flex flex-col lg:flex-row items-center px-5 md:px-10 overflow-hidden gap-5">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 h-full">
          <video 
            ref={video1}
            autoPlay 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 dark:opacity-20"
          >
            <source src="/video/Home-video.mp4" type="video/mp4" />
          </video>
          {/* Gradients Overlay for Depth - Only visible in light mode */}
          <div className={`absolute inset-0 ${mounted && theme === 'light' ? 'bg-linear-to-b from-background' : ''}`} />
          <div className="absolute inset-0 bg-radial-gradient(circle at 50% 50%, transparent, var(--background))" />
        </div>

        <div className="mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-7'
          >
            <h1 className="text-2xl md:text-5xl lg:text-8xl leading-none tracking-tighter font-medium">
              We&apos;re a creative
              <span className="text-primary"> digital agency</span>
            </h1>
            <p className="text-xs md:text-xl text-foreground/70 max-w-xl uppercase tracking-wide">
              We&apos;re a creative digital agency dedicated to crafting high-end digital experiences that define industries.
            </p>
            <div className="flex md:flex-row flex-col gap-4">
              <Link href="/hire-us">
                <Button className='text-white w-full'>Hire Our Agency</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className='w-full'>View Projects</Button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        <div className="z-100 w-full">
        <video
        ref={video2}
        autoPlay
        muted
        playsInline
        className="
        w-full md:h-[500px] 
        object-cover                   
        rounded-2xl"
        >
        <source src="/video/Home-video.mp4" type="video/mp4" />
        </video>
        </div>

     </section>
  )
}

export default HomeHero