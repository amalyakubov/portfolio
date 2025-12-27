<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard/ProjectCard.svelte";
  import polhimHero from "$lib/assets/polhim.png";
</script>

<p class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pt-8 sm:pt-12">Things i've done</p>
<div class="cardContainer pt-6 sm:pt-10 lg:pt-14 pb-10 sm:pb-16 lg:pb-24 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-8 lg:gap-10">
  <!-- <ProjectCard name="matura_prepper" imgSrc="null" alt="image" /> -->
  <ProjectCard
    name="polhim.com"
    imgSrc={polhimHero}
    alt="image"
    text="A customer-facing commercial landing page for a cotton bag company based in Warsaw, Poland. "
  />
  <!-- <ProjectCard name="PostgresQL" imgSrc="null" alt="image" /> -->
</div>
<p class="comment text-sm sm:text-base lg:text-lg w-full max-w-lg lg:max-w-xl">
  And yet there is always room for more. No matter how far you've come, there is
  always more to discover. This is just the beginning...<br /><br /> Of many great
  things yet to come.
</p>
