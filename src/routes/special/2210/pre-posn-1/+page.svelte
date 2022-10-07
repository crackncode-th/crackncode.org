<script>
  import FloatIn from "$components/animated/FloatIn.svelte";
  import RedButton from "$components/elements/RedButton.svelte";
  import { codeforcesLink } from "$data/competitions";
</script>

<svelte:head>
  <title>Pre POSN 1 Contest | Crack 'n' Code Thailand</title>
  <meta
    name="description"
    content="คอนเทสต์พิเศษเพื่อช่วยให้ทุกคนเตรียมพร้อมสำหรับการสอบปลายค่าย 1 ที่กำลังจะมาถึงนี้"
  />
</svelte:head>

<FloatIn delay={100} clsx="my-4">
  <h2 class="text-3xl font-bold">Pre POSN 1</h2>

  <p class="text-2xl font-bold">
    คอนเทสต์เพื่อให้ทุกคนเตรียมพร้อมสำหรับการสอบปลายค่าย 1 สอวน คอมพิวเตอร์
  </p>
</FloatIn>

<FloatIn delay={200} clsx="my-4">
  <p class="text-2xl">15 October 2022 19:00 - 22:00 @ Codeforces</p>
</FloatIn>

<FloatIn delay={300} clsx="my-4">
  <h2 class="text-3xl font-bold">รายละเอียดการแข่งขัน</h2>

  <ul class="app-width mx-auto list-disc text-left sm:text-xl">
    <li>มี 6 ข้อ ข้อละ 100 คะแนน รวม 600 คะแนน</li>
    <li>
      จุดประสงค์ของโจทย์ทุกข้อ คือการวัดพื้นฐานการเขียนโปรแกรมด้วยภาษา C
      ครอบคลุมเนื้อหาทั้งหมดในค่าย วัดความรู้ทางตรรกศาสตร์ คณิตศาสตร์
      <b>แนวโจทย์อาจไม่ตรงกับข้อสอบทั้งหมด</b> แต่หากคุณทำโจทย์เหล่านี้ได้ คุณก็มีโอกาสสูงที่จะทำข้อสอบจริงได้
    </li>
    <li>
      หากคุณยังไม่พร้อมสำหรับการทำโจทย์ เราแนะนำให้คุณทำย้อนหลัง ผ่านระบบ
      Virtual Contest ของ Codeforces
    </li>
    <li>Contest นี้ อนุญาตให้ส่งได้เฉพาะภาษา C เท่านั้น</li>
  </ul>
</FloatIn>

<FloatIn delay={400}>
  <RedButton href={codeforcesLink}>Enter Contest</RedButton>
</FloatIn>
