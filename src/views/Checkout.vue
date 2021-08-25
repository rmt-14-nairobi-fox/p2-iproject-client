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
              <th class="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in this.$store.state.dataOrderDetail"
              :key="index"
            >
              <td class="hidden pb-4 md:table-cell">
                <a href="#">
                  <!-- <img
                    :src="item.User.imgUser"
                    class="w-20 rounded"
                    alt="Thumbnail"
                  /> -->
                </a>
              </td>
              <td>
                <a href="#">
                  <p class="mb-2 md:ml-4">{{ item.name }}</p>
                  <form action="" method="POST">
                    <button type="submit" class="text-gray-700 md:ml-4">
                      <small>(Remove item)</small>
                    </button>
                  </form>
                </a>
              </td>
              <td class="justify-center md:justify-end md:flex mt-6">
                <div class="w-20 h-10">
                  <div class="relative flex flex-row w-full h-8">1x</div>
                </div>
              </td>
              <td class="hidden text-right md:table-cell">
                <span class="text-sm lg:text-base font-medium">
                  {{ item.price }}
                </span>
              </td>
              <td class="text-right">
                <span class="text-sm lg:text-base font-medium">
                  Rp. {{ item.totalPrice }}
                </span>
              </td>
              <td class="text-right">
                <span class="text-sm lg:text-base font-medium">
                  <a
                    href="#"
                    class="
                      px-5
                      py-2
                      font-semibold
                      text-gray-100
                      transition-colors
                      duration-200
                      transform
                      bg-green-500
                      rounded-md
                      hover:bg-green-800
                    "
                    >Pay</a
                  >
                </span>
              </td>
            </tr>
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
                    <p>nama</p>
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Email</label
                    >
                    <p>email</p>
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Date Service</label
                    >
                    <p>tanggal</p>
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Phone Number</label
                    >
                    <p>nomor hp</p>
                  </div>
                  <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email"
                      >Address</label
                    >
                    <p>alamat</p>
                  </div>
                  <div class="mt-2">
                    <label
                      class="hidden text-sm block text-gray-600"
                      for="cus_email"
                      >City</label
                    >
                    <p>kota</p>
                  </div>
                  <div class="inline-block mt-2 w-1/2 pr-1">
                    <label
                      class="hidden block text-sm text-gray-600"
                      for="cus_email"
                      >Country</label
                    >
                    <p>negara</p>
                  </div>
                  <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label
                      class="hidden block text-sm text-gray-600"
                      for="cus_email"
                      >Zip</label
                    >
                    <p>kode pos</p>
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
                  @click.prevent="paymentHandler"
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
                  <span class="ml-2 mt-5px">Create Payment</span>
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
// tokenTransaction
export default {
  name: "Checkout",
  methods: {
      paymentHandler(){
          
      }
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
