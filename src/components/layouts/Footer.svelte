<script lang="ts">
  import Facebook from "svelte-bootstrap-icons/lib/Facebook.svelte";
  import Github from "svelte-bootstrap-icons/lib/Github.svelte";
  import Instagram from "svelte-bootstrap-icons/lib/Instagram.svelte";

  import Link from "$components/elements/Link.svelte";
</script>

<footer class="my-5 mx-auto flex w-2/3 flex-col items-center justify-center">
  <hr class="mb-5 w-full" />
  <h2 class="text-lg font-bold">Crack 'n' Code Thailand</h2>
  <p class="my-0 mb-2 text-base">
    "เดือนนี้คุณทำโจทย์ Crack 'n' Code แล้วหรือยัง"
  </p>

  <div class="icons flex flex-row justify-center gap-4">
    <Link href="https://www.facebook.com/profile.php?id=100069611934421">
      <Facebook />
    </Link>
    <Link href="https://www.instagram.com/crackncodeth">
      <Instagram />
    </Link>
    <Link href="https://github.com/crackncode-th">
      <Github />
    </Link>
  </div>
</footer>
