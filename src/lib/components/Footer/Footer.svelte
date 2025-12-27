<script lang="ts">
  import githubLogo from "$lib/assets/github-mark.svg";
  import linkedInLogoLight from "$lib/assets/InBug-White.png";
</script>

<div class="flex flex-col sm:flex-row justify-between py-10 sm:py-16 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-24 gap-8 sm:gap-12 lg:gap-16 bg-dark-bg text-white max-w-7xl mx-auto w-full">
  <div>
    <p>E-mail:</p>
    <a href="mailto:amal.yakubov7777@gmail.com">amal.yakubov7777@gmail.com</a>
    <p>Warsaw, Poland</p>
  </div>
  <div>
    <p class="pb-5">Socials</p>
    <div class="flex gap-8">
      <a href="https://github.com/amalyakubov"
        ><img src={githubLogo} alt="github logo" width="50" class="invert" />
      </a>
      <a href="https://www.linkedin.com/in/amal-yakubov-3452a5315/">
        <img src={linkedInLogoLight} alt="linkedin logo" width="50" />
      </a>
    </div>
  </div>
</div>
