<script lang="ts">
  import CncText from "$components/animated/CncText.svelte";
  import FloatIn from "$components/animated/FloatIn.svelte";
</script>

<svelte:head>
  <title>About us | Crack 'n' Code Thailand</title>
  <meta
    name="description"
    content="About Crack 'n' Code Thailand, Online Programming Contest Organizer"
  />
</svelte:head>

<main class="page flex flex-col gap-8 lg:px-20">
  <CncText delay={0} color="#F13830">
    <h1 class="page-title">About Crack 'n' Code</h1>
  </CncText>

  <FloatIn delay={200}>
    <h2>About Us</h2>
    <p>
      We, Crack 'n' Code Thailand are group of Computer Olympic Students in
      Thailand (IPST, สสวท Camp) that want to open chance for students who are
      interested in Computer Olympic to practice, have fun and improve their
      performance.
    </p>
  </FloatIn>

  <FloatIn delay={400}>
    <h2>About Competition</h2>
    <p>
      Most of our competitions are similar to IOI-Format. There will be 3
      questions with equal score of 100 per each. You will be given 3 hours and
      any language is allowed. Note that we do not use time scaling policy.
      <b>Currently, all statements are only available in Thai.</b>
    </p>
  </FloatIn>

  <FloatIn delay={600}>
    <h2>When are our Contest?</h2>
    <p>
      Our contest will be held at first Saturday of every month. However, it is
      subject to change in some month if we cannot prepare the questions in
      time. In some month, it will be replaced by special event such as New Year
      Party, Pre-TOI. Please follow our social media (Facebook, Instagram) for
      updates. We usually announce within week prior to competition for normal
      round.
    </p>
  </FloatIn>
</main>

<style lang="scss">
  p {
    @apply my-4 text-xl;
  }

  h2 {
    @apply text-2xl font-bold sm:text-3xl;
  }
</style>
