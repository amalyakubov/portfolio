<script lang="ts">
</script>

<div class="pageContainer flex flex-row pt-40 justify-between">
  <div class="flex flex-col contactForm bg-white">
    <form class="flex flex-col">
      <div class="flex text-md font-['Inter']">
        <label for="email" class="pr-3 self-center">Your E-mail:</label>
        <input
          class="px-4 py-2 text-md focus:outline-0 placeholder:text-black/50 text-black/50"
          type="email"
          id="fEmail"
          name="fEmail"
          placeholder="example@gmail.com"
        />
      </div>
      <div class=" flex text-md font-['Inter'] pt-9">
        <label for="message" class="text-md font-['Inter'] pr-3">Message:</label
        >
        <textarea
          class="focus:outline-0 px-9 pb-20 text-black/50"
          id="message"
          name="message"
        ></textarea>
      </div>
    </form>
  </div>
  <p class="text-xl md:min-w-200 w-min font-['Inter']">
    Hey, I'm a full stack developer interested in building things. And by
    buildings things I mean constantly learning new ideas, new ways to help
    people. New ways of building products, experiences, delivering things that
    actually matter. If you would like to contact me please go ahead and fill
    out the form and I'll be happy to talk to you!
  </p>
</div>
