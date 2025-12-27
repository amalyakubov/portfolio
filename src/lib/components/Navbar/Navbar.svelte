<script lang="ts">
  let d = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Warsaw",
    
    hour12: false,
    timeStyle: "short",
  });
</script>

<div class="py-4 sm:py-6 lg:py-8 flex items-center gap-4 sm:gap-6 lg:gap-8 text-sm sm:text-base lg:text-lg font-['Inter'] navbar">
  <a href="/">__HOME</a>
  <a href="/projects">_PROJECTS(TODO)</a>
  <a href="/contact">CONTACT</a>
  <p class="hidden sm:block ml-auto text-sm lg:text-base">LOCAL_TIME: {d}</p>
</div>
