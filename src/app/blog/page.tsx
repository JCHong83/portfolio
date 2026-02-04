import { client } from "@/sanity/lib/client";
import { BLOG_ARCHIVE_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

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
              {/* Meta Side (Date & Author) */}
              <div className="md:col-span-2 flex flex-col gap-1">
                <span className="font-mono-tech text-[10px] text-zinc-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: '2-digit', 
                    year: 'numeric' 
                  })}
                </span>
                <span className="font-mono-tech text-[10px] text-black">
                  By {post.author || 'Visionary'}
                </span>
              </div>

              {/* Title & Excerpt Main Content */}
              <div className="md:col-span-6 flex flex-col gap-4">
                <h2 className="text-3xl md:text-5xl uppercase font-bold tracking-tighter leading-none group-hover:italic transition-all">
                  {post.title}
                </h2>
                <p className="text-zinc-500 text-sm md:text-base max-w-md leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Category & Tags */}
              <div className="md:col-span-4 flex flex-col md:items-end justify-between">
                <span className="inline-block bg-black text-white px-2 py-1 text-[9px] uppercase font-mono tracking-widest self-start md:self-auto">
                  {post.category}
                </span>
                
                <div className="flex gap-2 flex-wrap md:justify-end mt-4 md:mt-0">
                  {post.tags?.map((tag: string) => (
                    <span key={tag} className="font-mono-tech text-[10px] text-zinc-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}