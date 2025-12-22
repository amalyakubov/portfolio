<script lang="ts">
  let { name, imgSrc, alt } = $props();
</script>

<div class="card">
  <p class="pb-8 text-3xl text-black/85 tracking-tighter">{name}</p>
  <a
    href="https://polhim.com/"
    class="flex flex-1 overflow-hidden rounded-xs drop-shadow-2xl transition-all duration-300 hover:scale-105 ease-in-out h-80 w-80"
    aria-label={`View ${name} project`}
  >
    <img
      src={imgSrc}
      {alt}
      class="object-cover w-full h-full hover:cursor-pointer"
      loading="lazy"
    />
  </a>
</div>
