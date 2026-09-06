<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '1em',
  },
  color: {
    type: String,
    default: 'currentColor',
  },
})
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M9 3H3v6" />
    <path d="M3 3l7 7" />
    <path d="M15 21h6v-6" />
    <path d="M21 21l-7-7" />
  </svg>
</template>
