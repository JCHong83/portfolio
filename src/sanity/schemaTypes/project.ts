export default {
  name: 'project',
  title: 'Business Projects',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'category', title: 'Category', type: 'reference', to: [{ type: 'category' }] },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Project Description', type: 'text' },
    {
      name: 'details',
      title: 'Technical Details',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Add specs like "4K Resolution" or "60% Transparency"'
    },
  ],
}