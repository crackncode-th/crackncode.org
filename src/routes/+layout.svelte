<script lang="ts">
  import "../app.scss";

  import Footer from "$components/layouts/Footer.svelte";
  import NavBar from "$components/layouts/NavBar.svelte";
</script>

<NavBar />

<div class="p-4 min-h-[calc(100vh-18rem)]">
  <slot />
</div>

<Footer />
