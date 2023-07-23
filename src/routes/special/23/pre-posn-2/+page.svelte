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
  <p class="text-2xl">Round 1 25 March 2022 20:00 - 23:00 @ Codeforces</p>
  <p class="text-2xl">Round 2 1 April 2022 19:00 - 22:00 @ Codeforces</p>
</FloatIn>

<FloatIn delay={300} clsx="my-8">
  <h2 class="my-2 text-3xl font-bold">รายละเอียดการแข่งขัน</h2>

  <ul class="app-width mx-auto list-disc pl-4 text-left sm:text-xl">
    <li>
      มี 6 ข้อ แบ่งออกเป็น 2 วัน วันละ 3 ข้อ ข้อละ 100 คะแนน รวม 600 คะแนน
    </li>
    <li>
      จุดประสงค์ของโจทย์ทุกข้อ คือวัดพื้นฐานการเขียนโปรแกรมด้วยภาษา C++
      โดยครอบคลุมเนื้อหาทั้งหมดของค่าย 2 สอวน.
      วัดความรู้เกี่ยวกับโครงสร้างข้อมูลและขั้นตอนวิธีในการแก้ปัญหา
      <b> แนวโจทย์อาจไม่ตรงกับข้อสอบทั้งหมด </b>
      แต่หากคุณสามารถทำโจทย์เหล่านี้ได้ คุณก็มีโอกาสสูงที่จะทำข้อสอบจริงได้
    </li>
    <li>
      หากคุณยังไม่พร้อมสำหรับการทำโจทย์ เราแนะนำให้คุณทำย้อนหลัง ผ่านระบบ
      Virtual Contest ของ Codeforces
    </li>
    <li>ใน Contest นี้สามารถใช้ได้ทั้งภาษา C และ C++</li>
  </ul>
</FloatIn>

<FloatIn delay={400}>
  <RedButton href={codeforcesLink}>Enter Contest</RedButton>
</FloatIn>
