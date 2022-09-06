<script lang="ts">
  import Link from "$components/elements/Link.svelte";
  import SponsorCard from "$components/elements/SponsorCard.svelte";
  import { sponsors } from "$data/sponsors";
  import styles from "$styles/styles.module.scss";
  import CncText from "$/components/animated/CncText.svelte";
  import FloatIn from "$/components/animated/FloatIn.svelte";
</script>

<svelte:head>
  <title>Sponsors | Crack 'n' Code Thailand</title>
  <meta name="description" content="Sponsors list of Crack 'n' Code Thailand" />
</svelte:head>

<main class="page">
  <CncText delay={200} clsx="mb-10" color="#F13830">
    <h1 class="page-title">Sponsors</h1>
  </CncText>
  
  <FloatIn delay={500}>
    <div class="my-8 mx-auto flex w-full flex-col gap-4 lg:w-2/3 2xl:w-1/2">
      {#each sponsors as sponsor}
        <SponsorCard {...sponsor} />
      {/each}
    </div>
  </FloatIn>

  <FloatIn delay={1000}>
    <h2 class="text-3xl font-bold">Sponsoring</h2>
    <p class="text-lg">
      Please contact
      <a href="mailto:contact@crackncode.org" class={styles.blueLink}>
        contact@crackncode.org
      </a>
      for sponsoring
    </p>
    <p class="text-lg">
      You can also sponsor
      <Link href="https://github.com/sponsors/Leomotors" blue>Leomotors</Link>
      who is main website developer of Crack 'n' Code who supports this domain.
    </p>
  </FloatIn>
</main>
