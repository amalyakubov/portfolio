<script lang="ts">
  import githubLogo from "$lib/assets/github-mark.svg";
  import linkedInLogoLight from "$lib/assets/InBug-White.png";
</script>

<footer class="bg-black text-white border-t-2 border-white mt-24">
  <div
    class="flex flex-col sm:flex-row justify-between py-16 sm:py-24 px-6 sm:px-10 md:px-14 lg:px-20 gap-12 sm:gap-16 max-w-7xl mx-auto w-full"
  >
    <div class="space-y-6">
      <p class="text-xs font-mono uppercase tracking-[0.2em]">Contact</p>
      <a
        href="mailto:amal.yakubov7777@gmail.com"
        class="block text-2xl sm:text-3xl font-bold tracking-tight hover:underline underline-offset-4"
      >
        amal.yakubov7777@gmail.com
      </a>
      <p class="text-xs font-mono uppercase tracking-[0.2em]">Warsaw, Poland</p>
    </div>

    <div class="space-y-6">
      <p class="text-xs font-mono uppercase tracking-[0.2em]">Socials</p>
      <div class="flex gap-8">
        <a
          href="https://github.com/amalyakubov"
          class="hover:opacity-70 transition-opacity"
          aria-label="GitHub"
        >
          <img src={githubLogo} alt="GitHub" width="32" class="invert" />
        </a>
        <a
          href="https://www.linkedin.com/in/amal-yakubov-3452a5315/"
          class="hover:opacity-70 transition-opacity"
          aria-label="LinkedIn"
        >
          <img src={linkedInLogoLight} alt="LinkedIn" width="32" />
        </a>
      </div>
    </div>
  </div>
</footer>
