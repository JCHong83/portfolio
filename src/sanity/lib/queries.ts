export const SERVICES_PAGE_QUERY = `{
  "categories": *[_type == "category"] | order(_createdAt asc) {
    _id,
    title,
    description
  },
  "projects": *[_type == "project"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    "categoryTitle": categories[0]->title
  }
}`;

// Fetch a single project by slug
export const PROJECT_DETAIL_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  description,
  mainImage,
  gallery,
  "category": categories[0]->title,
  "details": {
    "year": publishedAt,
    "client": clientName,
    "services": servicesList
  }
}`;

// Fetch the 4 most recent projects (excluding the current one)
export const LATEST_PROJECTS_QUERY = `*[_type == "project" && slug.current != $slug] | order(publishedAt desc)[0...4]{
  _id,
  title,
  slug,
  mainImage,
  "category": categories[0]->title
}`;

// Blog archive query
export const BLOG_ARCHIVE_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  "excerpt": array::join(string::split(pt::text(body), "")[0...120], "") + "...",
  "author": author->name,
  "category": categories[0]->title,
  "tags": hashtags
}`;

// Blog detail query
export const BLOG_DETAIL_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  mainImage,
  body,
  "author": author->name,
  "category": categories[0]->title,
  "tags": hashtags
}`;