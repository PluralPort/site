<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(`format-page-${route.path}`, () => {
  const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : String(route.params.slug || '')
  const path = `/format/${slug}`.replace(/\/$/, '')

  return queryCollection('format').path(path).first()
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Format page not found', fatal: true })
}
</script>

<template>
  <main class="mx-auto max-w-4xl px-8 py-16">
    <div class="spec-markdown mx-auto">
      <ContentRenderer v-if="page" :value="page" />
    </div>
  </main>
</template>
