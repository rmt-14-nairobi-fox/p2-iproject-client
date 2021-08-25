<template>
  <div class="w-full overflow-x-hidden border-t flex flex-col">
    <main class="w-full flex-grow p-6">
      <h1 class="text-3xl text-black pb-6">Images</h1>

      <form
        action=""
        class="flex-column mb-5 w-full"
        @submit.prevent="uploadHandler"
      >
        <div class="flex flex-row w-full mb-2">
          <label
            class="
              w-52
              pt-2
              flex flex-col
              items-center
              bg-white
              rounded-md
              shadow-md
              tracking-wide
              uppercase
              border border-blue
              cursor-pointer
              hover:bg-gray-300 hover:text-white
              text-gray-800
              ease-linear
              transition-all
              duration-150
            "
          >
            <i class="fas fa-cloud-upload-alt fa-2x"></i>
            <span class="mt-2 text-base leading-normal">Select a file</span>

            <input type="file" class="hidden" @change="selectedImg" />
          </label>
          <div v-if="imgPreview" class="ml-4">
            <img :src="imgPreview" style="height: 80px" alt="" />
          </div>
        </div>
        <div class="w-full">
          <label class="block text-xl text-gray-600" for="cus_description">
            Description
          </label>
          <input
            class="
              w-full
              h-12
              px-4
              mb-2
              text-lg text-gray-700
              placeholder-gray-600
              border
              rounded-lg
              focus:shadow-outline
            "
            v-model="description"
            type="text"
            placeholder="Description"
          />
        </div>
        <div class="mt-2">
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
            Upload
          </button>
        </div>
      </form>
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Image Url
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Description
            </th>
            <th
              class="
                px-5
                py-3
                border-b-2 border-gray-200
                bg-gray-100
                text-left text-xs
                font-semibold
                text-gray-600
                uppercase
                tracking-wider
              "
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <image-card
            v-for="image in images"
            :key="image + image.id"
            :image="image"
          ></image-card>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import ImageCard from "../components/ImageCard.vue";
export default {
  data() {
    return {
      description: "",
      imgSelected: null,
      imgPreview: null,
    };
  },
  name: "ShowImages",
  components: {
    ImageCard,
  },
  created() {
    this.$store.dispatch("getAllImages", this.$route.params.idAccom);
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  methods: {
    selectedImg(event) {
      this.imgSelected = event.target.files[0];

      let reader = new FileReader();
      reader.readAsDataURL(this.imgSelected);
      reader.onload = (event) => {
        this.imgPreview = event.target.result;
      };
    },

    uploadHandler() {
      const id = +this.$route.params.idAccom;
      const data = new FormData();
      data.append("description", this.description);
      data.append("imageUrl", this.imgSelected);
      //   ! buat test adaisinya gk
      //   for (var pair of data.entries()) {
      //     console.log(pair[0] + ", " + pair[1]);
      //   }
      const payload = {
        id: id,
        data: data,
      };

      this.$store.dispatch("addImageFunction", payload);
    },
  },
};
</script>

<style></style>
