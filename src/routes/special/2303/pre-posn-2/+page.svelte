<script>
  import FloatIn from "$components/animated/FloatIn.svelte";
  import RedButton from "$components/elements/RedButton.svelte";
  import { codeforcesLink } from "$data/competitions";
</script>

<svelte:head>
  <title>Pre POSN 2 Contest | Crack 'n' Code Thailand</title>
  <meta
    name="description"
    content="คอนเทสต์พิเศษเพื่อช่วยให้ทุกคนเตรียมพร้อมสำหรับการสอบปลายค่าย 2 ที่กำลังจะมาถึงนี้"
  />
</svelte:head>

<FloatIn delay={100} clsx="my-6">
  <h2 class="text-3xl font-bold">Pre POSN 2</h2>

  <p class="text-2xl font-bold">
    คอนเทสต์เพื่อให้ทุกคนเตรียมพร้อมสำหรับการสอบปลายค่าย 2 สอวน คอมพิวเตอร์
  </p>
</FloatIn>

<FloatIn delay={200} clsx="my-4">
  <p class="text-2xl">25 March 2022 19:00 - 22:00 @ Codeforces</p>
</FloatIn>

<FloatIn delay={300} clsx="my-8">
  <h2 class="my-2 text-3xl font-bold">รายละเอียดการแข่งขัน</h2>

  <ul class="app-width mx-auto list-disc pl-4 text-left sm:text-xl">
    <li>มีกี่ข้อก็ไม่รู้ :D</li>
  </ul></FloatIn
>

<FloatIn delay={400}>
  <RedButton href={codeforcesLink}>Enter Contest</RedButton>
</FloatIn>
