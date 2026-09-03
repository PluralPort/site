import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    format: defineCollection({
      type: 'page',
      source: 'format/**/*.md',
    }),
  },
})
