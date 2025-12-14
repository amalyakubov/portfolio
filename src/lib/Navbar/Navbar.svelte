<script lang="ts">
    let d = new Date().toLocaleString("en-US", {
        timeZone: "Europe/Warsaw",
        hour12: false,
        timeStyle: "short",
    });
</script>

<div class="pt-6 flex gap-9 text-xl font-['Inter']">
    <p>__HOME</p>
    <p class="pl-46">_PROJECTS(TODO)</p>
    <p class="pl-80">ABOUT</p>
    <p class="ml-auto">LOCAL_TIME: {d}</p>
</div>
