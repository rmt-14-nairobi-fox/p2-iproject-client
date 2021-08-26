<template>
  <section>
    <div class="flex justify-center my-2 mx-4 md:mx-0 bg-gray-700">
      <form
        class="w-full max-w-xl bg-white rounded-lg shadow-md p-6 bg-gray-300"
      >
        <h1><b> Form Create </b></h1>
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
              v-model="name"
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
              v-model="country"
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
              v-model="city"
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
              v-model="price"
            />
          </div>
          <div class="w-full md:w-full px-3 mb-6">
            <img
              v-if="showImage"
              width="150"
              height="50"
              :src="showImage"
              alt=""
            />
            <label
              class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >Image</label
            >
            <input
              @change="imagesUrl"
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
            <select
              v-model="categoryId"
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
              <option value="" disabled>
                --------------------------- Select Category Destination
                ---------------------------
              </option>
              <option
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
              >
                {{ category.name }}
              </option>
            </select>
          </div>
          <br /><br /><br />
          <br /><br />
          <div class="w-full md:w-full px-3 mb-6">
            <button
              @click.prevent="clickCreateButton"
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
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "FormCreate",
  data: function () {
    return {
      name: "",
      country: "",
      city: "",
      price: "",
      showImage: "",
      image: "",
      categoryId: "",
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  created() {
    this.$store.dispatch("fetchCategories");
  },
  methods: {
    imagesUrl(imageUrl) {
      this.image = imageUrl.target.files[0]; //from inspect console web
      if (this.image) this.showImage = URL.createObjectURL(this.image);
    },
    clickCreateButton() {
      const form = new FormData();
      form.append("name", this.name);
      form.append("country", this.country);
      form.append("city", this.city);
      form.append("price", this.price);
      form.append("images", this.image); // according file multer.js in middleware
      form.append("categoryId", this.categoryId);
      this.$store.dispatch("clickCreateButton", form);
    },
  },
};
</script>
