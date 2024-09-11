<script lang="ts">
  import { onMount } from "svelte";

  import { page } from "$app/stores";

  const routes = {
    "": "Home",
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
  class="app-width mx-auto mt-8 flex select-none flex-row items-center justify-between p-4"
>
  <div class="left">
    <a
      href="/"
      class="flex flex-row items-center transition-colors hover:text-neutral-300 lg:gap-3"
    >
      <img
        class="scale-[.66] cursor-pointer lg:scale-100"
        width="48"
        src="/crackncode.webp"
        alt="crack n code logo"
      />
      <div class="flex items-center gap-2">
        <p class="font-bold lg:text-lg">CRACK 'N' CODE</p>
        <img
          src="/Flag_of_Thailand.svg"
          width="36"
          height="24"
          alt="Flag of Thailand"
        />
      </div>
    </a>
  </div>

  <!-- Desktop Nav -->
  <div
    class="links hidden flex-row items-center justify-end gap-2 px-4 sm:flex"
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-lg {(
          url === ''
            ? $page.url.pathname === '/'
            : $page.url.pathname === '/' + url
        )
          ? 'cursor-default bg-slate-800'
          : 'hover:bg-slate-700'} rounded px-2 py-1 transition-all"
        href="/{url}"
      >
        {name}
      </a>
    {/each}
  </div>

  <!-- Mobile Nav -->
  <button
    class="inline rounded bg-slate-800 p-2 hover:bg-slate-600 sm:hidden"
    on:click={() => setTimeout(() => (popup = !popup), 0)}
  >
    <List width="28" height="28" />
  </button>

  <div
    class="absolute top-4 z-20 flex flex-col rounded bg-slate-800 p-2 {popup
      ? 'right-2 opacity-100'
      : '-right-44 opacity-0'} transition-all"
  >
    {#each Object.entries(routes) as [url, name]}
      <a
        class="text-xl {(
          url === ''
            ? $page.url.pathname === '/'
            : $page.url.pathname === '/' + url
        )
          ? 'text-pink-500'
          : 'text-white'} rounded p-2 transition-all"
        href="/{url}"
      >
        {name}
      </a>
    {/each}
  </div>
</nav>
