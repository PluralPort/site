<script setup lang="ts">
import ArrowRight from "~/components/icons/arrow-right.vue";
import External from "~/components/icons/external.vue";

const { data: apps } = await useAsyncData('apps-index', () =>
  queryCollection('apps').order('order', 'ASC').all(),
)

const list = computed(() => apps.value ?? [])
const slugOf = (path: string) => path.replace(/^\/apps\//, '')

const isExternalLink = (href: string) => {
  try {
    const url = new URL(href, 'https://pluralport.com')
    return url.origin !== 'https://pluralport.com'
  } catch {
    return false
  }
}
</script>

<template>
  <main class="mx-auto max-w-300 px-6 py-14 lg:px-8">
    <header class="mb-10">
      <h1 class="text-4xl font-semibold tracking-[-0.04em] text-fg">Apps</h1>
      <p class="mt-4 max-w-3xl text-lg leading-7 text-fg2">Self-reported. Open a PR to change your own row.</p>
    </header>

    <section class="overflow-hidden rounded-xl border border-rule bg-panel">
      <table class="w-full border-collapse text-left text-sm">
        <thead class="bg-sunk/60 text-[11px] uppercase tracking-[0.12em] text-mut">
          <tr>
            <th class="px-4 py-3 font-medium">App</th>
            <th class="px-4 py-3 font-medium">app_id</th>
            <th class="px-4 py-3 font-medium">Status</th>
            <th class="px-4 py-3 font-medium hidden sm:block">Modules</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="app in list" :key="app.app_id" class="border-t border-rule align-top">
            <td class="px-4 py-4 text-fg">
              <NuxtLink :to="app.path" class="underline underline-offset-2 hover:text-fg/80">{{ app.name }}</NuxtLink>
            </td>
            <td class="px-4 py-4 font-mono text-[13px] text-mut">{{ app.app_id }}</td>
            <td class="px-4 py-4 text-[12.5px] uppercase tracking-[0.08em] text-mut">{{ app.status }}</td>
            <td class="px-4 py-4 font-mono text-[12.5px] text-mut hidden sm:block">{{ app.modules.map((m) => m.key).join(', ') }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mt-16 space-y-10">
      <div v-for="app in list" :id="slugOf(app.path)" :key="app.app_id" class="border-t border-rule pt-8">
        <NuxtLink :to="app.path" class="text-2xl font-semibold tracking-[-0.03em] text-fg underline underline-offset-4 hover:text-fg/90">
          {{ app.name }}
        </NuxtLink>
        <span class="ml-2 align-middle text-sm font-medium uppercase tracking-[0.08em] text-mut">{{ app.status }}</span>

        <p class="mt-3 max-w-3xl text-base leading-7 text-fg2">{{ app.summary }}</p>

        <div class="mt-4 flex flex-wrap gap-3">
          <NuxtLink
            :to="app.path"
            class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
          >
            Full mapping and coverage <ArrowRight class="ml-2" />
          </NuxtLink>
          <a
            v-if="app.website"
            :href="app.website"
            class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
          >
            Website
            <External class="ml-2" />
          </a>
          <a
            v-if="app.repo"
            :href="app.repo"
            class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
          >
            Source code
            <External class="ml-2" />
          </a>
          <a
            v-for="link in app.links"
            :key="link.label"
            :href="link.href"
            class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
          >
            {{ link.label }}
            <External class="ml-2" v-if="isExternalLink(link.href)" />
            <ArrowRight class="ml-2" v-else />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
