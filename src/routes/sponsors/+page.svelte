<script lang="ts">
  import CncText from "$components/animated/CncText.svelte";
  import FloatIn from "$components/animated/FloatIn.svelte";
  import Link from "$components/elements/Link.svelte";
  import SponsorCard from "$components/elements/SponsorCard.svelte";
  import { sponsors } from "$data/sponsors";
  import styles from "$styles/styles.module.scss";
</script>

<svelte:head>
  <title>Sponsors | Crack 'n' Code Thailand</title>
  <meta name="description" content="Sponsors list of Crack 'n' Code Thailand" />
</svelte:head>

<main class="page">
  <CncText delay={0} clsx="mb-10" color="#F13830">
    <h1 class="page-title">Sponsors</h1>
  </CncText>

  <FloatIn delay={200}>
    <div class="mx-auto my-8 flex w-full flex-col gap-4 lg:w-2/3 2xl:w-1/2">
      {#each sponsors as sponsor}
        <SponsorCard {...sponsor} />
      {/each}
    </div>
  </FloatIn>

  <FloatIn delay={400}>
    <h2 class="text-3xl font-bold">Sponsoring</h2>
    <p class="text-lg">
      We appreciate your support for our little non-profit organization. Please
      contact
      <a href="mailto:contact@crackncode.org" class={styles.blueLink}>
        contact@crackncode.org
      </a>
      if you wish to support us.
    </p>
    <p class="text-lg">
      You can also sponsor
      <Link href="https://github.com/sponsors/Leomotors" blue>Leomotors</Link>
      who is the main website developer of Crack 'n' Code.
    </p>
  </FloatIn>
</main>
