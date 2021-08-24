<template>
  <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
          <div class="leading-loose">
            <form
              class="p-10 bg-white rounded shadow-xl"
              @submit.prevent="createHandler"
            >
              <p class="text-lg text-gray-800 font-medium pb-4">
                Create your accommodation
              </p>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_title">
                  Title
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_title"
                  name="cus_title"
                  type="text"
                  required=""
                  placeholder="Title"
                  aria-label="Title"
                  v-model="title"
                />
              </div>

              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_street">
                  Address
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_street"
                  name="cus_street"
                  type="text"
                  required=""
                  placeholder="Street"
                  aria-label="Street"
                  v-model="address"
                />
              </div>
              <div class="mt-2">
                <label
                  class="hidden text-sm block text-gray-600"
                  for="cus_city"
                >
                  City
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_city"
                  name="cus_city"
                  type="text"
                  required=""
                  placeholder="City"
                  aria-label="City"
                  v-model="city"
                />
              </div>
              <div class="mt-2">
                <label
                  class="hidden text-sm block text-gray-600"
                  for="cus_zip_code"
                >
                  Zip Code
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_zip_code"
                  name="cus_zip_code"
                  type="text"
                  required=""
                  placeholder="Zip Code"
                  aria-label="Zip_Code"
                  v-model="zipCode"
                />
              </div>
              <div class="">
                <label
                  class="block text-sm text-gray-600"
                  for="cus_description"
                >
                  Description
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_description"
                  name="cus_description"
                  type="text"
                  required=""
                  placeholder="Description"
                  aria-label="Description"
                  v-model="description"
                />
              </div>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_price">
                  Price
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_price"
                  name="cus_price"
                  type="number"
                  required=""
                  placeholder="Price"
                  aria-label="Price"
                  v-model="price"
                />
              </div>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_type">
                  Type
                </label>
                <div class="relative inline-block w-full text-gray-700">
                  <select
                    name="cus_type"
                    class="
                      w-full
                      h-10
                      pl-3
                      pr-6
                      text-base
                      bg-gray-200
                      border
                      rounded-lg
                      appearance-none
                      focus:shadow-outline
                    "
                    v-model="type"
                    placeholder="Regular input"
                  >
                    <option value="" selected disabled>
                      -- CHOOSE THE TYPE OF YOUR ACCOMMODATION --
                    </option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                  </select>
                </div>
              </div>
              <div class="mt-6">
                <button
                  class="
                    px-4
                    py-1
                    text-white
                    font-light
                    tracking-wider
                    bg-btn-in-main
                    rounded
                  "
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      address: "",
      city: "",
      zipCode: "",
      description: "",
      price: null,
      type: "",
    };
  },
  name: "CreateAccommodation",
  methods: {
    createHandler() {
      const payload = {
        title: this.title,
        address: this.address,
        city: this.city,
        zipCode: this.zipCode,
        description: this.description,
        price: this.price,
        type: this.type,
      };
      this.$store.dispatch("createFunction", payload);
    },
  },
};
</script>

<style></style>
