<template>
  <div class="w-full h-screen overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
          <div class="leading-loose">
            <form class="p-10 bg-white rounded shadow-xl">
              <p class="text-lg text-gray-800 font-medium pb-4">
                Create your accommodation
              </p>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_name">
                  Title
                </label>
                <input
                  class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="cus_name"
                  name="cus_name"
                  type="text"
                  required=""
                  placeholder="Title"
                  aria-label="Name"
                />
              </div>

              <div class="mt-2">
                <label class="block text-sm text-gray-600" for="cus_email">
                  Address
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Street"
                  aria-label="Email"
                />
              </div>
              <div class="mt-2">
                <label
                  class="hidden text-sm block text-gray-600"
                  for="cus_email"
                >
                  City
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="City"
                  aria-label="Email"
                />
              </div>
              <div class="inline-block mt-2 w-1/2 pr-1">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_email"
                >
                  Country
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Country"
                  aria-label="Email"
                />
              </div>
              <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                <label
                  class="hidden block text-sm text-gray-600"
                  for="cus_email"
                >
                  Zip
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_email"
                  name="cus_email"
                  type="text"
                  required=""
                  placeholder="Zip"
                  aria-label="Email"
                />
              </div>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_name">
                  Description
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_name"
                  name="cus_name"
                  type="text"
                  required=""
                  placeholder="Description"
                  aria-label="Name"
                />
              </div>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_name">
                  Price
                </label>
                <input
                  class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                  id="cus_name"
                  name="cus_name"
                  type="number"
                  required=""
                  placeholder="Price"
                  aria-label="Name"
                />
              </div>
              <div class="">
                <label class="block text-sm text-gray-600" for="cus_name">
                  Type
                </label>
                <div class="relative inline-block w-full text-gray-700">
                  <select
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
                    bg-gray-900
                    rounded
                  "
                  type="submit"
                >
                  Register
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
  name: "CreateAccommodation",
};
</script>

<style></style>
