<template>
  <body class="font-mono bg-gray-400">
    <!-- Container -->
    <div class="container mx-auto">
      <div class="flex justify-center px-6 my-12">
        <!-- Row -->
        <div class="w-full xl:w-3/4 lg:w-11/12 flex">
          <!-- Col -->
          <div
            class="
              w-full
              h-auto
              bg-gray-400
              hidden
              lg:block lg:w-5/12
              bg-cover
              rounded-l-lg
            "
            style="
              background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
            "
          ></div>
          <!-- Col -->
          <div
            class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
          >
            <h3 class="pt-4 text-2xl text-center">Checkout Orders</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white text-left rounded">
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="firstName"
                  >
                    Customer Details
                  </label>
                  <p>
                    Name:
                    {{ this.$store.state.dataCheckout.custDetails.custName }}
                  </p>
                  <p>
                    Address :
                    {{ this.$store.state.dataCheckout.custDetails.district }},
                    {{ this.$store.state.dataCheckout.custDetails.city }},
                    {{ this.$store.state.dataCheckout.custDetails.country }}.
                  </p>
                  <p>
                    {{ this.$store.state.dataCheckout.custDetails.zipCode }},
                    {{
                      this.$store.state.dataCheckout.custDetails.phoneNumber
                    }}.
                  </p>
                  <p>
                    Date Services :
                    {{ this.$store.state.dataCheckout.custDetails.dateService }}
                  </p>
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="lastName"
                  >
                    Services :
                  </label>

                  <p
                    class="text-xs"
                    v-for="(name, index) in this.$store.state.dataCheckout
                      .orderDetails"
                    :key="index"
                  >
                    - {{ name.name }}
                  </p>
                </div>
              </div>
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Total Price :
                  </label>
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="c_password"
                  >
                    Rp. {{ this.$store.state.dataCheckout.totalPrice }}
                  </label>
                </div>
              </div>
              <div class="mb-6 text-center">
                <button
                  @click.prevent="paymentHandler"
                  class="
                    w-full
                    px-4
                    py-2
                    font-bold
                    text-white
                    bg-blue-500
                    rounded-full
                    hover:bg-blue-700
                    focus:outline-none focus:shadow-outline
                  "
                  type="button"
                >
                  Process Payment
                </button>
              </div>
              <hr class="mb-6 border-t" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
// tokenTransaction
export default {
  name: "Checkout",
  methods: {
    paymentHandler() {
      const payload = this.$store.state.dataCheckout;
      console.log(payload);
    },
  },
  created() {
    this.$store.dispatch("fetchOrderDetails");
  },
  computed: {
    sumTotalPrice() {
      let totalPrice = 0;
      this.$store.state.dataOrderDetail.map((el) => {
        totalPrice += el.totalPrice;
      });
      return totalPrice;
    },
  },
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
};
</script>

<style></style>
