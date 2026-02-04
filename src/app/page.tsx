import Hero from "@/components/sections/Hero";
import BusinessGrid from "@/components/sections/BusinessGrid";
import { client } from "@/sanity/lib/client";

async function getCategories() {
  const query = `*[_type == "category"] | order(_createdAt asc) {
    _id,
    title,
    description
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const categories = await getCategories();

  return (
    <main className="bg-white">
      <Hero />
      <BusinessGrid categories={categories} />
    </main>
  );
}