<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard/ProjectCard.svelte";
  import polhimHero from "$lib/assets/polhim.png";
</script>

<div class="pt-6 sm:pt-10 lg:pt-14">
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
    Things i've done
  </h1>

  <div class="pt-8 sm:pt-12 lg:pt-16 pb-10 sm:pb-16 lg:pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
    <ProjectCard
      name="polhim.com"
      imgSrc={polhimHero}
      alt="Polhim website screenshot"
      text="A customer-facing commercial landing page for a cotton bag company based in Warsaw, Poland."
    />
  </div>

  <p class="text-sm sm:text-base lg:text-lg max-w-lg lg:max-w-xl text-black/70 pb-8">
    And yet there is always room for more. No matter how far you've come, there is
    always more to discover. This is just the beginning...<br /><br />Of many great
    things yet to come.
  </p>
</div>
