<script lang="ts">
  import type { ICompetition } from "$data/competitions";

  export let data: ICompetition;
  $: ({ round, special, duration, link } = data);

  function logoFromURL(url: string) {
    if (url.includes("hackerrank")) return "logos/hackerrank.webp";

    if (url.includes("codeforces")) return "logos/codeforces.webp";

    return "logos/cms.webp";
  }
</script>

<div
  class="flex items-center rounded-xl border border-gray-500 p-4 transition-colors hover:border-gray-600"
>
  <div class="flex flex-1 flex-col">
    <p class="text-lg font-bold">
      {round} Round{special ? ` (${special})` : ""}
    </p>
    <p>{duration}</p>
  </div>
  <div class="shrink-0">
    <img width="48" src={logoFromURL(link)} alt="Competition Platform Logo" />
  </div>
</div>
