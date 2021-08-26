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
              v-model="travel.name"
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
              v-model="travel.country"
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
              v-model="travel.city"
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
              v-model="travel.price"
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
              <option :value="travel.Category.name" disabled></option>
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
              @click.prevent="clickEditButton"
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

<script>
export default {
  name: "FormEdit",
  data: function () {
    return {
      id: "",
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
    travel() {
      return this.$store.state.travel;
    },
    categories() {
      return this.$store.state.categories;
    },
  },
  created() {
    this.id = this.travel.id;
    (this.name = this.travel.name), (this.country = this.travel.country);
    this.city = this.travel.city;
    this.price = this.travel.price;
    this.categoryId = this.travel.categoryId;
    this.$store.dispatch("fetchCategories");
  },
  methods: {
    imagesUrl(imageUrl) {
      this.image = imageUrl.target.files[0]; //from inspect console web
      // if (this.image) this.showImage = URL.createObjectURL(this.image);
    },
    clickEditButton() {
      const id = this.id //ini ambil dr state;
      // console.log(id);
      const form = new FormData();
      form.append("name", this.name);
      form.append("country", this.country);
      form.append("city", this.city);
      form.append("price", this.price);
      form.append("images", this.image); // according file multer.js in middleware
      form.append("categoryId", this.categoryId);

      this.$store.dispatch("clickEditButton", { form, id });
    },
  },
};
</script>
