<script lang="ts">
    let d = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Warsaw",
        hour12: false,
        timeStyle: "short",
    });
</script>

<div class="pt-6 pb-14 flex gap-9 text-xl font-['Inter']">
    <a href="/">__HOME</a>
    <a href="/projects" class="pl-46">_PROJECTS(TODO)</a>
    <a href="/contact" class="pl-80">CONTACT</a>
    <p class="ml-auto">LOCAL_TIME: {d}</p>
</div>
