<template>
  <div class="flex justify-center my-6">
    <div
      class="
        flex flex-col
        w-full
        p-8
        text-gray-800
        bg-white
        shadow-lg
        pin-r pin-y
        md:w-4/5
        lg:w-4/5
      "
    >
      <div class="flex-1">
        <table class="w-full text-sm lg:text-base" cellspacing="0">
          <thead>
            <tr class="h-12 uppercase">
              <th class="hidden md:table-cell"></th>
              <th class="text-left">Product</th>
              <th class="lg:text-right text-left pl-5 lg:pl-0">
                <span class="lg:hidden" title="Quantity">Qtd</span>
                <span class="hidden lg:inline">Quantity</span>
              </th>
              <th class="hidden text-right md:table-cell">Unit price</th>
              <th class="text-right">Total price</th>
            </tr>
          </thead>
          <tbody>
            <TableCart
              v-for="(item, index) in this.$store.state.cartData"
              :key="index"
              :item="item"
            ></TableCart>
          </tbody>
        </table>
        <hr class="pb-6 mt-6" />
        <div class="my-4 mt-6 -mx-2 lg:flex">
          <div class="lg:px-2">
            <div class="p-4 bg-gray-100 rounded-full">
              <h1 class="ml-2 font-bold uppercase">Order Details</h1>
            </div>
            <div class="p-4">
              <div class="leading-loose">
                <form class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
                  <p class="text-gray-800 font-medium">Customer information</p>
                  <div class="">
                    <label class="block text-sm text-gray-00" for="cus_name"
                      >Name</label
                    >
                    <input
                      class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                      id="cus_name"
                      name="cus_name"
                      type="text"
                      required=""
                      placeholder="Your Name"
                      aria-label="Name"
                      v-model="custName"
                    />
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Email</label
                    >
                    <input
                      v-model="email"
                      class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      name="cus_email"
                      type="text"
                      required=""
                      placeholder="Your Email"
                      aria-label="Email"
                    />
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Date Service</label
                    >
                    <input
                      v-model="dateService"
                      class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      name="dateService"
                      type="date"
                      required=""
                      placeholder="Your Email"
                      aria-label="Email"
                    />
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Phone Number</label
                    >
                    <input
                      v-model="phoneNumber"
                      class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      required=""
                      placeholder="Your Phone"
                      aria-label="Email"
                    />
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Address</label
                    >
                    <input
                      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                      id="address"
                      name="address"
                      type="text"
                      required=""
                      placeholder="Street"
                      v-model="street"
                    />
                  </div>
                  <div class="mt-2">
                    <label
                      class="hidden text-sm block text-gray-600"
                      for="cus_email"
                      >City</label
                    >
                    <input
                      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      name="cus_email"
                      type="text"
                      required=""
                      placeholder="City"
                      aria-label="Email"
                      v-model="city"
                    />
                  </div>
                  <div class="inline-block mt-2 w-1/2 pr-1">
                    <label
                      class="hidden block text-sm text-gray-600"
                      for="cus_email"
                      >Country</label
                    >
                    <input
                      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      name="cus_email"
                      type="text"
                      required=""
                      placeholder="Country"
                      aria-label="Email"
                      v-model="country"
                    />
                  </div>
                  <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label
                      class="hidden block text-sm text-gray-600"
                      for="cus_email"
                      >Zip</label
                    >
                    <input
                      class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                      id="cus_email"
                      name="cus_email"
                      type="text"
                      required=""
                      placeholder="Zip"
                      aria-label="Email"
                      v-model="zipCode"
                    />
                  </div>
                </form>
              </div>
              <div class="flex justify-between pt-4 border-b">
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    text-lg
                    lg:text-xl
                    font-bold
                    text-center text-gray-800
                  "
                >
                  Total
                </div>
                <div
                  class="
                    lg:px-4 lg:py-2
                    m-2
                    lg:text-lg
                    font-bold
                    text-center text-gray-900
                  "
                >
                  <p>Rp. {{ sumTotalPrice }}</p>
                </div>
              </div>
              <a href="#">
                <button
                  @click.prevent="checkoutHandler"
                  class="
                    flex
                    justify-center
                    w-full
                    px-10
                    py-3
                    mt-6
                    font-medium
                    text-white
                    uppercase
                    bg-gray-800
                    rounded-full
                    shadow
                    item-center
                    hover:bg-gray-700
                    focus:shadow-outline focus:outline-none
                  "
                >
                  <svg
                    aria-hidden="true"
                    data-prefix="far"
                    data-icon="credit-card"
                    class="w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                    />
                  </svg>
                  <span class="ml-2 mt-5px">Procceed to checkout</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TableCart from "../components/TableCart.vue";
export default {
  name: "Orders",
  components: {
    TableCart,
  },
  data() {
    return {
      custName: "",
      email: "",
      street: "",
      city: "",
      country: "",
      zipCode: "",
      phoneNumber: "",
      dateService: "",
    };
  },
  computed: {
    sumTotalPrice() {
      let totalPrice = 0;
      this.$store.state.cartData.map((el) => {
        totalPrice += el.price;
      });
      return totalPrice;
    },
  },
  methods: {
    checkoutHandler() {
      let dataOrder = {
        totalPrice: this.sumTotalPrice,
        orderDetails: this.$store.state.cartData,
        custDetails: {
          custName: this.custName,
          email: this.email,
          street: this.street,
          city: this.city,
          country: this.country,
          zipCode: this.zipCode,
          phoneNumber: this.phoneNumber,
          dateService: this.dateService,
        },
      };
      // this.$router.push("/payment");
      this.$store.dispatch("goCheckout", dataOrder);
      this.$store.commit("COMMIT_ORDER_DETAIL", dataOrder);
    },
  },
};
</script>

<style></style>
