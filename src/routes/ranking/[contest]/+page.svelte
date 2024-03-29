<script lang="ts">
  import Chevron from "$components/icons/Chevron.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ round, headers, content } = data);

  $: current_key = headers.length - 1;
  let ascending = false;

  function cmp<T>(a: T, b: T, key: number, flipped: boolean, fallback = 0) {
    if (a[key] < b[key]) {
      return flipped ? 1 : -1;
    } else if (a[key] > b[key]) {
      return flipped ? -1 : 1;
    }
    return fallback ? cmp(a, b, fallback, true) : 0;
  }

  function sortKey(_key: string) {
    const key = headers.indexOf(_key);

    return () => {
      if (key === current_key) {
        ascending = !ascending;
      } else {
        current_key = key;
        ascending = false;
      }
      content = content.sort((a, b) =>
        cmp(a, b, key, !ascending, headers.length - 1)
      );
    };
  }
</script>

<main>
  <h1 class="text-2xl font-bold sm:text-3xl">Ranking for {round}</h1>

  <div class="mx-auto my-8 w-full overflow-x-auto 2xl:w-[1250px]">
    <table class="mx-auto">
      <thead>
        {#each headers as column, index}
          <th
            class:selected-col={current_key === index}
            on:click={column === "Rank" ? null : sortKey(column)}
          >
            <div>
              {column}
              {#if column !== "Rank"}
                <Chevron ascending={ascending && current_key === index} />
              {/if}
            </div>
          </th>
        {/each}
      </thead>
      <tbody class="text-white">
        {#each content as columns}
          <tr>
            {#each columns as column}
              <td>
                {column}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</main>

<style lang="scss">
  th,
  td {
    @apply border-y border-gray-500 p-1 text-base lg:p-2 lg:text-lg;

    &:first-child {
      @apply border-l;
    }

    &:last-child {
      @apply border-r;
    }
  }

  th {
    @apply cursor-pointer select-none transition-all;

    & > div {
      @apply flex flex-row items-center justify-center gap-1;
    }
  }

  .selected-col {
    @apply bg-pink-300 text-black;
  }
</style>
