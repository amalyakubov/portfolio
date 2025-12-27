<script lang="ts">
  let { name, imgSrc, alt, text = null } = $props();
</script>

<div class="card w-full">
  <p class="text-lg sm:text-xl lg:text-2xl text-black/85 tracking-tight font-medium">{name}</p>
  <a
    href="https://polhim.com/"
    class="block overflow-hidden rounded-sm shadow-lg transition-transform duration-300 hover:scale-[1.02] ease-in-out mt-3 sm:mt-4"
    aria-label={`View ${name} project`}
  >
    <img
      src={imgSrc}
      {alt}
      class="object-cover w-full aspect-[4/3] hover:cursor-pointer"
      loading="lazy"
    />
  </a>
  {#if text}
    <p class="text-sm sm:text-base text-black/60 mt-3 leading-relaxed">{text}</p>
  {/if}
</div>
