<script lang="ts">
    import { onMount } from "svelte";
    import { floatObj } from "$lib/transitions";
  
    export let delay: number;
  
    let showElement = false;
    onMount(() => {
      showElement = true;
    });
  </script>
  
  {#if showElement}
    <div in:floatObj={{ delay }}>
      <slot />
    </div>
  {/if}
  