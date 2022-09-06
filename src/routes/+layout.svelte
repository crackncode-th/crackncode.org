<script lang="ts">
  import "$/app.scss";

  import Footer from "$components/layouts/Footer.svelte";
  import NavBar from "$components/layouts/NavBar.svelte";
</script>

<!-- https://stackoverflow.com/questions/14270084/overflow-xhidden-doesnt-prevent-content-from-overflowing-in-mobile-browsers -->
<div class="relative overflow-x-hidden">
  <NavBar />
  <div class="min-h-[calc(100vh-18rem)] p-4 lg:min-h-[calc(100vh-16.5rem)]">
    <slot />
  </div>
  <Footer />
</div>
