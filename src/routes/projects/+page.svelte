<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard/ProjectCard.svelte";
  import polhimHero from "$lib/assets/polhim.png";
</script>

<div class="cardContainer pt-[30vh] pb-[10vh] flex flex-row gap-12">
  <!-- <ProjectCard name="matura_prepper" imgSrc="null" alt="image" /> -->
  <ProjectCard name="polhim.com" imgSrc={polhimHero} alt="image" />
  <!-- <ProjectCard name="PostgresQL" imgSrc="null" alt="image" /> -->
</div>
<p class="comment text-2xl w-min min-w-200">
  And yet there is always room for more. No matter how far you’ve come, there is
  always more to discover. This is just the beginning...<br /><br /> Of many great
  things yet to come.
</p>
