import { client } from "@/sanity/lib/client";
import { PROJECT_DETAIL_QUERY, LATEST_PROJECTS_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await client.fetch(PROJECT_DETAIL_QUERY, { slug });
  const latest = await client.fetch(LATEST_PROJECTS_QUERY, { slug });

  if (!project) return <div>Project not found</div>;

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Header Section: Massive Title */}
      <section className="px-6 md:px-12 pt-40 pb-20">
        <div className="max-w-350 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h1 className="text-zinc-900 m-0 uppercase wrap-break-word leading-[0.8]">
              {project.title}
            </h1>
            <div className="font-mono-tech text-right">
              <span className="text-zinc-400 block mb-2">Category</span>
              <span className="text-black">{project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Image */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-350 mx-auto relative aspect-21/9 bg-zinc-100 overflow-hidden">
          <Image
            src={urlFor(project.mainImage).url()}
            alt={project.title}
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
      </section>

      {/* 3. Project Info & Description */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-350 mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 space-y-8">
            <div className="pt-4 border-t border-zinc-200">
              <span className="font-mono-tech text-zinc-400 block mb-4 italic">Metadata</span>
              <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase">
                <p>Year: {new Date(project.details.year).getFullYear()}</p>
                <p>Client: {project.details.client || 'N/A'}</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-2xl md:text-4xl font-medium leading-tight text-zinc-800">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Image Gallery */}
      <section className="px-6 md:px-12 mb-32 space-y-8 md:space-y-12">
        {project.gallery?.map((img: any, i: number) => (
          <div key={i} className="max-w-350 mx-auto relative aspect-square md:aspect-video bg-zinc-50 overflow-hidden">
            <Image
              src={urlFor(img).url()}
              alt={`Gallery image ${i}`}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        ))}
      </section>

      {/* 5. Next Projects Footer Feed */}
      <section className="px-6 md:px-12 py-24 bg-black text-white">
        <div className="max-w-350 mx-auto">
          <span className="font-mono-tech mb-12 block text-zinc-500 italic">Up Next — Explore More</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
            {latest.map((item: any) => (
              <Link 
                key={item._id} 
                href={`/projects/${item.slug.current}`}
                className="bg-black p-8 group hover:bg-zinc-900 transition-colors flex flex-col justify-between aspect-square"
              >
                <div className="relative w-full aspect-video mb-6 opacity-40 group-hover:opacity-100 group-hover:grayscale-0 grayscale transition-all">
                  <Image src={urlFor(item.mainImage).url()} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-lg font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform">{item.title}</h4>
                  <span className="font-mono-tech text-[10px] text-zinc-500">{item.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}