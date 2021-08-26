<template>
  <div class="container mx-auto flex justify-center min-h-screen space-x-6 mt-8">
    <div class="box-content h-64 w-48 bg-gray-200 flex">
      <img :src="urlImagePreview" />
      <button v-if="urlImagePreview === '' " @click="openUploadModal" class="mx-auto my-auto px-2 bg-yellow-200 rounded">Upload Story Cover</button>
    </div>
    <div class="bg-gray-50 w-2/3">
      <form class="flex flex-col w-2/3">
        <div class="flex flex-col">
          <label for="title">Title</label>
          <input
            v-model="inputData.title"
            type="text"
            class="form-input rounded-md"
            name=""
          />
        </div>
        <div class="flex flex-col mt-2">
          <label>Synopsis</label>
          <textarea
            v-model="inputData.sinopsis"
            type="text"
            class="form-input rounded-md"
            name="" >
            
          </textarea>
        </div>
        <div class="flex flex-col mt-2">
          <label>Tag</label>
          <input
            v-model="inputData.tag"
            type="text"
            class="form-input rounded-md"
            name=""
          />
        </div>
        <div class="mt-4">
          <div class="relative h-32 w-32">
            <div class="absolute bottom-0 left-0 p-3">
              <button
                @click.prevent="saveInput"
                class="
                  button
                  px-2
                  border-b border-yellow-300
                  rounded
                  text-yellow-400 text-xl
                  font-semilight
                  text-left
                  mt-2 

                  hover:border-red-300 hover:bg-gray-200"
              >
                next
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: "Addstory",
  components: {},
  data() {
    return {
      inputData: {
        title: "",
        sinopsis: "",
        tag: "",
      },
      urlImagePreview : '',
    };
  },
  methods: {
    saveInput() {
      this.$store.commit("SET_USER_INPUT_VALUE", this.inputData);
    },

    openUploadModal(){
      let timerInterval
      Swal.fire({
        html: 'Please wait.....',
        timer: 5000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })

      window.cloudinary.openUploadWidget(
        { 
          cloud_name: 'stories-for-all',
          upload_preset: 'u6noniuq'
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            // console.log('Done uploading..: ', result.info); 
            this.urlImagePreview = result.info.url
            this.$store.commit("SET_IMAGE_URL_UPLOADED", result.info.url)         
          }else{
            console.log(error)
          }
        })
          .open();
    }
  },
};
</script>
