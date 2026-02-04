import { client } from "@/sanity/lib/client";
import { SERVICES_PAGE_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image"; // Ensure you have this helper

export default async function WhatWeDoPage() {
  const { categories, projects } = await client.fetch(SERVICES_PAGE_QUERY);

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1: SERVICES LIST */}
      <section className="px-6 md:px-12 pt-32 pb-24 border-b border-zinc-100">
        <div className="max-w-350 mx-auto">
          <span className="font-mono-tech mb-8 block text-zinc-400">Expertise — 01</span>
          <h1 className="mb-20">Core <span className="text-zinc-400">Business</span> Units</h1>
          
          <div className="space-y-0">
            {categories.map((cat: any, index: number) => (
              <div 
                key={cat._id} 
                className="group border-t border-zinc-200 py-12 grid grid-cols-1 md:grid-cols-12 gap-6 hover:bg-zinc-50 transition-colors px-4"
              >
                <span className="md:col-span-1 font-mono text-xs text-zinc-400 pt-2">
                  0{index + 1}
                </span>
                <h2 className="md:col-span-5 text-4xl md:text-6xl uppercase font-black transition-all group-hover:translate-x-2">
                  {cat.title}
                </h2>
                <p className="md:col-span-6 text-xl text-zinc-600 leading-relaxed max-w-xl">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PORTFOLIO GALLERY */}
      <section className="px-6 md:px-12 py-24 bg-zinc-50">
        <div className="max-w-350 mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-mono-tech mb-4 block text-zinc-400">Selected Works — 02</span>
              <h2 className="text-5xl md:text-7xl uppercase">Portfolio</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project: any) => (
              <Link 
                href={`/projects/${project.slug.current}`} 
                key={project._id}
                className="group block"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-zinc-200 mb-6">
                  {project.mainImage && (
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-mono-tech text-xs border border-white px-4 py-2">View Project</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tighter">{project.title}</h3>
                    <span className="text-zinc-400 font-mono-tech text-[10px] uppercase">
                      {project.categoryTitle}
                    </span>
                  </div>
                  <div className="text-2xl transition-transform group-hover:translate-x-2">→</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}