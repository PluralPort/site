<script setup lang="ts">
const ogImage = 'https://pluralport.com/images/pluralport-logo.png'

useSeoMeta({
  ogImage,
  ogImageWidth: 200,
  ogImageHeight: 200,
  ogImageType: 'image/png',
  ogImageAlt: 'PluralPort',
  twitterCard: 'summary',
  twitterImage: ogImage,
  twitterImageAlt: 'PluralPort',
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
