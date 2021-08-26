<template>
  <tr class="row-table">
    <td class="text-left py-3 px-4 border-bold">{{ index + 1 }}</td>
    <td class="text-left py-3 px-4 capitalize">{{ accommodation.title }}</td>
    <td class="text-left py-3 px-4 capitalize">{{ accommodation.address }}</td>
    <td class="text-left py-3 px-4 capitalize">{{ accommodation.city }}</td>
    <td class="text-left py-3 px-4">{{ accommodation.zipCode }}</td>
    <td class="text-left py-3 px-4">
      <form action="">
        <select
          class="bg-home-main"
          name=""
          id=""
          @change="changeStatus($event, accommodation.id)"
        >
          <option
            class="cursor-pointer"
            v-for="(stat, index) in status"
            :value="stat.name"
            :key="stat + index"
            :selected="stat.name === accommodation.status"
          >
            {{ stat.name }}
          </option>
        </select>
      </form>
    </td>
    <td class="text-left py-3 px-4">{{ accommodation.price }}</td>
    <td class="text-left py-3 px-4">{{ accommodation.type }}</td>
    <td class="text-left py-3 px-4">
      <button
        class="
          text-l text-center
          bg-btn-in-main
          py-2
          px-4
          rounded-lg
          text-white
          mr-2
        "
        @click="accommodationClick(accommodation.id)"
      >
        Show
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  name: "AccommodationCard",
  data() {
    return {
      status: [{ name: "active" }, { name: "inactive" }],
    };
  },
  props: ["accommodation", "index"],
  methods: {
    accommodationClick(payload) {
      this.$router
        .push({
          name: "AccommodationDetails",
          params: {
            id: +payload,
          },
        })
        .catch(() => {});
    },

    changeStatus(event, id) {
      const statusSelected = event.target.value;
      const payload = {
        id: +id,
        status: statusSelected,
      };
      // console.log(payload);
      this.$store.dispatch("changeStatusFunction", payload);
    },
  },
};
</script>

<style></style>
