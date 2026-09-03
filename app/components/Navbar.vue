<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import Bars from "~/components/icons/bars.vue";
import Sun from "~/components/icons/sun.vue";
import Moon from "~/components/icons/moon.vue";
import Github from "~/components/icons/github.vue";
import XMark from "~/components/icons/xmark-square.vue";

const theme = ref<'light' | 'dark'>('light')
const open = ref(false)
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
  <Disclosure as="header" class="sticky top-0 z-50 border-b border-rule bg-bg/95 backdrop-blur-sm">
    <div class="mx-auto flex h-15 max-w-300 items-center gap-5.5 px-6">
      <NuxtLink href="/" class="flex items-center gap-2">
        <NuxtImg src="/images/pluralport-logo.png" alt="PluralPort" class="h-7 w-7 rounded" />
        <span class="font-bold">PluralPort</span>
      </NuxtLink>

      <nav class="hidden shrink-0 items-center gap-5 whitespace-nowrap text-sm text-mut md:flex">
        <NuxtLink href="/format" class="text-mut no-underline hover:text-fg">Format</NuxtLink>
        <NuxtLink href="/sync" class="text-mut no-underline hover:text-fg">Sync</NuxtLink>
        <NuxtLink href="/adopt" class="text-mut no-underline hover:text-fg">Adopt</NuxtLink>
        <NuxtLink href="/apps" class="text-mut no-underline hover:text-fg">Apps</NuxtLink>
        <NuxtLink href="/about" class="text-mut no-underline hover:text-fg">About</NuxtLink>
      </nav>

      <div class="ml-auto flex shrink-0 items-center gap-3 whitespace-nowrap text-sm text-mut">
        <span class="hidden sm:block rounded border border-rule2 px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-fg2">v0.1 draft</span>
        <button
            type="button"
            aria-label="Toggle dark mode"
            class="flex cursor-pointer gap-x-1 whitespace-nowrap text-fg2 no-underline transition hover:text-fg"
            @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" color="#78756f" size="2em" />
          <Moon v-else color="#78756f" size="2em"  />
        </button>
        <a href="https://github.com/PluralPort" target="_blank" class="flex gap-x-1 whitespace-nowrap text-fg2 no-underline transition hover:text-fg"><Github size="2em" /></a>
        <DisclosureButton class="relative inline-flex cursor-pointer items-center justify-center rounded-md p-2 text-fg2 transition hover:text-fg md:hidden">
          <span class="sr-only">Toggle main menu</span>
          <Bars v-if="!open" />
          <XMark v-else />
        </DisclosureButton>
      </div>
    </div>

    <DisclosurePanel class="border-t border-rule2 md:hidden">
      <div class="mx-auto max-w-300 px-6 py-4">
        <nav class="grid gap-2 text-sm text-mut">
          <NuxtLink href="/format" class="rounded px-2 py-2 no-underline hover:bg-bg2 hover:text-fg">Format</NuxtLink>
          <NuxtLink href="/sync" class="rounded px-2 py-2 no-underline hover:bg-bg2 hover:text-fg">Sync</NuxtLink>
          <NuxtLink href="/adopt" class="rounded px-2 py-2 no-underline hover:bg-bg2 hover:text-fg">Adopt</NuxtLink>
          <NuxtLink href="/apps" class="rounded px-2 py-2 no-underline hover:bg-bg2 hover:text-fg">Apps</NuxtLink>
          <NuxtLink href="/about" class="rounded px-2 py-2 no-underline hover:bg-bg2 hover:text-fg">About</NuxtLink>
        </nav>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>