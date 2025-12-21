<div class="flex flex-1 flex-col justify-between">
  <form
    class="bg-[#ffff] px-12 py-10 flex flex-col max-w-3xl"
    id="contact_form"
  >
    <div class="flex flex-row">
      <label for="email" class="text-md min-w-max content-center pr-4 text-md"
        >Your E-mail:</label
      >
      <input
        type="email"
        id="email"
        autocomplete="work email"
        required
        placeholder="your@gmail.com"
        class="outline-none w-full px-2 py-4 placeholder:text-black/70 text-black/70"
      />
    </div>
    <div class="flex flex-row">
      <label
        for="message"
        class="text-md min-w-max content-center self-start pr-4 text-md"
        >Message:</label
      >
      <textarea
        id="message"
        rows="10"
        cols="5"
        class="px-8 pb-4 outline-none transition-all duration-300 overflow-y-visible resize-none min-h-full text-black/70 no-scrollbar overflow-x-auto flex-1 rounded-md text-left"
        >... your message</textarea
      >
    </div>
    <div>
      <button
        form="contact_form"
        title="Submit"
        class=" underline underline-offset-7 w-max decoration-2 text-black text-md"
        >Send ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎
      </button>
    </div>
  </form>
</div>
