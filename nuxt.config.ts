// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    "nitro-cloudflare-dev"
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/pluralport-logo.png' },
      ],
    }
  },
  site: {
    url: 'https://pluralport.com',
    name: 'PluralPort',
  },
  schemaOrg: {
    identity: 'Organization'
  },
  seo: {
    meta: {
      description: 'PluralPort is a schema and specification for plural apps and services.',
    },
  },
  nitro: {
    preset: "cloudflare-pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  ssr: true,
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})