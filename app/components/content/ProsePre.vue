<script setup lang="ts">
import UPre from '@nuxt/ui/components/prose/Pre.vue'

const props = defineProps<{
  code?: string
  language?: string
  filename?: string
  highlights?: number[]
  meta?: string
  class?: unknown
}>()
</script>

<template>
  <ClientOnly v-if="language === 'mermaid'">
    <MermaidDiagram :code="code ?? ''" />
    <template #fallback>
      <div class="my-6 h-40 rounded-xl border border-rule bg-panel" />
    </template>
  </ClientOnly>
  <UPre v-else v-bind="props">
    <slot />
  </UPre>
</template>
