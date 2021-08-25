<template>
  <section>
    <div class="flex justify-center my-2 mx-4 md:mx-0 bg-gray-700">
      <form
        class="w-full max-w-xl bg-white rounded-lg shadow-md p-6 bg-gray-300"
      >
        <h1><b> Form Edit </b></h1>
        <br /><br />
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Name</label
            >
            <input
              class="
                appearance-none
                block
                w-full
                bg-white
                text-gray-900
                font-medium
                border border-gray-400
                rounded-lg
                py-3
                px-3
                leading-tight
                focus:outline-none
              "
              type="text"
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Country</label
            >
            <input
              class="
                appearance-none
                block
                w-full
                bg-white
                text-gray-900
                font-medium
                border border-gray-400
                rounded-lg
                py-3
                px-3
                leading-tight
                focus:outline-none
              "
              type="text"
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >City</label
            >
            <input
              class="
                appearance-none
                block
                w-full
                bg-white
                text-gray-900
                font-medium
                border border-gray-400
                rounded-lg
                py-3
                px-3
                leading-tight
                focus:outline-none
              "
              type="text"
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Price</label
            >
            <input
              class="
                appearance-none
                block
                w-full
                bg-white
                text-gray-900
                font-medium
                border border-gray-400
                rounded-lg
                py-3
                px-3
                leading-tight
                focus:outline-none
              "
              type="text"
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Image</label
            >
            <input
              class="
                appearance-none
                block
                w-full
                bg-white
                text-gray-900
                font-medium
                border border-gray-400
                rounded-lg
                py-3
                px-3
                leading-tight
                focus:outline-none
              "
              type="file"
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Category</label
            >
              <!-- v-model="categoryId" -->
            <select
              class="
                w-full
                bg-white
                text-gray-900
                font-medium
                border border-gray-400
                rounded-lg
                py-3
                px-3
                leading-tight
                focus:outline-none
              "
            >
              <option value="" disabled>--- Select Category Product ---</option>
              <!-- <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option> -->
            </select>
          </div>
          <br><br><br>
          <br><br>
          <div class="w-full md:w-full px-3 mb-6">
            <button
              class="
                appearance-none
                block
                w-full
                bg-gray-600
                text-gray-100
                font-bold
                border border-gray-200
                rounded-lg
                py-3
                px-3
                leading-tight
                hover:bg-gray-500
                focus:outline-none focus:bg-white focus:border-gray-500
              "
            >
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>
