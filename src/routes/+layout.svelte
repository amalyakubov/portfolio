<script lang="ts">
  import Footer from "$lib/components/Footer/Footer.svelte";
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<div class="flex flex-col">
  <div class="px-50 h-screen">
    <Navbar />
    {@render children()}
  </div>
  <Footer />
</div>
