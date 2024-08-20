<script lang="ts">
  import CncText from "$components/animated/CncText.svelte";
  import FloatIn from "$components/animated/FloatIn.svelte";
  import SponsorCard from "$components/elements/SponsorCard.svelte";
  import { sponsors } from "$data/sponsors";
</script>

<svelte:head>
  <title>Sponsors | Crack 'n' Code Thailand</title>
  <meta name="description" content="Sponsors list of Crack 'n' Code Thailand" />
</svelte:head>

<main class="page">
  <CncText delay={0} clsx="mb-10" color="#F13830">
    <h1 class="page-title">Sponsors</h1>
  </CncText>

  <FloatIn delay={200}>
    <div class="mx-auto my-8 flex w-full flex-col gap-4 lg:w-2/3 2xl:w-1/2">
      {#each sponsors as sponsor}
        <SponsorCard {...sponsor} />
      {/each}
    </div>
  </FloatIn>
</main>
