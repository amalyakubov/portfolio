<script>
    import video from "../../src/lib/assets/render.webm";
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-8 sm:pt-12 lg:pt-20 xl:pt-28">
    <div class="flex flex-col justify-center">
        <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-tight leading-[1.1]">
            Amal Yakubov
        </h1>
        <p class="text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 max-w-md text-black/80">
            Hey, I'm Amal, a full stack developer and an aspiring ML researcher and a
            guy who likes cool stuff and building really cool stuff.
        </p>
        <p class="text-sm sm:text-base text-black/60 mt-4">
            Based in Warsaw, Poland
        </p>
    </div>
    <div class="flex items-center justify-center lg:justify-end">
        <video
            autoplay
            muted
            loop
            playsinline
            class="w-full max-w-sm sm:max-w-md lg:max-w-full rounded-md shadow-lg"
        >
            <source src={video} type="video/mp4" />
        </video>
    </div>
</div>
