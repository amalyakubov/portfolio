<script lang="ts">
  let email = $state('');
  let name = $state('');
  let message = $state('');
  let isSubmitting = $state(false);
  let submitted = $state(false);

  async function handleSubmit(e: Event) {
    e.preventDefault();
    isSubmitting = true;

    // Simulate form submission - replace with your actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    submitted = true;
    isSubmitting = false;
  }
</script>

<div class="pt-40 pb-20">
  <h1 class="text-7xl lg:text-9xl font-medium pb-16">CONTACT</h1>

  <div class="flex flex-col lg:flex-row gap-20 lg:gap-32">
    <!-- Introduction Text -->
    <div class="lg:w-1/2">
      <p class="text-2xl lg:text-3xl font-medium leading-relaxed">
        Hey, I'm a full stack developer interested in building things.
      </p>
      <p class="text-lg lg:text-xl text-black/70 mt-6 leading-relaxed">
        And by building things I mean constantly learning new ideas, new ways to
        help people. New ways of building products, experiences, delivering
        things that actually matter.
      </p>
      <p class="text-lg lg:text-xl text-black/70 mt-4 leading-relaxed">
        If you would like to contact me, please go ahead and fill out the form —
        I'll be happy to talk to you!
      </p>

      <div class="mt-12 pt-8 border-t border-black/10">
        <p class="text-sm text-black/50 font-['Inter']">ALTERNATIVELY</p>
        <a
          href="mailto:amal.yakubov7777@gmail.com"
          class="text-lg mt-2 inline-block hover:underline underline-offset-4 transition-all"
        >
          amal.yakubov7777@gmail.com
        </a>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="lg:w-1/2">
      {#if submitted}
        <div class="py-12">
          <p class="text-3xl font-medium">Message sent</p>
          <p class="text-lg text-black/70 mt-4">
            Thanks for reaching out! I'll get back to you soon.
          </p>
          <button
            onclick={() => {
              submitted = false;
              email = '';
              name = '';
              message = '';
            }}
            class="mt-8 text-lg underline underline-offset-4 hover:text-black/70 transition-colors"
          >
            Send another message
          </button>
        </div>
      {:else}
        <form
          onsubmit={handleSubmit}
          class="flex flex-col gap-8 font-['Inter']"
        >
          <!-- Name Field -->
          <div class="flex flex-col gap-2">
            <label for="name" class="text-sm text-black/50">NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={name}
              required
              placeholder="Your name"
              class="w-full py-3 text-lg bg-transparent border-b-2 border-black/20
                     focus:border-black focus:outline-none transition-colors
                     placeholder:text-black/30"
            />
          </div>

          <!-- Email Field -->
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm text-black/50">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              required
              placeholder="your@email.com"
              class="w-full py-3 text-lg bg-transparent border-b-2 border-black/20
                     focus:border-black focus:outline-none transition-colors
                     placeholder:text-black/30"
            />
          </div>

          <!-- Message Field -->
          <div class="flex flex-col gap-2">
            <label for="message" class="text-sm text-black/50">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              bind:value={message}
              required
              rows="6"
              placeholder="What's on your mind?"
              class="w-full py-3 text-lg bg-transparent border-b-2 border-black/20
                     focus:border-black focus:outline-none transition-colors resize-none
                     placeholder:text-black/30"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            disabled={isSubmitting}
            class="mt-4 py-4 px-8 text-lg font-medium bg-black text-white
                   hover:bg-black/80 disabled:bg-black/50 disabled:cursor-not-allowed
                   transition-all duration-200 self-start"
          >
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
          </button>
        </form>
      {/if}
    </div>
  </div>
</div>
