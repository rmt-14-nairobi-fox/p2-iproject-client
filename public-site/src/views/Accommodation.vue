<template>
  <div class="">
    <main class="w-full flex-grow p-6">
      <div
        class="
          grid grid-cols-2
          content-center
          mx-auto
          w-10/12
          h-1/4
          p-8
          bg-sidebar
        "
      >
        <!-- CAROUSEL -->
        <div
          v-if="images.length > 0 && images"
          class="rounded shadow-xl max-w-6xl relative"
        >
          <div class="w-full h-5/6">
            <carousel
              :per-page="1"
              :mouse-drag="false"
              :pagination-padding="5"
              :autoplay="true"
              :loop="true"
              :autoplay-timeout="4000"
            >
              <slide
                class="h-full"
                v-for="image in images"
                :key="image + image.id"
              >
                <img
                  class="object-center object-fill w-full"
                  style="height: 220px"
                  :src="image.imageUrl"
                  alt=""
                />
              </slide>
            </carousel>
          </div>
        </div>

        <div v-else class="rounded shadow-xl max-w-6xl relative">
          <div class="w-full h-5/6">
            <carousel
              :per-page="1"
              :mouse-drag="false"
              :pagination-padding="5"
              :autoplay="true"
              :loop="true"
              :autoplay-timeout="4000"
            >
              <slide>
                <img
                  class="object-center object-fill w-full"
                  style="height: 220px"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png"
                  alt=""
                />
              </slide>
            </carousel>
          </div>
        </div>

        <!-- MAPBOXS -->
        <div class="rounded shadow-xl max-w-6xl relative">
          <MglMap
            :accessToken="accessToken"
            :mapStyle.sync="mapStyle"
            @load="onMapLoaded($event, accommodation.lat, accommodation.long)"
            class="h-full"
          >
            <MglNavigationControl position="top-right" />
            <MglGeolocateControl position="top-right" />
            <MglMarker :coordinates="coordinates" color="blue" />
          </MglMap>
        </div>
      </div>
      <!-- INFO -->
      <div
        class="
          mt-10
          grid grid-cols-2
          content-center
          mx-auto
          w-10/12
          p-8
          gap-8
          bg-sidebar
        "
      >
        <!-- DETAILS -->
        <div class="bg-home-main">
          <div class="max-w-2xl w-full h-1/2">
            <div class="w-full w-auto px-4 mr-auto ml-auto">
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Details
              </h3>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                {{ accommodation.title }}
              </h3>
              <p
                class="
                  text-xl
                  font-light
                  leading-relaxed
                  mt-4
                  mb-4
                  text-gray-700
                "
              >
                {{ accommodation.description }}
              </p>
              <p
                class="
                  text-xl
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                Rp.
                <span class="font-bold">
                  {{ accommodation.price }}
                </span>
                /month
              </p>
              <div class="flex mb-2">
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
              <p
                class="
                  text-xl
                  font-light
                  leading-relaxed
                  mt-0
                  mb-4
                  text-gray-700
                "
              >
                Today in {{ accommodation.city }} is currently in
                <span class="font-bold">{{ accommodation.weatherDesc }}</span>
                with temperature:
                <span class="font-bold">
                  {{ accommodation.temperature }}
                </span>
                degree celcius
              </p>
            </div>
          </div>
        </div>
        <!-- PERSONAL INFO -->
        <div class="bg-home-main">
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
                @click="saveHandler(accommodation.id)"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-10 content-center mx-auto w-10/12 p-8 gap-8 bg-sidebar"
      ></div>
    </main>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
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
    Carousel,
    Slide,
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

    saveHandler(payload) {
      this.$store.dispatch("saveBookmarkFunction", payload);
      // console.log(payload);
    },
  },
};
</script>

<style></style>
