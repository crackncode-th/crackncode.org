<script lang="ts">
  import { onMount } from "svelte";

  import { floatObj } from "$lib/transitions";

  export let delay: number;
  export let clsx = "";

  let showElement = false;
  onMount(() => {
    showElement = true;
  });
</script>

{#if showElement}
  <div in:floatObj={{ delay }} class={clsx}>
    <slot />
  </div>
{/if}
