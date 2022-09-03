<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  class="text-white transition-all hover:text-gray-400"
>
  <slot />
</a>
