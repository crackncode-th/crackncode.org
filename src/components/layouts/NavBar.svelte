<script lang="ts">
  import { onMount } from "svelte";

  import { page } from "$app/stores";

  const routes = {
    "/": "Home",
    about: "About",
    competitions: "All Competitions",
    sponsors: "Sponsors",
  };

  let popup = false;

  import List from "svelte-bootstrap-icons/lib/List.svelte";

  onMount(() => {
    const listener = () => (popup = false);

    window.addEventListener("click", listener);
    return () => window.removeEventListener("click", listener);
  });
</script>

<nav
  class="rwidth mx-auto flex select-none flex-row items-center justify-between p-4"
>
  <div class="left">
    <a href="/" class="flex flex-row items-center gap-3">
      <img
        class="cursor-pointer"
        width="32"
        src="crackncode.webp"
        alt="crack n code logo"
      />
      <b class="uppercase">crack 'n' code</b>
    </a> 
  </div>

  <!-- Desktop Nav -->
  <div
    class="links hidden flex-row items-center justify-end gap-2 px-4 sm:flex"
    data-sveltekit-prefetch
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-lg {(
          url == '/'
            ? $page.url.pathname == '/'
            : $page.url.pathname == '/' + url
        )
          ? 'bg-slate-800 cursor-default'
          : 'hover:bg-slate-700'} px-2 py-1 rounded transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>

  <!-- Mobile Nav -->
  <div
    class="inline rounded bg-slate-800 p-2 hover:bg-slate-600 sm:hidden"
    on:click={() => setTimeout(() => (popup = !popup), 0)}
  >
    <List width="28" height="28" />
  </div>

  <div
    class="absolute top-4 z-20 flex flex-col rounded bg-slate-800 p-2 {popup
      ? 'right-2 opacity-100'
      : '-right-44 opacity-0'} transition-all"
    data-sveltekit-prefetch
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-xl {(
          url == '/'
            ? $page.url.pathname == '/'
            : $page.url.pathname == '/' + url
        )
          ? 'text-pink-500'
          : 'text-white'} rounded p-2 transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>
</nav>
