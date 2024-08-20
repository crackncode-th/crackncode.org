<script lang="ts">
  import CncLogo from "$components/animated/CncLogo.svelte";
  import CncText from "$components/animated/CncText.svelte";
  import FloatIn from "$components/animated/FloatIn.svelte";
  import styles from "$styles/styles.module.scss";
</script>

<svelte:head>
  <title>Crack 'n' Code Thailand</title>
  <meta
    name="description"
    content="Crack 'n' Code is online programming contest organizer"
  />
  <meta property="og:image" content="/og.png" />
</svelte:head>

<main class="page">
  <CncLogo />

  <CncText delay={0} clsx="mb-10" color="#F13830">
    <h1 class="page-title">Crack 'n' Code Thailand</h1>
  </CncText>

  <CncText delay={0} clsx="my-6" color="#101010">
    <div class="h-2 w-11 bg-red-600" />
  </CncText>

  <CncText delay={0} clsx="my-6" color="#101010">
    <p class="text-lg">
      <span class="font-bold">Dear followers of Crack 'n' Code Thailand</span>
      <br />
      This is the final message from Crack 'n' Code Thailand to all of you. We would
      like to inform you that there will no longer be any coding competitions organized
      by us.
    </p>
    <br />
    <p class="text-lg">
      After careful consideration, our team has decided that it is the right
      time to close down due to various reasons. However, we have achieved far
      more than we initially expected and want to express our sincere gratitude
      to all our followers who have supported us throughout. We hope that you
      will continue to find inspiration in coding. Thank you all for the last
      time.
    </p>
  </CncText>

  <FloatIn delay={600}>
    <div class="mb-6 mt-11 flex flex-col justify-center gap-5 sm:flex-row">
      <a
        href="/competitions"
        class="bg-gray-600 hover:bg-gray-500 {styles.colorButton}"
      >
        View all past competitions
      </a>
    </div>
  </FloatIn>
</main>
