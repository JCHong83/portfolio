"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section: Large Typographic Intro */}
      <section className="px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-350 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono-tech mb-6 block">The Architect</span>
            <h1 className="text-zinc-900 mb-12">
              Blending <span className="text-zinc-400">Hardware</span> <br />
              with <span className="italic font-serif">Digital</span> Logic.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Left Side: Grayscale Image */}
          <motion.div 
            className="md:col-span-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative aspect-3/4 overflow-hidden bg-zinc-100 group">
              <Image
                src="/me.jpg" // Placeholder: replace with your photo in /public folder
                alt="Profile"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
              />
            </div>
            <p className="font-mono-tech mt-4 text-[10px] text-zinc-400">
              EST. 2026 / BASED IN ITALY
            </p>
          </motion.div>

          {/* Right Side: Narrative Bio */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.div 
              className="max-w-xl space-y-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight">
                From high-end LED display sales to building scalable startup ecosystems.
              </h3>
              
              <div className="space-y-6 text-zinc-600 text-lg md:text-xl leading-relaxed">
                <p>
                  My journey started at the intersection of physical space and technology. 
                  I realized that the most powerful digital experiences aren't just on 
                  a phone screen—they are in the environments we inhabit.
                </p>
                <p>
                  Whether it’s engineering the transparency of an LCD screen or 
                  architecting the backend of a new SaaS venture, I focus on 
                  one thing: <strong>Structural Impact.</strong>
                </p>
              </div>

              {/* Experience List - Minimalist Style */}
              <div className="pt-12 border-t border-zinc-100 grid grid-cols-2 gap-8">
                <div>
                  <span className="font-mono-tech text-zinc-400 mb-4 block">Focus</span>
                  <ul className="space-y-2 font-bold uppercase text-sm">
                    <li>Visual Hardware</li>
                    <li>Full-Stack Dev</li>
                    <li>SaaS Architecture</li>
                  </ul>
                </div>
                <div>
                  <span className="font-mono-tech text-zinc-400 mb-4 block">Sectors</span>
                  <ul className="space-y-2 font-bold uppercase text-sm">
                    <li>Luxury Retail</li>
                    <li>Tech Startups</li>
                    <li>Digital Signage</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}