<svelte:head>
  <title>About us | Crack 'n' Code Thailand</title>
  <meta
    name="description"
    content="About Crack 'n' Code Thailand, Online Programming Contest Organizer"
  />
</svelte:head>

<script lang="ts">
  import CncText from "$components/animated/CncText.svelte";
  import FloatIn from "$/components/animated/FloatIn.svelte";
</script>

<main class="page lg:px-20">
  <CncText delay={200} clsx="mb-10" color="#F13830">
    <h1 class="page-title mb-10">About us</h1>
  </CncText>

  <FloatIn delay={500}>
    <p>Coming soon...</p> 
  </FloatIn>
</main>

<style lang="scss">
  p {
    @apply my-4 text-xl lg:text-2xl;
  }
</style>
