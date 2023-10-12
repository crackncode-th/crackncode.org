<script lang="ts">
  import CncLogo from "$components/animated/CncLogo.svelte";
  import CncText from "$components/animated/CncText.svelte";
  import FloatIn from "$components/animated/FloatIn.svelte";
  import RedButton from "$components/elements/RedButton.svelte";
  import {
    isTBA,
    nextContestIsSpecial,
    nextContestLink,
    nextContestTime,
    pastNextContest,
  } from "$data/nextContest";
  import styles from "$styles/styles.module.scss";
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

  <CncText delay={0} clsx="mb-10" color="#F13830">
    <h1 class="page-title">Crack 'n' Code Thailand</h1>
  </CncText>

  <CncText delay={0} clsx="my-6" color="#101010">
    <div class="h-2 w-11 bg-red-600" />
  </CncText>

  <CncText delay={400} clsx="mb-2" color="#F13830">
    <h2 class="text-3xl font-bold">
      {pastNextContest ? "Previous" : "Next"} Contest
      {#if nextContestIsSpecial}
        <br class="sm:hidden" />
        ✨Special Round✨
      {/if}
    </h2>
  </CncText>

  <CncText delay={400} color="#F13830">
    <p class="text-xl">{nextContestTime} (UTC+7)</p>
  </CncText>

  <FloatIn delay={600}>
    <div class="mb-6 mt-11 flex flex-col justify-center gap-5 sm:flex-row">
      <RedButton href={nextContestLink} disabled={isTBA}>
        {nextContestIsSpecial ? "View Details" : "Register"}
      </RedButton>

      <a
        href="/competitions"
        class="bg-gray-600 hover:bg-gray-500 {styles.colorButton}"
      >
        View all competitions
      </a>
    </div>
  </FloatIn>
</main>
