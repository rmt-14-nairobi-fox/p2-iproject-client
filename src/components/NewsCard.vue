<template>
  <a href="" class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
    <div class="relative pb-48 overflow-hidden">
      <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="">
    </div>
    <div class="p-4">
      <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">Highlight</span>
      <h2 class="mt-2 mb-2  font-bold">Purus Ullamcorper Inceptos Nibh</h2>
      <p class="text-sm">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla non metus auctor fringilla.</p>
      <div class="mt-3 flex items-center">
        <span class="text-sm font-semibold">ab</span>&nbsp;<span class="font-bold text-xl">45,00</span>&nbsp;<span class="text-sm font-semibold">€</span>
      </div>
    </div>
    <div class="p-4 border-t border-b text-xs text-gray-700">
      <p class="flex items-center mb-1">
        3 Tage
      </p>
      <p>
        Ermäßigung mit Karte
      </p>
    </div>
    <div class="p-4">
      <button
        class="
          p-1.5
          rounded
          bg-nightBlue-2
          text-gray-50
          hover:bg-nightBlue-4">
        Create Petition
      </button>
    </div>
  </a>
</template>

<script>
export default {
  name: 'NewsCard'
}
</script>

<style>

</style>
