<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen bg-bg text-fg">
    <Navbar />

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