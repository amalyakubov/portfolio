<div class="flex flex-1 flex-col justify-between">
  <form
    class="bg-[#ffff] px-12 py-10 flex flex-col max-w-3xl border border-black/20"
    id="contact_form"
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
        rows="10"
        cols="5"
        class="pl-2 pr-8 pb-4 outline-none transition-all duration-300 overflow-y-visible resize-none min-h-full text-black/70 no-scrollbar overflow-x-auto flex-1 rounded-md text-left"
        >... your message</textarea
      >
    </div>
    <div class="pt-12">
      <button
        form="contact_form"
        title="Submit"
        class=" underline underline-offset-7 w-max decoration-2 text-black text-md"
        >Send ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎
      </button>
    </div>
  </form>
</div>
