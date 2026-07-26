<script>
  import background from "$lib/assets/background.jpg";
</script>

<div
  class="hero grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 md:gap-12 min-h-[70vh] md:min-h-[80vh] items-center pt-4"
>
  <img
    class="absolute -z-10 left-0 w-full h-full bottom-0 opacity-90"
    alt="Alaskan snow peaks"
    src={background}
  />
  <div class="flex flex-col justify-center">
    <h1
      class="text-[15vw] md:text-[7vw] tracking-tighter font-medium leading-[0.95]"
    >
      Amal<br /> Yakubov
    </h1>
    <div class="mt-6 md:mt-12 max-w-full xl:max-w-9/12 space-y-3 md:space-y-4">
      <p class="text-md text-gray-200">
        Hey, I'm Amal, a full stack developer, IT support guy and an aspiring
        data engineer and just a simple lad that likes learning and building
        cool things.
      </p>
      <p class="text-md text-gray-200">
        Based in the best city of Europe: Warsaw, Poland.
      </p>
    </div>
  </div>
</div>
