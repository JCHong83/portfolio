"use client";

import Link from "next/link";
import Image from "next//image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage: any;
  categoryTitle: string;
  excerpt: string;
}

export default function LatestBlog({ posts }: { posts: Post[] }) {
  // We split the array: the first post is the big feature, the rest go in the list
  const featuredPost = posts[0];
  const listPosts = posts.slice(1, 5); // Take up to 4 more posts for the List

  return (
    <section className="bg-zinc-50 px-6 py-24 md:px-12 border-t border-zinc-200">
      <div className="max-w-350 mx-auto">
        <div className="mb-16">
          <span className="font-mono-tech mb-4 block text-zinc-400">Journal -- 03</span>
          <h2 className="text-5xl md:text-7xl uppercase leading-none">
            Insights <br /> <span className="text-zinc-300">& News</span>
          </h2>
        </div>
      

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT: Featured Post (60% Width) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href={`/blog/${featuredPost.slug.current}`} className="group block">
              <div className="relative aspect-video overflow-hidden mb-8 bg-zinc-200">
                {featuredPost.mainImage && (
                  <Image
                    src={urlFor(featuredPost.mainImage).url()}
                    alt={featuredPost.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                  />
                )}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-black text-white px-2 py-0.5 text-[9px] uppercase font-mono tracking-widest">
                  {featuredPost.categoryTitle}
                </span>
                <span className="font-mono-tech text-[10px] text-zinc-400">
                  {new Date(featuredPost.publishedAt).getFullYear()}
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-6 group-hover:italic transition-all duration-500">
                {featuredPost.title}
              </h3>
              <p className="text-zinc-500 text-lg md:text-xl max-w-xl leading-snug line-clamp-2">
                {featuredPost.excerpt}
              </p>
            </Link>
          </motion.div>

          {/* RIGHT: List Posts (40% Width) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="divide-y divide-zinc-200">
              {listPosts.map((post, index) => (
                <motion.div
                  key={post._id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group py-8 first:pt-0 flex justify-between items-end"
                  >
                    <div className="max-w-[85%]">
                      <span className="font-mono-tech text-[9px] text-zinc-400 uppercase mb-2 block">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric'})} - {post.categoryTitle}
                      </span>
                      <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                        {post.title}
                      </h4>
                    </div>
                    <div className="text-2xl group-hover:-rotate-45 transition-transform duration-300">
                      →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-12 inline-block font-mono-tech text-xs border-b border-black pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all w-fit" 
            >
              View The Full Archive →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}