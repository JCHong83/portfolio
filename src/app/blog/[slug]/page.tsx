import { client } from "@/sanity/lib/client";
import { BLOG_DETAIL_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/blog/RichText";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(BLOG_DETAIL_QUERY, { slug });

  if (!post) return <div>Post not found</div>;

  return (
    <main className="min-h-screen bg-white pb-32">
      {/* 1. Article Header */}
      <header className="px-6 md:px-12 pt-40 pb-20 border-b border-zinc-100">
        <div className="max-w-250 mx-auto text-center">
          <span className="font-mono-tech text-[10px] uppercase tracking-widest text-zinc-400 mb-6 block">
            {post.category} — {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <h1 className="text-5xl md:text-8xl leading-[0.9] uppercase font-black tracking-tighter mb-8">
            {post.title}
          </h1>
          <div className="font-mono-tech text-[10px] uppercase">By {post.author}</div>
        </div>
      </header>

      {/* 2. Featured Image */}
      {post.mainImage && (
        <div className="px-6 md:px-12 -mt-10 mb-20">
          <div className="max-w-350 mx-auto aspect-21/9 relative overflow-hidden bg-zinc-100">
            <Image 
              src={urlFor(post.mainImage).url()} 
              alt={post.title} 
              fill 
              className="object-cover grayscale" 
              priority 
            />
          </div>
        </div>
      )}

      {/* 3. Article Content */}
      <article className="px-6 md:px-12">
        <div className="max-w-200 mx-auto">
          <PortableText value={post.body} components={RichTextComponents} />
          
          {/* Tags Footer */}
          <div className="mt-20 pt-8 border-t border-zinc-100 flex gap-4 flex-wrap">
            {post.tags?.map((tag: string) => (
              <span key={tag} className="font-mono-tech text-[10px] text-zinc-400">#{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}