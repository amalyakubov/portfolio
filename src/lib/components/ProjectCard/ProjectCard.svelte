<script lang="ts">
  let { name, imgSrc, alt, text = null } = $props();
</script>

<div class="card w-full sm:w-72 md:w-80 lg:w-96">
  <p class="text-xl sm:text-2xl lg:text-3xl text-black/85 tracking-tighter">{name}</p>
  <a
    href="https://polhim.com/"
    class="block overflow-hidden rounded-sm shadow-lg transition-transform duration-300 hover:scale-[1.02] ease-in-out mt-4 sm:mt-6"
    aria-label={`View ${name} project`}
  >
    <img
      src={imgSrc}
      {alt}
      class="object-cover w-full aspect-[4/3] hover:cursor-pointer"
      loading="lazy"
    />
  </a>
  <p class="text-sm sm:text-base text-black/70 mt-3">{text}</p>
</div>
