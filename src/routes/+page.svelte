<script>
  import video from "../../src/lib/assets/render.webm";
</script>

<div
  class="hero grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-12 min-h-[70vh] md:min-h-[80vh] items-center pt-4 md:pt-0 lg:pt-70"
>
  <div class="flex flex-col justify-center order-2 md:order-1">
    <h1
      class="text-[15vw] md:text-[7vw] tracking-tighter font-medium text-black leading-[0.95]"
    >
      Amal<br />Yakubov
    </h1>
    <div class="mt-6 md:mt-12 max-w-full xl:max-w-9/12 space-y-3 md:space-y-4">
      <p class="text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed">
        Hey, I'm Amal, a full stack developer and an aspiring ML researcher and
        a guy who likes cool stuff and building really cool stuff.
      </p>
      <p class="text-base md:text-lg lg:text-xl xl:text-2xl">
        Based in the best city of Europe: Warsaw, Poland.
      </p>
    </div>
  </div>
  <div
    class="flex items-center justify-center md:justify-end order-1 md:order-2"
  >
    <div
      class="bg-black w-full max-w-sm md:max-w-none aspect-4/3 flex items-center justify-center"
    >
      <video
        autoplay
        muted
        loop
        playsinline
        class="w-full h-full object-contain"
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  </div>
</div>
