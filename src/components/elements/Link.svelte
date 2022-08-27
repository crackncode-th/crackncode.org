<script lang="ts">
  export let href: string;
</script>

<a
  {href}
  target="_blank"
  rel="noreferrer"
  class="text-white hover:text-gray-400 transition-all"
>
  <slot />
</a>
