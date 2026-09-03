<script setup lang="ts">
const route = useRoute()

const candidatePaths = [
  route.path,
  route.path.replace(/\/$/, ''),
  `${route.path.replace(/\/$/, '')}/index`,
  route.path.replace(/^\/format/, '/format/index'),
  route.path.replace(/^\/format\//, '/format/'),
]

const { data: page } = await useAsyncData(`format-page-${route.path}`, () => {
  for (const path of candidatePaths) {
    const match = queryCollection('format').path(path).first()
    if (match) {
      return match
    }
  }

  return null
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
