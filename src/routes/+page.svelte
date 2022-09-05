<script lang="ts">
  import CncLogo from "$components/animated/CncLogo.svelte";
  import CncText from "$components/animated/CncText.svelte";
  import FadeIn from "$components/animated/FadeIn.svelte";
  import Link from "$components/elements/Link.svelte";
</script>

<svelte:head>
  <title>Crack 'n' Code Thailand</title>
  <meta
    name="description"
    content="Crack 'n' Code is online programming contest organizer"
  />
</svelte:head>

<main class="page">
  <CncLogo />

  <CncText delay={200} clsx="mb-10">
    <h1 class="page-title">Crack 'n' Code Thailand</h1>
  </CncText>

  <CncText delay={750} clsx="mb-2">
    <h2 class="text-3xl font-bold">Next Contest</h2>
  </CncText>

  <CncText delay={750}>
    <p class="text-xl">September 10, 2022 @ 19:00-22:00 (UTC+7)</p>
  </CncText>

  <FadeIn delay={500}>
    <div class="mt-10 flex justify-center gap-4">
      <Link
        href="https://crackncode.contest.codeforces.com/group/rn8uJP8lA7/contests"
      >
        <button
          class="border-red-500 bg-gradient-to-br from-red-200 to-red-400 hover:border-red-700"
        >
          Register in Codeforces
        </button>
      </Link>

      <a href="/competitions">
        <button class="border-gray-400 bg-gray-300 hover:border-gray-500">
          View all competitions
        </button>
      </a>
    </div>
  </FadeIn>
</main>

<style lang="scss">
  button {
    @apply rounded-xl border-2 py-2 px-4 text-xl font-bold text-black transition-colors;
  }
</style>
