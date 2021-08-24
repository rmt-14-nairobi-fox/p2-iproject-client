<template>
  <tr class="row-table">
    <td class="text-left py-3 px-4 border-bold">{{ index + 1 }}</td>
    <td class="text-left py-3 px-4 capitalize">{{ accommodation.title }}</td>
    <td class="text-left py-3 px-4 capitalize">{{ accommodation.address }}</td>
    <td class="text-left py-3 px-4 capitalize">{{ accommodation.city }}</td>
    <td class="text-left py-3 px-4">{{ accommodation.zipCode }}</td>
    <td class="text-left py-3 px-4">{{ accommodation.status }}</td>
    <td class="text-left py-3 px-4">{{ accommodation.price }}</td>
    <td class="text-left py-3 px-4">{{ accommodation.type }}</td>
  </tr>
</template>

<script>
export default {
  name: "AccommodationCard",
  props: ["accommodation", "index"],
};
</script>

<style></style>
