<script>
  import FloatIn from "$components/animated/FloatIn.svelte";
  import RedButton from "$components/elements/RedButton.svelte";
  import { codeforcesLink } from "$data/constants";
</script>

<svelte:head>
  <title>New Year Contest | Crack 'n' Code Thailand</title>
  <meta name="description" content="เรามาเขียนโค้ดข้ามปีกันเถอะ" />
</svelte:head>

<FloatIn delay={100} clsx="my-6">
  <h2 class="text-3xl font-bold">🎉 New Year Party 🎉</h2>

  <p class="text-2xl font-bold">🙇‍♂️ เขียนโค้ดข้ามปี 🙇‍♂️</p>
</FloatIn>

<FloatIn delay={200} clsx="my-4">
  <p class="text-2xl">
    31 December 2022 18:00 - 1 January 2023 06:00 @ Codeforces
  </p>
</FloatIn>

<FloatIn delay={300} clsx="my-8">
  <h2 class="my-2 text-3xl font-bold">รายละเอียดการแข่งขัน</h2>

  <ul class="app-width mx-auto list-disc pl-4 text-left sm:text-xl">
    <li>มี 8 ข้อ รวม 1,000 คะแนน คละความยากกันไป</li>
    <ul class="ml-4 list-disc">
      <li>ระดับ A (1 ข้อ ข้อละ 75 คะแนน) - ข้อสอบปลายค่าย 1 สอวน</li>
      <li>ระดับ B (2 ข้อ ข้อละ 100 คะแนน) - ข้อสอบปลายค่าย 2 สอวน</li>
      <li>ระดับ C (3 ข้อ ข้อละ 125 คะแนน) - ข้อสอบแข่งขันระดับชาติ (TOI)</li>
      <li>ระดับ D (1 ข้อ ข้อละ 150 คะแนน) - ข้อสอบปลายค่าย 1 สสวท</li>
      <li>ระดับ E (1 ข้อ ข้อละ 200 คะแนน) - ความยากไม่เกิน IOI</li>
    </ul>
  </ul>
</FloatIn>

<FloatIn delay={400}>
  <RedButton href={codeforcesLink}>Enter Contest</RedButton>
</FloatIn>
