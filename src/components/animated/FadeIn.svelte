<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let delay: number;

  let showElement = false;
  onMount(() => {
    showElement = true;
  });
</script>

{#if showElement}
  <div in:fade={{ delay }}>
    <slot />
  </div>
{/if}
