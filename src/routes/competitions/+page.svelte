<script lang="ts">
  import RoundCard from "$components/elements/RoundCard.svelte";
  import { competitions } from "$data/competitions";
</script>

<svelte:head>
  <title>All Competitions | Crack 'n' Code Thailand</title>
  <meta
    name="description"
    content="A page that lists all competitions, past and upcoming held by Crack 'n' Code Thailand"
  />
</svelte:head>

<main class="page">
  <h1 class="page-title">All Competitions</h1>

  <p class="mt-8 text-left">
    * All time are displayed in Thailand Local Time (UTC+7)
  </p>
  <p class="text-left">* CMS Competitions are not available for practice yet</p>

  {#each Object.entries(competitions) as [year, comps]}
    <section class="my-8">
      <div class="my-8 flex items-center gap-4">
        <h2 class="text-3xl font-bold">{year}</h2>
        <hr class="flex-1" />
      </div>

      {#if year.includes("Upcoming")}
        <p class="mb-6 text-left text-lg">
          Note: Competition date/time may be changed
        </p>
      {/if}

      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {#each comps as comp}
          {#if comp.link.startsWith("https://")}
            <a href={comp.link} target="_blank" rel="noreferrer">
              <RoundCard data={comp} />
            </a>
          {:else}
            <div class="cursor-default">
              <RoundCard data={comp} />
            </div>
          {/if}
        {/each}
      </div>
    </section>
  {/each}
</main>
