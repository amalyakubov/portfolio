<script lang="ts">
    import Navbar from "$lib/Navbar/Navbar.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<div class="px-50 flex flex-col">
    <Navbar />
    {@render children()}
</div>
