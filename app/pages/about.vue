<script setup lang="ts"></script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-14 lg:px-8">
    <h1 class="text-4xl font-semibold tracking-[-0.04em] text-fg">About &amp; governance</h1>
    <p class="mt-4 max-w-3xl text-lg leading-7 text-fg2 text-pretty">
      PluralPort is maintained by a small group of plurality app developers and plural people. It is a specification, not an
      organization, and not a service. There is no server, no account, and nothing to sign up for.
    </p>

    <div class="mt-12 grid gap-px rounded-sm border border-rule bg-rule md:grid-cols-2">
      <div class="bg-panel p-6">
        <h3 class="text-base font-semibold text-fg">How decisions get made</h3>
        <p class="mt-2 text-[15px] leading-6 text-fg2">
          Changes land as PRs with a two-week comment window. Anything that breaks an existing exporter needs sign-off from at
          least two shipping apps.
        </p>
      </div>
      <div class="bg-panel p-6">
        <h3 class="text-base font-semibold text-fg">Registering an app ID</h3>
        <p class="mt-2 text-[15px] leading-6 text-fg2">
          One PR adding your short ID to the canonical list. Private namespaces don’t need registration - use a reverse-DNS key.
        </p>
      </div>
      <div class="bg-panel p-6">
        <h3 class="text-base font-semibold text-fg">Objecting to something</h3>
        <p class="mt-2 text-[15px] leading-6 text-fg2">
          Open an issue. If a field would leak something a system didn’t intend to share, say so and it gets treated as a blocker.
        </p>
      </div>
      <div class="bg-panel p-6">
        <h3 class="text-base font-semibold text-fg">Licensing</h3>
        <p class="mt-2 text-[15px] leading-6 text-fg2">
          Spec text CC BY 4.0. Reference validator and schemas MIT. No trademark restrictions on “exports PluralPort.”
        </p>
      </div>
    </div>
  </main>
</template>
