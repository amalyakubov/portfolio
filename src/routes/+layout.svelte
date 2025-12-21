<script lang="ts">
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<div class="px-50 flex flex-col h-full">
  <Navbar />
  {@render children()}
</div>
