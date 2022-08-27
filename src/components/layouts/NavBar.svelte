<script lang="ts">
  import { onMount } from "svelte";

  import { page } from "$app/stores";

  const routes = {
    "/": "Home",
    about: "About",
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
  class="flex flex-row justify-between items-center p-4 rwidth mx-auto select-none"
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
    class="links px-4 flex-row hidden sm:flex justify-end items-center gap-2"
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-xl {(
          url == '/'
            ? $page.url.pathname == '/'
            : $page.url.pathname == '/' + url
        )
          ? 'bg-slate-800 cursor-default'
          : 'hover:bg-slate-700'} p-2 rounded transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>

  <!-- Mobile Nav -->
  <div
    class="inline sm:hidden bg-slate-800 hover:bg-slate-600 p-2 rounded"
    on:click={() => setTimeout(() => (popup = !popup), 10)}
  >
    <List />
  </div>

  <div
    class="bg-slate-800 rounded absolute top-4 p-2 flex flex-col {popup
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
          : 'text-white'} p-2 rounded transition-all"
        href={url}
      >
        {name}
      </a>
    {/each}
  </div>
</nav>
