<script lang="ts">
  let { name, imgSrc, alt } = $props();
</script>

<div class="card md:min-w-96 md:min-h-96">
  <p class="pb-4">{name}</p>
  <img src={imgSrc} {alt} />
</div>
