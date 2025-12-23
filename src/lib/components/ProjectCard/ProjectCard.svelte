<script lang="ts">
    let { name, imgSrc, alt, text = null } = $props();
</script>

<div class="card w-min">
    <p class="text-3xl text-black/85 tracking-tighter">{name}</p>
    <a
        href="https://polhim.com/"
        class="flex flex-1 overflow-hidden rounded-xs drop-shadow-2xl transition-all duration-300 hover:scale-105 ease-in-out h-80 w-80 mt-12 mb-8"
        aria-label={`View ${name} project`}
    >
        <img
            src={imgSrc}
            {alt}
            class="object-cover w-full h-full hover:cursor-pointer"
            loading="lazy"
        />
    </a>
    <p class="w-full text-black/80">{text}</p>
</div>
