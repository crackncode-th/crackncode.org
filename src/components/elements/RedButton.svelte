<script lang="ts">
  import Link from "$components/elements/Link.svelte";
  import styles from "$styles/styles.module.scss";

  export let href: string;
  export let disabled: boolean = false;
</script>

<Link {href} {disabled}>
  <button class="bg-red-600 text-white hover:bg-red-500 {styles.colorButton}">
    <slot />
  </button>
</Link>
