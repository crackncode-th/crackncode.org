<script lang="ts">
  import { nextContestTime } from "$data/nextContest";

  const tokens = nextContestTime.split(" ");
  const date = tokens.slice(0, 3).join(" ");
  const time = tokens.slice(3).join(" ");
</script>

<svelte:head>
  <title>Poster | Crack 'n' Code Thailand</title>
  <meta name="description" content="Poster for next Crack 'n' Code Contest" />
</svelte:head>

<p class="mb-4">Only use this poster for normal round</p>

<main
  class="mx-auto flex aspect-square w-[512px] flex-col items-center justify-center gap-4 border border-yellow-400 p-4"
>
  <img src="crackncode.webp" class="mb-8" width="180" alt="Cnc Logo" />

  <h1 class="text-4xl font-bold">Crack 'n' Code Thailand</h1>
  <h2 class="text-3xl font-bold">Next Contest</h2>

  <p class="text-4xl">{date}</p>
  <p class="text-4xl">{time}</p>
</main>
