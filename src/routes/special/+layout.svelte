<script>
  import CncLogo from "$components/animated/CncLogo.svelte";
  import CncText from "$components/animated/CncText.svelte";
</script>

<main class="page">
  <CncLogo size="sm" />

  <CncText delay={0} clsx="mb-10" color="#F13830">
    <h1 class="page-title">Crack 'n' Code Special Contest</h1>
  </CncText>

  <slot />
</main>
