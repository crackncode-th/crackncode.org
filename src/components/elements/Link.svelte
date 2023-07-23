<script lang="ts">
  import styles from "$styles/styles.module.scss";

  export let href: string;
  export let clsx = "";
  export let blue = false;
  export let disabled: boolean = false;

  const restProps = href.startsWith("http")
    ? { target: "_blank", rel: "noopener" }
    : {};
</script>

{#if disabled}
  <p
    class="{blue
      ? styles.blueLink
      : 'text-white hover:text-gray-400'} transition-all {clsx}"
  >
    <slot />
  </p>
{:else}
  <a
    {href}
    {...restProps}
    class="{blue
      ? styles.blueLink
      : 'text-white hover:text-gray-400'} transition-all {clsx}"
  >
    <slot />
  </a>
{/if}
