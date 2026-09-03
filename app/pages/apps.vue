<script setup lang="ts">
import appList from '~/data/apps.json'
import Checkmark from '~/components/icons/checkmark.vue'
import Xmark from '~/components/icons/xmark-square.vue'

const apps = appList
const appProfiles = apps
  .filter((app) => app.profile)
  .map((app) => app.profile)
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
<!--            <th class="px-4 py-3 font-medium">Export</th>-->
<!--            <th class="px-4 py-3 font-medium">Import</th>-->
            <th class="px-4 py-3 font-medium">Modules</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="app in apps" :key="app.app_id" class="border-t border-rule align-top">
            <td class="px-4 py-4 text-fg">{{ app.name }}</td>
            <td class="px-4 py-4 font-mono text-[13px] text-mut">{{ app.app_id }}</td>
<!--            <td class="px-4 py-4">-->
<!--              <Checkmark v-if="app.export" size="1.8em" color="var(&#45;&#45;color-ok)" />-->
<!--              <Xmark v-else size="1.8em" color="var(&#45;&#45;color-err)" />-->
<!--            </td>-->
<!--            <td class="px-4 py-4">-->
<!--              <Checkmark v-if="app.import" size="1.8em" color="var(&#45;&#45;color-ok)" />-->
<!--              <Xmark v-else size="1.8em" color="var(&#45;&#45;color-err)" />-->
<!--            </td>-->
            <td class="px-4 py-4 font-mono text-[12.5px] text-mut">{{ app.modules.join(', ') }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="mt-16 space-y-10">
      <div v-for="profile in appProfiles" :id="profile.slug" :key="profile.slug" class="border-t border-rule pt-8">
        <div class="mb-5">
          <h2 class="text-2xl font-semibold tracking-[-0.03em] text-fg">
            {{ profile.name }}
            <span class="ml-2 align-middle text-sm font-medium uppercase tracking-[0.08em] text-mut">{{ profile.status }}</span>
          </h2>
          <p class="mt-3 max-w-3xl text-base leading-7 text-fg2">{{ profile.summary }}</p>
        </div>

        <div class="overflow-hidden rounded-xl border border-rule bg-panel">
          <table class="w-full border-collapse text-left text-sm">
            <thead class="bg-sunk/60 text-[11px] uppercase tracking-[0.12em] text-mut">
              <tr>
                <th class="px-4 py-3 font-medium">App shape</th>
                <th class="px-4 py-3 font-medium">PluralPort target</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in profile.mapping" :key="`${profile.slug}-${index}`" class="border-t border-rule align-top">
                <td class="px-4 py-3 font-mono text-[12.5px] text-fg2">{{ row.source }}</td>
                <td class="px-4 py-3 text-fg2">{{ row.target }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 flex flex-wrap gap-3">
          <a
            v-for="link in profile.links"
            :key="link.label"
            :href="link.href"
            class="inline-flex items-center rounded-full border border-rule2 px-3 py-1.5 text-sm text-fg2 transition hover:border-rule hover:text-fg"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>
