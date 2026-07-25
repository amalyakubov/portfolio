<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import Footer from "$lib/components/Footer/Footer.svelte";
  import Navbar from "$lib/components/Navbar/Navbar.svelte";
  import "../app.css";

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<div class="flex flex-col">
  <div class="px-5 sm:px-8 min-h-screen mx-30 max-w-full">
    <Navbar />
    {@render children()}
  </div>
  <Footer />
</div>
