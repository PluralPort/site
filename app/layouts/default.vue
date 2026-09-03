<script setup lang="ts">
import External from "~/components/icons/external.vue";

const theme = ref<'light' | 'dark'>('light')

const applyTheme = (value: 'light' | 'dark', persist = false) => {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value)
    document.documentElement.style.colorScheme = value
  }

  theme.value = value

  if (persist && typeof window !== 'undefined') {
    window.localStorage.setItem('theme', value)
  }
}

const toggleTheme = () => {
  const nextTheme = theme.value === 'dark' ? 'light' : 'dark'
  applyTheme(nextTheme, true)
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const storedTheme = window.localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (storedTheme === 'light' || storedTheme === 'dark') {
    applyTheme(storedTheme)
  } else {
    applyTheme(systemPrefersDark ? 'dark' : 'light')
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    if (!window.localStorage.getItem('theme')) {
      applyTheme(event.matches ? 'dark' : 'light')
    }
  }

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleSystemThemeChange)
  } else {
    mediaQuery.addListener(handleSystemThemeChange)
  }
})
</script>

<template>
  <div class="min-h-screen bg-bg text-fg">
    <header class="sticky top-0 border-b border-rule bg-bg/95 backdrop-blur-sm">
      <div class="mx-auto flex h-15 max-w-300 items-center gap-5.5 px-6">
        <NuxtLink href="/" class="flex items-center gap-2">
          <NuxtImg src="/images/pluralport-logo.png" alt="PluralPort" class="h-7 w-7 rounded" />
          <span class="font-bold">PluralPort</span>
        </NuxtLink>

        <nav class="flex shrink-0 items-center gap-5 whitespace-nowrap text-sm text-mut">
          <NuxtLink href="/format" class="text-mut no-underline hover:text-fg">Format</NuxtLink>
          <NuxtLink href="/sync" class="text-mut no-underline hover:text-fg">Sync</NuxtLink>
          <NuxtLink href="/adopt" class="text-mut no-underline hover:text-fg">Adopt</NuxtLink>
          <NuxtLink href="/apps" class="text-mut no-underline hover:text-fg">Apps</NuxtLink>
          <NuxtLink href="/about" class="text-mut no-underline hover:text-fg">About</NuxtLink>
        </nav>

        <div class="ml-auto flex shrink-0 items-center gap-3 whitespace-nowrap text-sm text-mut">
          <button
            type="button"
            aria-label="Toggle dark mode"
            class="inline-flex h-7 w-7 items-center justify-center rounded border border-rule2 bg-panel text-sm text-fg2 transition hover:text-fg"
            @click="toggleTheme"
          >
            <svg v-if="theme === 'dark'" class="fill-mut size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 32C328 32 335.4 36 339.9 42.6L398.7 130L502.1 109.8C509.9 108.3 518 110.7 523.7 116.4C529.4 122.1 531.8 130.2 530.3 138L510 241.3L597.4 300.1C604 304.5 608 312 608 320C608 328 604 335.4 597.4 339.9L510 398.7L530.2 502C531.7 509.8 529.3 517.9 523.6 523.6C517.9 529.3 509.8 531.7 502 530.2L398.7 510L339.9 597.4C335.4 604 328 608 320 608C312 608 304.6 604 300.1 597.4L241.3 510L137.9 530.2C130.1 531.7 122 529.3 116.3 523.6C110.6 517.9 108.2 509.8 109.7 502L130 398.7L42.6 339.9C36 335.4 32 328 32 320C32 312 36 304.6 42.6 300.1L130 241.3L109.8 137.9C108.3 130.1 110.7 122 116.4 116.3C122.1 110.6 130.2 108.2 138 109.7L241.3 129.9L300.1 42.5L301.9 40.2C306.4 35 313 32 320 32zM272.2 170C266.8 178 257.2 182 247.7 180.2L163.7 163.8L180.1 247.8C181.9 257.3 177.9 266.9 169.9 272.3L99 320L170 367.8C178 373.2 182 382.8 180.2 392.3L163.8 476.3L247.8 459.9L251.3 459.5C259.6 459.1 267.6 463.1 272.3 470.1L320.1 541.1L367.9 470.1L370.1 467.3C375.7 461.2 384.1 458.3 392.4 460L476.4 476.4L460 392.4C458.2 382.9 462.2 373.3 470.2 367.9L541.2 320.1L470.2 272.3C462.2 266.9 458.2 257.3 460 247.8L476.4 163.8L392.4 180.2C382.9 182 373.3 178 367.9 170L320.1 99L272.3 170zM320 440C253.7 440 200 386.3 200 320C200 253.7 253.7 200 320 200C386.3 200 440 253.7 440 320C440 386.3 386.3 440 320 440zM320 248C280.2 248 248 280.2 248 320C248 359.8 280.2 392 320 392C359.8 392 392 359.8 392 320C392 280.2 359.8 248 320 248z"/></svg>
            <svg v-else class="fill-mut size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M303.3 112.7C196.2 121.2 112 210.8 112 320C112 434.9 205.1 528 320 528C353.3 528 384.7 520.2 412.6 506.3C309.2 482.9 232 390.5 232 280C232 214.2 259.4 154.9 303.3 112.7zM64 320C64 178.6 178.6 64 320 64C339.4 64 358.4 66.2 376.7 70.3C386.6 72.5 394 80.8 395.2 90.8C396.4 100.8 391.2 110.6 382.1 115.2C321.5 145.4 280 207.9 280 280C280 381.6 362.4 464 464 464C469 464 473.9 463.8 478.8 463.4C488.9 462.6 498.4 468.2 502.6 477.5C506.8 486.8 504.6 497.6 497.3 504.6C451.3 548.8 388.8 576 320 576C178.6 576 64 461.4 64 320z"/></svg>
          </button>
          <span class="rounded border border-rule2 px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-fg2">v0.1 draft</span>
          <a href="#" class="whitespace-nowrap text-fg2 no-underline transition hover:text-fg flex gap-x-1">GitHub <External /></a>
        </div>
      </div>
    </header>

    <slot />

    <footer class="border-t border-rule bg-sunk">
      <div class="mx-auto flex max-w-300 flex-wrap items-center gap-x-8 px-8 py-10 text-sm text-mut">
        <span class="flex items-center gap-2 text-fg">
          <NuxtImg src="/images/pluralport-logo.png" alt="PluralPort" class="block h-7 w-7 shrink-0 rounded" />
          <span class="font-semibold">PluralPort</span>
        </span>

        <nav class="flex flex-wrap items-center gap-x-5">
          <NuxtLink href="/format" class="text-mut no-underline hover:text-fg">Format</NuxtLink>
          <NuxtLink href="/sync" class="text-mut no-underline hover:text-fg">Sync</NuxtLink>
          <NuxtLink href="/adopt" class="text-mut no-underline hover:text-fg">Adopt</NuxtLink>
          <NuxtLink href="/apps" class="text-mut no-underline hover:text-fg">Apps</NuxtLink>
          <NuxtLink href="/about" class="text-mut no-underline hover:text-fg">About</NuxtLink>
        </nav>

        <span class="ml-auto self-center font-mono text-[12.5px] text-mut">draft v0.1 &#183; spec text CC BY 4.0</span>
      </div>
    </footer>
  </div>
</template>