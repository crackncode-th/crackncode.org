<script lang="ts">
  import { onMount } from "svelte";

  import { page } from "$app/stores";

  const routes = {
    "/": "Home",
    about: "About",
    competitions: "All Competitions",
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
    <a href="/">
      <img
        class="cursor-pointer"
        width="96"
        src="crackncode.webp"
        alt="crack n code logo"
      />
    </a>
  </div>

  <!-- Desktop Nav -->
  <div
    class="links hidden flex-row items-center justify-end gap-2 px-4 sm:flex"
    data-sveltekit-prefetch
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-xl {(
          url == '/'
            ? $page.url.pathname == '/'
            : $page.url.pathname == '/' + url
        )
          ? 'cursor-default bg-slate-800'
          : 'hover:bg-slate-700'} rounded p-2 transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>

  <!-- Mobile Nav -->
  <div
    class="inline rounded bg-slate-800 p-2 hover:bg-slate-600 sm:hidden"
    on:click={() => setTimeout(() => (popup = !popup), 10)}
  >
    <List />
  </div>

  <div
    class="absolute top-4 flex flex-col rounded bg-slate-800 p-2 {popup
      ? 'right-2 opacity-100'
      : '-right-28 opacity-0'} transition-all"
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
