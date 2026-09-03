<script setup lang="ts">
import appList from '~/data/apps.json'

const apps = ref(appList);
</script>
<template>
  <main class="bg-bg text-fg">
    <section class="border-b border-rule bg-sunk">
      <div class="mx-auto grid max-w-[1200px] grid-cols-2 items-center gap-14 px-8 py-18">
        <div>
          <h1 class="mb-5 font-mono text-[15px] font-medium uppercase tracking-[0.02em] text-mut">PluralPort - draft v0.1</h1>
          <p class="text-pretty text-[34px] font-normal leading-[1.3] tracking-[-0.022em]">A shared file format for plurality apps.</p>
          <p class="mt-5 max-w-[52ch] text-[16.5px] leading-[1.65] text-fg2">Most plurality apps store the same kinds of data: members, systems, fronting history, custom fields, and notes. The problem is that they don’t agree on the shape. PluralPort gives apps one common export and import format, instead of a pile of one-off converters.</p>

          <div class="mt-7 flex gap-5 text-[14.5px]">
            <a href="#" @click.prevent="() => {}" class="text-fg hover:text-fg2">Read the spec &#8594;</a>
            <a href="#" @click.prevent="() => {}" class="text-fg hover:text-fg2">Connector protocol &#8594;</a>
            <a href="#" @click.prevent="() => {}" class="text-fg hover:text-fg2">Send feedback &#8594;</a>
          </div>
        </div>

        <pre class="m-0 overflow-auto border border-rule bg-panel p-[22px] text-[12.5px] leading-[1.7] text-mut">{
  "pluralport_version": "0.1",
  "producer": { "app_id": "sheaf" },
  "members": [
    {
      "id": "01J8Z9...",
      "name": "wren",
      "pronouns": "they/them",
      "privacy": { "level": "trusted" },
      "source_refs": [
        { "app": "sheaf", "id": "mem_4482" }
      ],
      "extensions": { "sheaf": { "tint": 3 } }
    }
  ],
  "warnings": []
}</pre>
      </div>
    </section>

    <section class="border-b border-rule">
      <div class="mx-auto grid max-w-[1200px] grid-cols-3 px-8">
        <div class="border-r border-rule px-0 py-11 pr-10">
          <h3 class="mb-2.5 text-[16px] font-semibold">Apps keep their own model</h3>
          <p class="text-[15px] leading-6 text-fg2">PluralPort is a format, not a schema rewrite. Apps keep their internal structure and agree on the export shape.</p>
        </div>
        <div class="border-r border-rule px-10 py-11">
          <h3 class="mb-2.5 text-[16px] font-semibold">Modules can be partial</h3>
          <p class="text-[15px] leading-6 text-fg2">Importers don't have to support everything. <code class="text-[13.5px]">capabilities.modules</code> tells you what a file contains.</p>
        </div>
        <div class="px-0 py-11 pl-10">
          <h3 class="mb-2.5 text-[16px] font-semibold">Nothing gets silently lost</h3>
          <p class="text-[15px] leading-6 text-fg2">Original IDs stay in <code class="text-[13.5px]">source_refs</code>, and app-specific fields live in namespaced <code class="text-[13.5px]">extensions</code>.</p>
        </div>
      </div>
    </section>

    <section class="border-b border-rule bg-sunk">
      <div class="mx-auto max-w-300 px-8 pt-16">
        <div>
          <h2 class="text-[26px] font-semibold tracking-[-0.02em]">What the problem looks like</h2>
          <p class="mt-2">There are a lot of plurality apps, and most of them store the same basic things: systems, members, fronting history, custom fields, and notes. But they do not store them in the same shape. The result is a lot of one-off conversions, and a lot of places where data gets lost, guessed, or silently reshaped.</p>
          <p class="mt-2">PluralPort is a common format for exports and imports. It is not a new app and not a service. It is a shared file shape that lets apps move data without rebuilding the same conversion logic over and over.</p>
        </div>
      </div>
      <div class="mx-auto max-w-300 px-8 pt-16 pb-16">
        <div>
          <h2 class="text-[26px] font-semibold tracking-[-0.02em]">Where it stands</h2>
          <p class="mt-2">A few app maintainers have expressed interest, and the draft is already being checked against real-world app data rather than abstract examples. The current version is draft v0.1: early enough to change, but concrete enough to test.</p>
          <p class="mt-2">A few open questions still matter:</p>
          <ul class="ml-5 mt-3 list-disc text-[15px] leading-6 text-fg2">
            <li>Whether the fronting model covers the edge cases apps actually hit.</li>
            <li>Which optional modules belong in the first version and which should wait.</li>
            <li>Whether the extension namespaces are flexible enough for app-specific fields that haven’t been invented yet.</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <div class="mx-auto max-w-[1200px] px-8 pb-24 pt-14">
        <div class="mb-[22px] flex items-baseline justify-between">
          <h2 class="text-[16px] font-semibold">Registered apps</h2>
          <a href="#" @click.prevent="() => {}" class="text-[14px] text-fg hover:text-fg2">Adoption status</a>
        </div>
        <div class="flex flex-wrap gap-2 font-mono text-[13px]">
          <span class="rounded-sm border border-rule2 px-[11px] py-[6px]" v-for="app in apps" :key="app">{{ app.app_id }}</span>
        </div>
      </div>
    </section>
  </main>
</template>