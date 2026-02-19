import Hero from "@/components/sections/Hero";
import BusinessGrid from "@/components/sections/BusinessGrid";
import LatestProjects from "@/components/sections/LatestProjects";
import LatestBlog from "@/components/sections/LatestBlog";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

async function getHomeData() {
  const query = `{
    "categories": *[_type == "category"] | order(_createdAt asc) {
      _id,
      title,
      description
    },
    "latestProjects": *[_type == "project"] | order(publishedAt desc)[0...4] {
      _id,
      title,
      slug,
      mainImage,
      "categoryTitle": category->title
    },
    "latestPosts": *[_type == "post"] | order(publishedAt desc)[0...5] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      "categoryTitle": category->title,
      "excerpt": array::join(string::split(pt::text(body), "")[0..100], "") + "..."
    },
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const { categories, latestProjects, latestPosts } = await getHomeData();

  return (
    <main className="bg-white">
      <Hero />
      <BusinessGrid categories={categories} />
      <LatestProjects projects={latestProjects} />
      <LatestBlog posts={latestPosts} />
    </main>
  );
}