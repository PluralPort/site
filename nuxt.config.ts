// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/seo',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/images/pluralport-logo.png' },
      ],
      script: [
        // Only made this cause didn't like the flashes of light/dark mode on page loads... hacky, but it works?
        {
          innerHTML: `
try {
  const stored = localStorage.getItem('theme')
  const prefersDark = matchMedia('(prefers-color-scheme: dark)').matches
  const theme = stored === 'light' || stored === 'dark'
    ? stored
    : prefersDark ? 'dark' : 'light'

  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.classList.add(theme)
  root.style.colorScheme = theme
} catch (error) {}
`,
          tagPosition: 'head',
          tagPriority: 'critical',
        },
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
  ogImage: {
    enabled: false,
  },
  nitro: {
    preset: 'cloudflare-pages-static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/apps', '/format', '/adopt', '/sync', '/about'],
      failOnError: true,
    },
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
