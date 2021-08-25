<template>
  <div
    class="
      mt-4
      bg-blue-100
      p-6
      max-w-screen-xl
      mx-auto
      rounded-xl
      flex flex-center
    "
  >
    <div class="flex flex-center space-x-4">
      <div class="w-1/3">
        <div class="box-content h-64 w-48">
          <img
            src="https://picsum.photos/100"
            height="auto"
            id="cardImg"
            class="rounded"
          />
        </div>
      </div>
      <div class="bg-white rounded">
        <div class="p-3">
          <p class="text-2xl font-bold">Story Title</p>
          <button class="button px-2 bg-yellow-200 rounded">tag</button>
        </div>
        <div class="text-sm p-3 bg-blue-100">
          <div>
            <p class="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliquaincididunt
            </p>
          </div>
        </div>
        <div class="relative h-32 w-32">
          <div class="absolute bottom-0 left-0 p-3">
            <button
              class="
                button
                px-2
                border-b border-yellow-300
                rounded
                text-black
                font-semilight
                text-left
                mt-2
                w-28
              "
            >
              read more..
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
};
</script>

<style type="text/css"></style>
