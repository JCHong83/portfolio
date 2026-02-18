'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  name: 'Visionary_Studio',
  title: 'Visionary Digital CMS',


  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
  ],

  document: {
    // This ensures thate when you publish, it triggers the site to update
    productionUrl: async (prev, context) => {
      const {document} = context
      if (document._type === 'project') {
        const slug = (document.slug as any)?.current
        return `https://visionary-digital-technologies.vercel.app/projects/${slug}`
      }
      return prev
    },
  },
})
