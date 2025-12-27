<script lang="ts">
  let d = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Warsaw",
    hour12: false,
    timeStyle: "short",
  });
</script>

<nav class="navbar py-4 sm:py-6 lg:py-8 flex items-center justify-between text-xs sm:text-sm lg:text-base font-['Inter']">
  <div class="flex items-center gap-3 sm:gap-6 lg:gap-8">
    <a href="/" data-sveltekit-preload-data="hover" class="hover:opacity-70 transition-opacity">__HOME</a>
    <a href="/projects" data-sveltekit-preload-data="hover" class="hover:opacity-70 transition-opacity">_PROJECTS</a>
    <a href="/contact" data-sveltekit-preload-data="hover" class="hover:opacity-70 transition-opacity">CONTACT</a>
  </div>
  <p class="text-xs sm:text-sm lg:text-base opacity-70">LOCAL_TIME: {d}</p>
</nav>
