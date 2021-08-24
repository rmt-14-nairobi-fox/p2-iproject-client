<template>
  <div class="flex h-screen bg-white items-center justify-center mt-32 mb-32">
    <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
      <div class="flex justify-center py-4">
        <div
          class="
            flex
            bg-red-200
            rounded-full
            md:p-4
            p-2
            border-2 border-red-300
          "
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            ></path>
          </svg>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="flex">
          <h1 class="text-gray-600 font-bold md:text-2xl text-xl">
            Checkout Service
            {{ this.$store.state.dataCheckout.Service.name }} from Provider
            {{ this.$store.state.dataCheckout.User.fullName }}
          </h1>
        </div>
      </div>
      <p>with Product {{ this.$store.state.dataCheckout.name }}</p>
      <form @submit.prevent="checkoutHandler">
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label
            class="
              uppercase
              md:text-sm
              text-xs text-gray-500 text-light
              font-semibold
            "
            >Customer Full Name</label
          >
          <input
            class="
              py-2
              px-3
              rounded-lg
              border-2 border-red-300
              mt-1
              focus:outline-none
              focus:ring-2
              focus:ring-red-600
              focus:border-transparent
            "
            type="text"
            placeholder="Full Name"
            v-model="fullName"
          />
        </div>
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label
            class="
              uppercase
              md:text-sm
              text-xs text-gray-500 text-light
              font-semibold
            "
            >Customer Email</label
          >
          <input
            class="
              py-2
              px-3
              rounded-lg
              border-2 border-red-300
              mt-1
              focus:outline-none
              focus:ring-2
              focus:ring-red-600
              focus:border-transparent
            "
            type="email"
            placeholder="your@mail.com"
            v-model="email"
          />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div class="grid grid-cols-1">
            <label
              class="
                uppercase
                md:text-sm
                text-xs text-gray-500 text-light
                font-semibold
              "
              >Address
            </label>
            <input
              v-model="address"
              class="
                py-2
                px-3
                rounded-lg
                border-2 border-red-300
                mt-1
                focus:outline-none
                focus:ring-2
                focus:ring-red-600
                focus:border-transparent
              "
              type="text"
              placeholder="Address"
            />
          </div>
          <div class="grid grid-cols-1">
            <label
              class="
                uppercase
                md:text-sm
                text-xs text-gray-500 text-light
                font-semibold
              "
              >City</label
            >
            <input
              v-model="city"
              class="
                py-2
                px-3
                rounded-lg
                border-2 border-red-300
                mt-1
                focus:outline-none
                focus:ring-2
                focus:ring-red-600
                focus:border-transparent
              "
              type="text"
              placeholder="City"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
          <div class="grid grid-cols-1">
            <label
              class="
                uppercase
                md:text-sm
                text-xs text-gray-500 text-light
                font-semibold
              "
              >Phone Number
            </label>
            <input
              v-model="phoneNumber"
              class="
                py-2
                px-3
                rounded-lg
                border-2 border-red-300
                mt-1
                focus:outline-none
                focus:ring-2
                focus:ring-red-600
                focus:border-transparent
              "
              type="text"
              placeholder="Address"
            />
          </div>
          <div class="grid grid-cols-1">
            <label
              class="
                uppercase
                md:text-sm
                text-xs text-gray-500 text-light
                font-semibold
              "
              >Date for Service</label
            >
            <input
              v-model="dateService"
              class="
                py-2
                px-3
                rounded-lg
                border-2 border-red-300
                mt-1
                focus:outline-none
                focus:ring-2
                focus:ring-red-600
                focus:border-transparent
              "
              type="date"
              placeholder="City"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 mt-5 mx-7">
          <label
            class="
              uppercase
              md:text-sm
              text-xs text-gray-500 text-light
              font-semibold
            "
            >Notes for Provider</label
          >
          <input
            class="
              py-2
              px-3
              rounded-lg
              border-2 border-red-300
              mt-1
              focus:outline-none
              focus:ring-2
              focus:ring-red-600
              focus:border-transparent
            "
            type="text"
            v-model="notes"
            placeholder="Your notes"
          />
        </div>
        <div class="grid grid-cols-1 mt-5 mx-7">
          <label
            class="
              uppercase
              md:text-sm
              text-xs text-gray-500 text-light
              font-semibold
            "
            >Total Cost</label
          >
          <p>{{ this.$store.state.dataCheckout.price }}</p>
        </div>
        <div class="flex items-center justify-center md:gap-8 gap-4 pt-5 pb-5">
          <button
            class="
              w-auto
              bg-gray-500
              hover:bg-gray-700
              rounded-lg
              shadow-xl
              font-medium
              text-white
              px-4
              py-2
            "
          >
            Cancel
          </button>
          <button
            type="submit"
            class="
              w-auto
              bg-green-500
              hover:bg-green-700
              rounded-lg
              shadow-xl
              font-medium
              text-white
              px-4
              py-2
            "
          >
            Checkout
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// tokenTransaction
export default {
  name: "Checkout",
  data() {
    return {
      fullName: "",
      address: "",
      email: "",
      city: "",
      phoneNumber: "",
      dateService: "",
      notes: "",
      price: 0,
    };
  },
  methods: {
    checkoutHandler() {
      let payload = {
        full_name: this.fullName,
        email: this.email,
        phone: this.phoneNumber,
        address: this.address,
        city: this.city,
        dateService: this.dateService,
        notes: this.notes,
        price: this.$store.state.dataCheckout.price,
      };
      this.$store.dispatch("goCheckout", payload);
    },
  },
};
</script>

<style></style>
