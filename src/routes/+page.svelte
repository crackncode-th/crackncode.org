<script>
  import { doubleSlide, doubleSlide_txt } from '../components/transitions/transitions';
  import { onMount } from 'svelte';

  let durationtime = 1500;
  let delay1 = 100, delay2 = 650;

  let text_transition_visible = false;
  onMount(async () => {
    text_transition_visible = true;
  });
</script>

<main class="page">
  {#if text_transition_visible}
    <div class="center-itself container items-center mb-10">
        <div class="box" transition:doubleSlide="{{delay: delay1, duration: durationtime}}"></div>
        <h1 class="page-title center-itself" transition:doubleSlide_txt="{{delay: delay1, duration: durationtime}}">Crack 'n' Code Thailand</h1>
    </div>

    <div class="center-itself container items-center mb-2">
      <div class="box" transition:doubleSlide="{{delay: delay2, duration: durationtime}}"></div>
      <h2 class="center-itself" transition:doubleSlide_txt="{{delay: delay2, duration: durationtime}}">Next Contest</h2>
    </div>

    <div class="center-itself container items-center">
      <div class="box" transition:doubleSlide="{{delay: delay2, duration: durationtime}}"></div>
      <p class="center-itself" transition:doubleSlide_txt="{{delay: delay2, duration: durationtime}}">September 3, 2022 @ 19:00-22:00 (UTC+7)</p>
    </div>
  {/if}
</main>

<style lang="scss">
  .box {
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: -1;
    position: fixed;
    left: 0%;
  }

  .container {
    width: fit-content;
    height: fit-content;
  }

  .center-itself {
    position: relative;
    transform: translateX(-50%);
    left: 50%;
  }
</style>
