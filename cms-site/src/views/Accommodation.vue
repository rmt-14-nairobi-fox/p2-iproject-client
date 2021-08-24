<template>
  <div class="w-full overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <h1 class="text-3xl text-black pb-6">Accommodation</h1>
      <div class="bg-sidebar p-8 rounded">
        <div class="flex">
          <div
            class="
              w-7/12
              text-gray-800
              bg-home-main
              p-8
              sm:rounded-tr-lg
              rounded-tr-none rounded-bl-lg rounded-tl-lg
              flex
              items-center
            "
          >
            <div>
              <p class="text-xl mb-5">
                <span>Title:&nbsp;</span>
                {{ accommodation.title }}
              </p>
              <p class="text-xl mb-5">
                <span>Description:&nbsp;</span>
                {{ accommodation.description }}
              </p>
              <p class="text-xl mb-5 font-bold">
                <span class="font-normal">Price:&nbsp;</span>
                Rp. {{ accommodation.price }} /month
              </p>
              <div class="flex">
                <div class="mr-8">
                  <p class="text-xl capitalize">
                    <span>Street:&nbsp;</span>
                    {{ accommodation.address }}
                  </p>
                </div>
                <div class="mr-8">
                  <p class="text-xl capitalize">
                    <span>City:&nbsp;</span>
                    {{ accommodation.city }}
                  </p>
                </div>
                <div class="mr-8">
                  <p class="text-xl capitalize">
                    <span>Zip code:&nbsp;</span>
                    {{ accommodation.zipCode }}
                  </p>
                </div>
                <div class="mr-8">
                  <p class="text-xl capitalize">
                    <span>Latitude:&nbsp;</span>
                    {{ accommodation.lat }}
                  </p>
                </div>
                <div>
                  <p class="text-xl capitalize">
                    <span>Longitude:&nbsp;</span>
                    {{ accommodation.long }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-5/12 relative">
            <div
              class="
                bg-pink-500
                w-full
                h-full
                opacity-60
                absolute
                sm:rounded-bl-lg
                rounded-bl-none rounded-tr-lg rounded-br-lg
              "
            ></div>
            <img
              class="
                h-full
                w-full
                object-cover
                sm:rounded-bl-lg
                rounded-bl-none rounded-tr-lg rounded-br-lg
              "
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=550&q=80"
              alt="Banner Desktop"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-row mt-4">
        <button
          class="
            text-l text-center
            bg-btn-in-main
            py-2
            px-4
            rounded-lg
            text-white
            mr-2
          "
          @click="editClick(accommodation.id)"
        >
          Edit
        </button>
        <button
          class="
            text-l text-center
            bg-btn-in-main-danger
            py-2
            px-4
            rounded-lg
            text-white
          "
          @click="deleteHandler(accommodation.id)"
        >
          Delete
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Accommodation",

  created() {
    this.$store.dispatch("getAccommodationFunction", this.$route.params.id);
  },
  computed: {
    accommodation() {
      return this.$store.state.accommodation;
    },
  },
  methods: {
    editClick(payload) {
      this.$router
        .push({
          name: "EditAccommodation",
          params: {
            id: +payload,
          },
        })
        .catch(() => {});
    },
    deleteHandler(payload) {
      this.$store.dispatch("deleteAccommodationFunction", payload);
    },
  },
};
</script>

<style></style>
