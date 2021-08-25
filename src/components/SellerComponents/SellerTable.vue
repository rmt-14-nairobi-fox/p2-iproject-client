<template>
  <tr>
    <td>{{item.name}}</td>
    <td>
      <img
        style="height: 100px"
        :src="`${item.imageUrl}`"
      />
    </td>
    <td>{{item.price}}</td>
    <td>{{item.status}}</td>
    <td v-if="item.readyIn == 0">Ready</td>
    <td v-else>{{item.readyIn}} days</td>
    <td>
      <a style="color: aliceblue" href="#" @click.prevent="deleteBtn(item.id)">Delete</a>
    </td>
  </tr>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "SellerTable",
    props: ["item"],
    methods: {
      ...mapActions(["deleteItem", "fetchSellerItem"]),
      async deleteBtn(id){
        await this.deleteItem(id)
        this.fetchSellerItem()
      }
    }
};
</script>

<style scoped>
td{
padding-left: 0.5rem;
}
</style>
