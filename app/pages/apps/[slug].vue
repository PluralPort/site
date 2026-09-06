<script setup lang="ts">
import ArrowLeft from "~/components/icons/arrow-left.vue";
import External from "~/components/icons/external.vue";
import ArrowRight from "~/components/icons/arrow-right.vue";

const route = useRoute()

const slug = computed(() =>
  Array.isArray(route.params.slug) ? route.params.slug.join('/') : String(route.params.slug || ''),
)

const { data: page } = await useAsyncData(`app-page-${slug.value}`, () =>
  queryCollection('apps').path(`/apps/${slug.value}`).first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'App page not found', fatal: true })
}

const supportStyles: Record<string, string> = {
  full: 'text-ok',
  partial: 'text-warn',
  none: 'text-mut',
  planned: 'text-mut',
}

const supportLabels: Record<string, string> = {
  full: 'Full',
  partial: 'Partial',
  none: 'None',
  planned: 'Planned',
}

const facts = computed(() => {
  const p = page.value!
  return [
    { label: 'app_id', value: p.app_id, mono: true },
    { label: 'Status', value: p.status },
    { label: 'Spec version', value: `v${p.spec_version}`, mono: true },
    { label: 'Platform', value: p.platform },
  ].filter((fact) => Boolean(fact.value))
})

useSeoMeta({
  title: () => `${page.value?.name} — PluralPort`,
  description: () => page.value?.summary,
})

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
  <main v-if="page" class="mx-auto max-w-300 px-6 py-14 lg:px-8">
    <header class="mb-10">
      <NuxtLink href="/apps" class="text-sm text-mut transition hover:text-fg2"><ArrowLeft class="inline mb-1" /> All apps</NuxtLink>

      <div class="mt-4 flex items-center gap-4">
        <img v-if="page.logo" :src="page.logo" :alt="`${page.name} logo`" class="size-11 rounded-lg" >
        <h1 class="text-4xl font-semibold tracking-[-0.04em] text-fg">{{ page.name }}</h1>
        <span class="rounded-full border border-rule2 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.08em] text-mut">
          {{ page.status }}
        </span>
      </div>

      <p class="mt-4 max-w-3xl text-lg leading-7 text-fg2">{{ page.summary }}</p>

      <p class="mt-4 text-sm text-mut">
        Last verified {{ page.last_verified }}<template v-if="page.self_reported"> · self-reported</template>
      </p>
    </header>

    <section class="overflow-hidden rounded-xl border border-rule bg-panel">
      <dl class="grid grid-cols-2 gap-px bg-rule sm:grid-cols-3 lg:grid-cols-4">
        <div v-for="fact in facts" :key="fact.label" class="bg-panel px-4 py-3">
          <dt class="text-[11px] uppercase tracking-[0.12em] text-mut">{{ fact.label }}</dt>
          <dd :class="['mt-1 text-sm text-fg', fact.mono ? 'font-mono text-[13px]' : '']">{{ fact.value }}</dd>
        </div>
      </dl>
    </section>

    <div class="mt-6 flex flex-wrap gap-3">
      <a
        v-if="page.website"
        :href="page.website"
        class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
      >
        Website
        <External class="ml-2" />
      </a>
      <a
        v-if="page.apple_store"
        :href="page.apple_store"
        class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
      >
        Apple Store
        <External class="ml-2" />
      </a>
      <a
        v-if="page.google_play"
        :href="page.google_play"
        class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
      >
        Google Play
        <External class="ml-2" />
      </a>
      <a
          v-for="link in page.links"
          :key="link.label"
          :href="link.href"
          class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
      >
        {{ link.label }}
        <External class="ml-2" v-if="isExternalLink(link.href)" />
        <ArrowRight class="ml-2" v-else />
      </a>
    </div>

    <section v-if="page.modules?.length" class="mt-14">
      <h2 class="mb-4 text-2xl font-semibold tracking-[-0.03em] text-fg">Module support</h2>
      <div class="overflow-hidden rounded-xl border border-rule bg-panel">
        <table class="w-full border-collapse text-left text-sm">
          <thead class="bg-sunk/60 text-[11px] uppercase tracking-[0.12em] text-mut">
            <tr>
              <th class="px-4 py-3 font-medium">Module</th>
              <th class="px-4 py-3 font-medium">Support</th>
              <th class="px-4 py-3 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mod in page.modules" :key="mod.key" class="border-t border-rule align-top">
              <td class="px-4 py-3 font-mono text-[12.5px] text-fg2">{{ mod.key }}</td>
              <td :class="['px-4 py-3 font-medium', supportStyles[mod.support]]">{{ supportLabels[mod.support] }}</td>
              <td class="px-4 py-3 text-fg2">{{ mod.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section v-if="page.mapping?.length" class="mt-14">
      <h2 class="mb-4 text-2xl font-semibold tracking-[-0.03em] text-fg">Data model mapping</h2>
      <div class="overflow-hidden rounded-xl border border-rule bg-panel">
        <table class="w-full border-collapse text-left text-sm">
          <thead class="bg-sunk/60 text-[11px] uppercase tracking-[0.12em] text-mut">
            <tr>
              <th class="px-4 py-3 font-medium">App shape</th>
              <th class="px-4 py-3 font-medium">PluralPort target</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in page.mapping" :key="index" class="border-t border-rule align-top">
              <td class="px-4 py-3 font-mono text-[12.5px] text-fg2">{{ row.source }}</td>
              <td class="px-4 py-3 text-fg2">{{ row.target }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="mt-14 border-t border-rule pt-10">
      <div class="spec-markdown">
        <ContentRenderer :value="page" />
      </div>
    </section>

    <footer class="mt-16 border-t border-rule pt-6 text-sm text-mut">
      This page is maintained by the {{ page.name }} team. Something wrong?
      <a
        class="underline hover:text-fg2"
        :href="`https://github.com/pluralport/pluralport.com/edit/main/content/apps/${page.app_id}.md`"
      >Edit content/apps/{{ page.app_id }}.md</a>.
    </footer>
  </main>
</template>
