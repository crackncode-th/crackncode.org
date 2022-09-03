<script lang="ts">
  import styles from "$styles/styles.module.scss";

  export let github: string;
  export let name: string;
  export let sponsoring: string;
  export let amount: number;
</script>

<div class={styles.card}>
  <img
    class="rounded-full"
    width="48"
    src="https://github.com/{github}.png"
    alt="Sponsor GitHub Pfp"
  />

  <div class="flex flex-1 flex-col">
    <p class="text-lg font-bold">{name} is sponsoring</p>
    <p>{sponsoring} 🎉🎉🎉</p>
  </div>

  <p class="text-xl font-bold">{amount} THB</p>
</div>
