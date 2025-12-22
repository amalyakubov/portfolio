<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<div class="flex flex-1 flex-col h-min pt-20 pb-60">
  <p class="text-5xl pb-12">Contact me</p>

  <!-- {#if form?.success}
    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-3xl mb-6" role="alert">
      <strong class="font-bold">Success!</strong>
      <span class="block sm:inline"> Your message has been sent.</span>
    </div>
  {/if} -->

  <form
    class="bg-[#ffff] px-7 py-10 pb-7 flex flex-col max-w-3xl border border-black/20"
    id="contact_form"
    data-netlify="true"
    method="POST"
    use:enhance
  >
    <div class="flex flex-row border-black/50 h-min pb-2">
      <label
        for="email"
        class="text-md min-w-max content-center pr-4 text-md w-30"
        >Your E-mail:</label
      >
      <input
        type="email"
        id="email"
        name="email"
        autocomplete="work email"
        required
        placeholder="your@gmail.com"
        class="outline-none max-w-full px-2 placeholder:text-black/70 text-black/70 w-full"
      />
    </div>
    <div class="flex flex-row pt-2 h-mini border-black/50">
      <label
        for="message"
        class="text-md min-w-max content-center self-start pr-4 text-md w-min"
        >Message:</label
      >
      <textarea
        id="message"
        name="message"
        rows="10"
        cols="5"
        class="pl-2 pr-8 pb-4 outline-none transition-all duration-300 overflow-y-visible resize-none min-h-full text-black/70 no-scrollbar overflow-x-auto flex-1 rounded-md text-left"
        placeholder="... your message"
      ></textarea>
    </div>
    <div class="pt-12">
      <button
        form="contact_form"
        type="submit"
        title="Submit"
        class="group flex flex-row items-center gap-1 underline underline-offset-8 decoration-2 text-black text-md transition-all duration-300 hover:text-black/70 cursor-pointer w-max"
      >
        <span class="text-xl">Send</span>
        <div class="relative overflow-hidden w-5 h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-5 transition-transform duration-300 group-hover:translate-x-full group-hover:-translate-y-full"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-5 absolute inset-0 -translate-x-full translate-y-full transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </button>
    </div>
  </form>
</div>
