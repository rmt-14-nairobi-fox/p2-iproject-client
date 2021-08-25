<template>
  <div>
    <!-- FIRST  ROW -->
    <div class="mt-12 grid grid-cols-2 content-center mx-auto w-10/12">
      <!-- CAROUSEL -->
      <div class="carousel relative rounded relative shadow-xl max-w-6xl">
        <div class="carousel-inner relative w-full">
          <!--Slide 1-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div
            class="carousel-item absolute opacity-0 bg-center"
            style="
              height: 500px;
              background-image: url(https://mdbootstrap.com/img/new/slides/052.jpg);
            "
          ></div>
          <label
            for="carousel-3"
            class="
              control-1
              w-10
              h-10
              ml-2
              md:ml-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              left-0
              my-auto
              flex
              justify-center
              content-center
            "
          >
            <i class="fas fa-angle-left mt-3"></i>
          </label>
          <label
            for="carousel-2"
            class="
              next
              control-1
              w-10
              h-10
              mr-2
              md:mr-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              right-0
              my-auto
            "
          >
            <i class="fas fa-angle-right mt-3"></i>
          </label>

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            class="carousel-item absolute opacity-0 bg-center"
            style="
              height: 500px;
              background-image: url(https://mdbootstrap.com/img/new/slides/043.jpg);
            "
          ></div>
          <label
            for="carousel-1"
            class="
              control-2
              w-10
              h-10
              ml-2
              md:ml-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              left-0
              my-auto
            "
          >
            <i class="fas fa-angle-left mt-3"></i>
          </label>
          <label
            for="carousel-3"
            class="
              next
              control-2
              w-10
              h-10
              mr-2
              md:mr-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              right-0
              my-auto
            "
          >
            <i class="fas fa-angle-right mt-3"></i>
          </label>

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div
            class="carousel-item absolute opacity-0"
            style="
              height: 500px;
              background-image: url(https://ik.imagekit.io/o4wm2bovw0l/Blue_Tshirt_Gl2zgQeEt.jpg);
            "
          ></div>
          <label
            for="carousel-2"
            class="
              control-3
              w-10
              h-10
              ml-2
              md:ml-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              left-0
              my-auto
            "
          >
            <i class="fas fa-angle-left mt-3"></i>
          </label>
          <label
            for="carousel-1"
            class="
              next
              control-3
              w-10
              h-10
              mr-2
              md:mr-10
              absolute
              cursor-pointer
              hidden
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              right-0
              my-auto
            "
          >
            <i class="fas fa-angle-right mt-3"></i>
          </label>

          <!-- Add additional indicators for each slide-->
          <ol class="carousel-indicators">
            <li class="inline-block mr-3">
              <label
                for="carousel-1"
                class="
                  carousel-bullet
                  cursor-pointer
                  block
                  text-4xl text-white
                  hover:text-blue-700
                "
              >
                •
              </label>
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-2"
                class="
                  carousel-bullet
                  cursor-pointer
                  block
                  text-4xl text-white
                  hover:text-blue-700
                "
              >
                •
              </label>
            </li>
            <li class="inline-block mr-3">
              <label
                for="carousel-3"
                class="
                  carousel-bullet
                  cursor-pointer
                  block
                  text-4xl text-white
                  hover:text-blue-700
                "
              >
                •
              </label>
            </li>
          </ol>
        </div>
      </div>

      <!-- MAPBOXS -->
      <div class="w-full relative">
        <MglMap
          :accessToken="accessToken"
          :mapStyle.sync="mapStyle"
          @load="onMapLoaded($event, accommodation.lat, accommodation.long)"
        >
          <MglNavigationControl position="top-right" />
          <MglGeolocateControl position="top-right" />
          <MglMarker :coordinates="coordinates" color="blue" />
        </MglMap>
      </div>
    </div>
    <div class="mt-12 grid grid-cols-2 content-center mx-auto w-10/12">
      <!-- DETAILS -->
      <div>
        <div class="max-w-2xl w-full h-1/2">
          <div class="w-full w-auto px-4 mr-auto ml-auto">
            <h3 class="text-3xl mb-2 font-semibold leading-normal">Details</h3>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              {{ accommodation.title }}
            </h3>
            <p
              class="text-xl font-light leading-relaxed mt-4 mb-4 text-gray-700"
            >
              {{ accommodation.description }}
            </p>
            <p
              class="text-xl font-light leading-relaxed mt-0 mb-4 text-gray-700"
            >
              Rp.
              <span class="font-bold">
                {{ accommodation.price }}
              </span>
              /month
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
            </div>
          </div>
        </div>
      </div>
      <!-- PERSONAL INFO -->
      <div>
        <div class="max-w-2xl w-full h-1/2">
          <div class="w-full w-auto px-4 mr-auto ml-auto">
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              Owner Information
            </h3>
            <h3 class="text-3xl mb-2 font-semibold leading-normal">
              {{ ownerInfo.fullname }}
            </h3>
            <div class="flex mb-2">
              <div class="mr-8">
                <p class="text-xl capitalize">
                  <span>
                    <i class="far fa-envelope text-sm"></i>
                    :&nbsp;
                  </span>
                  {{ ownerInfo.email }}
                </p>
              </div>
              <div class="mr-8">
                <p class="text-xl capitalize">
                  <span>
                    <i class="fas fa-phone text-sm"></i>
                    :&nbsp;
                  </span>
                  {{ ownerInfo.phonenumber }}
                </p>
              </div>
            </div>

            <div class="flex">
              <div class="mr-8">
                <p class="text-xl capitalize">
                  <span>Address:&nbsp;</span>
                  {{ ownerInfo.address }}
                </p>
              </div>
              <div class="mr-8">
                <p class="text-xl capitalize">
                  <span>City:&nbsp;</span>
                  {{ ownerInfo.city }}
                </p>
              </div>
              <div class="mr-8">
                <p class="text-xl capitalize">
                  <span>Zip code:&nbsp;</span>
                  {{ ownerInfo.zipCode }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-full w-auto px-4 mr-auto ml-auto items-rigth mt-2">
            <button
              class="
                text-2xl text-center
                bg-btn-in-main
                py-2
                px-5
                rounded-lg
                text-white
                mr-2
              "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import {
  MglMap,
  MglMarker,
  MglNavigationControl,
  MglGeolocateControl,
} from "vue-mapbox";
export default {
  name: "Accommodation",
  data() {
    return {
      accessToken: process.env.VUE_APP_MAPBOX_API,
      mapStyle: "mapbox://styles/mapbox/streets-v11",
      coordinates: [],
    };
  },
  components: {
    MglMap,
    MglMarker,
    MglNavigationControl,
    MglGeolocateControl,
  },
  mountend() {
    this.mapbox = Mapbox;
  },
  created() {
    this.$store.dispatch("getAccommodationFunction", +this.$route.params.id);
    this.$store.dispatch("getAllImages", +this.$route.params.id);
  },
  computed: {
    accommodation() {
      return this.$store.state.accommodation;
    },
    images() {
      return this.$store.state.images;
    },
    ownerInfo() {
      return this.$store.state.ownerInfo;
    },
  },
  methods: {
    async onMapLoaded(event, lat, long) {
      // Here we cathing 'load' map event
      const asyncActions = event.component.actions;
      this.coordinates = [long, lat];

      await asyncActions.flyTo({
        //   mapbox [long, lat]
        center: [long, lat],
        zoom: 17,
      });
    },
  },
};
</script>

<style>
.carousel-open:checked + .carousel-item {
  position: static;
  opacity: 100;
}

.carousel-item {
  -webkit-transition: opacity 0.6s ease-out;
  transition: opacity 0.6s ease-out;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
  display: block;
}

.carousel-indicators {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 10;
}

#carousel-1:checked
  ~ .control-1
  ~ .carousel-indicators
  li:nth-child(1)
  .carousel-bullet,
#carousel-2:checked
  ~ .control-2
  ~ .carousel-indicators
  li:nth-child(2)
  .carousel-bullet,
#carousel-3:checked
  ~ .control-3
  ~ .carousel-indicators
  li:nth-child(3)
  .carousel-bullet {
  color: #2b6cb0;
  /*Set to match the Tailwind colour you want the active one to be */
}
</style>
