<script lang="ts">
  let d = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Warsaw",
    hour12: false,
    timeStyle: "short",
  });
</script>

<nav
  class="navbar relative z-1 py-4 sm:py-6 lg:py-8 flex items-center justify-between text-base lg:text-base"
>
  <div
    class="flex items-center gap-7 lg:gap-16 py-4 bg-white/20 lg:bg-transparent px-9 rounded-2xl sm:gap-6"
  >
    <a
      href="/"
      data-sveltekit-preload-data="hover"
      class="hover:opacity-70 transition-opacity">Home</a
    >
    <a
      href="/projects"
      data-sveltekit-preload-data="hover"
      class="hover:opacity-70 transition-opacity">Projects</a
    >
    <a
      href="/contact"
      data-sveltekit-preload-data="hover"
      class="hover:opacity-70 transition-opacity">Contact</a
    >
    <p class="hidden md:visible opacity-70">Warsaw time: {d}</p>
  </div>
</nav>
