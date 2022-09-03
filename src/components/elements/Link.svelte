<script lang="ts">
  export let href: string;
  export let clsx = "";
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  class="text-white transition-all hover:text-gray-400 {clsx}"
>
  <slot />
</a>
