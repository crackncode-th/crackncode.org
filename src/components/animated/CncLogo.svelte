<script lang="ts">
  import { onMount } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { draw, fade } from "svelte/transition";

  import { bottom, top } from "$components/animated/LogoShape";

  export let size: "sm" | "lg" = "lg";

  let showElement = false;
  onMount(() => {
    showElement = true;
  });
</script>

{#if showElement}
  <div class="flex justify-center {size === 'lg' ? 'p-10' : 'p-6'}">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={size === "lg" ? 130 : 120}
      height={size === "lg" ? 130 : 120}
      viewBox="0 0 1000 1000"
    >
      <defs>
        <path
          id="logo-top"
          in:draw={{ duration: 1600, easing: cubicOut }}
          d={top}
        />
        <clipPath id="clip-top">
          <use xlink:href="#logo-top" />
        </clipPath>
        <path
          id="logo-bottom"
          in:draw={{ duration: 1600, easing: cubicOut }}
          d={bottom}
        />
        <clipPath id="clip-bottom">
          <use xlink:href="#logo-bottom" />
        </clipPath>
      </defs>
      <g>
        <use
          xlink:href="#logo-top"
          clip-path="url(#clip-top)"
          style="fill: transparent; stroke: white; stroke-width: 40;"
        />
        <use
          xlink:href="#logo-bottom"
          clip-path="url(#clip-bottom)"
          style="fill: transparent; stroke: white; stroke-width: 40;"
        />

        <path
          in:fade={{ delay: 1300, duration: 500 }}
          style="fill: white;"
          d={top}
        />
        <path
          in:fade={{ delay: 1300, duration: 500 }}
          style="fill: white;"
          d={bottom}
        />
      </g>
    </svg>
  </div>
{/if}
