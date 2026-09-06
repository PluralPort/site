<script setup lang="ts">
import Expand from '~/components/icons/expand.vue'
import XMark from '~/components/icons/xmark-square.vue'

const props = defineProps<{ code: string }>()

type Mermaid = typeof import('mermaid').default

let mermaid: Mermaid | undefined
let observer: MutationObserver | undefined

const svg = ref('')
const error = ref('')

const expanded = ref(false)
const scale = ref(1)
const offset = reactive({ x: 0, y: 0 })
const dragging = ref(false)
let dragStart = { x: 0, y: 0 }

const render = async () => {
  try {
    if (!mermaid) {
      mermaid = (await import('mermaid')).default
    }

    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      fontFamily: 'inherit',
      theme: document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'default',
    })

    const id = `mermaid-${Math.random().toString(36).slice(2, 10)}`
    svg.value = (await mermaid.render(id, props.code)).svg
    error.value = ''
  } catch (e) {
    error.value = e instanceof Error ? e.message : String(e)
    svg.value = ''
  }
}

const resetView = () => {
  scale.value = 1
  offset.x = 0
  offset.y = 0
}

const open = () => {
  resetView()
  expanded.value = true
}

const close = () => {
  expanded.value = false
}

const zoomBy = (factor: number) => {
  scale.value = Math.min(8, Math.max(0.25, scale.value * factor))
}

const onWheel = (event: WheelEvent) => {
  event.preventDefault()
  zoomBy(event.deltaY < 0 ? 1.15 : 1 / 1.15)
}

const startDrag = (event: PointerEvent) => {
  dragging.value = true
  dragStart = { x: event.clientX - offset.x, y: event.clientY - offset.y }
  ;(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId)
}

const onDrag = (event: PointerEvent) => {
  if (!dragging.value) return
  offset.x = event.clientX - dragStart.x
  offset.y = event.clientY - dragStart.y
}

const endDrag = () => {
  dragging.value = false
}

const onKeydown = (event: KeyboardEvent) => {
  if (!expanded.value) return
  if (event.key === 'Escape') close()
  if (event.key === '0') resetView()
  if (event.key === '+' || event.key === '=') zoomBy(1.2)
  if (event.key === '-') zoomBy(1 / 1.2)
}

watch(expanded, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  render()

  observer = new MutationObserver(render)
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })

  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})

watch(() => props.code, render)
</script>

<template>
  <div
    v-if="error"
    class="my-6 overflow-x-auto rounded-xl border border-rule bg-panel px-4 py-3 font-mono text-sm text-err"
  >{{ error }}</div>

  <div v-else class="group relative my-6">
    <div class="mermaid-inline flex justify-center overflow-x-auto" v-html="svg" />

    <button
      type="button"
      aria-label="Expand diagram"
      class="absolute right-2 top-2 cursor-pointer rounded-md border border-rule2 bg-panel p-2 text-fg2 opacity-0 transition hover:text-fg focus-visible:opacity-100 group-hover:opacity-100"
      @click="open"
    >
      <Expand size="1em" />
    </button>
  </div>

  <Teleport v-if="expanded" to="body">
    <div
      class="fixed inset-0 z-100 flex flex-col bg-bg"
      role="dialog"
      aria-modal="true"
      aria-label="Expanded diagram"
    >
      <div class="flex shrink-0 items-center justify-end gap-2 border-b border-rule px-4 py-2 text-sm text-fg2">
        <button type="button" class="cursor-pointer rounded-md border border-rule2 px-3 py-1 hover:text-fg" @click="zoomBy(1 / 1.2)">&minus;</button>
        <span class="w-14 text-center font-mono text-xs text-mut">{{ Math.round(scale * 100) }}%</span>
        <button type="button" class="cursor-pointer rounded-md border border-rule2 px-3 py-1 hover:text-fg" @click="zoomBy(1.2)">+</button>
        <button type="button" class="cursor-pointer rounded-md border border-rule2 px-3 py-1 text-xs hover:text-fg" @click="resetView">Reset</button>
        <button type="button" aria-label="Close" class="ml-2 cursor-pointer text-fg2 hover:text-fg" @click="close">
          <XMark size="1.6em" />
        </button>
      </div>

      <div
        class="flex-1 touch-none overflow-hidden"
        :class="dragging ? 'cursor-grabbing' : 'cursor-grab'"
        @wheel="onWheel"
        @pointerdown="startDrag"
        @pointermove="onDrag"
        @pointerup="endDrag"
        @pointercancel="endDrag"
      >
        <div
          class="mermaid-full flex h-full w-full items-center justify-center"
          :style="{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})` }"
          v-html="svg"
        />
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.mermaid-full :deep(svg) {
  max-width: none !important;
  width: 92vw;
  height: auto;
}
</style>
