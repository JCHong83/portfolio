"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  categoryTitle: string;
}

export default function LatestProjects({projects}: { projects: Project[] }) {
  return (
    <section className="bg-white px-6 py-24 md:px-12">
      <div className="max-w-350 mx-auto">
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-mono-tech mb-4 block text-zinc-400">Selected Case Studies</span>
            <h2 className="text-5xl md:text-7xl uppercase leading-none">Featured <br/> <span className="text-zinc-300">Work</span></h2>
          </motion.div>

          <Link href="/what-we-do" className="font-mono-tech text-xs border-b border-black pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all hidden md:block">
            View All Projects →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 md:p-12 group"
            >
              <Link href={`/projects/${project.slug.current}`}>
                <div className="relative aspect-16/10 overflow-hidden mb-8 bg-zinc-100">
                  {project.mainImage && (
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  )}
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 bg-zinc-200 rounded-full"/>
                      <span className="font-mono-tech text-[10px] text-zinc-400 uppercase tracking-widest">
                        {project.categoryTitle || "General Project"}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-2xl group-hover:translate-x-2 transition-transform">
                    →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link href="/what-we-do" className="mt-12 font-mono-tech text-xs inline-block md:hidden">
          View All Projects →
        </Link>
      </div>
    </section>
  );
}