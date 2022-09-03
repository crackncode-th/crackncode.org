<script lang="ts">
  import "../app.scss";

  import Footer from "$components/layouts/Footer.svelte";
  import NavBar from "$components/layouts/NavBar.svelte";
</script>

<NavBar />

<div class="min-h-[calc(100vh-19rem)] p-4">
  <slot />
</div>

<Footer />
