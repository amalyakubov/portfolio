<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard/ProjectCard.svelte";
  import polhimHero from "$lib/assets/polhim.png";
</script>

<p class="text-7xl pt-20">Things i've done</p>
<div class="cardContainer pt-35 py-60 flex flex-row gap-12">
  <!-- <ProjectCard name="matura_prepper" imgSrc="null" alt="image" /> -->
  <ProjectCard name="polhim.com" imgSrc={polhimHero} alt="image" />
  <!-- <ProjectCard name="PostgresQL" imgSrc="null" alt="image" /> -->
</div>
<p class="comment text-xl w-min min-w-200">
  And yet there is always room for more. No matter how far you’ve come, there is
  always more to discover. This is just the beginning...<br /><br /> Of many great
  things yet to come.
</p>
