<script lang="ts">
  let { name, imgSrc, alt } = $props();
</script>

<div class="card">
  <p class="pb-6 text-xl">{name}</p>
  <a
    href="https://polhim.com/"
    class="flex flex-1 overflow-hidden rounded-2xl drop-shadow-2xl transition-all duration-300 hover:scale-105 ease-in-out h-100 w-100"
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
