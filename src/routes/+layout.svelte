<script lang="ts">
  import "../app.scss";

  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import Footer from "$components/layouts/Footer.svelte";
  import NavBar from "$components/layouts/NavBar.svelte";
  import { showElement } from "$lib/transitions";

  beforeNavigate(() => {
    $showElement = false;
  });

  afterNavigate(() => {
    $showElement = true;
  });
</script>

<NavBar />

<div class="p-4 min-h-[calc(100vh-18rem)]">
  <slot />
</div>

<Footer />
