import { client } from "@/sanity/lib/client";
import { BLOG_ARCHIVE_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function BlogArchive() {
  const posts = await client.fetch(BLOG_ARCHIVE_QUERY);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="px-6 md:px-12 pt-40 pb-16">
        <div className="max-w-350 mx-auto">
          <span className="font-mono-tech mb-8 block text-zinc-400">Journal — Insights</span>
          <h1 className="text-zinc-900 leading-[0.8] mb-12 uppercase">
            The <br /> <span className="text-zinc-300">Archive</span>
          </h1>
        </div>
      </section>

      {/* Blog List - Creative Apes Style */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-350 mx-auto border-t border-zinc-200">
          {posts.map((post: any) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug.current}`}
              className="group flex flex-col md:grid md:grid-cols-12 gap-8 py-10 border-b border-zinc-100 hover:bg-zinc-50 transition-colors px-4"
            >

              {/* LEFT : Thumbnail Section */}
              <div className="md:col-span-4">
                <div className="relative aspect-16/10 w-full overflow-hidden bg-zinc-100">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-100" />
                  )}
                </div>
              </div>

              {/* RIGHT: Grouped Information (66% Width) */}
              <div className="md:col-span-8 flex flex-col justify-between py-2">
                <div>
                  {/* Top Meta: Category & Date */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-black text-white px-2 py-0.5 text-[9px] uppercase font-mono tracking-widest">
                      {post.category}
                    </span>
                    <span className="font-mono-tech text-[10px] text-zinc-400">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: '2-digit', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>

                  {/* Main Title & Excerpt */}
                  <h2 className="text-3xl md:text-6xl uppercase font-black tracking-tighter leading-[0.9] mb-6 group-hover:italic transition-all duration-500">
                    {post.title}
                  </h2>
                  <p className="text-zinc-500 text-lg max-w-xl leading-snug line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Bottom Meta: Author & Tags */}
                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <span className="font-mono-tech text-[10px] text-black uppercase">
                    Written by {post.author || 'Visionary'}
                  </span>
                  
                  <div className="flex gap-3">
                    {post.tags?.slice(0, 3).map((tag: string) => (
                      <span key={tag} className="font-mono-tech text-[10px] text-zinc-300">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}