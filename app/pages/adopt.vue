<script setup lang="ts"></script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-14 lg:px-8">
    <h1 class="text-4xl font-semibold tracking-[-0.04em] text-fg">Quickstart</h1>
    <p class="mt-4 max-w-2xl text-lg leading-7 text-fg2">
      Write a minimum viable export first. Four arrays and an envelope is a valid PluralPort file, and it already beats a
      proprietary dump.
    </p>

    <div class="mt-10 grid gap-8">
      <div class="grid grid-cols-[34px_minmax(0,1fr)] gap-5">
        <span class="pt-1 font-mono text-[15px] text-mut">1</span>
        <div>
          <h3 class="text-lg font-semibold text-fg">Emit the envelope</h3>
          <p class="mt-2 text-[15.5px] leading-7 text-fg2">
            Set <code class="text-[14px]">pluralport_version</code>, <code class="text-[14px]">producer</code>, and a
            <code class="text-[14px]">capabilities.modules</code> array listing only what you actually populate.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-[34px_minmax(0,1fr)] gap-5">
        <span class="pt-1 font-mono text-[15px] text-mut">2</span>
        <div>
          <h3 class="text-lg font-semibold text-fg">Map systems and members</h3>
          <p class="mt-2 text-[15.5px] leading-7 text-fg2">
            Generate file-local IDs, then put your originals in <code class="text-[14px]">source_refs</code>. Anything you
            can’t map goes in <code class="text-[14px]">extensions</code> under your app ID.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-[34px_minmax(0,1fr)] gap-5">
        <span class="pt-1 font-mono text-[15px] text-mut">3</span>
        <div>
          <h3 class="text-lg font-semibold text-fg">Report what you dropped</h3>
          <p class="mt-2 text-[15.5px] leading-7 text-fg2">
            Every skipped or degraded value gets a <code class="text-[14px]">warnings</code> entry. Silent loss is the one
            thing the spec treats as a bug.
          </p>
        </div>
      </div>

<!--      <div class="grid grid-cols-[34px_minmax(0,1fr)] gap-5">-->
<!--        <span class="pt-1 font-mono text-[15px] text-mut">4</span>-->
<!--        <div>-->
<!--          <h3 class="text-lg font-semibold text-fg">Validate and round-trip</h3>-->
<!--          <p class="mt-2 text-[15.5px] leading-7 text-fg2">-->
<!--            Run your file through <NuxtLink to="/validate" class="text-fg underline decoration-rule2 underline-offset-2 hover:text-fg2">the validator</NuxtLink>,-->
<!--            then import it back into your own app and diff. Add modules once that’s clean.-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
    </div>

    <div class="mt-12 border border-rule bg-sunk p-6">
      <h3 class="text-base font-semibold text-fg">Register your App ID</h3>
      <p class="mt-2 text-[15px] leading-6 text-fg2">
        Short IDs are used in <code class="text-[14px]">SourceRef.app</code> and as <code class="text-[14px]">extensions</code>
        namespaces. Open a PR against the repo, or use a reverse-DNS key like <code class="text-[14px]">com.example.app</code>
        if you’d rather not register.
      </p>
    </div>
  </main>
</template>
