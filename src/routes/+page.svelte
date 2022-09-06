<script lang="ts">
  import CncLogo from "$components/animated/CncLogo.svelte";
  import CncText from "$components/animated/CncText.svelte";
  import FloatIn from "$components/animated/FloatIn.svelte";
  import Link from "$components/elements/Link.svelte";
  import { nextContestDate, nextContestTime } from "$data/nextContest";
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

  <CncText delay={200} clsx="mb-10" color="#F13830">
    <h1 class="page-title">Crack 'n' Code Thailand</h1>
  </CncText>

  <CncText delay={100} clsx="my-6" color="#000">
    <div class="w-11 h-2 bg-red-600"> </div>
  </CncText>

  <CncText delay={750} clsx="mb-2" color="#F13830">
    <h2 class="text-3xl font-bold">Next Contest</h2>
  </CncText>

  <CncText delay={750} color="#F13830">
    <p class="text-xl">{nextContestDate} @ {nextContestTime} (UTC+7)</p>
  </CncText>

  <FloatIn delay={1000}>
    <div class="mt-11 mb-6 flex justify-center gap-5">
      <Link
        href="https://crackncode.contest.codeforces.com/group/rn8uJP8lA7/contests"
      >
        <button
          class="text-white bg-red-600 hover:bg-red-500"
        >
          Register
        </button>
      </Link>

      <a href="/competitions">
        <button class="bg-gray-600 hover:bg-gray-500">
          View all competitions
        </button>
      </a>
    </div>
  </FloatIn>
</main>

<style lang="scss">
  button {
    @apply rounded-md py-3 px-5 text-xl transition-colors;
  }
</style>
