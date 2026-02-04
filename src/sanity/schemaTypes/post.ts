export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'mainImage', title: 'Featured Image', type: 'image' },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
  ],
}