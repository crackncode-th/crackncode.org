<script lang="ts">
  import CncText from "$components/animated/CncText.svelte";
  import FloatIn from "$components/animated/FloatIn.svelte";
  import Link from "$components/elements/Link.svelte";
  import RoundCard from "$components/elements/RoundCard.svelte";
  import { competitions, sortKey } from "$data/competitions";
</script>

<svelte:head>
  <title>All Competitions | Crack 'n' Code Thailand</title>
  <meta
    name="description"
    content="A page that lists all competitions, past and upcoming held by Crack 'n' Code Thailand"
  />
</svelte:head>

<main class="page">
  <CncText delay={0} clsx="mb-10" color="#F13830">
    <h1 class="page-title">All Competitions</h1>
  </CncText>

  <FloatIn delay={200}>
    <p class="mt-8 text-left">
      * All time are displayed in Thailand Local Time (UTC+7)
    </p>
    <p class="text-left">
      * CMS Competitions are not available for practice yet but its statements
      can be found on our
      <Link href="https://github.com/crackncode-th" blue>GitHub</Link>
    </p>
    <p class="text-left">
      * Some of CMS Competitions are now available in
      <Link href="https://programming.in.th" blue>programming.inth</Link>
      and
      <Link href="https://otog.in.th" blue>otog.in.th</Link>
    </p>
  </FloatIn>

  <FloatIn delay={400}>
    {#each Object.entries(competitions).sort((a, b) => sortKey.indexOf(a[0]) - sortKey.indexOf(b[0])) as [year, comps]}
      <section class="my-8">
        <div class="my-8 flex items-center gap-4">
          <h2 class="text-3xl font-bold">{year}</h2>
          <hr class="flex-1" />
        </div>

        {#if year.includes("Upcoming")}
          <p class="mb-6 text-left text-lg">
            Note: Competition date/time may be changed, please follow our social
            media to stay updated
          </p>
        {/if}

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {#each comps as comp}
            {#if comp.link}
              <Link href={comp.link}>
                <RoundCard data={comp} />
              </Link>
            {:else}
              <div class="cursor-default">
                <RoundCard data={comp} />
              </div>
            {/if}
          {/each}
        </div>

        {#if comps.length === 0}
          <p class="self-start text-start text-2xl font-bold">TBA</p>
        {/if}
      </section>
    {/each}
  </FloatIn>
</main>
