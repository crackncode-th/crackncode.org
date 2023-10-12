<script lang="ts">
  import styles from "$styles/styles.module.scss";

  export let image: string;
  export let url: string;
  export let name: string;
  export let sponsoring: string;
  export let medal: string;
</script>

<a href={url} target="_blank" rel="noreferrer">
  <div class={styles.card}>
    <img width="48" src={image} alt={name} />

    <div class="flex flex-1 flex-col">
      <p class="text-lg font-bold">{name} is sponsoring</p>
      <p>{sponsoring}</p>
    </div>

    <p class="text-xl font-bold">{medal}</p>
  </div>
</a>
