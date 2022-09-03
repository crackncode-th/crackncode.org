<script lang="ts">
  import CncText from "$components/elements/CncText.svelte";
  import CncLogo from "$components/elements/CncLogo.svelte";
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
</main>
